import Modal from "../../UI/Modal";

const NewAddressModal = ({ onSubmit, onClose }) => {
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Modal>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label>Title</label>
          <input className="form-control" />
        </div>
        <div className="form-group">
          <label>Country</label>
          <input className="form-control" />
        </div>
        <div className="form-group">
          <label>AddressLine1</label>
          <input className="form-control" />
        </div>
        <div className="form-group">
          <label>AddressLine2</label>
          <input className="form-control" />
        </div>
        <div className="form-group">
          <label>Postal Code</label>
          <input className="form-control" />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input className="form-control" />
        </div>
        <div className="form-group">
          <label>Contact Title</label>
          <input className="form-control" />
        </div>
        <div>
          <button className="btn btn-primary">Save</button>
          <button onClick={onClose} className="btn btn-default ml-4">
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default NewAddressModal;
