import Management from "../models/managementModel.js";

// Create
export const create = async (req, res) => {
  try {
    const employee = new Management(req.body);
    await employee.save();
    res.status(201).json({ success: true, data: employee });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update
export const update = async (req, res) => {
  try {
    const updatedEmployee = await Management.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    if (!updatedEmployee) {
      return res
        .status(404)
        .json({ success: false, message: "Emloyee not found" });
    }
    res.status(200).json({ success: true, data: updatedEmployee });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete
export const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteEmployee = await Management.findByIdAndDelete(id);
    if (!deleteEmployee) {
      return res
        .status(404)
        .json({ success: false, message: "Employee not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Employee deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get all
export const all = async (req, res) => {
  console.log(req.user);
  try {
    const employee = await Management.find();
    res.status(200).json({ success: true, data: employee });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
