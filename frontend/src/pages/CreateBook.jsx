import React, {useState} from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios  from 'axios'
import { useNavigate } from 'react-router-dom'
import {useSnackbar} from 'notistack'
const CreateBook = () => {
   const [title, setTitle] = useState("");
   const [author, setAuthor] = useState("");
   const [publishYear, setpublishYear] = useState('');
   const [loading, setLoading] = useState(false);
   const navigate = useNavigate();
   const {enqueueSnackbar}= useSnackbar();
   const handleSaveBook = ()=>{
    const data = {
      title,
      author,
      publishYear
    }
    setLoading(true);
    axios
    .post("http://localhost:3000/books/" ,data)
    .then(() => {
      setLoading(false);
      enqueueSnackbar('Book Created Successfully', {variant: 'success'});
      navigate('/');
    }).catch((error)=>{
      setLoading(false);
      // alert('An error happened please check console');
      enqueueSnackbar('Error', {variant: 'error'});
      console.log(error);
    })
   }
  return (
    <div>
       <BackButton/>
       <h1>Create Book</h1>
       <div className="container">
          <label>Title: <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)} className='title-input'/></label>
          <label>Author: <input type='text' value={author} onChange={(e)=>setAuthor(e.target.value)} className='title-input'/></label>
          <label>PublishYear: <input type='text' value={publishYear} onChange={(e)=>setpublishYear(e.target.value)} className='title-input'/></label>
         <button onClick={handleSaveBook}>Save</button>
       </div>
    </div>
  )
}

export default CreateBook
