import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../components/Spinner';
import {AiOutlineEdit} from 'react-icons/ai';
import {BsInfoCircle} from 'react-icons/bs';
import '../App.css';
import axios from 'axios';
import {MdOutlineAddBox, MdOutlineDelete} from 'react-icons/md';
const Home = () => {
const [books, setBooks] = useState([]);
const [loading, setLoading] = useState(false);

useEffect(()=>{
   setLoading(true);
   axios.get('http://localhost:3000/books')
   .then((response)=> {
    setBooks(response.data.data);
    setLoading(false);
   })
   .catch((error)=>{
    console.log(error);
    setLoading(false);
   })
}, []);
  return (
    <div className='home'>
       <div className='home-container-1'>
        <h1 className='home-heading'>Book List</h1>
        <Link to="/books/create">
        <MdOutlineAddBox className='MdOutlineAddBox'/>
        </Link>
       </div>

       {loading ? (
        <Spinner/>
       ) :( <table className='home-table'>
         <thead>
           <tr>
           <th>No</th>
            <th>Title</th>
            <th>Author</th>
            <th>PublishYear</th>
           </tr>
         </thead>
         <tbody>
            {books.map((book, index) => (
                <tr key={book._id}>
                    <td>{index + 1}</td>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.publishYear}</td>
                    <td>
                        <div>
                        <Link to={`/books/details/${book._id}`}> 
                        <BsInfoCircle />
                         </Link>
                        <Link to={`/books/edit/${book._id}`}> 
                        <AiOutlineEdit />
                         </Link>
                        <Link to={`/books/delete/${book._id}`}> 
                        <MdOutlineDelete />
                         </Link>
                        </div>
                    </td>
                </tr>
            ) )}
         </tbody>
       </table>)

       }
    </div>
  )
}

export default Home
