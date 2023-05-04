import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-full mt-10">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://t4.ftcdn.net/jpg/02/44/71/07/240_F_244710705_kJbRGNfdwXq4zfikaaXE77iQCAHsQjt0.jpg" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
          <div className="absolute text-white font-bold  top-1/4 left-1/2 transform -translate-x-1/2">
          <h1 className='font-serif text-2xl lg:text-4xl '>Welcome To</h1>
          <h2 className='font-serif text-2xl lg:text-4xl'>FlavorLab</h2>
        </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://t3.ftcdn.net/jpg/02/54/20/88/240_F_254208823_NXcV5RCcWJ1vgSuWjhPqIpPmqXIyBrDO.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
          <div className="absolute text-purple-400 font-bold  top-1/4 left-1/2 transform -translate-x-1/2">
          <h1 className='font-serif text-xl lg:text-4xl '>A place full to talented master chef</h1>
          <h2 className='font-serif text-xl lg:text-4xl'>And their excellent recipes</h2>
        </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://as2.ftcdn.net/v2/jpg/02/43/11/95/1000_F_243119507_sFqCazZfPjdC0EgHLJZ7ByUUJLDmweLf.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
          <div className="absolute text-white font-bold  top-1/4 left-1/2 transform -translate-x-1/2">
          <h1 className='font-serif text-xl lg:text-4xl '>Explore and find and cook</h1>
          <h2 className='font-serif text-xl lg:text-4xl'>Your favorite dishes with us</h2>
        </div>
        </div> 
      </div>
    );
};

export default Banner;