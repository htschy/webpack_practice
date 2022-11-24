// import ReactDom from "react-dom";
import { createRoot } from "react-dom/client"
import * as React from 'react';

const App = (props) => {
    return (
        <div style={{color: '#000'}}>
            Hello, React App!
        </div>
    );
};

const reactRoot = document.getElementById('react-root');
if(reactRoot){
    const reactDom = createRoot(reactRoot);
    reactDom.render(<App />);
} else {
    console.log("No root element found");
}


