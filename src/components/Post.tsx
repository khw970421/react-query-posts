import { PostType } from '../utils/types';

const Post = (props: PostType) => {
  const { userId, title, body } = props
  return (
    <div className="post-wrapper">
      <h3>{title}</h3>
      <div>{userId}</div>
      <section>{body}</section>
    </div>
  );
};

export default Post;