import { useEffect, useState } from "react";
import { Input, Modal, notification } from "antd";
import { createUserAPI } from "../../services/api.service";


const UpdateUserModal = (props) => {

    const [id, setId] = useState("");

    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");

    const { isModalUpdateOpen, setIsModalUpdateOpen, dataUpdate, setDataUpdate } = props;


    //next dataUpdate != prev dataUpdate 
    useEffect(() => {
        if (dataUpdate) {
            setId(dataUpdate._id);
            setFullName(dataUpdate.fullName);
            setPhone(dataUpdate.phone);
        }

    }, [dataUpdate])


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
        setId("");
        setPhone("");
        setIsModalUpdateOpen(false);
        setDataUpdate(null);

    }



    return (
        <Modal title="Update User"
            open={isModalUpdateOpen}
            onOk={() => { handleOnSubmitBtn(); }}
            onCancel={() => {
                resetAndCloseModal();
            }}
            maskClosable={false}
            okText="SAVE">
            <div style={{ display: 'flex', gap: "15px", flexDirection: 'column' }}>
                <div>
                    <span>Id</span>
                    <Input value={id}
                        disabled
                    />
                </div>
                <div>
                    <span>FullName</span>
                    <Input value={fullName}
                        onChange={(event) => { setFullName(event.target.value) }} />
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