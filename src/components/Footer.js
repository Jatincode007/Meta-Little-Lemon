import React from 'react'
import logo from "../images/footgreen.png"
import yellow from "../images/yellowl.png"

const Footer = () => {
    return (
        <footer>
            <section>
                <div className='company-info'>
                    <img src={logo} />
                </div>

                <div className='yellowdiv'>
                   
                        <img src={yellow} className='yellow' />
                    
                        <h2 className='yellow-name'>Little Lemon</h2>
                  
                </div>

                <div className='company-info'> <p>We are family owed Mediterraneran restautrant, focused on traditional recipes served with a modern twist.</p></div>

                <div>
                    <h3>Important Links</h3>
                    <ul>
                        <a href="/"><li>Home</li></a>
                        <a href="/"><li>About</li></a>
                        <a href="/"><li>Menu</li></a>
                        <a href="/"><li>Reservation</li></a>
                        <a href="/"><li>Order Online</li></a>
                        <a href="/"><li>Login</li></a>
                    </ul>
                </div>

                <div>
                    <h3>Contacts</h3>

                    <ul>
                        <li>Address :<br />123 Town City</li>
                        <li>Phone :<br />++ 0123 456 789 </li>
                        <li>Email :<br />little@lemon.com</li>
                    </ul>
                </div>

                <div>
                    <h3>Social Links</h3>
                    <ul>
                        <a href="/"><li>Facebook</li></a>
                        <a href="/"><li>Instgram</li></a>
                        <a href="/"><li>Twitter</li></a>

                    </ul>
                </div>

            </section>
        </footer>
    )
}

export default Footer