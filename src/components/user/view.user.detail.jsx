import React from 'react';
import { Button, Drawer } from 'antd';

const ViewUserDetail = (props) => {
    const { dataDetail, setDataDetail, isDetailOpen, setIsDetailOpen } = props;

    return (
        <>
            <Drawer title="Chi tiết user" onClose={() => {
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
                    </>
                        :
                        <>
                            <p> không có dữ liệu</p>
                        </>
                }
            </Drawer>
        </>
    );
};

export default ViewUserDetail;