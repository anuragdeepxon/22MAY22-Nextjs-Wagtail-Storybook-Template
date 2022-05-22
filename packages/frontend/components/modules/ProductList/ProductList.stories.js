/* global module */

import React from 'react';
import ProductList from './ProductList';
import products from './ProductList.data';

export default {
    title: 'Modules/Product List Section',
    component: ProductList,
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => <ProductList {...args} />;

export const Default = Template.bind({});
Default.args = {products: products};
