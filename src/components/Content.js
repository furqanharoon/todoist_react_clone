import { firestore } from "firebase";
import React, { useState } from "react";
import { firebase } from "../config/firebase";
export default function Content({ item = {}, name = "", tasks = [] }) {
  const [taskShow, setTaskShow] = useState(false);
  const [title, settitle] = useState("");
  // const [description, setdescription] = useState("");

  const addTask = async () => {
    try {
      const res = await firebase
        .firestore()
        .collection("projects")
        .doc(item?.docID)
        .update({
          tasks: firestore.FieldValue.arrayUnion({ title }),
        });
      console.log(res);
      settitle("");
      setTaskShow(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="pl-7 pt-7">
      <div className="grid grid-cols-2 md:grid-cols-3 justify-center">
        <button className="today mr-3 font-bold py-2 px-4 rounded mb-3">
          Today
        </button>
        <button className="today mr-3 font-bold py-2 px-4 rounded mb-3">
          Tomorrow
        </button>
        <button className="today font-bold py-2 px-4 rounded mb-3">
          Next Week
        </button>
      </div>
      <div className="mt-7">
        <p className="text-center">{item?.title}</p>
      </div>
      {(item?.tasks || []).map((itm, index) => {
        return (
          <div className="mb-6">
            <div className="md:flex">
              <label className="block  font-bold">
                <input className="mr-2 leading-tight" type="checkbox" />
                <span className="text-sm">{itm?.title}</span>
              </label>
            </div>
            <p>{itm.desciption}</p>
          </div>
        );
      })}

      <div class="grid md:grid-cols-5 mb-4">
        <button
          onClick={() => setTaskShow(!taskShow)}
          className="today mr-3 font-bold py-2 px-4 rounded"
        >
          +Add Task
        </button>
      </div>
      {taskShow === true ? (
        <div>
          <input
            onChange={(e) => settitle(e.target.value)}
            className="mb-4 shadow appearance-none border rounded w-full w-44 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline task_input"
            type="text"
            placeholder="Task Name"
            value={title}
          />
          {/* <textarea
            onChange={(e) => setdescription(e.target.value)}
            id="message"
            value={description}
            rows="4"
            className="block p-2.5 rounded border focus:outline-none focus:shadow-outline task_textarea"
            placeholder="Task description"
          ></textarea> */}
          <div className="mt-5">
            <button
              onClick={() => addTask()}
              type="button"
              className="text-white bg-green-400 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
            >
              Save
            </button>
          </div>
        </div>
      ) : (
        []
      )}
    </div>
  );
}
