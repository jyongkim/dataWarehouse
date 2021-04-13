import React from 'react';

class Nav extends React.Component{
    render() {
        return (
            <nav>
                <ul>
                    {this.props.links.map((link, index) =>
                        <li key={index}>{link}</li>
                    )}
                </ul>
            </nav>
        )}}

export default Nav;