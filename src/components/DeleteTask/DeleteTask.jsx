import { useTasks } from "../../contexts/TaskContext";

const DeleteTask = ({ taskId, onHide }) => {
  const { dispatch } = useTasks();

  const handleDeleteTask = () => {
    const action = {
      type: "deleted",
      payload: {
        id: taskId,
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
              <h3 className="mb-6 text-2xl font-semibold text-white">
                Are you sure you want to delete this task?
              </h3>
              <div className="flex justify-end space-x-3">
                <button
                  type="submit"
                  className="rounded-md border border-gray-600 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                  onClick={() => onHide()}
                >
                  Cancel
                </button>
                <button
                  style={{ backgroundColor: "red" }}
                  type="submit"
                  className="rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white shadow-sm "
                  onClick={handleDeleteTask}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteTask;
