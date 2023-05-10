import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { useInfiniteQuery } from '@tanstack/react-query';

import HttpInstance from './api/user';
import Post from './components/Post';
import { PostType } from './utils/types';
import './App.css'

function App() {
  const [nextPageIdx, setNextPageIdx] = useState(1)
  const [ref, inView, entry] = useInView()
  const [posts, setPosts] = useState([])
  const { fetchNextPage, hasNextPage } = useInfiniteQuery(
    ['infinitePerson'],
    async ({ pageParam = 5 }) => {
      const res = await HttpInstance.getInfinitePosts(nextPageIdx, 10)
      return {
        result: res,
        nextPage: pageParam,
        isLast: Number(res.headers["x-total-count"])
      };
    },
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.isLast >= lastPage.nextPage + 10) return lastPage.nextPage + 10;
        return undefined;
      },
      onSuccess: (data) => {
        setNextPageIdx((beforeIdx) => beforeIdx + 10)
        func(data.pages)
      }
    }
  )

  const func = (data: any) => {
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
            <Post id={id} title={title} userId={userId} body={body} />
          )
        }
        <div ref={ref}></div>
      </div>
    </>
  )
}

export default App
