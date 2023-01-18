const Task = require("../models/Task");
import asyncWrapper from "../middleware/async";

const getAllTasks = asyncWrapper(async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: "There was an error :(" });
  }
});

const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
};

const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });

    if (!task) {
      return res.status(404).json({ msg: `No task found with ID: ${taskID}.` });
    }
  } catch (error) {
    res.status(500).json({ msg: "There was an error :(" });
  }
};

const updateTask = (req, res) => {
  try {
    const { id: taskID } = req.params;

    const task = Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!task) {
      return res.status(404).json({ msg: `No task found with ID: ${taskID}.` });
    }

    res.status(200).json({ id: taskID, data: req.body });
  } catch (error) {
    res.status(500).json({ msg: "There was an error :(" });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `No task found with ID: ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json({ msg: "There was an error :(" });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
