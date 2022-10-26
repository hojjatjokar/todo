import React, { useMemo } from 'react';
import { LazyImage } from '.';
import getNames from '../utils/getName';
import './Todo.css';

export const Todo = ({ todo, onChange, config, isCompleted }) => {
  const [showModal, setShownModal] = React.useState(false);
  const [completed, setCompleted] = React.useState(false);
  const showHideClassName = showModal
    ? 'modal display-block'
    : 'modal display-none';

  const handleModal = (e) => {
    if (e.target.tagName !== 'INPUT') {
      setShownModal(!showModal);
    }
  };

  const closeModal = () => {
    setShownModal(false);
  };

  React.useEffect(() => {
    setCompleted(isCompleted);
  }, [isCompleted]);

  const userName = useMemo(() => getNames(todo), [todo]);

  const getLocation = ({ location: { street, ...rest } }) => {
    const myStreetName = street.name;
    const myStreetNumber = street.number;
    const myPostcode = rest.postcode;

    return (
      <>
        Address: {myStreetName + ' ' + myStreetNumber}
        <br></br>
        <br></br>
        Postcode: {myPostcode}
      </>
    );
  };

  const userLocation = useMemo(() => getLocation(todo), [todo]);

  const getPicture = () => {
    return <LazyImage src={todo.picture.large} alt={todo.picture.large} />;
  };

  return (
    <div className="todo" onClick={handleModal}>
      <div className="todo_title">{userName}</div>

      <div className="todo_image">{getPicture()}</div>

      <div className="todo_location">{userLocation}</div>

      <span>
        Completed:{' '}
        <input
          type="checkbox"
          checked={completed}
          className="todo_checked"
          onChange={onChange}
        />
      </span>

      <div className={showHideClassName}>
        <section className="modal-wrapper">
          <LazyImage src={todo.picture.large} alt={todo.picture.large} />
          <div className="todo_description">{todo.description}</div>
          <button type="button" onClick={closeModal}>
            Close
          </button>
        </section>
      </div>
    </div>
  );
};
