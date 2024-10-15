import React, { useContext, useEffect, useRef } from "react";
import style from "./editstudent.module.css";
import StudentContext from "../../context/studentsdata";
import AddNewStudentComp from "./addnewstudent";
import EditStudentDetailsComp from "./editstudent";

function EditStudentDataComp() {
  const { setIsModal, addNewStudent } = useContext(StudentContext);
  const addRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (addRef.current && !addRef.current.contains(e.target)) {
        setIsModal(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className={style.mainContainer} ref={addRef}>
      {addNewStudent && <AddNewStudentComp />}
      {!addNewStudent && <EditStudentDetailsComp />}
    </div>
  );
}

export default EditStudentDataComp;
