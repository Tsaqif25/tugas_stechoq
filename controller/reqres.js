const { PrismaClient } = require('@prisma/client');

// Prisma client instance for database interaction
const prisma = new PrismaClient();

// Get the list of obat from the database
const getObat = async (req, res) => {
  try {
    const dataObat = await prisma.obat.findMany();
    res.status(200).send(dataObat);
  } catch (error) {
    // Handle error
    res.status(500).json({ msg: error.message });
  }
};

// Create a new obat in the database
const createGetObat = async (req, res) => {
  const { ID_Obat, NamaObat, stok } = req.body;
  try {
    const createObat = await prisma.obat.create({
      data: { ID_Obat, NamaObat, stok },
    });

    res.status(200).send(createObat);
  } catch (error) {
    // Handle error
    res.status(500).json({ msg: error.message });
  }
};

// Update an existing obat in the database by ID
const updateObat = async (req, res) => {
  const { ID_Obat, NamaObat, stok } = req.body;
  try {
    const updateObat = await prisma.obat.update({
      where: { ID_Obat: req.params.id },
      data: { ID_Obat, NamaObat, stok },
    });

    res.status(200).json(updateObat);
  } catch (error) {
    // Handle error
     res.status(500).json({ msg: error.message });
  }
};

// Delete an obat from the database by ID
const HapusObat = async (req, res) => {
  try {
    const hapusObat = await prisma.obat.delete({
      where: { ID_Obat: req.params.id },
    });

    res.status(200).json(hapusObat);
  } catch (error) {
    // Handle error
     res.status(500).json({ msg: error.message });
  }
};

// Get the list of obatmasuk from the database
const getObatMasuk = async (req, res) => {
  try {
    const dataObat = await prisma.obatmasuk.findMany();
    res.status(200).send(dataObat);
  } catch (error) {
    // Handle error
    res.status(500).json({ msg: error.message });
  }
};

// Create a new obatmasuk in the database
const createObatMasuk = async (req, res) => {
  const { Id_ObatMasuk, ID_Obat, Jumlah } = req.body;
  try {
    const createMasuk = await prisma.obatmasuk.create({
      data: { Id_ObatMasuk, ID_Obat, Jumlah },
    });

    res.status(200).send(createMasuk);
  } catch (error) {
    // Handle error
     res.status(500).json({ msg: error.message });
  }
};

// Get the list of obatkeluar from the database
const getObatKeluar = async (req, res) => {
  try {
    const dataObat = await prisma.obatkeluar.findMany();
    res.status(200).send(dataObat);
  } catch (error) {
    // Handle error
    // res.status(500).send('Gagal');
  }
};

module.exports = {
  getObat,
  getObatMasuk,
  getObatKeluar,
  createGetObat,
  createObatMasuk,
  updateObat,
  HapusObat,
};
