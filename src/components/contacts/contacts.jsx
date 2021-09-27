import React from "react";
import './contacts.css'

const Contacts = () =>{
    

    return (<section className="contacts" id="Contacts">
            <div className="contacts__wrapper">
            <div className="contacts__head">
                Contacts
            </div>
            <div className="contacts__block">
                <div className="block__adress">
                    <div className="adress__ttl">Palais Royal <br/> Musee du Louvre</div>
                    <div className="adress__small">75001 Paris, France</div>
                    <div className="adress__small">phone: +33(0) 1 40 20 50 50</div>
                    <div className="adress__small">mail: info@louvre.fr</div>
                </div>
                <div className="block__map">
                    <img src="/images/map.png" alt="" />
                </div>
            </div>
            </div>
         </section>)

}

export default Contacts