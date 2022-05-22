/* global module */
import React from 'react';
import NewsletterSection from './NewsletterSection';
import content from './NewsletterSection.data';


export default {
    title: 'Modules/Newsletter Section',
    component: NewsletterSection,
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => <NewsletterSection {...args} />;

export const Default = Template.bind({});
Default.args = {
};