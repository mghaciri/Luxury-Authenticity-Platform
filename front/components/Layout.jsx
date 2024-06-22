import Header from "./Header";
// import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <div className="app">
            <Header />
            <main className="main">
                {children}
            </main>
            
        </div>
    )
}

export default Layout;