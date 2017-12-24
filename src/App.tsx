import * as React from 'react';
import hub from "./hub";
import "./actions";

export default class App extends React.Component {
    componentDidMount() {
        hub.on("update", () => this.forceUpdate());
        hub.trigger("app:init");
    }
    render() {
        return (
            <div>App Component 2</div>
        );
    }
}