import React from 'react';

export default class Tab2 extends React.Component {
  componentDidMount() {
    import('moment')
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