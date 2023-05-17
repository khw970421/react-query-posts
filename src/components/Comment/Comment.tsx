import { CommentType } from "../../utils/types";
import './Comment.scss'

const Comment = (props: CommentType) => {
  const { name, body } = props
  return (
    <div className="comment-wrapper border-round">
      <header className="comment-header">
        <div className="text-ellipsis comment-user">{name}</div>
      </header>
      <section className="comment-section text-multi-line-ellipsis">{body}</section>
    </div>
  );
};

export default Comment;