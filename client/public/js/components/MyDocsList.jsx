import React, { Component } from 'react';
import { Pagination } from 'react-materialize';
import jwtDecode from 'jwt-decode';
import MyDocumentCard from './MyDocumentCard.jsx';

/**
 * @export
 * @class MyDocsList
 * @extends {Component}
 */
export default class MyDocsList extends Component {
  /**
   * Creates an instance of MyDocsList.
   * @param {any} props - props
   * @memberOf MyDocsList
   */
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1
    };
    this.changePage = this.changePage.bind(this);
  }

  /**
   * @param {any} currentPage - current page
   * @returns {void}
   * @memberOf MyDocsList
   */
  changePage(currentPage) {
    this.setState({
      currentPage
    });
  }

  /**
   * @returns {jsx} My Documents Pagination
   * @memberOf PMyDocsList
   */
  render() {
    const { docs, editDoc, documentSelected } = this.props;
    const emptyMessage = (
      <div className="container center-align">
        <p>You have no documents yet</p>
      </div>
    );

    const token = window.localStorage.getItem('token');
    const userId = jwtDecode(token).userId;

    let myDocsList = docs.filter(doc => doc.ownerId === Number(userId));

    const totalDocuments = myDocsList.length;
    const pageSize = 6;
    const end = this.state.currentPage * pageSize;
    const start = end - pageSize;
    myDocsList = myDocsList.slice(start, end);


    const docsList = (
      <div className="container" id="docList">
        <div className="row">
          { myDocsList.map(doc => <MyDocumentCard
            doc={doc}
            key={doc.id}
            editDoc={editDoc}
            documentSelected={documentSelected}
          />) }
        </div>
      </div>
    );

    return (
      <div>
        <div className="right-align">
          {
            totalDocuments > 0 ?
              <Pagination
                items={Math.ceil(totalDocuments / pageSize)}
                activePage={this.state.currentPage}
                onSelect={current => this.changePage(current)}
              />
            : ''
          }
        </div>
        { myDocsList.length === 0 ? emptyMessage : docsList }
      </div>
    );
  }
}

MyDocsList.propTypes = {
  docs: React.PropTypes.array.isRequired,
  editDoc: React.PropTypes.func.isRequired,
  documentSelected: React.PropTypes.func.isRequired
};
