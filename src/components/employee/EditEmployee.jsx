import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const EditEmployee = (props) => {

    const { fname, lname, age } = props;

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button onClick={handleShow}>Update</button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Update Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form id="editmodal" className="w-full max-w-sm">
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <lable
                                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                    for="fname">
                                    First Name
                                </lable>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700"
                                    id="fname"
                                    type="text"
                                    value={fname}
                                />
                            </div>
                        </div>
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <lable
                                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                    for="lname">
                                    Last Name
                                </lable>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700"
                                    id="lname"
                                    type="text"
                                    value={lname} />
                            </div>
                        </div>
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <lable
                                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                    for="age">
                                    Age
                                </lable>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700"
                                    id="age"
                                    type="number"
                                    value={age} />
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button
                        className="bg-slate-500 hover:bg-blue-700 tẽt-ưhite font-bold py-2 px-4 rounded"
                        onClick={handleClose}>
                        Close
                    </button>
                    <button
                        className="bg-purple-600 hover:bg-purple-700 tẽt-ưhite font-bold py-2 px-4 rounded"
                        form="editmodal">
                        Update
                    </button>
                    {/* đặt id cho form : editmodal , bấm vào nút này nếu nó refresh là thành công */}
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditEmployee;