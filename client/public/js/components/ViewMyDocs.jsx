import React, { Component } from 'react';
import { connect } from 'react-redux';
import MyDocsList from './MyDocsList.jsx';
import { fetchAllDocs } from '../actions/documents';

class ViewMyDocuments extends Component {
  componentDidMount() {
    this.props.fetchAllDocs();
  }

  render() {
    return (
      <div className="row">
        <div id="public" className="col s12">
          <MyDocsList docs={this.props.docs} documentSelected={this.props.documentSelected} user={this.props.user} />
        </div>
      </div>
    );
  }
}

ViewMyDocuments.propTypes = {
  fetchAllDocs: React.PropTypes.func.isRequired,
  docs: React.PropTypes.array.isRequired,
  // documentSelected: React.Object.isRequired,
};

function mapStateToProps(state) {
  return {
    docs: state.documents,
  };
}

export default connect(mapStateToProps, { fetchAllDocs })(ViewMyDocuments);
