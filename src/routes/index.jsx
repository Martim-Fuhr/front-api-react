import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Comments from '../pages/Comments'
import Apprenjob from '../pages/Apprenjob'
import Works from '../pages/Works'

export default () =>  {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ About } />
                <Route path="/apprenjob" component={ Apprenjob } />
                <Route path="/works" component={ Works } />
                <Route path="/contact" component={ Contact } />
                <Route path="/comments" component={ Comments } />
            </Switch>
        </BrowserRouter>
    );
}