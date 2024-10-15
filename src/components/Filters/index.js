import React, { useState } from "react";
import style from "./filters.module.css";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function FiltersComp() {
  const [filter, setFilter] = useState(1);
  const [sort, setSort] = useState(0);

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
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
            sx={{ height: "40px" }}
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
            sx={{ height: "40px" }}
          >
            <MenuItem value={0}>
              <em>Default</em>
            </MenuItem>
            <MenuItem value={1}>Name</MenuItem>
            <MenuItem value={2}>Age</MenuItem>
            <MenuItem value={3}>Grade</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default FiltersComp;
