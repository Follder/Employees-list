import "./Employees-item.scss";
import cn from 'classnames';

export const EmployeesItem = ({ name, salary, increase }) => {
  window.console.log(increase);

  return (
    <li className={cn("list-group-item d-flex justify-content-between", {'increase' : increase})}>
      <span className="list-group-item-label">{name}</span>
      <input
        type="text"
        className="list-group-item-input"
        defaultValue={`${salary}$`}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button className="btn-cookie btn-sm" type="button">
          <i className="fas fa-cookie"></i>
        </button>
  
        <button className="btn-trash btn-sm" type="button">
          <i className="fas fa-trash"></i>
        </button>
  
        <i className="fas fa-star"></i>
      </div>
    </li>
  )
};
