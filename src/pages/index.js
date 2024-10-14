import React from "react";
import style from "./homepage.module.css";
import SearchComp from "../components/Search";
import AllStudentsComp from "../components/StudentsList";

function HomePage() {
  return (
    <div className={style.mainContainer}>
      <div className={style.mainContent}>
        <div className={style.headerMain}>
          <h1 className={style.mainHeading}>Students Data</h1>
          <button className={style.addBtn}>Add New Student</button>
        </div>
        <SearchComp />
        <div>Filter</div>
        <div>Sort by</div>
        <AllStudentsComp />
      </div>
    </div>
  );
}

export default HomePage;
