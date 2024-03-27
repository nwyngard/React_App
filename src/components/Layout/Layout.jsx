import { Outlet } from "react-router-dom";

import Header from "../Header";

const Layout = () => {
    return ( 
        <div className="app">
            <Header />
            {/*App content*/}
            <div className="appContent">
                <Outlet />
            </div>  
        </div>
     );
}
 
export default Layout;