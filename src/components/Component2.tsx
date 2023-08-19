import { Checkbox } from "@mui/material";
import React, { useState } from "react";

interface Department {
  department: string;
  sub_departments: string[];
}

interface DepartmentListProps {
  data: Department[];
}

const Component2: React.FC<DepartmentListProps> = ({ data }) => {

  const [expandedDepartments, setExpandedDepartments] = useState<string[]>([]);

  const toggleDepartment = (department: string) => {
    if (expandedDepartments.includes(department)) {
      setExpandedDepartments(
        expandedDepartments.filter((dep) => dep !== department)
      );
    } else {
      setExpandedDepartments([...expandedDepartments, department]);
    }
  };

  return (
    <div className="mt-10 mx-auto">
      <ul>
        {data.map((item) => (
          <li className="p-2 m-2" key={item.department}>
            <div onClick={() => toggleDepartment(item.department)}>
              <span className="mr-2">
                  <Checkbox
                    sx={{
                      color: "pink",
                    }}
                  />
              </span>
              {item.department}
            </div>
            {expandedDepartments.includes(item.department) && (
              <ul className="p-2">
                {item.sub_departments.map((subDep) => (
                  <div className="flex flex-row items-center">
                    <span className="">
                      <Checkbox
                        sx={{
                          color: "pink",
                        }}
                      />
                    </span>
                    <li className="p-2 ml-2 " key={subDep}>
                      {subDep}
                    </li>
                  </div>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Component2;
