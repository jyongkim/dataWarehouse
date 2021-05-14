import React from 'react';

class Nav extends React.Component{
    render() {
         return (
            <nav>
                <header>
                    <h1>Data Warehouse</h1>
                </header>
                <ul className="menu">
                    {this.props.links.map((link, index) =>
                        <li key={index}>{link}</li>
                    )}
                </ul>
            </nav>
        )}}

export default Nav;