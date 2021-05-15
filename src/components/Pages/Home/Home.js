import React, {useEffect , useRef} from 'react';
import {connect} from "react-redux";
import {getPhotos} from "../../../redux/actions";
import Slider from "react-slick";
import Images from "../../../assets/img/Images/Images";
import Post from "../../Elements/Post/Post";
function Home(props) {
    const {getPhotos , photos} = props
    useEffect(()=>{
        if (photos.length === 0){
            getPhotos()
        }
    })
    const settings = {
        centerMode: true,
        speed: 500,
        dots: false,
        autoplay:true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        cssEase: 'linear',
        swipe: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    centerMode: false,
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
        ],
    };

    const pageslider = useRef();
    const next = () => {
        pageslider.current.slickNext();
    }

    return (
        <div className={'slides'}>
            {photos.length &&
            <Slider
                className='mainslider mt-3 animated zoomIn'
                ref={slider => (pageslider.current = slider)}
                {...settings}
            >
                {photos.map((c, index, cs) => {
                    return (
                        <Post
                            key={index}
                            src={c.download_url}
                            name={c.author}
                        />
                    )
                })}
            </Slider>
            }
            <div onClick={next} className="next">
                <img src={Images.next} alt=""/>
            </div>
        </div>
    );
}

const mapStateToProps = ({photos}) => {
    return {photos}
}

export default connect(mapStateToProps , {getPhotos})(Home);

