/* global module */
import React from 'react';
import { subNavigation } from './SubNav.data';
import SubNav from "./SubNav";

export default {
    title: 'Modules/Account/Sub Navigation',
    component: SubNav,
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => <SubNav {...args} />;

export const Default = Template.bind({});
Default.args = {
    subNavigation: subNavigation,
};