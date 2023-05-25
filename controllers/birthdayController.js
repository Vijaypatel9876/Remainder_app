const Birthday = require("../models/birthdayModel");

const getAllbirthday = async (req, res) => {
  // console.log("get all birthday");

  try {
    const result = await Birthday.find({}).sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      err: error,
    });
  }
};
const getBirthday = async (req, res) => {
  try {
    const result = await Birthday.findById(req.params._id);
    res.status(200).json({
      success: true,
      message: "Data found",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Something went wrong",
      err: error,
    });
  }
};
const addBirthday = async (req, res) => {
  try {
    let addData = new Birthday({
      name: req.body.name,
      birthdate: req.body.birthdate,
      mobileNo: req.body.mobileNo,
      remaind_before: req.body.remaind_before,
      notes: req.body.notes,
    });
    let result = await addData.save();
    res.status(201).json({
      success: true,
      message: "success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "success",
      err: error,
    });
  }
};
const editBirthday = async (req, res) => {
  try {
    const updateData = req.body;
    const data = await Birthday.findOne(req.params);

    if (data != null) {
      const result = await Birthday.updateOne(
        { _id: req.params._id },
        {
          $set: {
            updateData,
          },
        }
      );
      res.status(200).json({
        success: true,
        result: result,
        message: "update success",
      });
    } else {
      throw "No data find";
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      err: error,
    });
  }
};
const deleteBirthday = async (req, res) => {
  // console.log(req.body);
  // console.log(req.params);
  let result = await Birthday.deleteOne(req.params);
  res.json({
    msg: "Birthday successfully removed",
    result: result,
  });
};

module.exports = {
  getAllbirthday,
  addBirthday,
  editBirthday,
  deleteBirthday,
  getBirthday,
};
