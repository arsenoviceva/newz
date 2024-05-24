import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { LuSendHorizonal } from "react-icons/lu";
import { LiaEnvelopeSolid } from "react-icons/lia";

export const SubscribeModal = ({ open, close }) => {
  return (
    <Modal show={open}>
      <Modal.Header>
        <Modal.Title>Subscribe to our news letter</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="send-email-form">
          <LiaEnvelopeSolid className="text-white fs-3 d-none d-md-block" />
          <input
            type="text"
            className="form-input"
            placeholder="Enter your email"
          />
          <div className="rounded-icon">
            <LuSendHorizonal className="text-primary cursor-pointer" />
          </div>
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary rounded-0" onClick={close}>
          Close
        </Button>
        <Button variant="primary rounded-0" onClick={close}>
          Save changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
