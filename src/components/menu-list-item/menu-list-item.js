import React from 'react';
import './menu-list-item.scss';

const MenuListItem = ({menuItem, onAddToCard}) => {
    const {title, price, url, category} = menuItem;
    return (
            <li className="menu__item">
                <div className="menu__title">{title}</div>
                <img className="menu__img" src={url} alt={title}></img>
                <div className="menu__category">Категория: <span>{category}</span></div>
                <div className="menu__price">Цена: <span>{price} руб.</span></div>
                <button onClick={() => onAddToCard()} className="menu__btn">Добавить в корзину</button>
            </li>
    )
}

export default MenuListItem;