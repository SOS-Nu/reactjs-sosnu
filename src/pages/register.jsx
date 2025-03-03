import { Button, Input, Form, notification, Row, Col, Divider } from "antd";
import { registerUserAPI } from "../services/api.service";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {

    const [form] = Form.useForm();
    const navigate = useNavigate();



    const onFinish = async (values) => {
        const res = await registerUserAPI(values.fullName, values.email, values.password, values.phone);
        if (res.data) {
            notification.success({
                message: "Register complete",
                description: "Register success"
            });
            navigate('/login');

        } else {
            notification.error({
                message: "Register error",
                description: JSON.stringify(res.message)
            });
        }
    }
    return (

        <Form
            form={form}
            style={{ margin: "30px" }}
            layout="vertical"
            onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        // autoComplete="off"
        >

            <h3 style={{ textAlign: "center" }}>Đăng Ký Tài Khoản</h3>
            <Row justify={"center"}>

                <Col xs={24} md={10} >
                    <Form.Item
                        label="Full Name"
                        name="fullName"
                        rules={[{
                            required: true,
                            message: 'Please input your full name!'
                        }]}

                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>

            <Row justify={"center"}>

                <Col xs={24} md={10} >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{
                            required: true,
                            message: 'Please input your Email!'
                        }]}

                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>

            <Row justify={"center"}>

                <Col xs={24} md={10} >
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{
                            required: true,
                            message: 'Please input your Password!'
                        }]}

                    >
                        <Input.Password />
                    </Form.Item>
                </Col>
            </Row>


            <Row justify={"center"}>

                <Col xs={24} md={10} >
                    <Form.Item
                        label="Phone Number"
                        name="phone"
                        rules={[

                            {
                                // required: true,
                                pattern: new RegExp(/\d+/g),
                                message: "Wrong format!"
                            }

                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>


            <Row justify={"center"}>
                <Col xs={24} md={10}>
                    <div>
                        <Button
                            onClick={() => { form.submit() }} type="primary">Register</Button>
                    </div>
                </Col>
                <Divider></Divider>
                <div>Đã Có Tài Khoản? <Link to="/login" >Đăng  Nhập Tại Đây</Link></div>
            </Row>


        </Form >

    );
}

export default RegisterPage;