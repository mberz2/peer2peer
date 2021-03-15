import React, { useState } from "react";
import useStyles from "./SimpleModalStyles";
import Modal from "./Modal";

const SimpleModal = ({ buttonLabel, children }) => {
  const classes = useStyles();
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={classes.wrapper}>
      <button
        type="button"
        className={classes.modalButton}
        onClick={() => setShowModal(true)}
      >
        {buttonLabel}
      </button>

      {showModal && (
        <Modal onCloseRequest={() => setShowModal(false)}>{children}</Modal>
      )}
    </div>
  );
};

export default SimpleModal;