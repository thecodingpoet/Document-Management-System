import React, { Component } from 'react';
import { connect } from 'react-redux';
import TinyMCE from 'react-tinymce';
import { createDoc } from '../actions/documents';
import validateInput from '../validations/documents';

class AddModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      access: 'public',
      errors: ''
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleEditorChange = this.handleEditorChange.bind(this);
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if (!isValid) {
      this.setState({ errors });
    }

    return isValid;
  }

  onSubmit(event) {
    if (this.isValid()) {
      event.preventDefault();
      this.setState({ errors: {}, isLoading: true });
      this.props.createDoc(this.state).then((data) => {
        console.log(data);
      }).catch((err) => {
        console.log(err);
      });
    } else {
      event.preventDefault();
      // this.setState({ errors: error.response.data });
    }
  }

  onChange(event) {
    console.log(event.target.access);
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

  handleEditorChange(event) {
    console.log(!!this.state.errors.content);
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

  render() {
    const { errors, title, content, access } = this.state;
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

AddModal.propTypes = {
  createDoc: React.PropTypes.func.isRequired
};

export default connect(null, { createDoc })(AddModal);
