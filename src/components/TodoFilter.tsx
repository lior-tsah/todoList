import { useEffect, useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Task } from "../models/Models";

interface Props {
  allTasks: Task[];
  setFilteredData: (val: Task[]) => void;
}

const TodoFilter: React.FC<Props> = ({ allTasks, setFilteredData }) => {
  const [inputValue, setInputValue] = useState("All");

  const onClickFilter = (input: string) => {
    setInputValue(input);
    const filteredData = allTasks.filter((task) => {
      if (input === "All") {
        return true;
      }
      if (input === "Completed") {
        return task.completed === true;
      }
      if (input === "Incompleted") {
        return task.completed === false;
      }
    });
    setFilteredData(filteredData);
  };

  useEffect(() => {
    onClickFilter(inputValue);
  }, [allTasks]);

  return (
    <FormControl sx={{ m: 1, minWidth: 150 }}>
      <InputLabel
        // sx={{ top: -4 }}
        id="demo-simple-select-label"
      >
        Filter by
      </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        label="Filter by"
        value={inputValue}
        defaultValue="All"
        onChange={(e) => onClickFilter(e.target.value)}
        sx={{ height: 40, width: 150 }}
      >
        <MenuItem value={"All"}>All</MenuItem>
        <MenuItem value={"Completed"}>Completed</MenuItem>
        <MenuItem value={"Incompleted"}>Incompleted</MenuItem>
      </Select>
    </FormControl>
  );
};
export default TodoFilter;
