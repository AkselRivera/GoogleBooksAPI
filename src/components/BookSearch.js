import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch';
import useForm from '../hooks/useForm'
import BookCards from './BookCards';


function BookSearch() {

  const [formValues,handleInputChange]=useForm({search:''});
  const {search} = formValues;

  const [url, setUrl] = useState('')


  useEffect(()=>{

    if( search.trim().length>0 ){
      setUrl(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyAehQSawIDEq2nDJQAELtk5EiuK9l2EXQE&maxResults=39`)
    }
    else{
      setUrl(`https://www.googleapis.com/books/v1/volumes?q=A%20Promised%20Land&key=AIzaSyAehQSawIDEq2nDJQAELtk5EiuK9l2EXQE&maxResults=39`)
    }
  },[setUrl, search])
  
  
  
  const data =(useFetch(url));

  return (
    <div>

    <div className='fondo'>

        <input
        className='p-2 '
        placeholder='A Promised Land...'
          autoComplete='off'
            type='text'
            name={'search'}
            onChange={handleInputChange}
            value={search}
            
            />
    </div>

    <div className='results '>
     
     {
       data.loading ? 
       
        <div className="d-flex justify-content-center ">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
    :

    <div className='col p-5'>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4'>
            { 
            data.data?.items.map((book)=>(
            
                <BookCards key={book?.id} 
                    id={book.id}
                    img={book.volumeInfo.imageLinks?.thumbnail }
                    title={book.volumeInfo?.title}
                    date={book.volumeInfo?.publishedDate}
                    />
            ))
            }
        </div>
    </div>

    }

    </div>

    </div>
  )
}

export default BookSearch