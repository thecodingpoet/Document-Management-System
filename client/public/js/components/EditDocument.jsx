import React, { Component } from 'react';
import { connect } from 'react-redux';
import TinyMCE from 'react-tinymce';
import validateInput from '../validations/signup';
import { editDoc } from '../actions/documents';

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
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if (!isValid) {
      this.setState({ errors });
    }

    return isValid;
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

  onSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.editDoc(this.state).then((data) => {
        console.log(data);
        // Do something
        // this.setState({ shouldRedirect: true });
      }).catch((error) => {
        // this.setState({ errors: error.response.data, isLoading: false });
      });
    }
  }

  render() {
    const { errors, title, content, access } = this.state;
    return (
      <div id="editDocument" className="modal">
        <div className="modal-content">
         <h5>Edit Document</h5>
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
                <label htmlFor="selectArea">Access Level</label>
                <select
                  id="selectArea"
                  onChange={this.onChange}
                  value={access}
                >
                  <option value="public">Public</option>
                  <option value="private">Private</option>
                </select>
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

export default connect(null, { editDoc })(EditDocument);
