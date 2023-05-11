import { PostType } from '../../utils/types';
import Post from './Post';
import './GridPost.scss'
import SkeletonPost from '../Skeleton/SkeletonPost';

const GridPosts = ({ posts, bottomRef, isFetching }: { posts: PostType[], bottomRef: any, isFetching: boolean }) => {
  return (
    <div className="posts-wrapper">
      {
        posts.map(({ id, title, userId, body }: PostType) =>
          <Post key={id} id={id} title={title} userId={userId} body={body} />
        )
      }
      {isFetching && Array(7).fill(0).map((_, idx) => <SkeletonPost key={idx} />)}
      <div ref={bottomRef} style={{ height: "0.5rem" }}></div>
    </div >
  );
};

export default GridPosts;