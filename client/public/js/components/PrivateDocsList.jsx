import React, { Component } from 'react';
import { Pagination } from 'react-materialize';
import jwtDecode from 'jwt-decode';
import DocumentCard from './DocumentCard.jsx';

/**
 * @export
 * @class PrivateDocsList
 * @extends {Component}
 */
export default class PrivateDocsList extends Component {
  /**
   * Creates an instance of PrivateDocsList .
   * @param {any} props - props
   * @memberOf PrivateDocsList
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
   * @returns {jsx} Private Documents Pagination
   * @memberOf PrivateDocsList
   */
  render() {
    const { docs } = this.props;
    const emptyMessage = (
      <div className="container">
        <p className="center-align" id="empty-msg">
          There are no Private Documents yet
        </p>
      </div>
      );

    const token = window.localStorage.getItem('token');
    const user = jwtDecode(token);
    const userId = user.userId;

    let privateDocsList = docs.filter(
      doc => doc.access === 'private'
      && doc.ownerId === userId
    );

    const totalDocuments = privateDocsList.length;
    const pageSize = 6;
    const end = this.state.currentPage * pageSize;
    const start = end - pageSize;
    privateDocsList = privateDocsList.slice(start, end);

    const docsList = (
      <div className="container docList" id="docList">
        <div className="row">
          {privateDocsList
          .map(doc => <DocumentCard doc={doc} key={doc.id} />) }
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
        { privateDocsList.length === 0 ? emptyMessage : docsList }
      </div>
    );
  }
}

PrivateDocsList.propTypes = {
  docs: React.PropTypes.array.isRequired
};
