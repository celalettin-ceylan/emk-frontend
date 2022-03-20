import Header from "./Header.js";
function Layout({children}){
    return (
        <div className="layout">
            <Header/>
            {children}
        </div>
    );
}

export default Layout;