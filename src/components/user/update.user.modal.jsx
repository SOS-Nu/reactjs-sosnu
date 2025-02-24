import { useEffect, useState } from "react";
import { Input, Modal, notification } from "antd";
import { createUserAPI, updateUserAPI } from "../../services/api.service";


const UpdateUserModal = (props) => {

    const [id, setId] = useState("");

    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const { loadUser } = props;


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


        const res = await updateUserAPI(id, fullName, phone);
        if (res.data) {
            notification.success({
                message: "Update User",
                description: "Update User success"
            })
            resetAndCloseModal();
            await loadUser();

            // await loadUser();
        } else {
            notification.error({
                message: "update users faill",
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
            onOk={() => { handleOnSubmitBtn() }}
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