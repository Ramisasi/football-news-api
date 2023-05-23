import React, { useEffect, useRef } from 'react'
import videoStyle from "./Video.module.css"
import videoTrailer from "../../Videos/Football-Trailer.mp4"
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedVideo, lazyload } from '@cloudinary/react';


import { videoCodec } from "@cloudinary/url-gen/actions/transcode";
import { auto, vp9 } from '@cloudinary/url-gen/qualifiers/videoCodec';

import $ from 'jquery'

export default function Video() {
    let mutedState = true;
    const cloudinaryRef = useRef();
    const homeVideo = useRef();
    // function getViedo() {
    //     const cld = new Cloudinary({
    //         cloud: {
    //             cloudName: 'ramisasi'
    //         },
    //         url: {
    //             analytics: false
    //         }
    //     });
    //     const myVideo = cld.video('Videos/FootballApi/Football-Trailer_ecl70i');
    //     return myVideo;
    // }
    // const sources = [
    //     {
    //       type: 'mp4',
    //       codecs: ['avc1.4d002a'],
    //       transcode: videoCodec(auto())
    //     },
    //     {
    //       type: 'webm',
    //       codecs: ['vp8', 'vorbis'],
    //       transcode: videoCodec(vp9())
    //     }];
    useEffect(() => {
        var GetVideoTrailer = $(homeVideo.current)[0];
        var dataSection = $("#dataSection").offset().top;
        $(window).on("scroll", function () {
            var scroll = $(this).scrollTop();
            scroll <= dataSection && mutedState == false ? GetVideoTrailer.muted = false : GetVideoTrailer.muted = true;
        })
        $("#volumeIcon").animate({ bottom: "30px" }, 2000);
    }, [])
    function changeState() {
        if (homeVideo.current.muted) {
            homeVideo.current.muted = false;
            console.log(homeVideo.current.muted);
            mutedState = false;
        }
        else {
            homeVideo.current.muted = true;
            mutedState = true;
        }
        $("#volumeIcon").toggleClass("fa-solid fa-volume-xmark").toggleClass("fa-solid fa-volume-high");
    }
    return (
        <div className={videoStyle.home}>
            {/* <AdvancedVideo className={videoStyle.homeVi} ref={homeVideo} cldVid={getViedo()} controls sources={sources} autoPlay loop muted /> */}

            <video className={videoStyle.homeVi} ref={homeVideo} src={videoTrailer} autoPlay muted loop></video>
            <div className={videoStyle.homeLayout}>
                <i id='volumeIcon' className="fa-solid fa-volume-xmark" onClick={changeState}></i>
            </div>
        </div>
    )
}
