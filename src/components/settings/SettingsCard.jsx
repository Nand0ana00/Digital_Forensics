import { useState, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export default function SettingsCard() {

  const [notifications, setNotifications] = useState(true);

  const { theme, setTheme } = useContext(ThemeContext);


  return (
    <div className="
      rounded-xl
      p-8
      shadow-lg
      bg-white
      dark:bg-slate-800
    ">


      <h2 className="
        text-2xl
        font-bold
        mb-8
        text-slate-900
        dark:text-white
      ">
        Application Settings
      </h2>



      <div className="space-y-6">


        {/* Notifications */}

        <div className="
          flex
          justify-between
          items-center
        ">

          <span className="
            text-slate-900
            dark:text-white
          ">
            Enable Notifications
          </span>


          <input
            type="checkbox"
            checked={notifications}
            onChange={() =>
              setNotifications(!notifications)
            }
          />


        </div>





        {/* Dark Mode */}

        <div className="
          flex
          justify-between
          items-center
        ">


          <span className="
            text-slate-900
            dark:text-white
          ">
            Dark Mode
          </span>


          <input
            type="checkbox"

            checked={theme === "dark"}

            onChange={(e)=>
              setTheme(
                e.target.checked
                ? "dark"
                : "light"
              )
            }

          />


        </div>





        {/* Name */}

        <div>


          <label className="
            block
            mb-2
            text-slate-900
            dark:text-white
          ">
            Investigator Name
          </label>


          <input

            type="text"

            defaultValue="Admin"

            className="
              w-full
              p-3
              rounded-lg
              bg-slate-100
              dark:bg-slate-700
              text-slate-900
              dark:text-white
            "

          />


        </div>





        <button

          className="
            bg-blue-600
            hover:bg-blue-700
            px-6
            py-3
            rounded-lg
            text-white
          "

        >
          Save Settings

        </button>



      </div>


    </div>
  );
}