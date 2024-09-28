import React from 'react'
import bannerImg from "../images/restauranfood.jpg"
import {Link} from 'react-router-dom'



export const Header = () => {
    return (
        <header className="header">
            <section>
            <div className='banner'>
                
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are family owed Mediterraneran restautrant, focused on traditional recipes served with a modern twist.</p>
                    <Link to="/booking"><button className='reserve'>Reserve Table</button></Link>
                </div>

                <div className='banner-img'>
                    <img src={bannerImg} />
                </div>
            </section>
        </header>


    )
}

export default Header