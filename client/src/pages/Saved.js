import React, { useState, useEffect } from 'react'
import API from '../utils/API'
import BookCard from '../components/BookCard'


function Saved() {

    const [books, setBooks] = useState([])

    useEffect(() => {
        apiCall();
    }, [])

    const apiCall = async () => {
        try {
            const bookData = await API.getAllBooks()
            setBooks(bookData.data)
        } catch (error) {
            console.error(error)
        }
        // setBooks([1, 2, 3])
    }

    return (
        <div>
            
            <h1>Here are your saved books</h1>
            {books.map((book, index) => (
                <BookCard 
                    key={index}
                    title={book.title}
                    author={book.author}
                    description={book.description}
                    img={book.img}
                    link={book.link}
                 />
            ))}
        </div>
    )
}

export default Saved;