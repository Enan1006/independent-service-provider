import React from "react";

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './Banner.css';
import './animation-slider.css';
import banner1 from '../../../Images/banner/banner-1.jpg';
import banner2 from '../../../Images/banner/banner-2.jpg';
import banner3 from '../../../Images/banner/banner-3.jpg';


const Banner = () => {
    const content = [
        {
            title: "Vulputate Mollis Ultricies Fermentum Parturient",
            description:
                "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
            button: "Read More",
            image: "https://i.ibb.co/r69wTpM/banner-1.jpg",
            user: "Luan Gjokaj",

        },
        {
            title: "Tortor Dapibus Commodo Aenean Quam",
            description:
                "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
            button: "Discover",
            image: "https://i.ibb.co/jVkb3G0/banner-2.jpg",
            user: "Erich Behrens",
        },
        {
            title: "Phasellus volutpat metus",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
            button: "Buy now",
            image: "https://i.ibb.co/SK5GyxX/banner-3.jpg",
            user: "Bruno Vizovskyy",
        }
    ];
    return (
        <div>


            <Slider className="slider-wrapper">
                {content.map((item, index) => (
                    <div
                        key={index}
                        className="slider-content"
                        style={{ background: `url('${item.image}') no-repeat center center` }}
                    >
                        <div className="inner">
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                        </div>

                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Banner;