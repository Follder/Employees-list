import { Component } from 'react';
import './App.scss';
import { AppFilter } from './components/App-filter/App-filter';
import { AppInfo } from './components/App-info/App-info';
import { EmployeesAddForm } from './components/Employees-add-form/Employees-add-form';
import { EmployeesList } from './components/Employees-list/Employees-list';
import { SearchPanel } from './components/Search-panel/Search-panel';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {id:1, name: 'John C.', salary: '800', isRated: true, isIncrease: false},
        {id:2, name: 'Alex M.', salary: '2000', isRated: false, isIncrease: true},
        {id:3, name: 'Antonio B.', salary: '5800', isRated: false, isIncrease: false},
      ],
      query: '',
      filter: 'all',
    }
  }

  handleFilter = (text) => {
    this.setState(() => {
      return {filter: text}
    })
  }

  handleQuery = (text) => {
    this.setState(() => {
      if (text.length === 0){
        return {query: ''};
      }

      return {query: text}
    })
  }

  searchEmpl = (items, query) => {
    if (query.length === 0) {
      return items;
    }

    return items.filter(item => {
      return item.name.toLowerCase().includes(query.toLowerCase().trim())
    });
  }

  filterBy = (items, filter) => {
    if (filter === 'rated') {
      return items.filter(item => item.isRated)  
    }

    if (filter === 'salary') {
      return items.filter(item => item.salary >= 1000)
    }

    return items
  }

  handleDeleteEmpl = (id) => {
    this.setState(({data}) => {
      return {data: data.filter((item) => item.id !== id)}
    })
  }

  handleAddEmpl = (item) => {
    this.setState(({data}) => {
      const Ids = data.map(item => item.id);
      const id = Math.max(...Ids) + 1;

      console.log({...item, id});

      return {data: [...data, {...item, id}]}
    })
  }

  handleToggleIncrease = (id) => {
    this.setState(({data}) => {
      return {
        data: data.map(item => {
  
          if (item.id === id) {
            return {...item, isIncrease: !item.isIncrease}
          }
  
          return item;
        })
      }
    })
  }

  handleToggleRate = (id) => {
    this.setState(({data}) => {
      return {
        data: data.map(item => {
          if (item.id === id) {
            return {...item, isRated: !item.isRated}
          }

          return item;
        })
      }
    })
  }

  render() {
    const {data, query, filter} = this.state;

    const allFilters = (dataArr) => {
      const filtered = this.filterBy(dataArr, filter);
      const searched = this.searchEmpl(filtered, query);

      return searched;
    }

    const filteredData = allFilters(data);


    return (
      <div className="app">
        <AppInfo data={data} />
  
        <div className="search-panel">
          <SearchPanel onQuery={this.handleQuery}/> 
          <AppFilter onFilter={this.handleFilter} filter={this.state.filter} />
        </div>
  
        <EmployeesList 
          data={filteredData} 
          onDelete={this.handleDeleteEmpl} 
          onToggleIncrease={this.handleToggleIncrease}
          onToggleRate={this.handleToggleRate}
        />
        <EmployeesAddForm onAdd={(item) => this.handleAddEmpl(item)} />
      </div>
    )
  }
}