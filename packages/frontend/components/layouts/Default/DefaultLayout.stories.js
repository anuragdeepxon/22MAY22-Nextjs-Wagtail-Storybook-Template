/* global module */
import React from 'react';
import DefaultLayout from './DefaultLayout';

import * as Navbar from "../../modules/Navbar/Navbar.stories";
import * as Footer from "../../modules/Footer/Footer.stories";

export default {
    title: 'Layouts/Default Layout',
    component: DefaultLayout,
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => <DefaultLayout {...args} />;

export const Default = Template.bind({});
Default.args = {
    navigation: Footer.Default.args.navigation,
};