import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Card from "../components/ui/Card";
import {
  FaUser,
  FaBell,
  FaPalette,
  FaServer
} from "react-icons/fa";

export default function Settings() {

  const { theme, setTheme } = useContext(ThemeContext);

  return (

    <div className="
      min-h-screen
      p-8
      bg-slate-100
      dark:bg-slate-900
    ">


      <h1 className="
        text-3xl
        font-bold
        mb-8
        text-slate-900
        dark:text-white
      ">
        Settings
      </h1>



      <div className="
        grid
        grid-cols-1
        lg:grid-cols-2
        gap-6
      ">


        {/* Profile */}
        <Card title="Profile Settings">

          <div className="flex items-center gap-4">

            <FaUser className="text-blue-400 text-3xl"/>

            <div>

              <p className="
                font-semibold
                text-slate-900
                dark:text-white
              ">
                Investigator
              </p>


              <p className="
                text-gray-600
                dark:text-gray-400
              ">
                Digital Forensics Analyst
              </p>


            </div>

          </div>

        </Card>





        {/* Notifications */}
        <Card title="Notifications">

          <div className="
            flex
            justify-between
            items-center
          ">

            <div className="
              flex
              items-center
              gap-3
            ">

              <FaBell className="text-yellow-400"/>


              <span className="
                text-slate-900
                dark:text-white
              ">
                Threat Alerts
              </span>


            </div>


            <input
              type="checkbox"
              defaultChecked
              className="w-5 h-5"
            />


          </div>

        </Card>





        {/* Appearance */}
        <Card title="Appearance">


          <div className="
            flex
            items-center
            gap-3
          ">


            <FaPalette className="text-purple-400"/>


            <select

              value={theme}

              onChange={(e)=>setTheme(e.target.value)}

              className="
                p-2
                rounded
                bg-white
                dark:bg-slate-700
                text-slate-900
                dark:text-white
                border
                dark:border-slate-600
              "

            >

              <option value="light">
                Light Mode
              </option>


              <option value="dark">
                Dark Mode
              </option>


            </select>


          </div>


        </Card>





        {/* System */}
        <Card title="System">


          <div className="
            flex
            items-center
            gap-3
          ">


            <FaServer className="text-green-400"/>


            <div>


              <p className="
                text-slate-900
                dark:text-white
              ">
                Backend Status
              </p>


              <p className="text-green-400">
                Connected
              </p>


            </div>


          </div>


        </Card>



      </div>


    </div>

  );
}