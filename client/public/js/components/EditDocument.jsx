/* eslint-disable no-undef */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import SelectField from 'material-ui/SelectField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MenuItem from 'material-ui/MenuItem';
import TinyMCE from 'react-tinymce';
import { editDoc } from '../actions/documents';
import { fetchAllDocs } from '../actions/documents';

/**
 * @class EditDocument
 * @extends {Component}
 */
class EditDocument extends Component {

  /**
   * Creates an instance of EditDocument.
   * @param {any} props - props
   * @memberOf EditDocument
   */
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      access: 'public',
      errors: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleEditorChange = this.handleEditorChange.bind(this);
    this.onDropdownChange = this.onDropdownChange.bind(this);
  }

  /**
   * @returns {void}
   * @memberOf EditDocument
   */
  componentDidMount() {
    $('select').material_select();
  }

  /**
   * @param {any} nextProps - nextPrps
   * @memberOf EditDocument
   * @returns {void}
   */
  componentWillReceiveProps(nextProps) {
    if (nextProps, nextProps.currentDocument.hasOwnProperty('access')) {
      this.setState({
        title: nextProps.currentDocument.title,
        content: nextProps.currentDocument.content,
        access: nextProps.currentDocument.access
      });
      tinymce.activeEditor.setContent(nextProps.currentDocument.content);
    }
  }


  /**
   * @param {any} event -event
   * @memberOf EditDocument
   *  @returns {void}
   */
  onChange(event) {
    if (this.state.errors[event.target.name]) {
      const errors = Object.assign({}, this.state.errors);
      delete errors[event.target.name];
      this.setState({
        [event.target.name]: event.target.value,
        errors
      });
    } else {
      this.setState({ [event.target.name]: event.target.value });
    }
  }

  /**
   * @param {any} event - event
   * @memberOf EditDocument
   * @returns {void}
   */
  onSubmit(event) {
    event.preventDefault();
    this.setState({ errors: {}, isLoading: true });
    this.props.editDoc(this.state, this.props.currentDocument.id, 'DocumentId')
    .then(() => {
      this.props.fetchAllDocs();
      $('#editDoc').modal('close');
    });
  }

  /**
   * @param {any} event - event
   * @param {any} index - index
   * @param {any} value - value of dropdown
   * @returns {void}
   * @memberOf EditDocument
   */
  onDropdownChange(event, index, value) {
    this.setState({ access: value });
  }

  /**
   * @param {any} event - event
   * @returns {any} editor content
   * @memberOf EditDocument
   */
  handleEditorChange(event) {
    if (this.state.errors.content) {
      delete this.state.errors.content;
      this.setState({
        content: event.target.getContent()
      });
    } else {
      this.setState({
        content: event.target.getContent()
      });
    }
  }

  /**
   * @returns {jsx} - Edit Document
   * @memberOf EditDocument
   */
  render() {
    const { errors, title, content } = this.state;
    return (
      <div id="editDoc" className="modal">
        <div className="modal-content">
          <h5>Edit Document</h5>
          <form >
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="title"
                  name="title"
                  type="text"
                  className="validate"
                  value={title}
                  onChange={this.onChange}
                />
                <label htmlFor="title">Title</label>
                {errors.title &&
                  <span className="errorMsg">{errors.title}</span>}
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <TinyMCE
                  name="content"
                  content={content}
                  config={{
                    plugins: 'autolink link image lists print preview',
                    toolbar:
                    'undo redo | bold italic | alignleft aligncenter alignright'
                  }}
                  onChange={this.handleEditorChange}
                />
                {errors.content &&
                  <span className="errorMsg">{errors.content}</span>}
              </div>
            </div>
            <div className="row">
              <div className="col s12">
                <MuiThemeProvider >
                  <SelectField
                    floatingLabelText="Select Access Level"
                    value={this.state.access}
                    onChange={this.onDropdownChange}
                    fullWidth
                  >
                    <MenuItem value="public" primaryText="PUBLIC" />
                    <MenuItem value="private" primaryText="PRIVATE" />
                    <MenuItem value="role" primaryText="ROLE" />
                  </SelectField>
                </MuiThemeProvider >
              </div>
            </div>
            <div className="row">
              <div className="modal-footer">
                <a
                  className="modal-action modal-close waves-effect waves-green btn-flat"
                >Cancel</a>
                <input
                  type="submit"
                  className="modal-action waves-effect waves-green btn-flat"
                  value="Submit"
                  onClick={this.onSubmit}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

EditDocument.propTypes = {
  editDoc: React.PropTypes.func.isRequired,
  fetchAllDocs: React.PropTypes.func.isRequired,
  currentDocument: React.PropTypes.array.isRequired
};

/**
 * @param {any} state - state
 * @returns {object} - list of all documents
 */
function mapStateToProps(state) {
  return { document: state.documents };
}

export default connect(mapStateToProps,
  { editDoc, fetchAllDocs })(EditDocument);
