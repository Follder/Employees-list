import "./App-info.scss";

export const AppInfo = ({data}) => {
  const countEmpl = data.length;
  const countIncreaseEmpl = data.filter(item => item.isIncrease).length;

  return (
    <div className="app-info">
      <h1>Звітність співробітників компанії:</h1>
      <h2>Загальна кількість працівників: {countEmpl}</h2>
      <h3>Премію отримають: {countIncreaseEmpl}</h3>
    </div>
  );
};
