import './TodoItem.css';
import { FaCheck } from "react-icons/fa";
import { RiDeleteBin2Fill } from "react-icons/ri";

function CompleteIcon() {
  return <FaCheck className="CompleteIcon" />;
}

function TodoItem({ text, completed, onComplete, onDelete }) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${completed && "Icon-check--active"}`}
        onClick={onComplete}
      >
        {!completed && <CompleteIcon />}
        {completed && <CompleteIcon />}
      </span>
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
        {text}
      </p>
      <span className="Icon Icon-delete" onClick={onDelete}>
        <RiDeleteBin2Fill />
      </span>
    </li>
  );
}

export { TodoItem };
export { CompleteIcon }