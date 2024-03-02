const inventoryModel = require("../models/inventoryModel");
const mongoose = require("mongoose");
//GET Blood Data

const bloodGroupDetailsController = async (req, res) => {
  try {
    const bloodGroups = ["O+", "O-", "AB+", "AB-", "A+", "A-", "B+", "B-"];

    const bloodGroupData = [];
    const organisation = new mongoose.Types.ObjectId(req.body.userId);
    //get single blood group using map

    await Promise.all(
      bloodGroups.map(async (bloodGroup) => {
        //count the total in blood

        const totalIn = await inventoryModel.aggregate([
          {
            $match: {
              bloodGroup: bloodGroup,
              inventoryType: "in",
              organisation,
            },
          },
          {
            $group: {
              _id: null,
              total: { $sum: "$quantity" },
            },
          },
        ]);
        const totalOut = await inventoryModel.aggregate([
          {
            $match: {
              bloodGroup: bloodGroup,
              inventoryType: "out",
              organisation,
            },
          },
          {
            $group: {
              _id: null,
              total: { $sum: "$quantity" },
            },
          },
        ]);
        //calculate total

        const availableBlood =
          (totalIn[0]?.total || 0) - (totalOut[0]?.total || 0);

        //push data
        bloodGroupData.push({
          bloodGroup,
          totalIn: totalIn[0]?.total || 0,
          totalOut: totalOut[0]?.total || 0,
          availableBlood,
        });
      })
    );
    return res.status(200).send({
      success: true,
      message: "Blood Group Data Fetch Successfully",
      bloodGroupData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in BloogGroup Data Analytics Api",
      error,
    });
  }
};

module.exports = { bloodGroupDetailsController };
