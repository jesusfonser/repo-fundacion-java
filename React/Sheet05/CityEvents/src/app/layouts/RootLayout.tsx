import { Outlet, Link } from "react-router";

export default function RootLayout() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/help">Help</Link>
          </nav>
          <main>
              <Outlet></Outlet>
          </main>
    </>
  );
}
