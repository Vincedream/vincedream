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
import Page14 from './pages/page14'
import Page15 from './pages/page15'
import Page16 from './pages/page16'
import Page17 from './pages/page17'
import Page18 from './pages/page18'
import Page19 from './pages/page19'
import Page20 from './pages/page20'
import Page21 from './pages/page21'
import Page22 from './pages/page22'
import Page23 from './pages/page23'
import Page24 from './pages/page24'
import Page25 from './pages/page25'
import Page26 from './pages/page26'
import Page27 from './pages/page27'
import Page28 from './pages/page28'
import Page29 from './pages/page29'
import Page30 from './pages/page30'
import Page31 from './pages/page31'
import Page32 from './pages/page32'
import Page33 from './pages/page33'
import Page34 from './pages/page34'
import Page35 from './pages/page35'
import Page36 from './pages/page36'
import Page37 from './pages/page37'
import Page38 from './pages/page38'
import Page39 from './pages/page39'
import Page40 from './pages/page40'
import Page41 from './pages/page41'
import Page42 from './pages/page42'
import Home from './pages/home'
import "./App.scss";
import 'antd/dist/antd.css';
import "babel-polyfill"
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
                    <Route path="/page14" exact component={Page14} />
                    <Route path="/page15" exact component={Page15} />
                    <Route path="/page16" exact component={Page16} />
                    <Route path="/page17" exact component={Page17} />
                    <Route path="/page18" exact component={Page18} />
                    <Route path="/page19" exact component={Page19} />
                    <Route path="/page20" exact component={Page20} />
                    <Route path="/page21" exact component={Page21} />
                    <Route path="/page22" exact component={Page22} />
                    <Route path="/page23" exact component={Page23} />
                    <Route path="/page24" exact component={Page24} />
                    <Route path="/page25" exact component={Page25} />
                    <Route path="/page26" exact component={Page26} />
                    <Route path="/page27" exact component={Page27} />
                    <Route path="/page28" exact component={Page28} />
                    <Route path="/page29" exact component={Page29} />
                    <Route path="/page30" exact component={Page30} />
                    <Route path="/page31" exact component={Page31} />
                    <Route path="/page32" exact component={Page32} />
                    <Route path="/page33" exact component={Page33} />
                    <Route path="/page34" exact component={Page34} />
                    <Route path="/page35" exact component={Page35} />
                    <Route path="/page36" exact component={Page36} />
                    <Route path="/page37" exact component={Page37} />
                    <Route path="/page38" exact component={Page38} />
                    <Route path="/page39" exact component={Page39} />
                    <Route path="/page40" exact component={Page40} />
                    <Route path="/page41" exact component={Page41} />
                    <Route path="/page42" exact component={Page42} />

                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;