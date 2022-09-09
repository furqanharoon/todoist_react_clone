import React, { useState } from "react";
export default function Content() {
  const [taskShow, setTaskShow] = useState(false);
  return (
    <div className="pl-7 pt-7">
      <div class="grid grid-cols-5">
        <button className="today mr-3 font-bold py-2 px-4 rounded">
          Today
        </button>
        <button className="today mr-3 font-bold py-2 px-4 rounded">
          Tomorrow
        </button>
        <button className="today font-bold py-2 px-4 rounded">Next Week</button>
      </div>
      <div className="mt-7">
        <p className="text-center">Project Name</p>
      </div>
      <div class="md:flex mb-6">
        <label class="md:w-2/3 block  font-bold">
          <input class="mr-2 leading-tight" type="checkbox" />
          <span class="text-sm">Send me your newsletter!</span>
        </label>
      </div>
      <div class="md:flex mb-6">
        <label class="md:w-2/3 block  font-bold">
          <input class="mr-2 leading-tight" type="checkbox" />
          <span class="text-sm">Send me your newsletter!</span>
        </label>
      </div>
      <div class="md:flex mb-6">
        <label class="md:w-2/3 block  font-bold">
          <input class="mr-2 leading-tight" type="checkbox" />
          <span class="text-sm">Send me your newsletter!</span>
        </label>
      </div>
      <div class="md:flex mb-6">
        <label class="md:w-2/3 block  font-bold">
          <input class="mr-2 leading-tight" type="checkbox" />
          <span class="text-sm">Send me your newsletter!</span>
        </label>
      </div>
      <div class="grid grid-cols-5 mb-4">
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
            className="mb-4 shadow appearance-none border rounded w-full w-44 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline task_input"
            type="text"
            placeholder="Task Name"
          />
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 rounded border focus:outline-none focus:shadow-outline task_textarea"
            placeholder="Task description"
          ></textarea>
          <div className="mt-5">
            <button
              type="button"
              class="text-dark bg-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none "
            >
              Cancel
            </button>
            <button
              type="button"
              class="text-white bg-green-400 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none"
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
