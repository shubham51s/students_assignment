import React, { useState } from "react";
import style from "./search.module.css";
import SearchIcon from "@mui/icons-material/Search";

function SearchComp() {
  const [userInp, setUserInp] = useState("");
  const [optionList, setOptionList] = useState(namesData);

  const filterNames = (val) => {
    setOptionList(
      namesData.filter((item) =>
        item.name.toLowerCase().includes(val.toLowerCase())
      )
    );
  };

  const handleInputChange = (e) => {
    setUserInp(e.target.value);
    filterNames(e.target.value);
  };

  return (
    <div className={style.mainContainer}>
      <div className={style.inputContainer}>
        <input
          className={style.inputMain}
          value={userInp}
          onChange={(e) => handleInputChange(e)}
          placeholder="Search by student name"
        />
        <SearchIcon className={style.searchIcon} />
      </div>
      <div className={style.resultContainer}>
        {optionList.map((item, index) => (
          <li className={style.listMain} key={index}>
            <div>{item.id}</div>
            <div>{item.name}</div>
          </li>
        ))}
      </div>
    </div>
  );
}

export default SearchComp;

const namesData = [
  {
    id: 1,
    name: "student-1",
  },
  {
    id: 2,
    name: "student-2",
  },
  {
    id: 3,
    name: "student-3",
  },
  {
    id: 4,
    name: "student-4",
  },
  {
    id: 5,
    name: "student-5",
  },
  {
    id: 6,
    name: "student-6",
  },
  {
    id: 7,
    name: "student-7",
  },
  {
    id: 8,
    name: "student-8",
  },
];
