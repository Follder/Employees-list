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

  createNewEmpl = (e) => {
    e.preventDefault();

    if (this.state.name.trim().length > 0 && !isNaN(+this.state.salary) && +this.state.salary > 0) {
      const newItem = {name: this.state.name, salary: +this.state.salary}

      this.setState({name: '', salary: ''})

      return this.props.onAdd(newItem);
    }
  }

  render() {
    const {name, salary} = this.state;

    return (
      <div className="app-add-form">
        <h3>Додати нового працівника</h3>
        <form action="" className="add-form d-flex" onSubmit={this.createNewEmpl}>
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
