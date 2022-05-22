/* global module */
import React from 'react';
import ShoppingCart from './ShoppingCart';
import products from './ShoppingCart.data';

import * as PageLayout from '../../layouts/Default/DefaultLayout.stories';

export default {
    title: 'Templates/Shopping Cart',
    component: ShoppingCart,
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => <ShoppingCart {...args} />;

export const Default = Template.bind({});
Default.args = {
    navigation: PageLayout.Default.args.navigation,
    products: products,
};