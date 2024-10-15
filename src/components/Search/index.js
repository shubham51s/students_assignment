import React, { useContext } from "react";
import style from "./search.module.css";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import StudentContext from "../../context/studentsdata";

function SearchComp() {
  const { validateAllConditions, userInp, setUserInp } =
    useContext(StudentContext);

  const handleInputChange = (e) => {
    setUserInp(e.target.value);
  };

  const handleClearSearch = () => {
    setUserInp("");
    validateAllConditions("", 1);
  };

  const handleSearchBtnClick = () => {
    validateAllConditions(userInp, 1);
  };

  return (
    <>
      <div className={style.mainContainer}>
        <div className={style.inputContainer}>
          <input
            className={style.inputMain}
            value={userInp}
            onChange={(e) => handleInputChange(e)}
            placeholder="Search by student name"
          />
          {userInp && (
            <ClearIcon
              className={style.searchIcon}
              onClick={() => handleClearSearch()}
            />
          )}
          <SearchIcon
            className={style.searchIcon}
            style={{ opacity: userInp ? "1" : "0.8" }}
            onClick={() => handleSearchBtnClick()}
          />
        </div>
      </div>
    </>
  );
}

export default SearchComp;
