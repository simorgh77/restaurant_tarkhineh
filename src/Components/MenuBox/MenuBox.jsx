import React from 'react'
import { Link } from 'react-router-dom'

import "./MenuBox.css"

export default function MenuBox({ item }) {
    return (
        <div className="col-6 col-md-3">
            <div className="menu-box">
                <div className="menu-box__image">
                    <img
                        src={
                            item === 'main-course' ? 'img/index/Main-course.png'
                                : item === 'appetizer' ? 'img/index/Appetizer.png'
                                    : item === 'dessert' ? 'img/index/Dessert.png'
                                        : 'img/index/Beverages.png'
                        }
                        alt="food"
                        className="menu-box__image-item"
                    />
                </div>
                <Link to='/menus' className="menu-box__title">
                    {
                        item === 'main-course' ? 'غذای اصلی'
                            : item === 'appetizer' ? 'پیش غذا'
                                : item === 'dessert' ? 'دسر'
                                    : 'نوشیدنی'
                    }
                </Link>
            </div>
        </div >
    )
}
