import React from 'react';
import { Redirect } from 'react-router';

/**
 * @export
 * @class DocumentCard
 * @extends {React.Component}
 */
export default class DocumentCard extends React.Component {
  /**
   * Creates an instance of DocumentCard.
   * @param {any} props - props
   * @memberOf DocumentCard
   */
  constructor(props) {
    super(props);
    this.showDocument = this.showDocument.bind(this);
    this.state = {
      shouldRedirect: false
    };
  }

  /**
   * @memberOf DocumentCard
   * @returns {void}
   */
  showDocument() {
    this.setState({ shouldRedirect: true });
  }

  /**
   * @returns {jsx} - Document Card jsx
   * @memberOf DocumentCard
   */
  render() {
    const { doc } = this.props;
    return (
      this.state.shouldRedirect ?
        <Redirect to={`/document/${doc.id}`} /> :
        <div className="col s12 m4">
          <div className="card grey lighten-3" onClick={this.showDocument}>
            <div className="card-content white-text cardz" >
              <span className="card-title"><b>{doc.title}</b></span>
              <p
                className="docContent" id="content" style={{ color: 'black' }}
                dangerouslySetInnerHTML={{ __html: doc.content }} 
              />
            </div>
          </div>
        </div>
    );
  }
}

DocumentCard.propTypes = {
  doc: React.PropTypes.object.isRequired
};
