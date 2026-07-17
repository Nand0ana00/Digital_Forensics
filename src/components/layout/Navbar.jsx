import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Navbar() {

  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (

    <nav
      className="
        flex
        justify-between
        items-center
        px-8
        py-4
        shadow-md

        bg-white
        dark:bg-gray-800

        text-gray-900
        dark:text-white

        border-b
        dark:border-gray-700
      "
    >

      <h1 className="
        text-2xl
        font-bold
      ">
        Digital Forensics AI
      </h1>


      <button
        onClick={handleLogout}
        className="
          bg-red-600
          px-4
          py-2
          rounded
          text-white
          hover:bg-red-700
        "
      >
        Logout
      </button>


    </nav>

  );
}