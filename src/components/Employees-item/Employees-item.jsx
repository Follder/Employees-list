import "./Employees-item.scss";
import cn from 'classnames';

export const EmployeesItem = (props) => {
  const {name, salary, isIncrease, isRated, onDelete, onToggleIncrease, onToggleRate} = props;

  return (
    <li className={cn("list-group-item d-flex justify-content-between", {'increase' : isIncrease, 'like': isRated})}>
      <span className="list-group-item-label" onClick={onToggleRate}>{name}</span>
      <input
        type="text"
        className="list-group-item-input"
        defaultValue={`${salary}$`}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button className="btn-cookie btn-sm" onClick={onToggleIncrease} type="button">
          <i className="fas fa-cookie"></i>
        </button>
  
        <button className="btn-trash btn-sm" onClick={onDelete} type="button">
          <i className="fas fa-trash"></i>
        </button>
  
        <i className="fas fa-star"></i>
      </div>
    </li>
  )
};
