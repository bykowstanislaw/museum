import React from "react";
import './tour.css'


const Tour = () =>{

    const TOUR_NAMES=[
        {
            pic:'/images/royal.jpg',
            tittle:'royal place'
        },
        {
            pic:'/images/denon.jpg',
            tittle:'denon wing'
        },
        {
            pic:'/images/colonnade.jpg',
            tittle:'colonnade perrault'
        },
        {
            pic:'/images/greek.jpg',
            tittle:'greek hall'
        },
        {
            pic:'/images/mona.jpg',
            tittle:'mona lisa'
        },
        {
            pic:'/images/night.jpg',
            tittle:'night palace'
        },
    ]

    return(
        <section className="tour" id="Visiting">
            <div className="virtual">
                <h2 className="virtual__name">VIRTUAL TOUR</h2>
                <div className="virtual__items">
                    {
                        TOUR_NAMES.map((el)=>{
                            return (<div className="item">
                                <div className="item__pic"><img src ={el.pic} alt="idk"></img></div>
                                <div className="item__name">{el.tittle.toUpperCase()}</div>
                                <div className="item__360">360 Virtual Tour</div>
                                <div className='item__google'>Google Street Panorama View</div>

                            </div>)
                        })
                    }

                </div>
            </div>


        </section>
    )
}


export default Tour