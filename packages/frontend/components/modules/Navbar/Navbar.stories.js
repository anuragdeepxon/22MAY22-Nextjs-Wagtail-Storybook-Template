/* global module */

import React from 'react';
import Navbar from './Navbar';
import navigation from './Navbar';

export default {
    title: 'Modules/Navbar',
    component: Navbar,
    parameters: { actions: { argTypesRegex: '^on.*' } },
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = navigation;