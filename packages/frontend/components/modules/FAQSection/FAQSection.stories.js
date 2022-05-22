/* global module */
import React from 'react';
import FAQSection from './FAQSection';
import faqs from './FAQSection.data';

import * as PageLayout from '../../layouts/Default/DefaultLayout.stories';

export default {
    title: 'Modules/FAQSection',
    component: FAQSection,
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => <FAQSection {...args} />;

export const Default = Template.bind({});
Default.args = {
    faqs: faqs,
};