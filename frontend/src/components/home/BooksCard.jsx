import React from 'react'
import { Link } from 'react-router-dom'
import {PiBookOpenTextLight} from 'react-icons/pi'
import {AiOutlineEdit} from 'react-icons/ai'
import {BsInfoCircle} from 'react-icons/bs'
import {MdOutlineDelete} from 'react-icons/md'
import BookSingleCard from './BookSingleCard'

const BooksCard = ({books}) => {
  
  return (
    <div className='card-container'>
      
      {
        books.map((book)=>{
          return  (
           <BookSingleCard key={book._id} book={book}/>
            )
        })
      }
 
    </div>
  )
}

export default BooksCard
