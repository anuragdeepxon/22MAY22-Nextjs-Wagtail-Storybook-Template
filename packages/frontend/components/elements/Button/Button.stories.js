/* global module */

import React from 'react';
import Button from './Button';
//import data from './Button.data';

export default {
    title: 'Elements/Button',
    component: Button,
    argTypes: {
        backgroundColor: {
            options: [ 'primary', 'secondary', 'white' ],
            control: { type: 'radio' }
        },
        size: {
            options: [ 'sm', 'md', 'lg' ],
            control: { type: 'radio' }
        },
    },
    parameters: { actions: { argTypesRegex: '^on.*' } },
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: "Medium Primary",
    backgroundColor: "primary",
    size: "md",
    icon: "",
}
export const Secondary = Template.bind({});
Secondary.args = {
    ...Primary.args,
    label: "Medium Secondary",
    backgroundColor: "secondary",
}
export const White = Template.bind({});
White.args = {
        ...Primary.args,
    label: "Medium White",
    backgroundColor: "white",
}
export const Large = Template.bind({});
Large.args = {
    ...Primary.args,
    label: "Large Primary",
    size: "lg",
}
export const Medium = Template.bind({});
Medium.args = {
    ...Primary.args,
    label: "Medium Primary",
    size: "md",
}
export const Small = Template.bind({});
Small.args = {
    ...Primary.args,
    label: "Small Primary",
    size: "sm",
}