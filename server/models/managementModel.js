import mongoose from "mongoose";

const managementSchema = new mongoose.Schema({
  employeeId: {
    type: Number,
    required: true,
    unique: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  position: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  hiredate: {
    type: Date,
    required: true,
  },
});

const Management = mongoose.model("Management", managementSchema);

export default Management;
