import React from "react";
import { NavLanding } from "./components/NavLanding";
import { Switch, Route } from "react-router-dom";
import { LanguageSelection } from "./Pages/LanguageSelection";
import { NavigationPageRes } from "./Pages/NavigationPageRes";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <NavLanding />
        </Route>
        <Route exact path="/select-language">
          <LanguageSelection />
        </Route>
        <Route exact path="/navigation">
          <NavigationPageRes />
        </Route>
        <Route exact path="/allSubscription">
          <NavigationPageRes />
        </Route>
        <Route exact path="/checkout">
          <NavigationPageRes />
        </Route>
        <Route exact path="/technology">
          <NavigationPageRes />
        </Route>
        <Route exact path="/speedPerformance">
          <NavigationPageRes />
        </Route>
        <Route exact path="/wordPress">
          <NavigationPageRes />
        </Route>
        <Route exact path="/support">
          <NavigationPageRes />
        </Route>
        <Route exact path="/progress">
          <NavigationPageRes />
        </Route>
        <Route exact path="/hostingNavLink">
          <NavigationPageRes />
        </Route>
        <Route exact path="/VPSNavLink">
          <NavigationPageRes />
        </Route>
        <Route exact path="/EmailNavLink">
          <NavigationPageRes />
        </Route>
        <Route exact path="/DomainNavLink">
          <NavigationPageRes />
        </Route>
        <Route exact path="/LoginNavLink">
          <NavigationPageRes />
        </Route>
        <Route exact path="/CartNavLink">
          <NavigationPageRes />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
