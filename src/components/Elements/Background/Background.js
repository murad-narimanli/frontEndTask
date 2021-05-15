import React from 'react';
import Images from "../../../assets/img/Images/Images";

const Background = ({height, src})  => {
    return (
        <div className={'w-100 background'} style={{height}}>
            <img className={'w-100 h-100'} src={src} alt=""/>
            <img className={'mute'} src={Images.mute} alt=""/>
        </div>
    );
}


export default Background;
