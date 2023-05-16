import { CommentsType } from "../../utils/types";
import Comment from "./Comment";
import './Comments.scss'

const Comments = (props: CommentsType) => {
  const { comments } = props
  return (
    <div className="comments-wrapper">
      {comments.map(({ id, name: userName, body }) => <Comment key={id} name={userName} body={body} />)}
    </div>
  );
};

export default Comments;