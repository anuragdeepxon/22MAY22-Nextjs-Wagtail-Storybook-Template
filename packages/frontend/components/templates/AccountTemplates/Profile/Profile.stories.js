/* global module */
import React from 'react';
import Profile from './Profile';
import { subNavigation, plans, payments } from './Profile.data';

import * as PageLayout from '../../../layouts/Default/DefaultLayout.stories';

export default {
    title: 'Templates/Account/Account',
    component: Profile,
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Profile {...args} />;

export const Default = Template.bind({});
Default.args = {
    navigation: PageLayout.Default.args.navigation,
    subNavigation: subNavigation,
    plans: plans,
    payments: payments,
};
