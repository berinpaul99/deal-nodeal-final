import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalExample = (props) => {

    const [modal, setModal] = useState(true);
    const toggle = () => setModal(!modal);
    return (
        <div>
            {/* <Button color="danger" onClick={toggle}>{"buttonLabel"}</Button> */}
            <Modal isOpen={props.openErrorModal && modal} toggle={toggle}>
                <ModalHeader>Instruction</ModalHeader>
                <ModalBody>
                    Please switch over to landscape mode to proceed
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>Ok</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalExample;