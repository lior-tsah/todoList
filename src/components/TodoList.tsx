import { useState } from "react";
import TodoDialog from "./TodoDialog";
import { Task } from "../models/Models";
import AddNewItem from "./AddNewItem";
import TodoItem from "./TodoItem";
import TodoFilter from "./TodoFilter";

const TodoList: React.FC = () => {
  const [dataList, setDataList] = useState<Task[]>(() => {
    const savedList = localStorage.getItem("list");
    return savedList ? JSON.parse(savedList) : [];
  });
  const [isOpenDialog, setIsOpenDialog] = useState(false);

  const [filteredData, setFilteredData] = useState<Task[]>(dataList);

  const handleCloseDialog = () => {
    setIsOpenDialog(false);
  };

  return (
    <div className="root">
      <button className="btn" onClick={() => setIsOpenDialog(true)}>Add New Item</button>
      <TodoFilter allTasks={dataList} setFilteredData={setFilteredData} />
      <ul>
        {filteredData.map((item, index) => (
          <TodoItem
            key={index}
            item={item}
            index={index}
            dataList={dataList}
            setDataList={setDataList}
          />
        ))}
      </ul>
      <TodoDialog open={isOpenDialog} handleClose={handleCloseDialog}>
        <AddNewItem
          setDataList={setDataList}
          dataList={dataList}
          handleClose={handleCloseDialog}
        />
      </TodoDialog>
    </div>
  );
};

export default TodoList;
