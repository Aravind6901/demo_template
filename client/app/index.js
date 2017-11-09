import React from 'react';
import ReactDOM from 'react-dom';

import '../assets/css/main.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        "Hello World!"
    }
}


ReactDOM.render(<App />,document.getElementById('app'));