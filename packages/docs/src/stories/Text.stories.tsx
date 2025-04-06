import { Meta, StoryObj } from '@storybook/react';
import { Text, TextProps } from '@ignite-ui/react';

export default {
    title: 'Typograph/Text',
    component: Text,
    args: {
        children: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga labore alias exercitationem quo inventore sed error, temporibus omnis corporis fugit molestiae dolor aliquid rem illum vitae eligendi veritatis perferendis! Est.'
    },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
    args: {
        children: 'Strong Text',
        as: 'strong',
    }
}
