import React, { useContext, useState } from "react";
import style from "./editstudent.module.css";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import StudentContext from "../../context/studentsdata";

function AddNewStudentComp() {
  const { setIsModal, setAllStudents, allStudents } =
    useContext(StudentContext);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [id, setId] = useState("");
  const [active, setIsActive] = useState(true);
  const [grade, setGrade] = useState("");
  const [nameErr, setNameErr] = useState(false);
  const [ageErr, setAgeErr] = useState(false);
  const [idErr, setIdErr] = useState(false);
  const [duplicateId, setDuplicateId] = useState(false);

  const handleNameChange = (val) => {
    setName(val);
    setNameErr(false);
  };

  const handleAgeChange = (val) => {
    setAge(val);
    setAgeErr(false);
  };

  const handleIdChange = (val) => {
    setIdErr(false);
    setDuplicateId(false);
    setId(val);
  };

  const handleActiveChange = (val) => {
    console.log("active: ", val);
    setIsActive(val);
  };

  const handleGradeChange = (val) => {
    setGrade(val);
  };

  const validateStudent = () => {
    if (name.length <= 1 || age <= 5 || age >= 50 || !id) {
      if (name.length <= 1) {
        setNameErr(true);
      }
      if (age <= 5 || age >= 50) {
        setAgeErr(true);
      }
      if (!id) {
        setIdErr(true);
        setDuplicateId(false);
      }
    } else {
      const isUnique = !allStudents.some((item) => item.id == id);
      if (!isUnique) {
        setIdErr(true);
        setDuplicateId(true);
      } else {
        setAllStudents((prev) => [
          ...prev,
          {
            id: Number(id),
            name: name,
            age: Number(age),
            Grade: grade,
            EnrollmentStaus: active,
          },
        ]);
        setIsModal(false);
      }
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
      <div className={style.heading}>Add Students Details</div>
      <div>
        <div className={style.nameMain}>
          <div className={style.label}>Student ID: </div>
          <div className={style.inputMain}>
            <input
              className={style.inpNum}
              type="number"
              value={id}
              onChange={(e) => handleIdChange(e.target.value)}
            />
            {idErr && duplicateId && (
              <div className={style.errorMsg}>ID must be unique</div>
            )}
            {idErr && !duplicateId && (
              <div className={style.errorMsg}>Please Enter ID</div>
            )}
          </div>
        </div>
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
                  onChange={(e) => handleActiveChange(e.target.checked)}
                />
                Active
              </span>
              <span>
                <input
                  type="checkbox"
                  className={style.checkbox}
                  checked={!active}
                  onChange={(e) => handleActiveChange(!e.target.checked)}
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

export default AddNewStudentComp;
