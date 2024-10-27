import { useState } from "react";
import { Task } from "../models/Models";
import "../styles.css";
interface Props {
  setDataList: (val: Task[]) => void;
  dataList: Task[];
  handleClose: () => void;
}

const AddNewItem: React.FC<Props> = ({
  setDataList,
  dataList,
  handleClose,
}) => {
  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = () => {
    if (text.trim() === "") {
      return;
    }
    const newTask: Task = {
      id: dataList.length > 0 ? dataList[dataList.length - 1].id + 1 : 1,
      text: text,
      completed: false,
    };
    dataList.push(newTask);
    setDataList([...dataList]);
    localStorage.setItem("list", JSON.stringify(dataList));
    setText("");
    handleClose();
  };

  return (
    <div
      className="add-item-container"
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          event.preventDefault();
          event.stopPropagation();
          handleSubmit();
        }
      }}
    >
      <input
        type="text"
        value={text}
        placeholder="Enter new item"
        onChange={handleChange}
      />
      <button onClick={handleSubmit} disabled={text.trim().length === 0}>
        submit
      </button>
    </div>
  );
};

export default AddNewItem;
