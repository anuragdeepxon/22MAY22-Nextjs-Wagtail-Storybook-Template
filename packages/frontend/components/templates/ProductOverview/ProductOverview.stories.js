/* global module */
import React from 'react';
import ProductOverview from './ProductOverview';
import product from './ProductOverview.data';

import * as PageLayout from '../../layouts/Default/DefaultLayout.stories';

export default {
    title: 'Templates/Product Overview',
    component: ProductOverview,
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => <ProductOverview {...args} />;

export const Default = Template.bind({});
Default.args = {
    navigation: PageLayout.Default.args.navigation,
    product: product,
};