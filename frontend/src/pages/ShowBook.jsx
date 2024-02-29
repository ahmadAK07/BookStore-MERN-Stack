import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();


  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3000/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      }).catch(error => {
        console.log(error);
        setLoading(false);
      })
  }, []);
  return (

    <div  className='show-book'>
      <BackButton/>
      <h1>Show Book</h1>
      {loading ? (
      <Spinner/>
    ) : (
      <div className='container'>
        <h5>Id: {book._id}</h5>
        <h5>Title: {book.title}</h5>
        <h5>Author: {book.author}</h5>
        <h5>PublishYear: {book.publishYear}</h5>
        <h5>Create Time: {new Date(book.createdAt).toString()}</h5>
        <h5>Update Time: {new Date(book.updatedAt).toString()}</h5>
      
      </div>
    )}
    </div>
  )
}

export default ShowBook
