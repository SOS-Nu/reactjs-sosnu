import { Button, Input, Modal, notification } from "antd";
import { useState } from "react";
import { createUserAPI } from "../../services/api.service";

const UserForm = () => {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    const [isModalOpen, setIsModalOpen] = useState(false);
    // const [handleOk, setHandleOk] = useState(false);
    // const [handleCancel, setHandleCancel] = useState(false);


    const handleOnSubmitBtn = async () => {


        const res = await createUserAPI(fullName, email, password, phone);
        if (res.data) {
            notification.success({
                message: "Create user",
                description: "create user success"
            })
            setIsModalOpen(false)
        } else {
            notification.error({
                message: "create user faill",
                description: JSON.stringify(res.message)
            })
        }

        console.log("check res ", res.data);
    }
    return (
        <div className="user-form" style={{ margin: '10px' }}>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h3>Table Users</h3>
                <Button
                    onClick={() => { setIsModalOpen(true); }}
                    type="primary">Create User</Button>
            </div>
            <Modal title="Create Table"
                open={isModalOpen}
                onOk={() => { handleOnSubmitBtn(); }}
                onCancel={() => { setIsModalOpen(false) }}
                maskClosable={false}
                okText="Create">
                <div style={{ display: 'flex', gap: "15px", flexDirection: 'column' }}>
                    <div>
                        <span>FullName</span>
                        <Input value={fullName}
                            onChange={(event) => { setFullName(event.target.value) }} />
                    </div>
                    <div>
                        <span>Email</span>
                        <Input value={email}
                            onChange={(event) => { setEmail(event.target.value) }} />
                    </div>
                    <div>
                        <span>Password</span>
                        <Input.Password value={password}
                            onChange={(event) => { setPassword(event.target.value) }} />
                    </div>
                    <div>
                        <span>Phone Number</span>
                        <Input value={phone}
                            onChange={(event) => { setPhone(event.target.value) }} />
                    </div>

                </div>
            </Modal>
        </div>
    );
}

export default UserForm;