import React from "react";
import "./styles/index.scss";

import { Route, Link, BrowserRouter as Router } from 'react-router-dom';


class Header extends React.Component {
    render() {
        return (
            <>
                <div className="header">
                    <div className="header-left">
                        <div>
                            <Link to="/">
                                <img src="https://news.ycombinator.com/y18.gif" />
                            </Link>
                        </div>

                        <div className="header-left-content">
                            <b>
                                <Link to="/">Hacker News</Link>
                            </b>

                            <Link to="/new">new</Link> |
    
                            <Link to="/past">past</Link> |
        
                            <Link to="/comments">comments</Link> |
        
                            <Link to="/ask">ask</Link> |
        
                            <Link to="/show">show</Link> |
        
                            <Link to="/jobs">jobs</Link> |
        
                            <Link to="/login">submit</Link>
                        </div>
                    </div>

                    <div className="header-right">
                        <Link to="/login">login</Link>
                    </div>
                </div>
                
            </>
        )
    }
}

export default Header;