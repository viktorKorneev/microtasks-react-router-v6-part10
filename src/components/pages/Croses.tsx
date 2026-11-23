import {Outlet} from "react-router-dom";

export const Croses = () => {
    return (
        <>
        <div>HEADER</div>
            <Outlet/>
        <div>FOOTER</div>
        </>
    )
}