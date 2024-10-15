import React, { useContext } from "react";
import style from "./studentslist.module.css";
import StudentListComp from "./resultlist";
import StudentContext from "../../context/studentsdata";

function AllStudentsComp() {
  const { allStudents } = useContext(StudentContext);

  return (
    <div className={style.mainContainer}>
      <div className={style.headingMain}>
        <div className={style.id}>ID</div>
        <div className={style.name}>NAME</div>
        <div className={style.age}>AGE</div>
        <div className={style.grade}>GRADE</div>
        <div className={style.status}>ENR. STATUS</div>
        <div className={style.edit}></div>
      </div>
      {/* Result */}
      {allStudents.length >= 1 &&
        allStudents.map((item) => (
          <StudentListComp key={item.id} item={item} />
        ))}
      {allStudents.length <= 0 && (
        <div className={style.noData}>No Data Found</div>
      )}
    </div>
  );
}

export default AllStudentsComp;
