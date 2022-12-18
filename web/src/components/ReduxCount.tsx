import React, { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CountActions } from '../redux/reducers/counts';
import { RootState } from '../redux/store';
import { Button } from 'react-bootstrap';

const ReduxCount = () => {
  const count = useSelector(({ countState }: RootState) => countState.count);
  const dispatch = useDispatch();
  const handleCountDisptch = () => {
    dispatch({ type: CountActions.INCREMENT });
  };

  const handleClick = (event: MouseEvent) => {
    handleCountDisptch();
  };
  return (
    <div>
      <label>The count: {count}</label>
      <Button onClick={handleClick}>Count Me</Button>
      <p className="mx-5 my-5">hello</p>
    </div>
  );
};

export default ReduxCount;