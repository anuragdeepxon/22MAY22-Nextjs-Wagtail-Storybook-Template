/* global module */
import React from 'react';
import Home from './Home';
import navigation from './Home.data';

import * as PageLayout from '../../layouts/Default/DefaultLayout.stories';
import * as ProductList from "../../modules/ProductList/ProductList.stories";
import * as Perks from "../../modules/PerksSection/Perks.stories";
import * as FAQSection from '../../modules/FAQSection/FAQSection.stories';

export default {
    title: 'Templates/Home',
    component: Home,
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Home {...args} />;

export const Default = Template.bind({});
Default.args = {
    navigation: PageLayout.Default.args.navigation,
    products: ProductList.Default.args.products,
    perks: Perks.Default.args.perks,
    faqs: FAQSection.Default.args.faqs,
};