import React from "react";
import "./styles/index.scss";

class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
                <a href="news?p=2" className="morelink" rel="next">More</a>
                
                <hr></hr>

                <div className="footer-content">
                    <a href="#">Guidelines</a> |
                    <a href="#">FAQ</a> |
                    <a href="#">Support</a> |
                    <a href="#">API</a> |
                    <a href="#">Security</a> |
                    <a href="#">Lists</a> |
                    <a href="#">Bookmarklet</a> |
                    <a href="#">Legal</a> |
                    <a href="#">Apply to YC</a> |
                    <a href="#">Contact</a> 
                </div>

                <div className="footer-search">
                    <form>
                        <label>Search: </label>
                        <input type="text" name="search"></input>
                    </form>
                </div>
            </div>
        )
    }
}

export default Footer;