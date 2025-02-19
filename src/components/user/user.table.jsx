import { Space, Table, Tag } from 'antd';
import { fetchAllUserAPI } from '../../services/api.service';
import { useState } from 'react';




const UserTable = () => {
    const [dataUsers, setDataUsers] = useState([
        {
            _id: '123',
            fullName: 'sos nu',
            email: 'saigon@gmail.com'
        }

    ]);

    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',

        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        }
    ];

    const loadUser = async () => {
        console.log("load user start")
        const res = await fetchAllUserAPI();
        console.log("load user end")
        // setDataUsers(res.data);
    }
    loadUser();


    return (
        <Table columns={columns} dataSource={dataUsers} />
    )


}

export default UserTable;