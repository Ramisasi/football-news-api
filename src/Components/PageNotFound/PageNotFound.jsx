import React from 'react'
import NotFoundAvatar from '../../image/page not found.png'
import { Helmet } from 'react-helmet'

export default function PageNotFound() {
  return <>
     <Helmet>
      <title>Sign In Page</title>
    </Helmet>
    <div className='mt-4 p-3 d-flex flex-column justify-content-center align-items-center'>
      <h2 className='m-3'>404</h2>
      <img src={NotFoundAvatar} className='w-25 m-3' />
      <p className='m-3'>Sorry page not found</p>
    </div>
  </>
}
