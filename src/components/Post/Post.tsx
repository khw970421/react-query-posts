import { PostProps } from '../../utils/types';
import './Post.scss'

const Post = (props: PostProps) => {
  const { userId, title, body, id, clickSelectedPostId } = props
  return (
    <div className="post-wrapper hover-float" onClick={() => clickSelectedPostId(id)}>
      <header className="post-header">
        <div className="text-ellipsis post-title">{title}</div>
        <div className="text-ellipsis post-user">{userId}</div>
      </header>
      <section className="post-section text-multi-line-ellipsis">{body}</section>
    </div>
  );
};

export default Post;