import React, { useState } from 'react';
import Navbar from '../../modules/Navbar/Navbar';
import Footer from '../../modules/Footer/Footer';

import navigation from "../../modules/Footer/Footer.data";


function DefaultLayout({ children, navigation }) {
    return (
        <div className="layout">
            <Navbar />
            <div className="page-content">
                { children }
            </div>
            <Footer navigation={ navigation } />
        </div>
    );
}

export default DefaultLayout
