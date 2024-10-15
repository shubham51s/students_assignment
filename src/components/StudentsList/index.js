import React from "react";
import style from "./studentslist.module.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function AllStudentsComp() {
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
      {studentsData.map((item) => (
        <li className={style.contentMain} key={item.id}>
          <div className={style.idContent}>{item.id}</div>
          <div className={style.nameContent}>{item.name}</div>
          <div className={style.ageContent}>{item.age}</div>
          <div className={style.gradeContent}>{item.grade}</div>
          <div
            className={style.statusContent}
            style={{ color: item.enrollment ? "green" : "red" }}
          >
            {item.enrollment ? "Active" : "Inactive"}
          </div>
          <div className={style.editIcons}>
            <EditIcon className={style.icons} style={{ color: "blue" }} />
            <DeleteIcon className={style.icons} style={{ color: "red" }} />
          </div>
        </li>
      ))}
    </div>
  );
}

export default AllStudentsComp;
const studentsData = [
  {
    id: 1,
    name: "student_1",
    age: 23,
    grade: "A",
    enrollment: true,
  },
  { id: 2, name: "student_2", age: 13, grade: "B", enrollment: false },
  { id: 3, name: "student_3", age: 22, grade: "C", enrollment: true },
  { id: 4, name: "student_4", age: 20, grade: "A", enrollment: true },
  { id: 5, name: "student_5", age: 18, grade: "B", enrollment: false },
  { id: 6, name: "student_6", age: 21, grade: "D", enrollment: true },
];
