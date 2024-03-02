import React, {useState} from 'react'
import axios from 'axios';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const  {id} = useParams();
  const {enqueueSnackbar} = useSnackbar();
  const handleDeleteBook = ()=>{
    console.log(id);
     setLoading(true);
     axios
     .delete(`http://localhost:3000/books/${id}`)
     .then(()=>{
      setLoading(false);
      enqueueSnackbar('Deleted Successfully', {variant: 'success'});

      navigate('/')
     })
     .catch((error)=>{
        setLoading(false);
        // alert('An error happened. please check the console');
        enqueueSnackbar('Error', {variant: 'error'});
        console.log(error);
     })
  }
  return (
    <div className='delte-container'>
       <BackButton/>
       <h1>Delete Book</h1>
       <div className="delte-card">
        <h3>Are your sure You want to delete this book detail?</h3>
        <button onClick={handleDeleteBook}>Yes, Delete It</button>
       </div>
    </div>
  )
}

export default DeleteBook
