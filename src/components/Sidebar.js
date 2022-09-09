import React, { useState } from "react";
import Content from "./Content";
export default function IndexPage() {
  const [show, setShow] = useState(false);
  // const [profile, setProfile] = useState(false);
  // const [menu, setMenu] = useState(false);

  // const [projects, setprojects] = useState([
  //   { name: "react" },
  //   { name: "yes " },
  // ]);
  // const [menu1, setMenu1] = useState(false);
  // const [menu2, setMenu2] = useState(false);
  // const [menu3, setMenu3] = useState(false);
  const [addShow, setAddShow] = useState(false);
  // const [projectName, setProjectName] = useState("");
  // useEffect(() => {
  // firebase().collection('projects').onSnapshot((snapshot)=>{
  //  snapshot.exists
  // })

  //   return () => {

  //   }
  // }, [])
  return (
    <>
      <div className="w-full h-full bg-gray-200">
        <div className="flex flex-no-wrap">
          {/* Sidebar starts */}
          <div className="absolute lg:relative w-64 h-screen shadow bg-gray-100 hidden lg:block side_bar">
            <ul aria-orientation="vertical" className="">
              <li className="text-center pl- cursor-pointer text-white text-sm leading-3 tracking-normal pb-4 pt- text-indigo-700 focus:text-indigo-700 focus:outline-none">
                <p className="mb-6">Projects</p>
                <ul className="text- project_list">
                  <li>One</li>
                  <li>Two</li>
                  <li>Three</li>
                  <li>Four</li>
                  <li>Five</li>
                  <li>Six</li>
                  <li>Seven</li>
                  <li>Eight</li>
                  <li>Nine</li>
                  <li>Ten</li>
                </ul>
                <button
                  onClick={() => setAddShow(!addShow)}
                  className="mb-6 bg-blue-500  text-white font-bold py-2 px-4 rounded-full project_button"
                  type="button"
                  id="pro_btn"
                >
                  +Add Project
                </button>
                {addShow === true ? (
                  <div id="hide_div">
                    <div>
                      <input
                        className="mb-4 shadow appearance-none border rounded w-full w-44 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Project name"
                        // onChange={(projectName) => setProjectName(projectName)}
                        // value={projectName}
                      />
                    </div>
                    <div>
                      <button class="mr-3 bg-red-500  text-white font-bold py-2 px-4 rounded cancel_button">
                        Cancel
                      </button>
                      <button class="bg-gray-500  text-white font-bold py-2 px-4 rounded save_button">
                        Add
                      </button>
                    </div>
                  </div>
                ) : (
                  []
                )}
              </li>
              {/* <ul>
                {projects.map((item, index) => {
                  return <li>{item.name}</li>;
                })}
              </ul> */}
            </ul>
          </div>
          {/*Mobile responsive sidebar*/}
          <div
            className={
              show
                ? "w-full h-full absolute z-40  transform  translate-x-0 "
                : "   w-full h-full absolute z-40  transform -translate-x-full"
            }
            id="mobile-nav"
          >
            <div
              className="bg-gray-800 opacity-50 absolute h-full w-full lg:hidden"
              onClick={() => setShow(!show)}
            />
            <div className="absolute z-40 sm:relative w-64 md:w-96 shadow pb-4 bg-gray-100 lg:hidden transition duration-150 ease-in-out h-full mobile_side">
              <div className="flex flex-col justify-between h-full w-full">
                <div>
                  <ul aria-orientation="vertical" className=" py-6">
                    <li className="text-center pl- cursor-pointer text-white text-sm leading-3 tracking-normal pb-4 pt-5 text-indigo-700 focus:text-indigo-700 focus:outline-none">
                      <p className="mb-6">Projects</p>
                      <button
                        onClick={() => setAddShow(!addShow)}
                        className="mb-6 bg-blue-500  text-white font-bold py-2 px-4 rounded-full project_button"
                        type="button"
                        id="pro_btnmob"
                      >
                        +Add Project
                      </button>
                      {addShow === true ? (
                        <div id="hide_mob">
                          <div>
                            <input
                              className="mb-4 shadow appearance-none border rounded w-full w-44 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              type="text"
                              placeholder="Project name"
                            />
                          </div>
                          <div>
                            <button class="mr-3 bg-red-500  text-white font-bold py-2 px-4 rounded cancel_button">
                              Cancel
                            </button>
                            <button class="bg-gray-500  text-white font-bold py-2 px-4 rounded save_button">
                              Add
                            </button>
                          </div>
                        </div>
                      ) : (
                        []
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/*Mobile responsive sidebar*/}
          {/* Sidebar ends */}
          <div className="w-full height__100vh">
            {/* Navigation starts */}
            <nav className="h-16 flex items-center lg:items-stretch justify-end lg:justify-between bg-white shadow relative z-0">
              <div
                className="text-gray-600 mr-8 visible lg:hidden relative"
                onClick={() => setShow(!show)}
              >
                {show ? (
                  " "
                ) : (
                  <svg
                    aria-label="Main Menu"
                    aria-haspopup="true"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-menu cursor-pointer"
                    width={30}
                    height={30}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1={4} y1={8} x2={20} y2={8} />
                    <line x1={4} y1={16} x2={20} y2={16} />
                  </svg>
                )}
              </div>
            </nav>
            <Content />
            {/* Navigation ends */}
            {/* Remove class [ h-64 ] when adding a card block */}
          </div>
        </div>
      </div>
    </>
  );
}
