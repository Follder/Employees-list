import './App.scss';
import { AppFilter } from './components/App-filter/App-filter';
import { AppInfo } from './components/App-info/App-info';
import { EmployeesAddForm } from './components/Employees-add-form/Employees-add-form';
import { EmployeesList } from './components/Employees-list/Employees-list';
import { SearchPanel } from './components/Search-panel/Search-panel';

export const App = () => {

  const data = [
    {id:'1', name: 'John C.', salary: '800'},
    {id:'2', name: 'Alex M.', salary: '2000'},
    {id:'3', name: 'Antonio B.', salary: '5800'},
  ]

  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel /> 
        <AppFilter />
      </div>

      <EmployeesList data={data} />
      <EmployeesAddForm />
    </div>
  )
}