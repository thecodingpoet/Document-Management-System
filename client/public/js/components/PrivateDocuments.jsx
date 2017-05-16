import React, { Component } from 'react';
import PrivateDocsList from './PrivateDocsList.jsx';
import { connect } from 'react-redux';
import { fetchAllDocs } from '../actions/documents.js';

class PrivateDocuments extends Component {
  componentDidMount() {
    this.props.fetchAllDocs();
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
  fetchAllDocs: React.PropTypes.func.isRequired,
  docs: React.PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    docs: state.documents
  };
}

export default connect(mapStateToProps, { fetchAllDocs })(PrivateDocuments);

