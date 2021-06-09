import React, { useEffect, useState } from 'react'
import API from '../utils/API'
import { Card } from 'react-bootstrap'

function BookCard(props) {

    const [book, setBook] = useState(props)

    useEffect(() => {
        setBook(props)
        console.log(props);
    }, [props])

    const handleClick = ()  => {
        API.saveBook({
            title: props.title,
            img: props.img,
            link: props.link,
            author: props.author,
            description: props.description
        })
            .catch(err => console.log(err));

        return
    }

    
        
        return (
            <div className='row'>
                <Card>
                <Card.img variant='top' src={book.img} />
                    <Card.Title>{book.title}</Card.Title>
                    <div className='row g-0'>
                        <div className='col-md-3'>
                            <div className='row'>
                                
                            </div>
                            <a href={book.link} className="btn btn-primary m-1" target='_blank'>Look at this book in Google</a>
                            <button className='btn btn-primary' onClick={handleClick}>Save this book to list</button>
                        </div>
                        <div className='col-md-9'>
                            <div className='card-body'>
                                <h5 className='card-title'>Author(s): {book.author}</h5>
                                <Card.Text>{book.description}</Card.Text>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
            
        )
    
}

export default BookCard;