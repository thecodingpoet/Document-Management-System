import React, { Component } from 'react';
import { connect } from 'react-redux';
import MyDocsList from './MyDocsList.jsx';
import { fetchAllDocs } from '../actions/documents';

/**
 * @class ViewMyDocuments
 * @extends {Component}
 */
class ViewMyDocuments extends Component {
  /**
   * @returns {void}
   * @memberOf ViewMyDocuments
   */
  componentDidMount() {
    this.props.fetchAllDocs();
  }

  /**
   * @returns {jsx} - View My Documents
   * @memberOf ViewMyDocuments
   */
  render() {
    return (
      <div className="row">
        <div id="public" className="col s12">
          <MyDocsList
            docs={this.props.docs}
            documentSelected={this.props.documentSelected}
            user={this.props.user}
          />
        </div>
      </div>
    );
  }

}

ViewMyDocuments.propTypes = {
  fetchAllDocs: React.PropTypes.func.isRequired,
  docs: React.PropTypes.array.isRequired,
  user: React.PropTypes.object.isRequired,
  documentSelected: React.PropTypes.object.isRequired
};

/**
 * @param {any} state - state
 * @returns {void}
 */
function mapStateToProps(state) {
  return {
    docs: state.documents,
  };
}

export default connect(mapStateToProps, { fetchAllDocs })(ViewMyDocuments);
