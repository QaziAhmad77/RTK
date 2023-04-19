import React from 'react'
import { useDispatch } from 'react-redux';
import {clearAllUsers} from "../store/actions";
// import {clearAllUsers} from "../store/slices/UserSlice"


const DeleteAllUser = () => {
    const dispatch = useDispatch();
    const deleteUsers=()=>{
        dispatch(clearAllUsers())
    }
  return (
    <>
      <button className='dlt-btn' onClick={deleteUsers}>clear users</button>
    </>
  )
}

export default DeleteAllUser
