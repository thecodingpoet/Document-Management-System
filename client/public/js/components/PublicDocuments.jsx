import React, { Component } from 'react';
import { connect } from 'react-redux';
import PublicDocsList from './PublicDocsList.jsx';
import { fetchAllDocs } from '../actions/documents.js';

/**
 * @class PublicDocuments
 * @extends {Component}
 */
class PublicDocuments extends Component {
  /**
   * @returns {void}
   * @memberOf PublicDocuments
   */
  componentDidMount() {
    this.props.fetchAllDocs();
  }

  /**
   * @returns {jsx} - Public Documents component
   * @memberOf PublicDocuments
   */
  render() {
    return (
      <div>
        <PublicDocsList docs={this.props.docs} />
      </div>
    );
  }
}

PublicDocuments.propTypes = {
  fetchAllDocs: React.PropTypes.func.isRequired,
  docs: React.PropTypes.array.isRequired
};

/**
 * @param {any} state - state
 * @returns {object} - document list
 */
function mapStateToProps(state) {
  return {
    docs: state.documents
  };
}

export default connect(mapStateToProps, { fetchAllDocs })(PublicDocuments);
