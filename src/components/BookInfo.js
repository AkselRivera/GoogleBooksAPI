import React from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

import parse from 'html-react-parser';


function BookInfo() {

    const {id}= useParams();
    const data=useFetch(`https://www.googleapis.com/books/v1/volumes/${id}?key=AIzaSyAehQSawIDEq2nDJQAELtk5EiuK9l2EXQE`);

    console.log(data?.data);
    
    if(data.loading && !data.data)
        return (
        <div className="d-flex justify-content-center ">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>)

  return (

    <div className='d-flex flex-row'>
        <div className='p-4' >
            <img src={data.data.volumeInfo?.imageLinks?.thumbnail} alt='' />
            <div className='text-break'>
                
                {
                    data.data.volumeInfo?.authors.length>0
                    &&
                        data.data.volumeInfo.authors.map((item) =>
                        ( <small className='fw-bold'>{item}</small> )
                        )
                }
            </div>
            <small> ({data.data.volumeInfo.publishedDate})</small>
            <div className='text-break mt-2'>
                
                {
                    data.data.volumeInfo?.categories?.length>0
                    &&
                        data.data.volumeInfo.categories.map((item) =>
                        ( <small className=' text-muted'>{item}</small> )
                        )
                }
            </div>
            <div className='text-break mt-4'>
                
                {
                    data.data?.saleInfo?.isEbook
                    &&
                     <a target='_blank' rel="noreferrer" href={data.data.saleInfo.buyLink} >
                         <button  className="btn btn-primary position-relative">
                            Buy link
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {`${data.data?.saleInfo?.retailPrice.amount} ${data.data?.saleInfo?.retailPrice.currencyCode}`}
                                <span className="visually-hidden">Price</span>
                            </span>
                        </button>
                     </a>
                }
            </div>
            <div className='text-break mt-4'>
                
                {
                    data.data?.accessInfo?.pdf.isAvailable
                    &&
                     <a href={data.data.accessInfo.pdf.acsTokenLink} className="link-success">
                        <button type="button" class="btn btn-primary position-relative">
                            PDF
                            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                                Free
                                <span class="visually-hidden">Price</span>
                            </span>
                        </button>
                     </a>
                        //data.data.accessInfo.pdf.acsTokenLink
                }
            </div>
        </div>

        <div className='d-flex flex-column'>

        <h1>{data.data.volumeInfo.title} </h1>
        { parse( data.data?.volumeInfo.description)} 
        </div>
        
    </div>
  )
}

export default BookInfo