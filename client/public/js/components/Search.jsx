import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditProfile from './EditProfile.jsx';
import DocumentCard from './DocumentCard.jsx';
import { fetchAllDocs } from '../actions/documents';
import searchImage from '../../images/search.png';

/**
 * @class Search
 * @extends {Component}
 */
class Search extends Component {
  /**
   * Creates an instance of Search.
   * @param {any} props - props
   * @memberOf Search
   */
  constructor(props) {
    super(props);
    this.state = {
      q: '',
      documentsFound: [],
      emptyMessage: '',
      showIcon: true
    };
    this.onChange = this.onChange.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.documentsFound = [];
  }

  /**
   * @returns {void}
   * @memberOf Search
   */
  componentDidMount() {
    this.props.fetchAllDocs();
  }

    /**
   * @returns {void}
   * @param {any} event - event
   * @memberOf Search
   */
  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  /**
   * @param {any} event - event
   * @returns {void}
   * @memberOf Search
   */
  onKeyPress(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      const searchTerm = event.target.value;
      const all = this.props.docs;
      const documents = this.searchDocuments(all, searchTerm);
      const documentsFound = this.findMatching(documents);
      this.setState({ documentsFound });
      this.setState({ emptyMessage: 'No result Found' });
      this.setState({ showIcon: false });
    }
  }

  /**
   * @param {any} documents - list of documents
   * @returns {void}
   * @memberOf Search
   */
  findMatching(documents) {
    return documents.filter(document => document !== -1);
  }

  /**
   * @param {any} documents - documents
   * @param {any} searchTerm - searchTerm
   * @returns {any} - Document object or -1 if not found
   * @memberOf Search
   */
  searchDocuments(documents, searchTerm) {
    searchTerm = searchTerm.toLowerCase();
    return documents.map((doc) => {
      if (doc.title.toLowerCase().search(searchTerm) !== -1
      && searchTerm !== '') {
        return doc;
      }
      return -1;
    });
  }

  /**
   * @returns {jsx} - Search Document Component
   * @memberOf Search
   */
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
        <div className="row">
          <div className="col s12" id="searchDiv">
            <div className="col s2 offset-s1">
              <img src={searchImage} alt=" Search Icon" id="searchIcon" />
            </div>
            <div className="input-field col s9">
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
        <div>
          { documentsFound.length === 0 ? emptyDiv : docsList }
        </div>
        <EditProfile />
      </div>
    );
  }
}

/**
 * @param {any} state - state
 * @returns {Object} - List of documents
 */
function mapStateToProps(state) {
  return {
    docs: state.documents
  };
}

Search.propTypes = {
  fetchAllDocs: React.PropTypes.func.isRequired,
  docs: React.PropTypes.array.isRequired
};

export default connect(mapStateToProps, { fetchAllDocs })(Search);
