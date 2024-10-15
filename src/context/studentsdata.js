import { createContext, useState } from "react";

const StudentContext = createContext();
export default StudentContext;

export const StudentProvider = ({ children }) => {
  const [allStudents, setAllStudents] = useState(studentsData);
  const [isModalOpen, setIsModal] = useState(false);
  const [addNewStudent, setAddNewStudent] = useState(false);
  const [studentOldData, setStudentData] = useState({});
  return (
    <StudentContext.Provider
      value={{
        allStudents,
        setAllStudents,
        isModalOpen,
        setIsModal,
        addNewStudent,
        setAddNewStudent,
        studentOldData,
        setStudentData,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

const studentsData = [
  { id: 1, name: "student_1", age: 23, Grade: "A", EnrollmentStaus: true },
  { id: 2, name: "student_2", age: 13, Grade: "B", EnrollmentStaus: false },
  { id: 3, name: "student_3", age: 22, Grade: "C", EnrollmentStaus: true },
  { id: 4, name: "student_4", age: 20, Grade: "A", EnrollmentStaus: true },
  { id: 5, name: "student_5", age: 18, Grade: "B", EnrollmentStaus: false },
  { id: 6, name: "student_6", age: 21, Grade: "D", EnrollmentStaus: true },
];
