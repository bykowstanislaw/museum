import React from "react";
import './gallery.css'

const Gallery = () =>{



    return(<section className="gallery" id="Gallery">
            <div className="gallery__wrapper">
                <div className="gallery__headline"> ART GALLERY</div>
                <div className="gallery__pics">
                    <img src="/images/2.png" alt="gg" className="mt125" />
                    <img src="/images/1.png" alt="gg"  className="first mt75 plpr25"/>
                    <img src="/images/7.png" alt="gg" className="mt125" />
            
                    <img src="/images/9.png" alt="gg" className="pt24" />
                    <img src="/images/8.png" alt="gg" className='plpr25 pt24 five' />
                    <img src="/images/10.png" alt="gg"  className="first pt24 six"/>
                    <img src="/images/4.png" alt="gg"  className="first plpr25 pt24 seven" />
                    <img src="/images/3.png" alt="gg" className="eight"  />
                    
                    <img src="/images/12.png" alt="gg"  className="first pt24 nine"/>
                    <div className='ten'></div>
                   
                     {/* <img src="/images/5.png" alt="gg" className=""/>
                    <img src="/images/6.png" alt="gg" />
                    
                   
                    
                    
                    <img src="/images/11.png" alt="gg" />  */}
                    
                     
                </div>
            </div>
            </section>)
}

export default Gallery