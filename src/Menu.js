import React, {Component} from 'react';

class Menu extends Component {
    componentWillMount() {

    }
    
    render() {
        let items = this.props.items.map(item =>
            <div key={item} className={`menu__element menu__element--${item}`}>{item}</div>
        )

        return(
            <div className="menu">
                {items}
            </div>
        )
    }
}

export default Menu;

