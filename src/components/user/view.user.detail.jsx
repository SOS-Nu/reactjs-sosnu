import { Drawer } from 'antd';

const ViewUserDetail = (props) => {
    const { dataDetail, setDataDetail, isDetailOpen, setIsDetailOpen } = props;

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
                        <div>
                            <img

                                height={150} width={250}
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
                            <input type="file" hidden id='btnUpload' />

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