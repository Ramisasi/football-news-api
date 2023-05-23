import React, { useEffect } from 'react'
import avatar from '../../image/neswBackground.jpg'
import cardStyle from './Card.module.css'
import { Link } from 'react-router-dom';
export default function Card({ newsData }) {
    return (
        <div className="col">
            <Link target="_blank" to={newsData.url}>
                <div className={`card ${cardStyle.card}`}>
                    <img src={newsData.urlToImage ? newsData.urlToImage : avatar} className={cardStyle.cardImg} alt={newsData.author} />
                    <div className="card-body">
                        <h5 className="card-title">{newsData.author? newsData.author :"Lorem, ipsum."}</h5>
                        <h6 className="card-title">{newsData.title.split(" ").slice(0,15).join(" ")}</h6>
                        <p className="card-text text-muted">{newsData.description?newsData.description.split(" ").slice(0,5).join(" "):" Lorem ipsum dolor sit amet"}</p>
                    </div>
                    <div className={`card-footer ${cardStyle.cardFooter}`}>
                        <small className="text-body-secondary"><span>News Date: </span>{newsData.publishedAt?.split("T")[0]}</small>
                    </div>
                </div>
            </Link>
        </div>
    )
}
