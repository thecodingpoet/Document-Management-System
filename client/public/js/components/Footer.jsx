import React, { Component } from 'react';
require('../../scss/style.scss');

export default class Footer extends Component {
    render() {
      return (
        <footer className="page-footer ">
          <div className="container ">
            <div className="row ">
              <div className="col l6 s12">
                <p className="white-text darken-2">Project Background</p>
                <p className="grey-text text-darken-1">Developed at Andela by Duyile Oluwatomi John as a requirement for the completion of checkpoint two</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <p className="white-text">Technology Stack</p>
                <ul>
                  <li><a className="grey-text text-darken-1" href="https://nodejs.org/en/">NodeJS</a></li>
                  <li><a className="grey-text text-darken-1" href="https://expressjs.com/">ExpressJS</a></li>
                  <li><a className="grey-text text-darken-1" href="https://facebook.github.io/react/">ReactJS</a></li>
                  <li><a className="grey-text text-darken-1" href="http://redux.js.org/">Redux</a></li>
                  <li><a className="grey-text text-darken-1" href="http://docs.sequelizejs.com/en/v3/">Sequelize</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright ">
            <div className="container " id="footerText">
            © 2017 Copyright thecodingpoet
            </div>
          </div>
        </footer>
        )
    }
}
