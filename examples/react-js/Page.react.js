/*

=============== Nom.js : React Example ===================
* Author : Rory Kermack
* Version: 1.4.3
* Website: codeanthology.com

@DWTFYL Licence

==========================================================

*/

/* Libs */
import React, { PropTypes } from 'react';
import Component from 'react-pure-render/component';
/* --- Libs */

/* Nom.js */
import Nom from './nom';
import './nom.scss';
/* --- Nom.js */

export default class NomComp extends Component {
  constructor(props) {
    super(props);
    this.setCookie = this.setCookie.bind(this);
    this.getCookie = this.getCookie.bind(this);
    this.deleteCookie = this.deleteCookie.bind(this);
    this.state = {
      testCookie: false
    }
  }

  componentWillMount() {
     if (Nom.check('testCookie')) {
       this.setState({testCookie: Nom.get('testCookie')})
     }
  }

  getCookie() {
    const cookie = Nom.get('testCookie');
    console.log(cookie);
    return cookie;
  }

  deleteCookie() {
    Nom.delete('testCookie');
    this.setState({testCookie: false});
  }

  setCookie() {
    const {testCookie} = this.state;
    Nom.set('testCookie', !testCookie, 1);
    this.setState({testCookie: !testCookie});
  }

  render() {
    const {testCookie} = this.state;
    return(
      <div>
        <h1>Nom.js Example</h1>
        <div>
          <p>Cookie ('testCookie'): {`${testCookie}`}</p>
        </div>
        <button onClick={() => this.setCookie()}>Set</button>
        <button onClick={() => this.getCookie()}>Get</button>
        <button onClick={() => this.deleteCookie()}>Delete</button>
      </div>
    );
  }
}
