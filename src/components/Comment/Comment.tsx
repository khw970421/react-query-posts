import { CommentType } from "../../utils/types";

const Comment = (props: CommentType) => {
  const { name, body } = props
  return (
    <div className="comment-wrapper">
      <header className="comment-header">
        <div className="text-ellipsis comment-user">{name}</div>
      </header>
      <section className="comment-section text-multi-line-ellipsis">{body}</section>
    </div>
  );
};

export default Comment;