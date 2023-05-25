const Users = require("../models/usersModel");
const { tokenValidation, createToken } = require("../middlewares/auth");
const Helper = require("../helpers/message");
const getAllUsers = (req, res) => {
  res.json({
    success: true,
    message: "Get user method called",
  });
};

const userSignup = async (req, res) => {
  console.log(req.body);
  const password = req.body.password;
  const email = req.body.email;
  // try {
  const findCustomer = await Users.findOne({ email: email });
  console.log(findCustomer);
  if (findCustomer && findCustomer !== null) {
    res.status(200).json({
      success: true,
      message: Helper.message.ALREADY_REG,
    });
  } else {
    let myPass = password;
    let userData = new Users({
      email: email,
      password: myPass,
    });
    let result = await userData.save();
    let token = createToken(result.email, result._id);
    res.status(201).json({
      success: true,
      message: Helper.message.SUCCESS,
      data: result,
      token: token,
    });
  }
  // } catch (error) {
  //   res.status(400).json({
  //     success: false,
  //     err: error,
  //   });
  // }
};
const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userData = await Users.findOne({ email: email });
    if (userData && userData !== null) {
      const userPassword = userData.password;
      if (password == userPassword) {
        let token = createToken(userData.email, userData._id);
        res.status(200).json({
          message: "Login successful",
          success: true,
          data: userData,
          token: token,
        });
      } else {
        // throw Helper.message.PASSWORD_NOT_MATCH;
        res.status(400).json({
          success: false,
          err: "Invalid Password entered",
        });
      }
    } else {
      res.status(400).json({
        success: false,
        err: "Details not found",
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      err: error,
    });
  }
};

const getUser = async (req, res) => {
  try {
    const result = await Users.findById(req.tokenData._id);
    console.log(result);
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

const editUser = async (req, res) => {
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
const deleteUser = async (req, res) => {
  // console.log(req.body);
  // console.log(req.params);
  let result = await Birthday.deleteOne(req.params);
  res.json({
    msg: "Birthday successfully removed",
    result: result,
  });
};

module.exports = {
  getAllUsers,
  getUser,
  userSignup,
  userLogin,
  deleteUser,
  editUser,
};
