import { hot } from "react-hot-loader";
import { BrowserRouter } from 'react-router-dom';
import { SiteSwitch } from '../routes';
import React from 'react'
// const App = () => (<BrowserRouter><div>fsdhufahf</div></BrowserRouter>)
const Root = () => {
    return (
        <div>
            <SiteSwitch />
        </div>
    );
};

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Root />
            </BrowserRouter>
        );
    }
}
export default hot(module)(App);