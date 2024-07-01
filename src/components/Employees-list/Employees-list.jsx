import { EmployeesItem } from "../Employees-item/Employees-item";
import "./Employees-list.scss";

export const EmployeesList = ({ data, onDelete, onToggleIncrease, onToggleRate }) => (
  <ul className="app-list list-group">
    {data.map((item) => (
      <EmployeesItem 
        name={item.name} 
        salary={item.salary} 
        isIncrease={item.isIncrease}
        isRated={item.isRated}
        key={item.id} 
        onDelete={() => onDelete(item.id)} 
        onToggleIncrease={() => onToggleIncrease(item.id)}
        onToggleRate={() => onToggleRate(item.id)}
      />
    ))}
  </ul>
);
