import React from "react";
import { useState } from "react";
import { GrPrevious } from "react-icons/gr";
import { FcNext } from "react-icons/fc";

function Slider() {
    const [number, setNumber] = useState(1)

    const images = [
        { id: 1, src: 'https://cdn.pixabay.com/photo/2017/12/11/15/34/lion-3012515_1280.jpg' },
        { id: 2, src: 'https://cdn.pixabay.com/photo/2024/02/12/14/56/woman-8568693_640.jpg' },
        { id: 3, src: 'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg' },
        { id: 4, src: 'https://cdn.pixabay.com/photo/2024/01/24/11/38/winter-8529426_640.jpg' },
        { id: 5, src: 'https://cdn.pixabay.com/photo/2018/06/25/14/27/background-image-3497025_640.jpg' },

    ];

    const handleNext = () => {
        if (number === images.length - 1) {
            setNumber(0)
        }
        else {
            setNumber(number + 1)
        }
    }

    const handlePrev = () => {
        if (number === 0) {
            setNumber(images.length - 1)
        }
        else {
            setNumber(number - 1)
        }
    }

    return (
        <div className="slider">
            <div className="number-display"><img src={images[number].src} /></div>
            <button onClick={handleNext}><FcNext /></button><br /><br />
            <button onClick={handlePrev}><GrPrevious /></button>
        </div>
    )
}

export default Slider;