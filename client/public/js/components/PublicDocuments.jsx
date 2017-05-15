import React, { Component } from 'react';
import { connect } from 'react-redux';
import PublicDocsList from './PublicDocsList.jsx';
import { fetchPublicDocs } from '../actions/documents.js';

class PublicDocuments extends Component {
  componentDidMount() {
    this.props.fetchPublicDocs();
  }

  render() {
    return (
      <div>
        <PublicDocsList docs={this.props.docs} />
      </div>
    );
  }
}

PublicDocuments.propTypes = {
  fetchPublicDocs: React.PropTypes.func.isRequired,
  docs: React.PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    docs: state.documents
  };
}

export default connect(mapStateToProps, { fetchPublicDocs })(PublicDocuments);
