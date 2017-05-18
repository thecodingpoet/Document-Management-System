import React, { Component } from 'react';
import { connect } from 'react-redux';
import RoleDocsList from './RoleDocsList.jsx';
import { fetchAllDocs } from '../actions/documents.js';

/**
 * @class RoleDocuments
 * @extends {Component}
 */
class RoleDocuments extends Component {
  /**
   * @returns {void}
   * @memberOf RoleDocuments
   */
  componentDidMount() {
    this.props.fetchAllDocs();
  }

  /**
   * @returns {jsx} - Role Documents
   * @memberOf RoleDocuments
   */
  render() {
    return (
      <div>
        <RoleDocsList docs={this.props.docs} />
      </div>
    );
  }
}

RoleDocuments.propTypes = {
  fetchAllDocs: React.PropTypes.func.isRequired,
  docs: React.PropTypes.array.isRequired
};

/**
 * @param {any} state - state
 * @returns {void}
 */
function mapStateToProps(state) {
  return {
    docs: state.documents
  };
}

export default connect(mapStateToProps, { fetchAllDocs })(RoleDocuments);
