import React from 'react'
import aboutStyle from './About.module.css';
import { Link } from 'react-router-dom';
import AboutBackground from "../../image/AboutBackground.jpg"

export default function About() {
  return <>
    <div className="row p-5 mt-5">
      <div className='clo-md-12 text-center mb-4'>
        <h2 className={aboutStyle.aboutTitle} >About Us</h2>
      </div>
      <div className="col-md-5 p-5 pe-0 d-flex justify-content-center align-items-start" >
        <div className={aboutStyle.AboutImage}>
          <div className={aboutStyle.imageLayout}>
            <div className={aboutStyle.imageLayoutAffect}></div>
          </div>
            <img src={AboutBackground} alt='' className={aboutStyle.sss} />
        </div>

      </div>
      <div className="col-md-7 p-5">
        <h2>Football News</h2>
        <p>We offer you the latest football news in the world, you can get news by any country</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates placeat, id porro delectus voluptatum, aut hic fugiat optio sit natus quam ipsum, perferendis modi! Iste, libero? Assumenda ad, nostrum ullam magni excepturi nemo mollitia numquam odio veniam saepe dicta natus, dolorum omnis possimus voluptates, ea quo enim accusantium quaerat maxime laudantium! Aut delectus, officiis veritatis impedit cumque accusamus, excepturi corporis eaque consequatur perferendis totam necessitatibus voluptatibus a molestiae tempora accusantium mollitia suscipit ratione, sit vero sint. Perferendis minima necessitatibus saepe exercitationem, sint molestiae, ab sapiente ipsum delectus rem, nulla dicta nobis numquam aut. Possimus est reiciendis cum sed nemo suscipit corporis. Optio doloremque quod hic fuga quae non quibusdam maiores sed, voluptatem repudiandae! Quisquam corporis reprehenderit dignissimos atque ab ipsam. Ipsum cum maiores eius, et magni ullam, consequuntur nisi quibusdam nulla quas temporibus dolor repellendus enim, officiis mollitia numquam explicabo minus laborum obcaecati? Porro voluptatibus, itaque dolore vero voluptatum temporibus!</p>

        <p>Design by<Link to="/AboutEngineer" className={aboutStyle.aboutLink}> En, Rami Abouagela</Link></p>
        <p>En, Using <Link target='_blank' to='https://newsapi.org/' className={aboutStyle.aboutLink}>News Api </Link></p>
      </div>

    </div>
    {/* <div className={`${aboutStyle.aboutDiv} d-flex flex-column align-items-center justify-content-center`}>
      <h1>The Football News </h1>
      <div className='w-50 text-center d-flex flex-column align-items-center'>
        <p>We offer you the latest football news in the world, you can get news by country, competitions, teams, players, Standings and more off categories</p>
       

        <div className={`${aboutStyle.aboutIcons} w-25 d-flex justify-content-evenly`}>
          <Link target='_blank' to='https://www.linkedin.com/in/rami-abuagela-ba09aa14b/'><i className="fa-brands fa-linkedin"></i></Link>
          <Link target='_blank' to='https://www.facebook.com/rami.abuojaylah/'><i className="fa-brands fa-square-facebook"></i></Link>
          <Link target='_blank' to='https://github.com/Ramisasi'><i className="fa-brands fa-square-github"></i></Link>
          <Link target='_blank' to='https://twitter.com/RamiAbuagela'><i className="fa-brands fa-square-twitter"></i></Link>
        </div>
      </div>
    </div> */}
  </>
}
