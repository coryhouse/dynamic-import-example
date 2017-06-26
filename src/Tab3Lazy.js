import React from 'react';
import Loadable from 'react-loadable';
import Loading from './Loading';
import fakeDelay from './fakeDelay';

let Tab3 = Loadable({
  // Adding fakeDelay below just so you can see the loading message display.
  loader: () => fakeDelay(2000).then(() => import('./Tab3')),
  loading: Loading
});

export default function Tab3Lazy() {
  return (
    <div>
      <h1>React-loadable Example</h1>
      <p>This tab uses <a href="">react-loadable</a> to lazy load a heavy component.</p>
      <Tab3/>
    </div>
  );
}
