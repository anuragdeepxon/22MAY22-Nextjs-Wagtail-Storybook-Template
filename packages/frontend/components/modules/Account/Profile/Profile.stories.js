/* global module */
import React from 'react';
import Profile from "./Profile";

export default {
    title: 'Modules/Account/Profile',
    component: Profile,
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Profile {...args} />;

export const Default = Template.bind({});
Default.args = {
};