import React from "react";
import ReactDOM from "react-dom";
import { createStream, Stream } from './Stream';
import MiddleSource from './MiddleSource';
import Leaf from './Leaf';
import './styles.css';

let appRenderCount = 0;
const App = ({ rootStream }) => (
  <div>
    <h1>I Am Root!</h1>
    <p>Render Count: {++appRenderCount}</p>
    <p>
      <button type="button" onClick={() => rootStream.push('click')} >
        Root Click
      </button>
    </p>
    <Stream stream={rootStream}>
      <MiddleSource>
        <Leaf />
      </MiddleSource>
    </Stream>
  </div>
);

const rootStream = createStream();
const rootElement = document.getElementById("root");
ReactDOM.render(<App rootStream={rootStream} />, rootElement);
