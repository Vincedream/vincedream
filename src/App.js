import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Page1 from './pages/page1'
import Page2 from './pages/page2'
import Page3 from './pages/page3'
import Page4 from './pages/page4'
import Page5 from './pages/page5'
import Page6 from './pages/page6'
import Page7 from './pages/page7'
import Page8 from './pages/page8'
import Page9 from './pages/page9'
import Page10 from './pages/page10'
import Page11 from './pages/page11'
import Page12 from './pages/page12'
import Page13 from './pages/page13'
import Home from './pages/home'
import "./App.scss";
import 'antd/dist/antd.css';
class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/page1" exact component={Page1} />
                    <Route path="/page2" exact component={Page2} />
                    <Route path="/page3" exact component={Page3} />
                    <Route path="/page4" exact component={Page4} />
                    <Route path="/page5" exact component={Page5} />
                    <Route path="/page6" exact component={Page6} />
                    <Route path="/page7" exact component={Page7} />
                    <Route path="/page8" exact component={Page8} />
                    <Route path="/page9" exact component={Page9} />
                    <Route path="/page10" exact component={Page10} />
                    <Route path="/page11" exact component={Page11} />
                    <Route path="/page12" exact component={Page12} />
                    <Route path="/page13" exact component={Page13} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;