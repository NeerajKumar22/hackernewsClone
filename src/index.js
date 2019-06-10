import React from "react"
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './styles/index.scss';
import New from "./New";
import Past from "./Past";
import Comments from "./Comments";
import Ask from "./Ask";
import Home from "./Home";
import Show from "./Show";
import Jobs from "./Jobs";
import Header from "./Header";
import Footer from "./Footer";
import LoginForm from "./LoginForm"

const App = () => {
    return (
        <Router>
            <div className="container">
                <Header />
                <Route exact path="/" component={Home} />
                <Route path="/new" component={New} />
                <Route path="/past" component={Past} />
                <Route path="/comments" component={Comments} />
                <Route path="/ask" component={Ask} />
                <Route path="/show" component={Show} />
                <Route path="/jobs" component={Jobs} />
                <Route path="/login" component={LoginForm} />
                <Footer />
            </div>
        </Router>
    )
}


ReactDOM.render(<App />, document.getElementById("root"));

