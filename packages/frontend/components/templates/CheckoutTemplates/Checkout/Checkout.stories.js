/* global module */
import React from 'react';
import Checkout from './Checkout';
import { products, deliveryMethods, paymentMethods } from './Checkout.data';

import * as PageLayout from '../../../layouts/Default/DefaultLayout.stories';

export default {
    title: 'Templates/Checkout/Checkout',
    component: Checkout,
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Checkout {...args} />;

export const Default = Template.bind({});
Default.args = {
    navigation: PageLayout.Default.args.navigation,
    products: products,
    deliveryMethods: deliveryMethods,
    paymentMethods: paymentMethods,
};