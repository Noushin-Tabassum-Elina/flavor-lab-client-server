import React from 'react';

const About = () => {
    return (
        <div className='flex flex-col justify-center'>
            <div>

                <div className='mx-28'>
                    <h1 className='text-4xl text-center text-black font-bold '>About Us</h1>
                    <p className=' mt-10'>This website is dedicated to food enthusiasts who want to discover and learn from professional chefs. Through this platform, users can explore different chefs' profiles, including their experience, specialties, and recipes. Users can also save their favorite chefs to their accounts and receive notifications about new recipes and cooking tips. The website's user-friendly interface and appealing design make it easy for users to navigate and find the information they need. Whether you are a seasoned cook or a beginner, this website has something to offer for everyone interested in the culinary arts. So why not join our community today and explore the world of professional cooking with us!</p>
                </div>
                <div>

                </div>
            </div>
            
            <div >

                <h1 className='text-center font-bold text-4xl mt-10'>People's Engagement in Our Website</h1>
                <div className="stats stats-vertical lg:stats-horizontal shadow flex justify-center items-center mt-10 mx-28">

                    <div className="stat">
                        <div className="stat-title">Visits</div>
                        <div className="stat-value">31K</div>
                        <div className="stat-desc">Jan 1st - May 1st</div>
                    </div>

                    <div className="stat">
                        <div className="stat-title">New Users</div>
                        <div className="stat-value">4,200</div>
                        <div className="stat-desc">↗︎ 400 (22%)</div>
                    </div>

                    <div className="stat">
                        <div className="stat-title">New Registers</div>
                        <div className="stat-value">1,200</div>
                        <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;