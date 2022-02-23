import React from 'react'
import CardItem from './CardItem'


function Cards() {
  return (
    <div className='cards'>
        <h1>The 80's look</h1>
        
        <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
                <CardItem src="images/metboys.jpg"
                text="text1"
                label="label1"
                path="/services"
                />
                <CardItem src="images/metallica-1985.jpg"
                text="text1"
                label="label1"
                path="/services"
                />
                <CardItem src="images/metallica-1986.jpg"
                text="text1"
                label="label1"
                path="/services"
                />
                <CardItem src="images/img-2.jpg"
                text="text1"
                label="label1"
                path="/services"
                />
            </ul>
        </div>
        </div>
        

    </div>
  )
}

export default Cards