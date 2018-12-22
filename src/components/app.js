import { hot } from "react-hot-loader";
import { BrowserRouter } from 'react-router-dom';
import React from 'react'
// const App = () => (<BrowserRouter><div>fsdhufahf</div></BrowserRouter>)

const Root = () => {
    return (
        <React.Fragment>
            <SiteSwitch />
        </React.Fragment>
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