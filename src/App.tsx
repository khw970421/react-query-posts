import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

import HttpInstance from './api/user';
import { PagesPostType, PostType } from './utils/types';
import './App.css'
import { pagePerLimitPosts } from './utils/const';
import GridPosts from './components/Post/GridPosts';
import ButtomSheet from './components/BottomSheet/ButtonSheet';
import Comments from './components/Comment/Comments';


function App() {
  const [ref, inView, entry] = useInView()
  const [posts, setPosts] = useState<PostType[]>([])
  const [selectedPostId, setSelectedPostId] = useState<string>('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { isFetching, fetchNextPage, hasNextPage } = useInfiniteQuery(
    ['infinitePerson'],
    async ({ pageParam = 1 }) => {
      const res = await HttpInstance.getInfinitePosts(pageParam, pagePerLimitPosts)
      return {
        data: res.data,
        nextPage: pageParam,
        isLast: Number(res.headers["x-total-count"])
      };
    },
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.isLast > lastPage.nextPage + pagePerLimitPosts)
          return lastPage.nextPage + pagePerLimitPosts;
        return undefined;
      },
      onSuccess: ({ pages }: { pages: PagesPostType[] }) => {
        setPosts(pages.flatMap(({ data }: { data: PostType[] }) => {
          return data
        }))
      },
      refetchOnWindowFocus: false
    }
  )

  const { data: comments, refetch } = useQuery(['comments'], async () => {
    const comments = await HttpInstance.getComments(`${selectedPostId}`)
    return comments.data
  }, {
    enabled: !!selectedPostId,
    onSuccess: () => {
      setIsModalOpen(true)
    }
  }
  )

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage()
    }
  }, [inView, entry?.target])

  const handleSelectedPostId = (postId: string) => {
    setSelectedPostId(() => postId)
  }

  useEffect(() => {
    if (selectedPostId)
      refetch()
  }, [selectedPostId])

  const handleCloseButtonSheet = () => {
    setIsModalOpen(false)
  }

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isModalOpen])

  console.log(isModalOpen)
  return (
    <div className="app-wrapper">
      {<ButtomSheet className={isModalOpen && 'open'} closePopup={handleCloseButtonSheet}>
        <Comments comments={comments || []} />
      </ButtomSheet>
      }
      <GridPosts posts={posts} bottomRef={ref} isFetching={isFetching} clickSelectedPostId={handleSelectedPostId} comments={comments} isModalOpen={isModalOpen} />
    </div>
  )
}

export default App
