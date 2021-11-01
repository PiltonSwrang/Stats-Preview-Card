import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home'
import Navbar from "./components/Navbar,";
import Footer from './components/Footer'
import Error from "./pages/Error";
import About from './pages/about/index'
import Careers from './pages/careers/index'
import Contact from './pages/contact/index'
import Termsofuse from './pages/terms-of-use/index'
import Privacypolicy from './pages/privacy-policy/index'
// import Insights from './pages/insights/index'

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/careers" component={Careers} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/terms-of-use" component={Termsofuse} />
        <Route exact path="/privacy-policy" component={Privacypolicy} />
        {/* <Route exact path="/insights" component={Insights} /> */}
        <Route to="*" component={Error} />
      </Switch>
      <Footer />
    </Router>
  );
}