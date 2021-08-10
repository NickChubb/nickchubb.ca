import React from 'react'
import BookNotes from './BookNotes'

import { BsLink45Deg  } from 'react-icons/bs';

const Book = ({ book, key }) => (   
    <li className="links-menu">
        <a href={book.link} target="_blank" >
            <b>{book.title}</b> <i>by</i> {book.author} <small style={{ color: 'seagreen'}}><BsLink45Deg /></small>
        </a>
        <br />
        {
            // If book has notes display BookNotes component
            book.notes && book.notes.length > 0 ?
                
                <BookNotes notes={book.notes}/>
                :
                null
        }
    </li>
)

export default Book