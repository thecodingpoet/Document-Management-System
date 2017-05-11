import React, { Component } from 'react';
import { connect } from 'react-redux';
import MyDocsList from './MyDocsList.jsx';
import { fetchPublicDocs} from '../actions/documents';

class ViewMyDocuments extends Component {
  componentDidMount() {
    this.props.fetchPublicDocs();
  }

  render() {
    return (
      <div className="row">
        <div id="public" className="col s12 spaces">
          <MyDocsList docs={this.props.docs} testFunc={this.props.testFunc} />
        </div>
      </div>
    );
  }
}

ViewMyDocuments.propTypes = {
  fetchPublicDocs: React.PropTypes.func.isRequired,
  docs: React.PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    docs: state.documents
  };
}

export default connect(mapStateToProps, { fetchPublicDocs })(ViewMyDocuments);
