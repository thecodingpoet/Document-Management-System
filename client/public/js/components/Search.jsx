import React, { Component } from 'react';
import { connect } from 'react-redux';
// import queryString from 'query-string';
import DocumentCard from './DocumentCard.jsx';
import { fetchPublicDocs } from '../actions/documents';


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      q: '',
      documentsFound: [],
      emptyMessage: ''
    };   
    this.onChange = this.onChange.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.documentsFound = [];
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  componentDidMount() {
    this.props.fetchPublicDocs();
  }

  searchDocuments(documents, searchTerm) {
    searchTerm = searchTerm.toLowerCase();
    return documents.map((doc) => {
      if (doc.title.toLowerCase().search(searchTerm) !== -1 && searchTerm !== '') {
        return doc;
      }
      return -1;
    });
  }

  findMatching(documents) {
    return documents.filter(document => document !== -1);
  }

  onKeyPress(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      const searchTerm = event.target.value;
      const all = this.props.docs;
      const documents = this.searchDocuments(all, searchTerm);
      const documentsFound = this.findMatching(documents);
      this.setState({ documentsFound });
      this.setState({ emptyMessage: 'No result Found' });
    }
  }

  render() {
    const { documentsFound, emptyMessage } = this.state;
    const emptyDiv = (
      <div className="container">
        <p className="center-align">{emptyMessage}</p>
      </div>
    );
    const docsList = (
      <div className="container" id="docList">
        <div className="row">
          { documentsFound.map(doc => <DocumentCard doc={doc} key={doc.id} />) }
        </div>
      </div>
    );
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col s12 searchDiv">
              <div className="row">
                <div className="input-field offset-s6 col s6">
                  <form method="get">
                    <input
                      type="text"
                      id="autocomplete-input"
                      name="q"
                      value={this.state.q}
                      placeholder="Search Documents"
                      className="autocomplete"
                      onChange={this.onChange}
                      onKeyPress={this.onKeyPress}
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div>
            { documentsFound.length === 0 ? emptyDiv : docsList }
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    docs: state.documents
  };
}

Search.propTypes = {
  fetchPublicDocs: React.PropTypes.func.isRequired,
  docs: React.PropTypes.array.isRequired
};

export default connect(mapStateToProps, { fetchPublicDocs })(Search);
