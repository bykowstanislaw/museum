import React,{useState} from "react";
import './tickets.css'


const Tickets = () =>{

const [counter,setCounter]=useState(1)
const [counterOld,setCounterOld]=useState(1)

const handleInrease =()=>{
    if (counter<20){
        setCounter(counter+1)
        
    }
    else {
        setCounter(counter+0)
    }   
    
}

const handleIncreaseOld=()=>{
    if (counterOld<20){
        setCounterOld(counterOld+1)
        
    }
    else {
        setCounterOld(counterOld+0)
    }   
    
}

const handleReduce=()=>{
    if(counter>1){
        setCounter(counter-1)
    }
}
const handleReduceOld=()=>{
    if(counterOld>1){
        setCounterOld(counterOld-1)
    }
}

    return(<section className="tickets" id="Tickets">
        <div className="tickets__wrapper">
            <div className="tickets__headline"> Buy tickets</div>
                <div className="tickets__page">
                    <div className="page__pic">
                        <img src="/images/tickets.png" alt="gg" />
                    </div>
                    <div className="page__type">
                        <div className="type__head">Ticket Type</div>
                        <div className="type">
                            <div className="type__check">
                            <input type="radio" id="scales" name="Permanent exhibition"className="check__radio" />
                            <label className="texts" for="scales">Permanent exhibition</label>
                            </div>
                            <div className="type__check">
                            <input type="radio" id="scales" name="Temporary exhibition"  className="check__radio"/>
                            <label className="texts" for="scales">Temporary exhibition</label>
                            </div>
                            <div className="type__check">
                            <input type="radio" id="scales" name="Combined Admission"  className="check__radio"/>
                            <label className="texts" for="scales">Combined Admission</label>
                            </div>
                            </div>
                    </div>
                    <div className="page__amount">
                        <div className="amount__head">Amount</div>
                        <div className="amount__basic">
                            <div className="basic__name">Basic 18+</div>
                            <div className="basic__counter">
                                <div onClick={handleReduce}>&#8211;</div>
                               <div className="counter__quan">{counter}</div>
                                <div onClick={handleInrease}>+</div>
                            </div>
                            <div className="old__name">Senior 65+</div>
                            <div className="basic__counter">
                                <div onClick={handleReduceOld}>&#8211;</div>
                               <div className="counter__quan">{counterOld}</div>
                                <div onClick={handleIncreaseOld}>+</div>
                            </div>
                        </div>
                        <div className="amount__price">
                            Total $220
                        </div>
                        <div className="amount__button"><button className="butt">Buy Now</button></div>
                    </div>
                </div>
        </div>

    </section>)
}

export default Tickets