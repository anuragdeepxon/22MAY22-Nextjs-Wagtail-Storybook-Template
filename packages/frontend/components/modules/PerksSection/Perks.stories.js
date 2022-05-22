/* global module */

import React from 'react';
import Perks from './Perks';
import perksData from './Perks.data';

export default {
    title: 'Modules/Perks Section',
    component: Perks,
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Perks {...args} />;

export const Default = Template.bind({});
Default.args = {perks: perksData};
