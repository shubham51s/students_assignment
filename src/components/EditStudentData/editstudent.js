import React, { useContext, useState } from "react";
import style from "./editstudent.module.css";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import StudentContext from "../../context/studentsdata";

function EditStudentDetailsComp() {
  const { setIsModal, studentOldData, allStudents, setAllStudents } =
    useContext(StudentContext);
  const [name, setName] = useState(studentOldData.name);
  const [age, setAge] = useState(studentOldData.age);
  const [active, setIsActive] = useState(studentOldData.EnrollmentStaus);
  const [grade, setGrade] = useState(studentOldData.Grade);
  const [nameErr, setNameErr] = useState(false);
  const [ageErr, setAgeErr] = useState(false);

  const handleNameChange = (val) => {
    setName(val);
    setNameErr(false);
  };

  const handleAgeChange = (val) => {
    setAge(val);
    setAgeErr(false);
  };

  const handleActiveChange = (val) => {
    setIsActive(val);
  };

  const handleGradeChange = (val) => {
    setGrade(val);
  };

  const validateStudent = () => {
    if (name.length <= 1 || age <= 5 || age >= 50) {
      if (name.length <= 1) {
        setNameErr(true);
      }
      if (age <= 5 || age >= 50) {
        setAgeErr(true);
      }
    } else {
      setAllStudents(
        allStudents.map((item) =>
          item.id !== studentOldData.id
            ? item
            : {
                id: studentOldData.id,
                name: name,
                age: age,
                Grade: grade,
                EnrollmentStaus: active,
              }
        )
      );
      setIsModal(false);
    }
  };

  return (
    <>
      <div className={style.close}>
        <CloseIcon
          className={style.closeIcon}
          onClick={() => setIsModal(false)}
        />
      </div>
      <div className={style.heading}>Edit Students Details</div>
      <div>
        <div className={style.nameMain}>
          <div className={style.label}>Name: </div>
          <div>
            <input
              className={style.inp}
              value={name}
              onChange={(e) => handleNameChange(e.target.value)}
            />
            {nameErr && (
              <div className={style.errorMsg}>Please enter valid name</div>
            )}
          </div>
        </div>
        <div className={style.nameMain}>
          <div className={style.label}>Age: </div>
          <div>
            <input
              className={style.inpNum}
              value={age}
              onChange={(e) => handleAgeChange(e.target.value)}
              type="number"
            />
            {ageErr && (
              <div className={style.errorMsg}>Please enter valid age</div>
            )}
          </div>
        </div>
        <div className={style.nameMain}>
          <div className={style.label}>Grade: </div>
          <div>
            <select
              className={style.inp}
              value={grade}
              onChange={(e) => handleGradeChange(e.target.value)}
            >
              <option value={"A"}>A</option>
              <option value={"B"}>B</option>
              <option value={"C"}>C</option>
              <option value={"D"}>D</option>
              <option value={"E"}>E</option>
            </select>
            {/* <div className={style.errorMsg}>error</div> */}
          </div>
        </div>
        <div className={style.nameMain}>
          <div className={style.label}>Enrollment Status: </div>
          <div>
            <div>
              <span className={style.checkboxMain}>
                <input
                  type="checkbox"
                  className={style.checkbox}
                  checked={active}
                  onChange={(e) => handleActiveChange(e.target.value)}
                />
                Active
              </span>
              <span>
                <input
                  type="checkbox"
                  className={style.checkbox}
                  checked={!active}
                  onChange={(e) => handleActiveChange(!e.target.value)}
                />
                Inactive
              </span>
            </div>
            {/* <div className={style.errorMsg}>error</div> */}
          </div>
        </div>
      </div>
      <div className={style.btnMain}>
        <Button variant="contained" onClick={validateStudent}>
          Click To Confirm
        </Button>
      </div>
    </>
  );
}

export default EditStudentDetailsComp;
