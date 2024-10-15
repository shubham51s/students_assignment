import React, { useContext, useEffect } from "react";
import style from "./homepage.module.css";
import SearchComp from "../components/Search";
import AllStudentsComp from "../components/StudentsList";
import FiltersComp from "../components/Filters";
import EditStudentDataComp from "../components/EditStudentData";
import StudentContext from "../context/studentsdata";

function HomePage() {
  const { isModalOpen, setIsModal, setAddNewStudent, setAllStudents } =
    useContext(StudentContext);

  const handleAddBtnClick = (e) => {
    e.stopPropagation();
    setAddNewStudent(true);
    setIsModal(true);
  };

  useEffect(() => {
    if (localStorage.getItem("allStudents")) {
      setAllStudents(JSON.parse(localStorage.getItem("allStudents")));
    }
  }, []);

  return (
    <div className={style.mainContainer}>
      <div className={style.mainContent}>
        <div className={style.headerMain}>
          <h1 className={style.mainHeading}>Students Data</h1>
          <button
            className={style.addBtn}
            onClick={(e) => handleAddBtnClick(e)}
          >
            Add New Student
          </button>
        </div>
        <SearchComp />
        <FiltersComp />
        <AllStudentsComp />
      </div>
      {isModalOpen && <EditStudentDataComp />}
    </div>
  );
}

export default HomePage;
