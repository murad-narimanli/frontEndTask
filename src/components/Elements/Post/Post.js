import React from 'react';
import Images from "../../../assets/img/Images/Images";

const Post = ({src , name}) => {
    return (
        <div className="px-2">
            <div  className={'post-card'}>
                <div className="post-image">
                    <img src={src} alt=""/>
                </div>
                <div className="post-data">
                    <div className="post-name">
                        <p className={'text-white'}>{name}</p>
                        <p className={'text-white'}>2018 - 1h 24m</p>
                    </div>
                    <div className="post-icons">
                        <img src={Images.like} alt=""/>
                        <img src={Images.play} alt=""/>
                        <img src={Images.dislike} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Post;
