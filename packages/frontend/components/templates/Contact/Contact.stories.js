/* global module */
import React from 'react';
import Contact from './Contact';
// import content from './Contact.data';

import * as PageLayout from '../../layouts/Default/DefaultLayout.stories';

export default {
    title: 'Templates/Contact',
    component: Contact,
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Contact {...args} />;

export const Default = Template.bind({});
Default.args = {
    navigation: PageLayout.Default.args.navigation,
};