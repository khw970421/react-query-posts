import { PostType } from '../../utils/types';
import Post from './Post';

const GridPosts = ({ posts, bottomRef }: { posts: PostType[], bottomRef: any }) => {
  return (
    <div className="posts-wrapper">
      {
        posts.map(({ id, title, userId, body }: PostType) =>
          <Post key={id} id={id} title={title} userId={userId} body={body} />
        )
      }
      <div ref={bottomRef} style={{ height: "0.5rem" }}></div>
    </div >
  );
};

export default GridPosts;