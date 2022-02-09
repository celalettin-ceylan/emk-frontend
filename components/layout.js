import Header from "./header.js";
function Layout({children}){
    return (
        <div className="layout">
            <Header/>
            {children}
        </div>
    );
}

export default Layout;