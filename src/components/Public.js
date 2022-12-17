import { Link } from "react-router-dom";

import React from 'react'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">My Local Repair Shop</span></h1>
            </header>
            <main className="public__main">
                <p>Located in Mars clock provides a trained staff ready to meet your tech repair needs.</p>
                <br />
                <Link to="/login">Employee Login</Link>
            </main>
                
            <footer>
                <address className="public__addr">
                    My Local Repairs<br />
                    555 Foo Mars<br />
                    Foo City, MA 12345<br />
                    <a href="tel:+15555555555">(555) 555-5555</a>
                </address>
                <p>Owner: Martian</p>
            </footer>
        </section>
    )
  return content
}

export default Public