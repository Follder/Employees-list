import './App-filter.scss';
import cn from 'classnames';

export const AppFilter = ({filter, onFilter}) => {
  const btnData = [
    {name: 'all', label: 'Всі працівники'},
    {name: 'rated', label: 'На підвищення'},
    {name: 'salary', label: 'З/П більше 1000$'}
  ]

  return (
    <div className="btn-group">
      {btnData.map(item => (
        <button 
          key={item.name}
          className={cn('btn', {'btn-light' : item.name === filter, 'btn-outline-light' : item.name !== filter})} 
          type="button"
          onClick={() => onFilter(item.name)}>
            {item.label}
        </button>
      ))}
    </div>
  )
}