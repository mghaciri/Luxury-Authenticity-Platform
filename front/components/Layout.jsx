"use client";
import Header from "./Header";
// import Footer from "./Footer";
import { StatusProvider } from "../context/StatusContext";

const Layout = ({ children }) => {
  return (
    <div className="app">
      <Header />
      <StatusProvider>
        <main className="main">{children}</main>
      </StatusProvider>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
