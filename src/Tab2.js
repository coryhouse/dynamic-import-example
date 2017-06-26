import React from 'react';

export default class Tab2 extends React.Component {
  componentDidMount() {
    // webpack treats import() as a split-point and puts the requested module in a separate chunk.
    // Using webpack magic comments below to declare the name of the separate chunk
    // Other dynamically loaded imports with this same chunk name will be bundled
    // together and lazy loaded! The comment is totally optional. Webpack will assign
    // the bundle name for me if the comment is omitted.
    import(/* webpackChunkName: 'vendor' */ 'moment')
        .then(moment => moment().format('LLLL'))
        .then(str => console.log(str))
        .catch(err => console.log('Failed to load moment', err));
  }

  render() {
    return (
      <ul>
        <li>I just dynamically loaded moment using a dynamic import.</li>
        <li>Check the network tab to see this component's bundle requested dynamically on click.</li>
        <li>Check the console to see moment's output.</li>
      </ul>
    )
  }
}