import React from 'react'
import './footer.css'

const Footer = () =>{

    return(<footer className="footer">
        <footer className="footer__wrapper">
            <div className="footer__line">
            <div className="menu__name">
                    <img className="name-logo" src='/images/logo.png' alt='bad'></img>
                    <div className="name-tittle">LOUVRE</div>
            </div>
            <div className="line__six">
                <div className="six__parts">
                    <div className="part__one">Visiting</div>
                    <div className="part__two">Gallery</div>
                </div>
                <div className="six__parts">
                    <div className="part__one">Explore</div>
                    <div className="part__two">Tickets</div>
                </div>
                <div className="six__parts">
                    <div className="part__one">Video</div>
                    <div className="part__two">Contacts</div>
                </div>
            </div>
            <div className="footer__icons">
                <img src="/images/yt.png" alt="gg" className="icon" />
                <img src="/images/inst.png" alt="gg" className="icon" />
                <img src="/images/twitter.png" alt="gg" className="icon" />
                <img src="/images/face.png" alt="gg" className="icon" />
                <img src="/images/r.png" alt="gg" className="icon" />

            </div>

            </div>
        </footer>

    </footer>)
}

export default Footer