import React, { useEffect, useState  } from 'react'
import BookCard from '../components/BookCard'

import { Input, FormBtn, Button } from "react-bootstrap"


const axios = require('axios')


function Search() {

    const [books, setBooks] = useState([])
    const [formObject, setFormObject] = useState({
        search: ""
      })

    useEffect(() => {
    }, [])

    const renderBooks = async (query) => {

        var baseUrl = `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=5&orderBy=relevance`

        try {
            const googleData = await axios.get(baseUrl)
              setBooks(googleData.data.items)
              console.log(googleData.data.items.volumeInfo.authors);
            
        } catch (error) {
            console.error(error)
        }    
    }

    let bookstoLoad;
    if (books) {
        console.log(books);
        bookstoLoad = books.map((book, index) => {
        return <BookCard key={index} 
            author={book.volumeInfo.authors} 
            title={book.volumeInfo.title} 
            description={book.volumeInfo.description} 
            img={book.volumeInfo.imageLinks.thumbnail} 
            link={book.volumeInfo.previewLink}
            />
        });
    } else {
        console.log(books);
        bookstoLoad = "Rendering books";
    }


    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        renderBooks(formObject.search)
      };


    return (
        <div>
            
        <div className='container'>
            <div className='row mt-3 mb-3'>

                <input
                    onChange={handleInputChange}
                    name="search"
                    placeholder="Seach Term"
                    value={formObject.search}
                />
                <Button
                    disabled={!(formObject.search)}
                    onClick={handleFormSubmit}
                >
                    Search Book Title in Google
                </Button>

            </div>
            <h1>List of matching items</h1>
            {bookstoLoad}
        </div>
        </div>
    )
}

export default Search;