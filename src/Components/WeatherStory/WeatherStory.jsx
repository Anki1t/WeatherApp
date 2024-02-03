import './WeatherStory.css'
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import like_icon from '../Assets/like_icon.gif'
import arrow_icon from '../Assets/arrow_icon.gif'
import 'swiper/css';

const WeatherStory = () => {
  const [stories, setStories] = useState([]);
  const [newStory, setNewStory] = useState('');

  const handleShareStory = () => {
    if (newStory.trim() !== '') {
      setStories([...stories, newStory]);
      setNewStory('');
    }
  };

  return (
    <div className="container">
      <h2>Weather Stories</h2>
      <ul>
        {stories.map((story, index) => (
          <li key={index}>{story}</li>
        ))}
      </ul>
      <div className="description-box">
      <textarea
        placeholder="Share your weather-related story..."
        value={newStory}
        onChange={(e) => setNewStory(e.target.value)}
      />
      </div>
      <button onClick={handleShareStory} className='share-button'>Share</button>
      <div className="trending">
        <h3>#Trending Stories</h3>
      </div>
      <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
      <div className="story-1">
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Asperiores nam ad architecto sit at, 
            deleniti numquam minima ipsum autem commodi labore voluptate aut magnam. 
            Fuga sequi tempora ipsum distinctio corrupti!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Sit nobis sequi consectetur recusandae esse impedit qui veniam adipisci mollitia, totam nisi 
            a sint quod cumque dicta quas aliquid. Nihil, quia?
        </p>
        <img src={like_icon} alt="" />
      </div>
      <div className="arrow-icon">
      <img src={arrow_icon} alt=""/>
      <p className='slide'>Slide</p>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="story-2">
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Asperiores nam ad architecto sit at, 
            deleniti numquam minima ipsum autem commodi labore voluptate aut magnam. 
            Fuga sequi tempora ipsum distinctio corrupti!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Non illum similique officiis reprehenderit officia optio tenetur, 
            quia quidem laborum. Deleniti, sint. Nesciunt eaque libero accusantium ipsa dolor tempore,
             molestias laudantium.
        </p>
        <img src={like_icon} alt="" />
      </div>
      <div className="arrow-icon">
      <img src={arrow_icon} alt=""/>
      <p className='slide'>Slide</p>
      </div>  
      </SwiperSlide>
      <SwiperSlide>
      <div className="story-2">
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Asperiores nam ad architecto sit at, 
            deleniti numquam minima ipsum autem commodi labore voluptate aut magnam. 
            Fuga sequi tempora ipsum distinctio corrupti!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Id aut in quod doloremque officia doloribus nesciunt totam impedit porro cumque consequuntur, 
            eius dignissimos, dolor molestias dolorum harum minus! At, laboriosam?
        </p>
        <img src={like_icon} alt="" />
      </div> 
      <div className="arrow-icon">
      <img src={arrow_icon} alt=""/>
      <p className='slide'>Slide</p>
      </div>  
      </SwiperSlide>
      <SwiperSlide>
      <div className="story-2">
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Asperiores nam ad architecto sit at, 
            deleniti numquam minima ipsum autem commodi labore voluptate aut magnam. 
            Fuga sequi tempora ipsum distinctio corrupti!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Quos maiores temporibus sunt beatae blanditiis at vel, 
            tempora necessitatibus molestias incidunt nulla doloribus quam saepe debitis reiciendis dolorum! Modi, 
            accusantium blanditiis!
        </p>
        <img src={like_icon} alt="" />
      </div>   
      </SwiperSlide>
      ...
    </Swiper> 
    </div>
  );
};

export default WeatherStory;
