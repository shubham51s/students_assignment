import React, { useContext } from "react";
import style from "./studentslist.module.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import StudentContext from "../../context/studentsdata";

function StudentListComp({ item }) {
  const {
    setAddNewStudent,
    setIsModal,
    allStudents,
    setAllStudents,
    setStudentData,
  } = useContext(StudentContext);

  const handleEditClick = (e) => {
    setStudentData(item);
    e.stopPropagation();
    setAddNewStudent(false);
    setIsModal(true);
  };

  const handleDeleteClick = (id) => {
    const updatedResult = allStudents.filter((item) => item.id !== id);
    setAllStudents(updatedResult);
    localStorage.setItem("allStudents", JSON.stringify(updatedResult));
  };

  return (
    <li className={style.contentMain}>
      <div className={style.idContent}>{item.id}</div>
      <div className={style.nameContent}>{item.name}</div>
      <div className={style.ageContent}>{item.age}</div>
      <div className={style.gradeContent}>{item.Grade}</div>
      <div
        className={style.statusContent}
        style={{ color: item.EnrollmentStaus ? "green" : "red" }}
      >
        {item.EnrollmentStaus ? "Active" : "Inactive"}
      </div>
      <div className={style.editIcons}>
        <EditIcon
          className={style.icons}
          style={{ color: "blue" }}
          onClick={(e) => handleEditClick(e)}
        />
        <DeleteIcon
          className={style.icons}
          style={{ color: "red" }}
          onClick={() => handleDeleteClick(item.id)}
        />
      </div>
    </li>
  );
}

export default StudentListComp;
