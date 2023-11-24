const express = require("express");

// Import controller functions dari reqres module
const {
  getObat,
  getObatMasuk,
  getObatKeluar,
  createGetObat,
  createObatMasuk,
  updateObat,
  HapusObat,
} = require("../controller/reqres");

// Create an Express router
const router = express.Router();

// Define routes and link them to corresponding controller functions

// GET route to fetch the list of obat
router.get("/obat", getObat);

// POST route to create a new obat
router.post("/createObat", createGetObat);

// PUT route to update an existing obat by ID
router.put("/updateObat/:id", updateObat);

// DELETE route to delete an obat by ID
router.delete("/hapusobat/:id", HapusObat);

// GET route to fetch the list of obatmasuk
router.get("/obatmasuk", getObatMasuk);

// POST route to create a new obatmasuk
router.post("/createobatmasuk", createObatMasuk);

// GET route to fetch the list of obatkeluar
router.get("/obatkeluar", getObatKeluar);

// Export the router for use in other files
module.exports = router;
