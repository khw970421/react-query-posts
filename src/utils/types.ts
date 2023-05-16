export type PostType = {
  id?: string
  userId: string
  title: string
  body: string
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