import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import AuthStyle from './DataAuth.module.css'

export default function DataAuth() {
    return <>
        <div className={`${AuthStyle.AuthDiv} d-flex flex-column justify-content-center`}>
            <div className={`${AuthStyle.AuthItems} ${AuthStyle.AuthItemsOutlet}`}>
            
                <div className="d-flex justify-content-center p-3">
                    <Outlet />
                </div>
             
            </div>
            <div className= {`${AuthStyle.AuthItems} ${AuthStyle.AuthItemsLink} d-flex justify-content-center`}>
                    <Link className='px-4 py-1 pt m-2 border border-2 border-dark border rounded-2 text-black' to='SignUp'>Sign Up</Link>
                    <Link className='px-4 py-1 m-2 border border-2 border-dark border rounded-2 text-black' to='\'>Sign In</Link>
                </div>
        </div>

        {/* <div className='bg-info d-inline-block'>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
        </div> */}

    </>
}
