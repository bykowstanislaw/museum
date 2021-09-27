import React from "react";
import './video.css'


const Video = () => {


    return (<section className='video' id="Video">
             <div className='video__wrapper'>
                <div className="video__headline">
                    <h3 className="headline__main">VIDEO JOURNEY</h3>
                    <div className='headline__descr'>Enter and visit one of the most famous museums in the world and enjoy<br /> masterpieces such as Mona Lisa or Hammurabi's Code</div>
                </div>
                <div className="video__play">
                    <div className="play">
                        <img src="/images/preset.png" alt='gg' className="play__picture"></img>
                        <img src="/images/tre.png" alt="gg"  className="play__tre"/>
                        <img src="/images/krug.png" alt="gg"  className="play__krug"/>
                    </div>
                    <div className="play__range">
                        <img src="/images/vector.png" alt="gg" />
                        <input type="range" className="playback" />
                        <img src="/images/volume.png" alt="gg" />
                        <input type="range" className="volume" />
                        <img src="/images/group.png" alt="gg" />
                        
                    </div>
                </div>
            </div>

             </section>)
}

export default Video