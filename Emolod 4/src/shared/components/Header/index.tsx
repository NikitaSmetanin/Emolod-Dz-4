import { NavLink } from "react-router";

export default function Header() {
  return (
    <header style={{ background: "#222", color: "#fff", padding: 16, display: "flex", gap: 16 }}>
      <NavLink to="/">LOGO</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/blogs">Blogs</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/registration">Registration</NavLink>
    </header>
  );
}