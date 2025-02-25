import { Drawer } from 'antd';
import { useState } from 'react';

const ViewUserDetail = (props) => {
    const { dataDetail, setDataDetail, isDetailOpen, setIsDetailOpen } = props;

    const [selectedFile, setSelectedFile] = useState(null)
    const [preview, setPreview] = useState(null)


    const handleOnChangeFile = (event) => {
        if (!event.target.files || event.target.files.length === 0) {
            setSelectedFile(null)
            setPreview(null)
            return;
        }

        // I've kept this example simple by using the first image instead of multiple
        const file = event.target.files[0]
        if (file) {
            setSelectedFile(file)
            setPreview(URL.createObjectURL(file))
        }
        console.log(preview);
    }


    return (
        <>
            <Drawer
                width={"40vw"}
                title="Chi tiết user" onClose={() => {
                    setDataDetail(null);
                    setIsDetailOpen(false);
                }}
                open={isDetailOpen}
            >
                {
                    dataDetail ? <>
                        <p>Id: {dataDetail._id} </p>
                        <br />
                        <p>FullName: {dataDetail.fullName}</p>
                        <br />

                        <p>Email: {dataDetail.email} </p>
                        <br />

                        <p>PhoneNumber: {dataDetail.phone} </p>
                        <p>Avartar:</p>
                        <br />
                        <div style={{ margintop: "10px", height: '200px', width: '200px', border: '1px solid white' }}>
                            <img

                                style={{ height: "100%", width: "100%", objectFit: 'contain' }}
                                src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataDetail.avatar}`} alt="" />
                        </div>

                        <div>
                            <label htmlFor="btnUpload" style={{
                                cursor: 'pointer',
                                backgroundColor: 'blue',
                                color: 'white',
                                padding: '10px',
                                borderRadius: '5px'
                            }}>
                                Update Avatar
                            </label>
                            <input

                                type="file" hidden id='btnUpload'
                                // onChange={handleOnChangeFile} the same vs
                                onChange={(event) => handleOnChangeFile(event)}


                            />

                            {preview && <div style={{ margintop: "10px", height: '200px', width: '200px', border: '1px solid white' }}>
                                <img

                                    style={{ height: "100%", width: "100%", objectFit: 'contain' }}
                                    src={preview} alt="" />
                            </div>}

                        </div>
                        {/* <Button type='primary'>Update Avatar</Button> */}
                    </>
                        :
                        <>
                            <p> không có dữ liệu</p>
                        </>
                }
            </Drawer >
        </>
    );
};

export default ViewUserDetail;