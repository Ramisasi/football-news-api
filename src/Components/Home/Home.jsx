import React, { useEffect, useLayoutEffect, useState } from 'react'
import Slider from '../Slider/Slider';
import homeStyle from './Home.module.css'
import { getDirectory } from '../Images/Images'
import Card from '../Card/Card';
import useUrlRoute from '../../Hooks/useUrlRoute';
import Loading from '../Loading/Loading';
import { Helmet } from 'react-helmet';
import $ from 'jquery'
import Video from '../Video/Video';
import About from '../About/About';
import { useDispatch } from 'react-redux';
import getNavBar from '../../Hooks/useNavBar';
import { useLocation } from 'react-router-dom';

export default function Home() {

  let { getTopLive } = useUrlRoute("https://newsapi.org/v2/top-headlines?category=sports&apiKey=7e5dce2021724b9f8a7e66ae48765438");
  const [topLiveView, setTopLiveView] = useState([0, 6]);
  let [mediaView, getMediaView] = useState('video');
  let [imagesArray, setImagesArray] = useState([]);
  let location = useLocation();
  const NavBar = getNavBar(location.pathname);



  useEffect(() => {
    NavBar()
    if (imagesArray.length <= 0)
      setImagesArray(getDirectory("Slider"))
  }, [])

  function getMediaType(event) {
    if (event.target.id == "video") {
      if (mediaView != "video") {
        getMediaView("video")
        $("#mediaSlide").fadeOut(50).fadeIn(1000)
      }
    }
    else {
      if (mediaView != "image") {
        getMediaView("image")
        $("#mediaSlide").fadeOut(50).fadeIn(1000)
      }
    }
  }
  function getMoreTopLiveView() {
    if (topLiveView[0] >= 0 && topLiveView[1] >= 6 && topLiveView[1] <= getTopLive.length) {
      let startCount = topLiveView[1]
      let endCount = topLiveView[1] + 6
      setTopLiveView([startCount, endCount])
    }
  }
  function getLessTopLiveView() {
    if (topLiveView[0] > 0 && topLiveView[1] > 6 && topLiveView[1]) {
      let startCount = topLiveView[0] - 6
      let endCount = topLiveView[1] - 6
      setTopLiveView([startCount, endCount])
    }
  }

  return <>
    <Helmet>
      <title>Football News</title>
    </Helmet>
    <div className={homeStyle.mediaSection}>
      <div className={homeStyle.mediaSlide} id='mediaSlide'>
        {mediaView == "video" ? <Video /> : <Slider imageArray={imagesArray} />}
      </div>
      <div className={homeStyle.mediaType}>
        <i className="fa-solid fa-video mb-4" id='video' onClick={getMediaType}></i>
        <i className="fa-regular fa-image" id='images' onClick={getMediaType}></i>
      </div>
    </div>
    <section id='aboutSection' className='container'>
      <About />
    </section>

    <section id='dataSection' className='pt-5 pb-5 d-flex flex-column align-items-center bg-light'>
      <div className='p-5'>
        <h2 className={homeStyle.dataSectionTitle}>Live News</h2>
      </div>
      <div className='pt-2 pb-2 w-75'>
        <div className="row row-cols-1 row-cols-md-3 g-4 ">
          {
            getTopLive.length > 0 ?
              getTopLive.slice(topLiveView[0], topLiveView[1]).map((item, index) => <Card newsData={item} key={index} />)
              : <div className='col-md-12'>
                <Loading />
              </div>
          }
        </div>
      </div>
      <div className='mt-4'>
        <i className={`fa-solid fa-angles-left fs-3 pe-4  ${homeStyle.SliderSectionButton}`} onClick={getLessTopLiveView}></i>
        <i className={`fa-solid fa-angles-right fs-3  ${homeStyle.SliderSectionButton}`} onClick={getMoreTopLiveView}></i>
      </div>
    </section>
  </>

}
