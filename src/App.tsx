import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { useInfiniteQuery } from '@tanstack/react-query';

import HttpInstance from './api/user';
import { PagesPostType, PostType } from './utils/types';
// import './App.css'
import { pagePerLimitPosts } from './utils/const';
import GridPosts from './components/Post/GridPosts';


function App() {
  const [ref, inView, entry] = useInView()
  const [posts, setPosts] = useState<PostType[]>([])
  const { fetchNextPage, hasNextPage } = useInfiniteQuery(
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
      }
    }
  )

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage()
    }
  }, [inView, entry?.target])
  return (
    <>
      <h3>Posts</h3>
      <GridPosts posts={posts} bottomRef={ref} />
    </>
  )
}

export default App
