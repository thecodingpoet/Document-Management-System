import React, { Component } from 'react';
import { connect } from 'react-redux';
import DocumentCard from './DocumentCard.jsx';

class Search extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.docs);
    console.log(event.target.value);

    const searchDocs = this.searchDocuments(this.props.docs, event.target.value);
    const fetchDocs = this.findMatchingDocs(searchDocs);
    console.log(searchDocs, 'Filter Function');
    console.log(fetchDocs, 'Fetching Documents');
  }

  searchDocuments(document, searchTerm) {
    return document.map(doc => doc.title.search(searchTerm) !== -1 ? doc : -1);
  }

  findMatchingDocs(docs) {
    return docs.filter(doc => doc !== -1);
  }

  render() {
    const emptyMessage = (
      <div className="container">
        <p className="center-align">No result Found</p>
      </div>
    );

    const searchDocs = this.searchDocuments(this.props.docs, event.target.value);
    const fetchDocs = this.findMatchingDocs(searchDocs);

    const docsList = (
      <div className="container" id="docList">
        <div className="row">
          { fetchDocs.map(doc => <DocumentCard doc={doc} key={doc.id} />) }
        </div>
      </div>
    );

    return (
      <div>
        { fetchDocs.length === 0 ? emptyMessage : docsList }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    docs: state.documents
  };
}

export default connect(mapStateToProps, null)(Search);
