import React, { useState, useEffect } from "react";
import { firebase } from "../config/firebase";
import "firebase/firestore";
import Content from "./Content";
export default function IndexPage() {
  const [show, setShow] = useState(false);

  const [addShow, setAddShow] = useState(false);
  const [selectedName, setselectedName] = useState();
  const [inputValue, setinputValue] = useState("");
  const [projects, setprojects] = useState([]);
  const [selectedTasks, setselectedTasks] = useState([]);
  const [selectedItem, setselectedItem] = useState({});

  useEffect(() => {
    projects.map((item, index) => {
      if (index === 0) {
        setselectedItem(item);
        return;
      }
      return;
    });
  }, [projects]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("projects")
      .onSnapshot((snapshot) => {
        const resArray = [];
        snapshot.docs.map((item, index) => {
          resArray.push({ ...item.data(), docID: item.id });
        });
        setprojects(resArray);
      });
  }, []);

  const addToFirestore = async () => {
    try {
      console.log("hello", typeof firebase.firestore());
      const res = await firebase.firestore().collection("projects").add({
        title: inputValue,
        username: "Hassan",
        tasks: [],
      });
      console.log("firebase response", res);
      setinputValue("");
      setShow(false);
    } catch (error) {
      console.log(error);
    }
  };
  const projectClicked = (item, index) => {
    setselectedItem(item);
  };

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
                  {projects.map((item, index) => {
                    return (
                      <li onClick={() => projectClicked(item, index)}>
                        {item.title}
                      </li>
                    );
                  })}
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
                        onChange={(e) => setinputValue(e.target.value)}
                        value={inputValue}
                        // value={projectName}
                      />
                    </div>
                    <div>
                      <button className="mr-3 bg-gray-300  text-dark font-bold py-2 px-4 rounded cancel_button">
                        Cancel
                      </button>
                      <button
                        onClick={() => addToFirestore()}
                        className="bg-green-400 text-white font-bold py-2 px-4 rounded save_button"
                      >
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
                      <ul className="text- project_list">
                        {projects.map((item, index) => {
                          return (
                            <li onClick={() => projectClicked(item, index)}>
                              {item.title}
                            </li>
                          );
                        })}
                      </ul>
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
                              onChange={(e) => setinputValue(e.target.value)}
                              value={inputValue}
                            />
                          </div>
                          <div>
                            <button className="mr-3 bg-gray-300 text-dark font-bold py-2 px-4 rounded cancel_button">
                              Cancel
                            </button>
                            <button
                              onClick={() => addToFirestore()}
                              className="bg-green-400 text-white font-bold py-2 px-4 rounded save_button"
                            >
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
            <Content
              item={selectedItem}
              name={selectedName}
              tasks={selectedTasks}
            />
            {/* Navigation ends */}
            {/* Remove class [ h-64 ] when adding a card block */}
          </div>
        </div>
      </div>
    </>
  );
}
