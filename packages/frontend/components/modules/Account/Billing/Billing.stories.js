/* global module */
import React from 'react';
import { plans, payments } from './Billing.data';
import Billing from "./Billing";

export default {
    title: 'Modules/Account/Billing',
    component: Billing,
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Billing {...args} />;

export const Default = Template.bind({});
Default.args = {
    plans: plans,
    payments: payments,
};