import React from 'react';
import aboutLogo from '../../images/business_people.png';

const About = () => (
  <div className="row">
    <div className="col s4 offset-s1 " id="docIcon">
      <img src={aboutLogo} alt="Document Icon" />
    </div>
    <div className="col s6" id="aboutDiv">
      <div>
        <b>Document management</b>,
          often referred to as Document Management Systems (DMS),
           is the use of a computer system and software to store,
           manage and track electronic documents and electronic images of paper
            based information captured through the use of a document scanner.
            Document management is how your organization stores,
            manages and tracks its electronic documents.
                  </div>
      <h6><b>Importance of Document Management System</b></h6>
      <ul>
        <li>Time and effort wasted in locating documents amounts to a
          lot more than one would think. Recent research has
          indicated that nearly 10% of an average office worker’s day
          is spent trying to locate existing information and documents.</li>
        <li>Redundant effort necessitated because it’s believed that it is
        often easier to recreate something than it would be to try to find it.
            </li>
        <li>Time and effort involved in figuring out who
             has the latest version
            of a document, and recovering when various revisions overwrite
          each other.</li>
        <li>Unnecessary usage of network storage devices
            and network bandwidth,
             because the documents are dispersed everywhere
             across the enterprise, rather than centralized.</li>
      </ul>
    </div>
  </div>
  );

export default About;
