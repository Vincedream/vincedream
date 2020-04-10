import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Home from './pages/home';
import "./App.scss";
import 'antd/dist/antd.css';
import "babel-polyfill"

const Page1 = lazy(() =>  import('./pages/page1'));
const Page2 = lazy(() =>  import('./pages/page2'));
const Page3 = lazy(() =>  import('./pages/page3'));
const Page4 = lazy(() =>  import('./pages/page4'));
const Page5 = lazy(() =>  import('./pages/page5'));
const Page6 = lazy(() =>  import('./pages/page6'));
const Page7 = lazy(() =>  import('./pages/page7'));
const Page8 = lazy(() =>  import('./pages/page8'));
const Page9 = lazy(() =>  import('./pages/page9'));
const Page10 = lazy( () => import('./pages/page10'))
const Page11 = lazy( () => import('./pages/page11'))
const Page12 = lazy( () => import('./pages/page12'))
const Page13 = lazy( () => import('./pages/page13'))
const Page14 = lazy( () => import('./pages/page14'))
const Page15 = lazy( () => import('./pages/page15'))
const Page16 = lazy( () => import('./pages/page16'))
const Page17 = lazy( () => import('./pages/page17'))
const Page18 = lazy( () => import('./pages/page18'))
const Page19 = lazy( () => import('./pages/page19'))
const Page20 = lazy( () => import('./pages/page20'))
const Page21 = lazy( () => import('./pages/page21'))
const Page22 = lazy( () => import('./pages/page22'))
const Page23 = lazy( () => import('./pages/page23'))
const Page24 = lazy( () => import('./pages/page24'))
const Page25 = lazy( () => import('./pages/page25'))
const Page26 = lazy( () => import('./pages/page26'))
const Page27 = lazy( () => import('./pages/page27'))
const Page28 = lazy( () => import('./pages/page28'))
const Page29 = lazy( () => import('./pages/page29'))
const Page30 = lazy( () => import('./pages/page30'))
const Page31 = lazy( () => import('./pages/page31'))
const Page32 = lazy( () => import('./pages/page32'))
const Page33 = lazy( () => import('./pages/page33'))
const Page34 = lazy( () => import('./pages/page34'))
const Page35 = lazy( () => import('./pages/page35'))
const Page36 = lazy( () => import('./pages/page36'))
const Page37 = lazy( () => import('./pages/page37'))
const Page38 = lazy( () => import('./pages/page38'))
const Page39 = lazy( () => import('./pages/page39'))
const Page40 = lazy( () => import('./pages/page40'))
const Page41 = lazy( () => import('./pages/page41'))
const Page42 = lazy( () => import('./pages/page42'))

class App extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Link to="page1">page1</Link> <br/>
                        <Link to="page2">page2</Link> <br/>
                        <Link to="page3">page3</Link> <br/>
                        <Link to="page4">page4</Link> <br/>
                        <Link to="page8">page8(with echarts)</Link> <br/>
                    </div>
                    <Suspense fallback="loading">
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
                    </Suspense>
                </BrowserRouter>
            </div>
            
        )
    }
}

export default App;