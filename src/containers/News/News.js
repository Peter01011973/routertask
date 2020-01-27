import React from 'react';
import image1 from '../../assets/images/1.png';
import image2 from '../../assets/images/2.png';
import './News.css';

const News = () => {
    return (
        <div className='news'>
            <div className='news__container'>
                <img className='news__container__image' src={image1} alt='' />
                <img className='news__container__image' src={image2} alt='' />
            </div>
            <h1>Tasty burgers is the key of healthy life!!!</h1>
        </div>
    )
}

export default News
