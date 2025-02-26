import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { fetchAllUserAPI } from '../services/api.service';
import { useEffect, useState } from 'react';



const UserPage = () => {

    const [dataUsers, setDataUsers] = useState([]);
    const [pageSize, setPageSize] = useState(10);
    const [current, setCurrent] = useState(1);
    const [total, setTotal] = useState(0);

    //empty array => run once
    useEffect(() => {
        loadUser();

    }, [current, pageSize]);

    const loadUser = async () => {
        const res = await fetchAllUserAPI(current, pageSize);

        if (res.data) {
            setDataUsers(res.data.result);
            setTotal(res.data.meta.total);
            setCurrent(res.data.meta.current);
            setPageSize(res.data.meta.pageSize);
        }
    }

    return (
        <div style={{ padding: '20px' }}>

            <UserForm loadUser={loadUser} />
            <UserTable dataUsers={dataUsers}
                loadUser={loadUser}
                pageSize={pageSize}
                current={current}
                total={total}
                setCurrent={setCurrent}
                setPageSize={setPageSize}
            />

        </div>
    );
}
export default UserPage;