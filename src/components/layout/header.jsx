import { Link, useNavigate } from 'react-router-dom';
// import './header.css';
import { Menu, message } from 'antd';
import { AliwangwangOutlined, BookOutlined, HomeOutlined, LoginOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/auth.context';
import { logOutAPI } from '../../services/api.service';


const Header = () => {

    const { user, setUser } = useContext(AuthContext)
    const [current, setCurrent] = useState('home');
    const navigate = useNavigate();


    const onClick = (e) => {
        setCurrent(e.key);
    };

    const handleLogout = async () => {
        const res = await logOutAPI();


        if (res.data) {
            localStorage.removeItem("access_token")
            setUser(
                {
                    email: "",
                    phone: "",
                    fullName: "",
                    role: "",
                    avatar: "",
                    id: ""
                }
            )
            message.success("logout thành công")
            navigate("/")
        }
    };

    const items = [
        {
            label: <Link to={'/'}>Home</Link>,
            key: 'home',
            icon: <HomeOutlined />
        },
        {
            label: <Link to={'/users'}>Users</Link>,
            key: 'users',
            icon: <UserOutlined />,
        },
        {
            label: <Link to={'/books'}>Books</Link>,
            key: 'books',
            icon: <BookOutlined />

        },


        ...(!user.id) ? [{
            label: <Link to={"/login"}>Đăng nhập</Link>,
            key: 'login',
            icon: <LoginOutlined />
        }] : [{
            label: `Welcome ${user.fullName}`,
            key: 'setting',
            icon: <AliwangwangOutlined />,
            children: [
                {
                    label: <span onClick={() => handleLogout()}>Đăng Xuất</span>,
                    key: 'logout',
                },
            ]
        }],
        //... (spead syntax) dùng để phá dấu ngoặc {} hoac [] của mảng hoặc object




    ];


    return (
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />

    )
}

export default Header;