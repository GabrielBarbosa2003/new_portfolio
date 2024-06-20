import React from 'react'
import { Link } from 'react-router-dom'
import './menu.css'

export default function Menu() {
    return (
        <div className='menu-container'>
            <div className='logo'>
                <Link to="/">Desenvolvedor</Link>
            </div>
            <div className='rigth-menu'>
                <div className='contact'>
                    <div className='btn'>
                        <Link to="/">Contato</Link>
                    </div>
                </div>
                <div className='menu'>
                    <div className='btn'>
                        Menu
                    </div>
                </div>


            </div>

        </div>
    )
}
