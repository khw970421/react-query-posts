import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { useInfiniteQuery } from '@tanstack/react-query';

import HttpInstance from './api/user';
import Post from './components/Post';
import { PostType } from './utils/types';
import './App.css'
import { pagePerLimitPosts } from './utils/const';

function App() {
  const [ref, inView, entry] = useInView()
  const [posts, setPosts] = useState([])
  const { fetchNextPage, hasNextPage } = useInfiniteQuery(
    ['infinitePerson'],
    async ({ pageParam = 1 }) => {
      const res = await HttpInstance.getInfinitePosts(pageParam, pagePerLimitPosts)
      return {
        result: res,
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
      onSuccess: (data) => {
        flatPosts(data.pages)
      }
    }
  )

  const flatPosts = (data: any) => {
    setPosts(data?.flatMap(({ result }: any) => {
      const data = result?.data
      return data
    }))
  }

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage()
    }
  }, [inView, entry?.target])

  return (
    <>
      <h3>Posts</h3>
      <div className="post-wrapper">
        {
          posts.map(({ id, title, userId, body }: PostType) =>
            <Post key={id} id={id} title={title} userId={userId} body={body} />
          )
        }
        <div ref={ref}></div>
      </div>
    </>
  )
}

export default App
