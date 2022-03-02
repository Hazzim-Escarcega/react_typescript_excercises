import React from "react";
import { StudentGradeContext } from "../StudentGrade";

export const Students90Percent: React.FC = () => {
  return (
    <>
      <h1>Students above 90% grade</h1>
      <StudentGradeContext.Consumer>
        {(data) =>
          data
            .filter((studentDetails) => studentDetails.grade >= 90)
            .map(({ name, grade }) => (
              <li>
                {name} - {grade}%
              </li>
            ))
        }
      </StudentGradeContext.Consumer>
    </>
  );
};
