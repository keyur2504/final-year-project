const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  createInventoryController,
  getInventoryController,
  getDonarController,
  gethospitalController,
  getOrganisationController,
  getOrganisationforHospitalController,
} = require("../controllers/inventoryController");

const router = express.Router();

//Add Inventory
router.post("/create-inventory", authMiddleware, createInventoryController);

//Get All Blood Records
router.get("/get-inventory", authMiddleware, getInventoryController);

//Get Donar Records
router.get("/get-donars", authMiddleware, getDonarController);

//Get Hospitals Records
router.get("/get-hospitals", authMiddleware, gethospitalController);

//Get organisation Records
router.get("/get-organisation", authMiddleware, getOrganisationController);

//Get organisation Records
router.get(
  "/get-organisation-for-hospital",
  authMiddleware,
  getOrganisationforHospitalController
);

module.exports = router;
