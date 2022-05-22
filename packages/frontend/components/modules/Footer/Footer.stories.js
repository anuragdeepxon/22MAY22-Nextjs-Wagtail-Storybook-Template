/* global module */

import React from 'react';
import Footer from './Footer';
import navigation from './Footer.data';

export default {
    title: 'Modules/Footer',
    component: Footer,
    parameters: { actions: { argTypesRegex: '^on.*' } },
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = { navigation: navigation };