/* eslint-disable no-undef */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllDocs } from '../actions/documents';

class FullDocument extends Component {
  /**
   * @returns {void}
   * @memberOf FullDocument
   */
  componentDidMount() {
    $('.modal').modal();
    $('select').material_select();
    $('#tabs-swipe-demo').tabs({ swipeable: true });
    this.props.fetchAllDocs();
  }

  /**
   * @returns {jsx} - Full Document
   * @memberOf FullDocument
   */
  render() {
    // console.log(this.props.docs);
    const documents = this.props.docs;
    // console.log(this.props.docs, 'Props...');
    // console.log(documents, 'Documents');
    // console.log(this.props.match.params.id);
    const id = this.props.match.params.id;
    const document = documents.filter(doc => doc.id === Number(id));

    let title, content;
    if (document.length > 0) {
      title = document[0].title;
      content = document[0].content;
    }

    return (
      <div>
        <div className="myDocument card grey lighten-3 black-text">
          <h3 className="center-align"><b>{title}</b></h3>
          <br />
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    );
  }
}

FullDocument.propTypes = {
  fetchAllDocs: React.PropTypes.func.isRequired,
  docs: React.PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    docs: state.documents
  };
}

export default connect(mapStateToProps, { fetchAllDocs })(FullDocument);

