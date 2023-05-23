import React, {useEffect, useMemo, useState } from 'react'
import useCountries from '../../Hooks/useCountries'
import newsStyle from './news.module.css'
import $ from 'jquery'
import GetNews from './GetNews';
import { useLocation } from 'react-router-dom';
import getNavBar from '../../Hooks/useNavBar';

export default function News() {

  const [countriesView, setCountriesView] = useState([0, 5]);
  const [countryID, setCountryID] = useState('');
  const countries = useCountries();
  let location = useLocation();
  const NavBar =  getNavBar(location.pathname);
  useEffect(()=>{
    NavBar()
    }
  ,[])

  function slideDown(event) {
    $(`.${event.target.id}`).slideToggle(500)
    $("#rightNavBarItem").children("div").not(`.${event.target.id}`).slideUp(500)
  }
  function rightNavBar() {
    const itemWidth = $("#rightNavBarItem").outerWidth();
    if ($("#rightNavBar").css("right") == "0px") {
      $("#rightNavBar").animate({ right: `-${itemWidth}` }, 1000, function () {
        $("#rightNavBarIcon").removeClass("fa-angles-right").addClass("fa-angles-left")
      });
    }
    else {
      $("#rightNavBar").animate({ right: "0" }, 1000, function () {
        $("#rightNavBarIcon").removeClass("fa-angles-left").addClass("fa-angles-right")
      });
    }
  }
  function getMoreCountries() {
    if (countriesView[0] >= 0 && countriesView[1] >= 5 && countriesView[1] <= countries.length) {
      let startCount = countriesView[1]
      let endCount = countriesView[1] + 5
      setCountriesView([startCount, endCount])
    }
  }
  function getLessCountries() {
    if (countriesView[0] > 0 && countriesView[1] > 5 && countriesView[1]) {
      let startCount = countriesView[0] - 5
      let endCount = countriesView[1] - 5
      setCountriesView([startCount, endCount])
    }
  }

  const getCountryNews = useMemo(() => {
    return countryID != '' ? <GetNews countryID={countryID} /> : ""
  }, [countryID])
  return <>
    <div className='container'>
      <div className={`${newsStyle.sideBar}`}>
        <div className='w-100'>
          {
            getCountryNews ?
              <div className="row row-cols-1 row-cols-md-4 g-4 ">
                {
                  getCountryNews
                }
              </div> :
              <div className={newsStyle.sideBarHeight}>
                <h4> Please chose country from right list <i className="fa-regular fa-hand-point-right"></i></h4>
              </div>
          }
        </div>


      </div>

    </div>
    <div className={newsStyle.rightNavBar} id='rightNavBar'>
      <div className={newsStyle.rightNavBarButton}>
        <i id='rightNavBarIcon' className="fa-solid fa-angles-right" onClick={rightNavBar}></i>
      </div>
      <div id='rightNavBarItem' className={newsStyle.rightNavBarItem}>
        <button className='border-0 bg-transparent text-light fs-4' id='countries' onClick={slideDown}>Countries</button>
        <div className={`countries ${newsStyle.slid}`}>
          <div>
            <ul className={newsStyle.countryUl}>
              {
                countries.slice(countriesView[0], countriesView[1]).map((country) =>
                  <li key={country.Code} id={country.Code} className={newsStyle.countryLi} onClick={e => setCountryID(e.target.id)}>{country.Name}</li>
                )
              }
            </ul>
          </div>
          <div className='text-center'>
            <button className='bg-transparent border-0' onClick={getLessCountries}><i className="fa-solid fa-angles-left fs-3 text-light"></i></button>
            <button className='bg-transparent border-0' onClick={getMoreCountries}><i className="fa-solid fa-angles-right fs-3 text-light"></i></button>
          </div>
        </div>
      </div>

    </div>
  </>
}
