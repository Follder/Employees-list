import {Component} from 'react';
import './Employees-add-form.scss';

export class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      salary: '',
    }
  }

  handleAddName = (e) => {
    this.setState({name: e.target.value})
  }

  handleAddSalary = (e) => {
    this.setState({salary: e.target.value})
  }

  render() {
    const {name, salary} = this.state;
    window.console.log(name, salary);

    return (
      <div className="app-add-form">
        <h3>Додати нового працівника</h3>
        <form action="" className="add-form d-flex">
          <input
            type="text"
            className="form-control new_post-label"
            placeholder="Ім'я працівника"
            name={name}
            value={name}
            onChange={this.handleAddName}
          />
          <input
            type="text"
            className="form-control new_post-label"
            placeholder="З/П в $?"
            name={salary}
            value={salary}
            onChange={this.handleAddSalary}
          />
  
          <button className="btn btn-outline-light" type="submit">Додати</button>
        </form>
      </div>
    );
  }
};
