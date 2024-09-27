import Link from "next/link";

const links = [
  { href: "/Our courses", label: "courses" },
  { href: "/faq", label: "drinks" },
];

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52 "
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            
            
            
          </ul>
        </div>
        <img
          src="https://ik.imagekit.io/9kllv04exw/Appready-logo.png?updatedAt=1727443711016"
          className="h-8 "
          alt="Logo"
        />
        <Link href="/" className="btn btn-ghost font-bold text-base ">
          App Ready Courses
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium text-base">
          
         
        </ul>
      </div>
      <div className="navbar-end">
        
      </div>
    </div>
  );
};

export default Navbar;
