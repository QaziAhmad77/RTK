import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdDeleteForever } from 'react-icons/all.js';
import { removeUser } from '../store/slices/UserSlice';
const DisplayUsers = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.users;
  });

  const deleteUser = (id, user) => {
    dispatch(removeUser(id, user));
  };
  return (
    <>
      {data.map((user, id) => {
        return (
          <li key={id}>
            {user}
            <button className="btn-delete" onClick={() => deleteUser(id, user)}>
              <MdDeleteForever className="delete-icon" />
            </button>
          </li>
        );
      })}
    </>
  );
};

export default DisplayUsers;
