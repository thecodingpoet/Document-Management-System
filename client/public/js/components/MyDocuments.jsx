/* eslint-disable no-undef */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddModal from './AddModal.jsx';
import AddBtn from './AddButton.jsx';
import ViewMyDocuments from './ViewMyDocuments.jsx';
import EditDocument from './EditDocument.jsx';

/**
 * @class MyDocuments
 * @extends {Component}
 */
class MyDocuments extends Component {
  /**
   * Creates an instance of MyDocuments.
   * @param {any} props - props
   * @memberOf MyDocuments
   */
  constructor(props) {
    super(props);
    this.state = {
      document: {}
    };
    this.documentSelected = this.documentSelected.bind(this);
    this.user = this.props.user;
  }

  /**
   * @returns {void}
   * @memberOf MyDocuments
   */
  componentDidMount() {
    $('.modal').modal();
    $('select').material_select();
  }


  /**
   * @param {any} document - document
   * @returns {void}
   * @memberOf MyDocuments
   */
  documentSelected(document) {
    this.setState({ document });
  }

  /**
   * @returns {jsx} - My DOcuments Component
   * @memberOf MyDocuments
   */
  render() {
    return (
      <div className="row">
        <AddModal />
        <EditDocument actualDocument={this.state.document} />

        <ViewMyDocuments
          documentSelected={this.documentSelected}
          user={this.user}
        />
        <AddBtn />

      </div>
    );
  }

}

MyDocuments.propTypes = {
  user: React.PropTypes.object.isRequired
};

/**
 * @param {any} state - state
 * @returns {Object} - user object
 */
function mapStateToProps(state) {
  return {
    user: state.auth
  };
}

export default connect(mapStateToProps, null)(MyDocuments);
