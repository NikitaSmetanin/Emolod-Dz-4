import { Outlet } from "react-router";
import Header from "../Header";
import Footer from "../Footer";

export default function Layout() {
  return (
    <>
      <Header />
      <main style={{ minHeight: "70vh", padding: 16 }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}