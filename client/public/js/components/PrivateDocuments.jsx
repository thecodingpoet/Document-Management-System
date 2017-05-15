import React, { Component } from 'react';
import PrivateDocsList from './PrivateDocsList.jsx';
import { connect } from 'react-redux';
import { fetchPublicDocs } from '../actions/documents.js';

class PrivateDocuments extends Component {
  componentDidMount() {
    this.props.fetchPublicDocs();
  }

  render() {
    return (
      <div>
        <PrivateDocsList docs={this.props.docs} />
      </div>
    );
  }
}

PrivateDocuments.propTypes = {
  fetchPublicDocs: React.PropTypes.func.isRequired,
  docs: React.PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    docs: state.documents
  };
}

export default connect(mapStateToProps, { fetchPublicDocs })(PrivateDocuments);

