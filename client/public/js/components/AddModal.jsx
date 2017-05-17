/* eslint-disable no-undef */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import SelectField from 'material-ui/SelectField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MenuItem from 'material-ui/MenuItem';
import TinyMCE from 'react-tinymce';
import { createDoc } from '../actions/documents';
import validateInput from '../validations/documents';
import { fetchAllDocs } from '../actions/documents';

/**
 * @class AddModal
 * @extends {Component}
 */
class AddModal extends Component {

  /**
   * Creates an instance of AddModal.
   * @param {any} props - props
   * @memberOf AddModal
   */
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      access: 'public',
      errors: '',
      isLoading: false
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleEditorChange = this.handleEditorChange.bind(this);
    this.onDropdownChange = this.onDropdownChange.bind(this);
  }

  /**
   * @returns { void }
   * @memberOf AddModal
   */
  componentDidMount() {
    $('select').material_select();
  }

  /**
   * This function gets called when the submit button is clicked
   * @param {any} event - event
   * @memberOf AddModal
   * @returns {void}
   */
  onSubmit(event) {
    event.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.createDoc(this.state)
      .then(() => {
        Materialize.toast('Document Created', 4000, 'green');
        this.props.fetchAllDocs();
        $('#modal1').modal('close');
      });
    }
  }

  /**
   * @param {any} event - event
   * @memberOf AddModal
   * @returns {void}
   */
  onChange(event) {
    if (!!this.state.errors[event.target.name]) {
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
   * @param {any} index - index of the dropdown
   * @param {any} value - value of the dropdown
   * @memberOf AddModal
   * @returns {void}
   */
  onDropdownChange(event, index, value) {
    this.setState({ access: value });
  }

  /**
   * @param {any} event - event
   * @memberOf AddModal
   * @returns {void}
   */

  /**
   * @returns { Boolean } - True if valid. False Otherwise
   * @memberOf AddModal
   */
  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if (!isValid) {
      this.setState({ errors });
    }

    return isValid;
  }

  /**
   * Handles editor onchange event
   * @param {any} event - event
   * @memberOf AddModal
   * @returns {void}
   */
  handleEditorChange(event) {
    if (!!this.state.errors.content) {
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
   * @returns {jsx} - Add Modal Component
   * @memberOf AddModal
   */
  render() {
    const { errors, title, content, isLoading } = this.state;
    return (
      <div id="modal1" className="modal">
        <div className="modal-content">
          <h5>New Document</h5>
          <form onSubmit={this.onSubmit}>
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
                  className="modal-action modal-close
                  waves-effect waves-green btn-flat"
                >Cancel</a>
                <input
                  id="createBtn"
                  type="submit"
                  className="modal-action waves-effect waves-green btn-flat"
                  value="Submit"
                  disabled={isLoading}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

AddModal.propTypes = {
  createDoc: React.PropTypes.func.isRequired,
  fetchAllDocs: React.PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  newDocuments: state.documents,
});

export default connect(mapStateToProps,
{ createDoc, fetchAllDocs })(AddModal);
