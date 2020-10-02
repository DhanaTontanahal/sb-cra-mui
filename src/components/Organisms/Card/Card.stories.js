import React from 'react'
import Card from "./Card"
import { text } from '@storybook/addon-knobs';

import card1 from './images/logo192.png'

export default {
    title: 'Organisms/Card',
    component: Card
}

export const Card1 = () =><Card 
                                cardHeaderTitle={text('Title','This is the title')} 
                                cardHeaderSubheader={text('Subheader','September 1, 2020')}
                                cardHeaderAvatarString={text('AvatarText','D')}
                                responseCount={text('Response count','100')}
                                clapCount={text('Clap count','100')}
                                
                                cardContentVariant={text('Card content variant','body2')}
                                cardContent={text('Content','This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.')}
                                cardContentColor={text('Color','textSecondary')}

                                cardMedia={card1}
                                color="default" position="relative"></Card>
