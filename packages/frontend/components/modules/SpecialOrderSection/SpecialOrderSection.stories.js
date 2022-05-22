/* global module */
import React from 'react';
import SpecialOrderSection from './SpecialOrderSection';
import faqs from './SpecialOrderSection.data';


export default {
    title: 'Modules/Special Order Section',
    component: SpecialOrderSection,
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => <SpecialOrderSection {...args} />;

export const Default = Template.bind({});
Default.args = {
    // faqs: faqs,
};