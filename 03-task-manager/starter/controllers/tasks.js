const Task = require("../models/Task");
const { createCustomError } = require("../errors/custom-errors");
const asyncWrapper = require("../middleware/async");

// getAllTasks
const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

// createTask
const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

// getTask
const getTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  if (!task) {
    return next(createCustomError(`No task found with id ${taskID}`, 404));
  }
  res.status(200).json({ msg: `No task with id : ${taskID} found.` });
});

// updateTask
const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;

  const task = Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    return next(createCustomError(`No task found with id ${taskID}`, 404));
  }

  res.status(200).json({ id: taskID, data: req.body });
});

// deleteTask
const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });
  if (!task) {
    return next(createCustomError(`No task found with id ${taskID}`, 404));
  }
  res.status(200).json({ task });
});

// exports
module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
