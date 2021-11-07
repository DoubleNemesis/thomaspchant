import Header from './layout/header/Header'
import Footer from './layout/footer/Footer'
import Home from './pages/home/Home'
import Portfolio from './pages/portfolio/Portfolio'
import Vlog from './pages/vlog/Vlog'
import ContactPage from './pages/contact/ContactPage'
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
        <Route path="/vlog">
          <Vlog/>
        </Route>
        <Route path="/contact">
          <ContactPage/>
        </Route>
      </Switch>
      <Footer />

    </>
  )
}

export default App;
