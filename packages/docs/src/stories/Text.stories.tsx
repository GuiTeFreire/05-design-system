import { Meta, StoryObj } from '@storybook/react';
import { Text, TextProps } from '@ignite-ui/react';

export default {
    title: 'Typograph/Text',
    component: Text,
    args: {
        size: 'md',
        children: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga labore alias exercitationem quo inventore sed error, temporibus omnis corporis fugit molestiae dolor aliquid rem illum vitae eligendi veritatis perferendis! Est.'
    },
    argTypes: {
        size: {
            options: ['xxs','xs','sm','md','lg','xl','2xl','4xl','5xl','6xl','7xl','8xl','9xl'],
            control: {
                type: 'inline-radio',
            },
        },
    }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
    args: {
        children: 'Strong Text',
        as: 'strong',
    }
}
