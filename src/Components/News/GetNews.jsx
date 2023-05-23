import React, { useMemo, useState } from 'react'
import newsStyle from './news.module.css'
import { useEffect } from 'react';
import axios from 'axios';
import $ from "jquery"
import Card from '../Card/Card';
import Loading from '../Loading/Loading';
import { Helmet } from 'react-helmet';


export default function GetNews({ countryID }) {
    const [dataResult, setDataResult] = useState([]);

    async function getCountryNews() {
        const { data } = await axios.get(`https://newsapi.org/v2/top-headlines?country=${countryID}&category=business&apiKey=7e5dce2021724b9f8a7e66ae48765438`)
        setDataResult(data.articles);
    }
    useEffect(() => {
        $('.sideBar').css("height", "100%");
        getCountryNews();
    }, [countryID])



    return <>
        <Helmet>
            <title>News Page</title>
        </Helmet>
        {
            dataResult.length > 0 ?
                dataResult.map((news, index) =>
                    <Card newsData={news} key={index} />)
                : <div className='col-md-12'>
                    <Loading />
                </div>
        }


    </>
}
