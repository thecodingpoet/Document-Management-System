import React, { Component } from 'react';
import RoleDocsList from './RoleDocsList.jsx';
import { connect } from 'react-redux';
import { fetchPublicDocs } from '../actions/documents.js';

class RoleDocuments extends Component {
  componentDidMount() {
    this.props.fetchPublicDocs();
  }

  render() {
    return (
      <div>
        <RoleDocsList docs={this.props.docs} />
      </div>
    );
  }
}

RoleDocuments.propTypes = {
  fetchPublicDocs: React.PropTypes.func.isRequired,
  docs: React.PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    docs: state.documents
  };
}

export default connect(mapStateToProps, { fetchPublicDocs })(RoleDocuments);
