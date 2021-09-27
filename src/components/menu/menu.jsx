import React from "react";
import './menu.css'

const Menu = () => {

    const MENU_ITEMS = ['Visiting', 'Explore', 'Video', 'Gallery', 'Tickets', 'Contacts'];

    return (
        <header className="welcome">
            <div className='wrapper'>
            <div className="welcome__menu">
                <div className="menu__name">
                    <img className="name-logo" src='/images/logo.png' alt='bad'></img>
                    <div className="name-tittle">LOUVRE</div>

                </div>
                <nav className="menu__navigate">
                    {
                        MENU_ITEMS.map((el) => {
                            return <a className='navigate-item' href={"#"+el}> <div className='navigate-item'>{el}</div></a>
                        })
                    }
                </nav>
            </div>
            <div className="welcome__image">
                <div className="image__descr">
                    <div className="descr-tittle">WELCOME <br/> TO THE LOUVRE</div>
                    <div className="descr-about">From the castle to the museum</div> 
                    <div className="image__button">
                    <button className="button-style">Discover the Louvre</button>
                </div>
                </div>
                <div className="image__picture">
                    <img className="picture-monalisa" src='/images/monalisa.png' alt='gg'></img>
                    <div className="picture-pagination">
                        <div className="pagination__quan">01 | 05 </div>
                        <div className='pagination__page'>
                            <img  src="/images/kvadrat.png" alt='gg'></img>
                            <img className="page-item" src="/images/kvadrat.png" alt='gg'></img>
                            <img className="page-item" src="/images/kvadrat.png" alt='gg'></img>
                            <img className="page-item" src="/images/kvadrat.png" alt='gg'></img>
                            <img className="page-item" src="/images/kvadrat.png" alt='gg'></img>
                            </div>
                        <div className="pagination__nav" >
                            <img src="/images/left.png" className="nav-left" alt='gg'></img>
                            <img src="/images/left.png" className="nav-right" alt='gg'></img>
                        </div>
                    </div>
                </div>
                

            </div>
            </div>
        </header>
    )
}

export default Menu