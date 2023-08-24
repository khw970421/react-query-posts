export type PostType = {
  id: number
  userId: string
  title: string
  body: string
}

export type PostProps = PostType & {
  clickSelectedPostId: (postId: number) => void
}

export type PagesPostType = {
  data: PostType[]
  nextPage: number
  isLast: number
}

export type CommentType = {
  name: string
  body: string
}

export type CommentsType = {
  comments: (CommentType & {
    id: number
  })[]
}