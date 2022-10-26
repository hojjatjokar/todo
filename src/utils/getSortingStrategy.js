const getSortingStrategy = ({ sortValue }) => {
  switch (sortValue) {
    case 'title':
      return (todos) =>
        [...todos].sort((a, b) => a.title.localeCompare(b.title));
    case 'completed':
      return (todos) => [...todos].sort((a) => (a.completed ? -1 : 1));
    default:
      return (todos) => [...todos].sort((a, b) => a.id - b.id);
  }
};

export default getSortingStrategy;
