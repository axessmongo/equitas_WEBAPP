import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ForgotModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className='clientLogin'
        >
            <Modal.Header closeButton className='border-0'>
                <Modal.Title id="contained-modal-title-vcenter">
                    Reset Password
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div
                    className="validate-input col-lg-8 mx-auto"
                    data-validate="Valid email is required: ex@abc.xyz"
                >
                    <input
                        className="input100"
                        type="text"
                        name="email"
                        id='email'
                        placeholder="Email"
                    />
                    <span className="focus-input100" />
                    <span className="symbol-input100">
                        <i className="fa fa-envelope" aria-hidden="true" />
                    </span>
                </div>
            </Modal.Body>
            <Modal.Footer className='border-0 justify-content-center'>
                {/* <Button onClick={props.onHide}>Close</Button> */}
                <Button className='btn btn-success'>Submit</Button>
            </Modal.Footer>
        </Modal>
    );
}