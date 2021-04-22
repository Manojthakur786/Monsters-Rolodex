import React from 'react';
import './card-list.css';
import { Card } from '../Card-component/card.Component'
export const CardList = props => (

    <div className='card-list'>
        {
            props.monsters.map(monster => (
                <Card key={monster.id} monster={monster} />
            ))

        }

    </div>

);