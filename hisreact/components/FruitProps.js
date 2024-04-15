import React from 'react';
import heart from '../images/heart.svg';
import like from '../images/like.svg';
import SupplierProps from './SupplierProps'

const FruitProps=(props)=>{
    return(
        <div>
            <img src={props.fruit} className="fruit-img" />
            <div>
                <img src={heart} className="fruit-svg"/>
                <span>{props.heart}</span>
                <span>{props.word}</span>

                <img src={like} className="fruit-svg"/>
                <span>售價每{props.price}</span>
                <p>{props.desc}</p>
                <SupplierProps id={1} name='台灣好農' address="高雄市中山路10000號" tel='1234567'/>
            </div>
        </div>
    )
};
export default FruitProps;