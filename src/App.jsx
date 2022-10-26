import React from 'react';
import { useGetTodos } from './http';
import { Header, Todo, LoadMore } from './components';
import getSortingStrategy from './utils/getSortingStrategy';
import config from './config.json';
import './App.css';

function App() {
  const { data, error, fetchNextPage, isFetching, isFetchingNextPage, status } =
    useGetTodos();
  const [todos, setTodos] = React.useState([]);
  const [sortValue, setSortValue] = React.useState('');

  React.useEffect(() => {
    if (!data) return;
    // This will flatten the data to be in a single array
    // data.pages[{results:[]},{results:[]},{results:[]}] => []
    const newTodoList = data.pages.reduce((finalData, currPage) => {
      finalData.push(...currPage.results);
      return finalData;
    }, []);

    setTodos(newTodoList);
  }, [data]);

  const sortedTodos = React.useMemo(() => {
    return getSortingStrategy({ sortValue })(todos);
  }, [todos, sortValue]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div className="app">
      <Header
        todos={todos}
        data={data}
        config={config}
        sortValue={sortValue}
        onSortChange={setSortValue}
        onToggleAll={(areAllTodosCompleted) => {
          setTodos(
            todos.map((todo) => ({
              ...todo,
              completed: !areAllTodosCompleted,
            }))
          );
        }}
      />

      <div className="grid">
        {sortedTodos.map((todo, idx) => (
          <Todo
            key={todo.login.uuid}
            todo={todo}
            config={config}
            isCompleted={todo.completed}
            onChange={() => {
              setTodos((curr) => {
                return curr.map((item, i) =>
                  i === idx ? { ...item, completed: !item.completed } : item
                );
              });
            }}
          />
        ))}
      </div>
      <LoadMore
        fetchNextPage={fetchNextPage}
        isFetchingNextPage={isFetchingNextPage}
        isFetching={isFetching}
      />
    </div>
  );
}

export default App;
