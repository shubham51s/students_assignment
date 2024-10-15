import { createContext, useState } from "react";

const StudentContext = createContext();
export default StudentContext;

export const StudentProvider = ({ children }) => {
  const [allStudents, setAllStudents] = useState([]);
  const [studentOldData, setStudentData] = useState({});
  const [isModalOpen, setIsModal] = useState(false);
  const [addNewStudent, setAddNewStudent] = useState(false);
  const [filter, setFilter] = useState(1);
  const [sort, setSort] = useState(1);
  const [userInp, setUserInp] = useState("");

  const validateAllConditions = (val, type) => {
    if (type === 1) {
      setUserInp(val);
      setFilter(1);
      setSort(1);
      if (localStorage.getItem("allStudents")) {
        const result = JSON.parse(localStorage.getItem("allStudents"));
        if (!val) {
          setAllStudents(result);
        } else {
          const filter1 = result.filter((item) => item.name.includes(val));
          setAllStudents(filter1);
        }
      }
    } else if (type === 2) {
      if (localStorage.getItem("allStudents")) {
        const result = JSON.parse(localStorage.getItem("allStudents"));
        if (val !== 1) {
          const isActive = val === 2;
          const filtered = result.filter((item) =>
            isActive ? item.EnrollmentStaus : !item.EnrollmentStaus
          );
          setAllStudents(filtered);
        } else {
          setAllStudents(result);
        }
      }
      setFilter(val);
      setUserInp("");
      setSort(1);
    } else if (type === 3) {
      if (localStorage.getItem("allStudents")) {
        const result = JSON.parse(localStorage.getItem("allStudents"));
        if (val === 2) {
          const sortedStudents = result.sort((a, b) => a.age - b.age);
          setAllStudents(sortedStudents);
        } else {
          setAllStudents(result);
        }
      }
      setSort(val);
      setUserInp("");
      setFilter(1);
    }
  };

  return (
    <StudentContext.Provider
      value={{
        allStudents,
        setAllStudents,
        isModalOpen,
        setIsModal,
        addNewStudent,
        setAddNewStudent,
        filter,
        setFilter,
        validateAllConditions,
        sort,
        setSort,
        userInp,
        setUserInp,
        studentOldData,
        setStudentData,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};
