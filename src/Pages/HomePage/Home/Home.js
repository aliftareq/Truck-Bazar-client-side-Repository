import React from 'react';
import ContactUs from '../ContactUs/ContactUs';
import Header from '../Header/Header';
import NewsLetter from '../NewsLetter/NewsLetter';
import ProductCategories from '../ProductCategories/ProductCategories';

const Home = () => {
    return (
        <section>
            <Header></Header>
            <ProductCategories></ProductCategories>
            <NewsLetter></NewsLetter>
            <ContactUs></ContactUs>
        </section>
    );
};

export default Home;