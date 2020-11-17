import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import {connect} from 'react-redux';
import WithRestoService from '../hoc';
import {menuLoaded, menuRequested, addedToCard} from '../../actions';
import Spinner from '../spinner';
 
import './menu-list.scss';

class MenuList extends Component {

    componentDidMount() {
        this.props.menuRequested();

        const {RestoService} = this.props;
        RestoService.getMenuItems()
        .then(res => this.props.menuLoaded(res));
    }

    render() {
        const {menuItems, loading, addedToCard} = this.props;

        if (loading) {
            return <Spinner/>
        }

        return (
            <ul className="menu__list">
                {
                    menuItems.map(menuItem => {
                            return <MenuListItem
                                    key={menuItem.id} 
                                    menuItem={menuItem}
                                    onAddToCard={() => addedToCard(menuItem.id)} />
                        })
                }
            </ul>
        )
    }
};

const MapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading
    }
};

const MapDispatchToProps = {
    menuLoaded,
    menuRequested,
    addedToCard
};


export default WithRestoService()(connect(MapStateToProps, MapDispatchToProps)(MenuList));