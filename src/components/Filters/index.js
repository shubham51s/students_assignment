import React, { useContext, useState } from "react";
import style from "./filters.module.css";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import StudentContext from "../../context/studentsdata";

function FiltersComp() {
  const { validateAllConditions } = useContext(StudentContext);
  const [filter, setFilter] = useState(1);
  const [sort, setSort] = useState(1);

  const handleChange = (e) => {
    const val = e.target.value;
    setFilter(val);
    validateAllConditions(val, 2);
  };

  const handleSortChange = (e) => {
    const val = e.target.value;
    setSort(val);
    validateAllConditions(val, 3);
  };

  return (
    <div className={style.mainContainer}>
      <div className={style.filterContainer}>
        <div>Filter</div>
        <FormControl sx={{ m: 1, minWidth: 180 }}>
          <Select
            value={filter}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            sx={{ height: "40px", color: "white", border: "1px solid white" }}
          >
            <MenuItem value={1}>All Students</MenuItem>
            <MenuItem value={2}>Active Students</MenuItem>
            <MenuItem value={3}>Inactive Students</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className={style.filterContainer}>
        <div>Sort</div>
        <FormControl sx={{ m: 1, minWidth: 180 }}>
          <Select
            value={sort}
            onChange={handleSortChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            sx={{ height: "40px", color: "white", border: "1px solid white" }}
          >
            <MenuItem value={1}>
              <em>Default</em>
            </MenuItem>
            <MenuItem value={2}>Age</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default FiltersComp;
