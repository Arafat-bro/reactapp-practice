import React from "react";
import { Route, Switch } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Error from "./Error";
import Navbar from "./Navbar";
import Service from "./Service";
import User from "./User";
import Search from "./Search";

const Router = () => {
    return (
        <>
            {/* <About />
            <Contact/> */}
            <Navbar></Navbar>
            <Switch>
                <Route exact path="/" component={ () => <About name="about" />}/>
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/service" render={() => <Service name="service" />} />
                
                <Route exact path="/search" render={()=> <Search />} />
                <Route exact path="/user" render={()=> <User />} />
                <Route exact path="/user/:fname/:lname" component={User} />   //:useParams
                
                <Route  component={ Error}/>
            </Switch>
        
        </>
    )
}
export default Router;