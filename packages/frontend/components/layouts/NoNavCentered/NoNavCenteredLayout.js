import React, { useState } from 'react';
import Navbar from '../../modules/Navbar/Navbar';
import Footer from '../../modules/Footer/Footer';

import navigation from "../../modules/Footer/Footer.data";


function NoNavCenteredLayout({ children, navigation }) {
    return (
        <html className="h-full bg-gray-50">
        <Navbar />
            <div className="page-content h-full">
                { children }
            </div>
        <Footer navigation={ navigation } />
        </html>
    );
}

export default NoNavCenteredLayout