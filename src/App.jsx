import './App.scss';
import { AppFilter } from './components/App-filter/App-filter';
import { AppInfo } from './components/App-info/App-info';
import { SearchPanel } from './components/Search-panel/Search-panel';

export const App = () => {
  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel /> 
        <AppFilter />
      </div>
    </div>
  )
}