import { Task } from "../models/Models";
import Close from "../assets/close.svg";

interface Props {
  item: Task;
  index: number;
  setDataList: (val: Task[]) => void;
  dataList: Task[];
}

const TodoItem: React.FC<Props> = ({ item, index, dataList, setDataList }) => {
  const handleRemoveItem = (item: Task) => {
    const filteredList = dataList.filter((currItem) => currItem.id !== item.id);
    setDataList(filteredList);
    localStorage.setItem("list", JSON.stringify(filteredList));
  };

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedList = dataList.map((currItem) => {
      if (currItem.id === item.id) {
        currItem.completed = e.target.checked;
      }
      return currItem;
    });
    setDataList(updatedList);
    localStorage.setItem("list", JSON.stringify(updatedList));
  };

  return (
    <li className="task-item" key={index}>
      <input
        type="checkbox"
        checked={item.completed}
        onChange={handleCheck}
      />
      <div className={item.completed ? "complete" : "incomplete"}>{item.text}</div>
      <img
        className="pointer"
        src={Close}
        alt="icon"
        onClick={() => handleRemoveItem(item)}
      />
    </li>
  );
};

export default TodoItem;
