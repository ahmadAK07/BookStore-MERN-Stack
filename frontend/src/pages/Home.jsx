import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../components/Spinner';
import '../App.css';
import axios from 'axios';
import {MdOutlineAddBox} from 'react-icons/md';
import BooksCard from '../components/home/BooksCard';
import BooksTable from '../components/home/BooksTable';
const Home = () => {
  
const [books, setBooks] = useState([]);
const [loading, setLoading] = useState(false);
const [showtype, setshowtype] = useState('table');
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
      <div className="buttons">
        <button
        className='show-in-table'
        onClick={()=> {setshowtype('table'); console.log('table btn clicked')}}
        >
       Table
        </button>
        <Link to="/books/create" className='create-link'>
       Add &nbsp; <MdOutlineAddBox className='MdOutlineAddBox'/>
        </Link>
        <button
        className='show-in-card'
        onClick={()=>{ setshowtype('card'); console.log('card btn clicked')}}
        >
       Card
        </button>
      </div>
       <div className='home-container-1'>
       
       </div>

       {loading ? (
        <Spinner/>
       ) : showtype == 'table' ? (<BooksTable books={books}/>) : (<BooksCard books={books}/>)

       }
    </div>
  )
}

export default Home
