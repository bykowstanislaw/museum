import React from "react";
import './explore.css';

const Explore = () =>{


    return(
        <section className="explore" id="Explore">
            <div className="explore__wrapper">
                <div className="explore__main">
                    <div className="explore__text">
                        <h3 className="text__tittle">PICTURE EXPLORE</h3>
                        <p className="text__small">Las Meninas is a 1656 painting by Diego Velázquez, the leading artist of the Spanish Golden Age.</p>
                        <p className="text__small">It was cleaned in 1984 to remove a "yellow veil" of dust that had gathered since the previous restoration in the 19th century.</p>
                        <p className="text__small">The cleaning provoked furious protests, not because the picture had been damaged in any way, but because it looked different.</p>
                    </div>
                    <div className="explore__pic"><img className="ep" src="images/explore.png" alt="idk"></img>
                   
                    <img className="explore__kontrast" src="/images/contrast.png" alt='gg'></img>
                    <img className="explore__slider" src="/images/slider.png" alt='gg'></img></div>
                </div>
            </div>
        </section>
    )
}
export default Explore