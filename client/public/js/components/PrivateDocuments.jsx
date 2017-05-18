import React, { Component } from 'react';
import { connect } from 'react-redux';
import PrivateDocsList from './PrivateDocsList.jsx';
import { fetchAllDocs } from '../actions/documents.js';

/**
 * @class PrivateDocuments
 * @extends {Component}
 */
class PrivateDocuments extends Component {
  /**
   * @returns {void}
   * @memberOf PrivateDocuments
   */
  componentDidMount() {
    this.props.fetchAllDocs();
  }

  /**
   * @returns {jsx} - Private Documents component
   * @memberOf PrivateDocuments
   */
  render() {
    return (
      <div>
        <PrivateDocsList docs={this.props.docs} />
      </div>
    );
  }
}

PrivateDocuments.propTypes = {
  fetchAllDocs: React.PropTypes.func.isRequired,
  docs: React.PropTypes.array.isRequired
};

/**
 * @param {any} state - state
 * @returns {Object} - list of documents
 */
function mapStateToProps(state) {
  return {
    docs: state.documents
  };
}

export default connect(mapStateToProps, { fetchAllDocs })(PrivateDocuments);

