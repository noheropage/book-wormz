import React, { useEffect, useState  } from 'react'
import BookCard from '../components/BookCard'
import { Input, FormBtn } from "react-bootstrap"
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
            
        } catch (error) {
            console.error(error)
        }    
    }

    let bookstoLoad;
    if (books) {
        bookstoLoad = books.map(book => {
        return <BookCard data={book}/>
        });
    } else {
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
        <div className='container'>
            <div className='row mt-3 mb-3'>

                <Input
                    onChange={handleInputChange}
                    name="search"
                    placeholder="Seach Term"
                    value={formObject.search}
                />
                <FormBtn
                    disabled={!(formObject.search)}
                    onClick={handleFormSubmit}
                >
                    Search Book Title in Google
                </FormBtn>

            </div>
            <h1>List of matching items</h1>
            {bookstoLoad}
        </div>
    )
}

export default Search;