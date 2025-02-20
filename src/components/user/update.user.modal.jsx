import { useState } from "react";
import { Input, Modal, notification } from "antd";
import { createUserAPI } from "../../services/api.service";


const UpdateUserModal = () => {


    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);

    const handleOnSubmitBtn = async () => {


        const res = await createUserAPI(fullName, email, password, phone);
        if (res.data) {
            notification.success({
                message: "Create users",
                description: "create users success"
            })
            resetAndCloseModal();
            // await loadUser();
        } else {
            notification.error({
                message: "create users faill",
                description: JSON.stringify(res.message)
            })
        }

        console.log("check res ", res.data);
    }

    const resetAndCloseModal = () => {
        setFullName("");
        setEmail("");
        setPassword("");
        setPhone("");
        setIsModalUpdateOpen(false);
    }



    return (
        <Modal title="Update User"
            open={isModalUpdateOpen}
            onOk={() => { handleOnSubmitBtn(); }}
            onCancel={() => resetAndCloseModal()}
            maskClosable={false}
            okText="SAVE">
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
    )
}

export default UpdateUserModal;