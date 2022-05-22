/* global module */
import React from 'react';
import FAQ from './FAQ';
import faqs from './FAQ.data';

import * as PageLayout from '../../layouts/Default/DefaultLayout.stories';
import * as FAQSection from '../../modules/FAQSection/FAQSection.stories';

export default {
    title: 'Templates/FAQ',
    component: FAQ,
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => <FAQ {...args} />;

export const Default = Template.bind({});
Default.args = {
    navigation: PageLayout.Default.args.navigation,
    faqs: FAQSection.Default.args.faqs,
};