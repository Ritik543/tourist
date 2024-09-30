import { useState } from "react";
import './Card.css'

function Card({id ,image ,info,price,name,removeTour}){

const [readmore ,setReadmore] = useState(false);
const description =   readmore ?info:`${info.substring(0,200)}....`;

function readmoreHandler(){
    setReadmore(!readmore);
}

    return(
        <>
        <div className="card">
            <img  alt =" img" src={image} className="image" />
            <div className="tours-detail">
                <h4 className="tours-price"> <pre> ₹{price}</pre></h4>
                <h4 className="tours-name"> <pre>  {name}</pre></h4>
            </div>
            <div className="description">
                {description}
                <span className="read-more" onClick = {readmoreHandler}>
                    {readmore? "Read Less" : "Read More"}
                </span>
            </div>
        
        <button className="btn-red" onClick={() => removeTour(id)}>Not Intrested</button>
        </div>
        </>
    )
}
export default Card;