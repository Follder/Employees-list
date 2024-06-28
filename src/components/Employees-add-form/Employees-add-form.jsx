import './Employees-add-form.scss';

export const EmployeesAddForm = () => {
  return (
    <div className="app-add-form">
      <h3>Додати нового працівника</h3>
      <form action="" className="add-form d-flex">
        <input
          type="text"
          className="form-control new_post-label"
          placeholder="Ім'я працівника"
        />
        <input
          type="text"
          className="form-control new_post-label"
          placeholder="З/П в $?"
        />

        <button className="btn btn-outline-light" type="submit">Додати</button>
      </form>
    </div>
  );
};
