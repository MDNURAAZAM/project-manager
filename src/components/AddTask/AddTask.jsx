import React, { useEffect, useState } from "react";
import { getDate, getNextId } from "../../utils";
import { useTasks } from "../../contexts/TaskContext";

const AddTask = ({ onHide }) => {
  const { tasks, dispatch } = useTasks();

  const [formData, setFormData] = useState({
    taskName: "",
    description: "",
    date: getDate(),
    category: "todo",
  });

  const resetForm = () => {
    setFormData({
      taskName: "",
      description: "",
      date: getDate(),
      category: "todo",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCancelClick = () => {
    onHide();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const action = {
      type: "added",
      payload: {
        id: getNextId(tasks),
        ...formData,
      },
    };

    dispatch(action);
    onHide();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="flex items-center justify-center p-4 text-white">
          <div className="w-full max-w-md rounded-lg bg-gray-800 shadow-xl">
            <div className="p-6">
              <h2 className="mb-6 text-2xl font-bold text-green-400">
                Create Task
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="taskName"
                    className="mb-1 block text-sm font-medium text-gray-300"
                  >
                    Task Name
                  </label>
                  <input
                    type="text"
                    id="taskName"
                    name="taskName"
                    required
                    value={formData.taskName}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="description"
                    className="mb-1 block text-sm font-medium text-gray-300"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows="3"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                  ></textarea>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="date"
                    className="mb-1 block text-sm font-medium text-gray-300"
                  >
                    Due Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="category"
                    className="mb-1 block text-sm font-medium text-gray-300"
                  >
                    Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="todo">To-Do</option>
                    <option value="onprogress">On Progress</option>
                    <option value="done">Done</option>
                    <option value="revised">Revised</option>
                  </select>
                </div>

                <div className="flex justify-end space-x-3">
                  <button
                    className="rounded-md border border-gray-600 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                    onClick={handleCancelClick}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    Create Task
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
