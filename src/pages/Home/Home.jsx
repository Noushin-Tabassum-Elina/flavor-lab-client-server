import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import Banner from '../../components/Banner/Banner';
import ChefsCard from '../../components/ChefsCard/ChefsCard';
import Contact from '../../components/Contact/Contact';
import About from '../../components/About/About';

const Home = () => {
    const user = useContext(AuthContext)
    return (
        <div>
            <h1>
                <Banner></Banner>
                <ChefsCard></ChefsCard>
                <About></About>
                <Contact></Contact>
            </h1>
        </div>
    );
};

export default Home;