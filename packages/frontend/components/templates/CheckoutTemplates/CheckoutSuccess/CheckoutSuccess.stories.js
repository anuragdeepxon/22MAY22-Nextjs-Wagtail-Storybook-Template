/* global module */
import React from 'react';
import CheckoutSuccess from './CheckoutSuccess';
import products from './CheckoutSuccess.data';

import * as PageLayout from '../../../layouts/Default/DefaultLayout.stories';

export default {
    title: 'Templates/Checkout/Checkout Success',
    component: CheckoutSuccess,
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => <CheckoutSuccess {...args} />;

export const Default = Template.bind({});
Default.args = {
    navigation: PageLayout.Default.args.navigation,
    products: products,
};