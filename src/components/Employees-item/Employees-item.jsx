import "./Employees-item.scss";
import {Component} from 'react';
import cn from 'classnames';

export class EmployeesItem extends Component {
  constructor({ name, salary, increase }) {
    super({ name, salary, increase })
    this.state = {
      increase: this.props.increase,
      rate: false,
    }
  };

  increaseToggle = () => {
    this.setState(({increase}) => {
      return {increase: !increase}
    })
  }

  rateToggle = () => {
    this.setState(({rate}) => {
      return {rate: !rate}
    })
  }

  render() {
    const {name, salary} = this.props;
    const {increase, rate} = this.state;

    return (
      <li className={cn("list-group-item d-flex justify-content-between", {'increase' : increase, 'like': rate})}>
        <span className="list-group-item-label" onClick={this.rateToggle}>{name}</span>
        <input
          type="text"
          className="list-group-item-input"
          defaultValue={`${salary}$`}
        />
        <div className="d-flex justify-content-center align-items-center">
          <button className="btn-cookie btn-sm" onClick={this.increaseToggle} type="button">
            <i className="fas fa-cookie"></i>
          </button>
    
          <button className="btn-trash btn-sm" type="button">
            <i className="fas fa-trash"></i>
          </button>
    
          <i className="fas fa-star"></i>
        </div>
      </li>
    )
  }
};
