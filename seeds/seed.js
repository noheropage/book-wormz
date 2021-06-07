const mongoose = require('mongoose')
const db = require('../models')

mongoose.connect(
    process.env.MONGODB_URI ||
    'mongodb://localhost/googlebooks'
)

const bookSeed = [
    {
        title: 'book',
        author: ['bookauthor'],
        image: 'bookimage',
        link: 'booklink',
        description: 'book'
    },
    {
        title: 'book2',
        author: ['bookauthor2'],
        image: 'bookimage2',
        link: 'booklink2',
        description: 'book2'
    }
]

db.Book
    .remove({})
    .then(() => db.Book.collection.insertMany(bookSeed))
    .then(data => {
        console.log('Inserted records');
        process.exit(0)
    })
    .catch(err => {
        console.log(err);
        process.exit(0)
    })