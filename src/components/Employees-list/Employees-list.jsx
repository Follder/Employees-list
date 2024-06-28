import { EmployeesItem } from "../Employees-item/Employees-item";
import "./Employees-list.scss";

export const EmployeesList = ({ data }) => (
  <ul className="app-list list-group">
    {data.map((item) => (
      <EmployeesItem name={item.name} salary={item.salary} increase={item.increase} key={item.id} />
    ))}
  </ul>
);
