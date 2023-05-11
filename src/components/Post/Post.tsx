import { PostType } from '../../utils/types';
import './Post.scss'

const Post = (props: PostType) => {
  const { userId, title, body } = props
  return (
    <div className="post-wrapper">
      <header className="post-header">
        <div className="text-ellipsis">{title}</div>
        <div className="text-ellipsis">{userId}</div>
      </header>
      <section className="post-section text-ellipsis">{body}</section>
    </div>
  );
};

export default Post;