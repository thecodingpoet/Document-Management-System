import React, { Component } from 'react';
import { connect } from 'react-redux';
import SelectField from 'material-ui/SelectField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MenuItem from 'material-ui/MenuItem';
import TinyMCE from 'react-tinymce';
import { editDoc } from '../actions/documents';
import { fetchPublicDocs } from '../actions/documents';

class EditDocument extends Component {

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

  componentWillReceiveProps(nextProps) {
    if (nextProps, nextProps.testDoc.hasOwnProperty('access')) {
        this.setState({
          title: nextProps.testDoc.title,
          content: nextProps.testDoc.content,
          access: nextProps.testDoc.access,
        });
        tinymce.activeEditor.setContent(nextProps.testDoc.content)
    }
  }

  componentDidMount() {
    $('select').material_select();
  }

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

  onSubmit(event) {
    event.preventDefault();
    this.setState({ errors: {}, isLoading: true });
    this.props.editDoc(this.state, this.props.testDoc.id, 'DocumentId')
    .then(() => {
      this.props.fetchPublicDocs();
      $('#editDoc').modal('close');
    });
  }

  onDropdownChange(event, index, value) {
    this.setState({ access: value });
  }

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
                    toolbar: 'undo redo | bold italic | alignleft aligncenter alignright'
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
  editDoc: React.PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return { document: state.documents };
}

export default connect(mapStateToProps, { editDoc, fetchPublicDocs })(EditDocument);
