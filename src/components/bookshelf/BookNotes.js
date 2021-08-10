import React from 'react'
import './books.css'

const BookNotes = ({ notes }) => (   
    <ul className="book-notes">
        {
            notes.map((note, key) => {
                if (note.length != '')
                    return <small key={key}><li>{note}</li></small>
            })
        }
    </ul>
)

export default BookNotes