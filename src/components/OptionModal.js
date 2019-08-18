import React from "react";
import Modal from "react-modal";

const OptionModal = props => (
  /*   selectdOtopn is going to be either undefind or string 'txt' , so we convert it to 
   true boolean by the use of !!. True boolean isn't boolean 'true' but the real boolean values
   string 'txt' or undefind.
    */
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleCloseSelectedOption}
    /*    onAfterOpen={this.afterOpenModal}
   style={customStyles} */
    contentLabel="Selected Option"
  >
    <h3> Selected Option</h3>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button onClick={props.handleCloseSelectedOption}>Okay</button>
  </Modal>
);

export default OptionModal;
