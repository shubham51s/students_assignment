import React, { useEffect, useRef, useState } from "react";
import style from "./search.module.css";
import SearchIcon from "@mui/icons-material/Search";

function SearchComp() {
  const [userInp, setUserInp] = useState("");
  const [optionList, setOptionList] = useState(namesData);
  const [showList, setShowList] = useState(false);
  const resultRef = useRef();
  const inpRef = useRef();

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

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        resultRef.current &&
        !resultRef.current.contains(e.target) &&
        inpRef.current &&
        !inpRef.current.contains(e.target)
      ) {
        setShowList(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      {" "}
      <div className={style.mainContainer}>
        <div className={style.inputContainer}>
          <input
            ref={inpRef}
            className={style.inputMain}
            value={userInp}
            onChange={(e) => handleInputChange(e)}
            onClick={() => setShowList(true)}
            placeholder="Search by student name"
          />
          <SearchIcon className={style.searchIcon} />
        </div>
        {showList && (
          <div className={style.resultContainer} ref={resultRef}>
            {optionList.map((item, index) => (
              <li className={style.listMain} key={index}>
                <div>{item.id}</div>
                <div>{item.name}</div>
              </li>
            ))}
          </div>
        )}
      </div>
      <div className={style.borderBtn}></div>
    </>
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
