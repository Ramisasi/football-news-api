import React from 'react'
import loadingStyle from './loading.module.css'


export default function Loading() {
    return (
        <div className={loadingStyle.loadingHeight}>
            <i className="fa-solid fa-spinner fa-spin"></i>
        </div>
    )
}
