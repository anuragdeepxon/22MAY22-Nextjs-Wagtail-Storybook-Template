/* global module */

import React from 'react';
import SignIn from './SignIn';
import * as PageLayout from "../../layouts/Default/DefaultLayout.stories";
// import product from './ProductQuickView.data';

export default {
    title: 'Templates/Sign In',
    component: SignIn,
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => <SignIn {...args} />;

export const Default = Template.bind({});
Default.args = {
    navigation: PageLayout.Default.args.navigation,
};