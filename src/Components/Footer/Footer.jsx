import React from 'react'
import { Link } from 'react-router-dom'
import footerStyle from './Footer.module.css'
export default function Footer() {
  return (
    <div className={footerStyle.fStyle}>
      <p className='text-light'>Sport News <span className='fs-6'>Design By </span><Link>En Rami Abouagela</Link></p>
    </div>
  )
}
