import React from 'react'
import { Link } from 'react-router-dom'
import {PiBookOpenTextLight} from 'react-icons/pi'
import {AiOutlineEdit} from 'react-icons/ai'
import {BsInfoCircle} from 'react-icons/bs'
import {MdOutlineDelete} from 'react-icons/md'
const BookSingleCard = ({book}) => {
  return (
    <div key={book._id} className='card'>
               <div className="flex">
               <h4 className='book-id'>{book._id}</h4>
                <h2 className='publishYear'>{book.publishYear}</h2>
               </div>
                <div className='card-title-container'>
                    <PiBookOpenTextLight className='pink'/>
                    <h2>{book.title}</h2>
                </div>
                <div className='card-author-container'>
                    <BsInfoCircle className='pink'/>
                    <h2>{book.author}</h2>
                </div>

               <div className="card-links">
                <Link to={`/books/details/${book._id}`}>
                <BsInfoCircle/>
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                <AiOutlineEdit/>
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                <MdOutlineDelete/>
                </Link>
               </div>

            </div>
  )
}

export default BookSingleCard
