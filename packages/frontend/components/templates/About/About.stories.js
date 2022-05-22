/* global module */
import React from 'react';
import About from './About';
// import content from './About.data';

import * as PageLayout from '../../layouts/Default/DefaultLayout.stories';

export default {
    title: 'Templates/About',
    component: About,
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => <About {...args} />;

export const Default = Template.bind({});
Default.args = {
    navigation: PageLayout.Default.args.navigation,
};