import { Button, Result } from "antd";
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();

    return (

        <Result
            status="403"
            title="403"
            subTitle={error.statusText || error.message}
            extra={<Button type="primary">
                <Link to="/">
                    <span>
                        back to home page

                    </span>
                </Link></Button>}
        />
    );
}

