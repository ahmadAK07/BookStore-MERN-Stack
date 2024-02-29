import React, {useEffect, useState} from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios  from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
const EditBook = () => {
   const [title, setTitle] = useState("");
   const [author, setAuthor] = useState("");
   const [publishYear, setpublishYear] = useState('');
   const [loading, setLoading] = useState(false);
   const navigate = useNavigate();
   const {id} = useParams();
    useEffect(()=>{
     setLoading(true);
     axios.get(`http://localhost:3000/books/${id}`)
     .then((response)=>{
      setAuthor(response.data.author);
      setpublishYear(response.data.publishYear);
      setTitle(response.data.title);
      setLoading(false);
     }).catch((error)=>{
      console.log(error);
      alert('An errror happened check console')
     })
    }, []);

   const handleEditBook = ()=>{
    const data = {
      title,
      author,
      publishYear
    }
    setLoading(true);
    axios
    .put(`http://localhost:3000/books/${id}` ,data)
    .then(() => {
      setLoading(false);
      navigate('/');
    }).catch((error)=>{
      setLoading(false);
      alert('An error happened please check console');
      console.log(error);
    })
   }
  return (
    <div>
       <BackButton/>
       <h1>Edit Book</h1>
       <div className="container">
          <label>Title: <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)} className='title-input'/></label>
          <label>Author: <input type='text' value={author} onChange={(e)=>setAuthor(e.target.value)} className='title-input'/></label>
          <label>PublishYear: <input type='text' value={publishYear} onChange={(e)=>setpublishYear(e.target.value)} className='title-input'/></label>
         <button onClick={handleEditBook}>Save</button>
       </div>
    </div>
  )
}

export default EditBook
