import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'
const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-lg" />
                <div className="absolute h-full rounded-lg flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]  left-0 top-0">
                    <div className='w-1/2 text-white space-y-7 pl-12'>
                        <h2 className='text-5xl  font-bold'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-active btn-primary mr-5">Discover More</button>
                            <button className="btn btn-outline hover:bg-transparent text-white">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle me-5">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-orange-500 hover:bg-orange-600 border-0 text-orange-50">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full rounded-lg" />
                <div className="absolute h-full rounded-lg flex items-center bg-gradient-to-r from-[#0f0f0f] to-[rgba(21, 21, 21, 0.00) 100%)]  left-0 top-0">
                    <div className='w-1/2 text-white space-y-7 pl-12'>
                        <h2 className='text-5xl  font-bold'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-active btn-primary mr-5">Discover More</button>
                            <button className="btn btn-outline hover:bg-transparent text-white">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle me-5">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-orange-500 hover:bg-orange-600 border-0 text-orange-50">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full rounded-lg" />
                <div className="absolute h-full rounded-lg flex items-center bg-gradient-to-r from-[#0f0f0f] to-[rgba(21, 21, 21, 0.00) 100%)]  left-0 top-0">
                    <div className='w-1/2 text-white space-y-7 pl-12'>
                        <h2 className='text-5xl  font-bold'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-active btn-primary mr-5">Discover More</button>
                            <button className="btn btn-outline hover:bg-transparent text-white">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle me-5">❮</a>
                    <a href="#slide4" className="btn btn-circle bg-orange-500 hover:bg-orange-600 border-0 text-orange-50">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full rounded-lg" />
                <div className="absolute h-full rounded-lg flex items-center bg-gradient-to-r from-[#0f0f0f] to-[rgba(21, 21, 21, 0.00) 100%)]  left-0 top-0">
                    <div className='w-1/2 text-white space-y-7 pl-12'>
                        <h2 className='text-5xl  font-bold'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-active btn-primary mr-5">Discover More</button>
                            <button className="btn btn-outline hover:bg-transparent text-white">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle me-5">❮</a>
                    <a href="#slide5" className="btn btn-circle bg-orange-500 hover:bg-orange-600 border-0 text-orange-50">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={img5} className="w-full rounded-lg" />
                <div className="absolute h-full rounded-lg flex items-center bg-gradient-to-r from-[#0f0f0f] to-[rgba(21, 21, 21, 0.00) 100%)]  left-0 top-0">
                    <div className='w-1/2 text-white space-y-7 pl-12'>
                        <h2 className='text-5xl  font-bold'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-active btn-primary mr-5">Discover More</button>
                            <button className="btn btn-outline hover:bg-transparent text-white">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle me-5">❮</a>
                    <a href="#slide6" className="btn btn-circle bg-orange-500 hover:bg-orange-600 border-0 text-orange-50">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src={img6} className="w-full rounded-lg" />
                <div className="absolute h-full  flex rounded-lg items-center bg-gradient-to-r from-[#0f0f0f] to-[rgba(21, 21, 21, 0.00) 100%)]  left-0 top-0">
                    <div className='w-1/2 text-white space-y-7 pl-12'>
                        <h2 className='text-5xl  font-bold'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-active btn-primary mr-5">Discover More</button>
                            <button className="btn btn-outline hover:bg-transparent text-white">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide5" className="btn btn-circle me-5">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-orange-500 hover:bg-orange-600 border-0 text-orange-50">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;