import React from 'react';
import { Icon } from 'expo';

import Colors from '../constants/Colors';

export default class FavouritesIcon extends React.Component {
    render() {
        const { name, size, focused } = this.props;
        return (
            <Icon.FontAwesome
                name={name}
                size={size}
                color={focused ? Colors.favouriteSelected : Colors.favouriteDefault}
            />
        );
    }
}
