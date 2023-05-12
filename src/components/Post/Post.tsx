import { PostType } from '../../utils/types';
import './Post.scss'

const Post = (props: PostType) => {
  const { userId, title, body } = props
  return (
    <div className="post-wrapper hover-float">
      <header className="post-header">
        <div className="text-ellipsis post-title">{title}</div>
        <div className="text-ellipsis post-user">{userId}</div>
      </header>
      <section className="post-section text-multi-line-ellipsis">{body}</section>
    </div>
  );
};

export default Post;