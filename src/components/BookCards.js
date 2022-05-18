import React from 'react'
import { useNavigate } from 'react-router-dom'
import back from '../img/NotFound.jpg'

function BookCards({id,title, date, img=back}) {

  const navigate = useNavigate();

  const handleCard = ()=>{
    navigate(`/book/${id}`)
  }

  return (
    <div className='col my-2 pb-2' onClick={handleCard}>
    <div className='card  h-100 text-center'>
        <div className='card-body p-0 h-50'>
        <img className='card-img-top cardImg' src={img} alt=''/>

            <h6 className='card-title'>{title}</h6>
            <small className='text-muted'>{date}</small>
        </div>

        </div>
    </div>
  )
}

export default BookCards