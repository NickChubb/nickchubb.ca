import React from 'react'
import BookNotes from './BookNotes'

import { BsLink45Deg  } from 'react-icons/bs';

const Book = ({ book, key }) => (   
    <li className="links-menu">
        <a href={book.Link} target="_blank" >
            <b>{book.Title}</b> <i>by</i> {book.Author} <small style={{ color: 'seagreen'}}><BsLink45Deg /></small>
        </a>
        <br />
        {
            // If book has notes display BookNotes component
            book.Notes && book.Notes.length > 0 ?
                
                <BookNotes notes={book.Notes}/>
                :
                null
        }
    </li>
)

export default Book