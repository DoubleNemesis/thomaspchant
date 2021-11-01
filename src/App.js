import Header from './layout/header/Header'
import Footer from './layout/footer/Footer'
import Home from './sections/homePage/Home'
import Portfolio from './sections/portfolioPage/Portfolio'
// import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";





function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/portfolio">
          <Portfolio/>
        </Route>
      </Switch>
      <Footer />

    </>
  )
}

export default App;
