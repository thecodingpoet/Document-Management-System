import React, { Component } from 'react';
import { Pagination } from 'react-materialize';
import DocumentCard from './DocumentCard.jsx';

/**
 * @export
 * @class RoleDocsList
 * @extends {Component}
 */
export default class RoleDocsList extends Component {
  /**
   * Creates an instance of PublicDocsList.
   * @param {any} props - props
   * @memberOf PublicDocsList
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
        <p className="center-align">There are no Role Documents yet</p>
      </div>
    );

    let roleDocsList = docs.filter(doc => doc.access === 'role');

    const totalDocuments = roleDocsList.length;
    const pageSize = 6;
    const end = this.state.currentPage * pageSize;
    const start = end - pageSize;
    roleDocsList = roleDocsList.slice(start, end);

    const docsList = (
      <div className="container" id="docList">
        <div className="row">
          { roleDocsList.map(doc => <DocumentCard doc={doc} key={doc.id} />) }
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
        { roleDocsList.length === 0 ? emptyMessage : docsList }
      </div>
    );
  }
}

RoleDocsList.propTypes = {
  docs: React.PropTypes.array.isRequired
};
