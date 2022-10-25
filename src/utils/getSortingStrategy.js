const getSortingStrategy = ({ sortValue }) => {
  switch (sortValue) {
    case 'title':
      return (todos) => todos.sort((a, b) => a.title.localeCompare(b.title));
    case 'completed':
      return (todos) => todos.sort((a, b) => a.completed - b.completed);
    default:
      return (todos) => todos.sort((a, b) => a.id - b.id);
  }
};

export default getSortingStrategy;
