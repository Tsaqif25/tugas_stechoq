-- CreateTable
CREATE TABLE `obat` (
    `ID_Obat` VARCHAR(50) NOT NULL,
    `NamaObat` VARCHAR(50) NOT NULL,
    `stok` INTEGER NOT NULL,

    PRIMARY KEY (`ID_Obat`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `obatkeluar` (
    `Id_ObatKeluar` VARCHAR(10) NOT NULL,
    `ID_Obat` VARCHAR(10) NOT NULL,
    `TanggalKeluar` DATE NOT NULL,
    `Jumlah` INTEGER NOT NULL,

    PRIMARY KEY (`Id_ObatKeluar`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `obatmasuk` (
    `Id_ObatMasuk` VARCHAR(20) NOT NULL,
    `ID_Obat` VARCHAR(20) NOT NULL,
    `Jumlah` INTEGER NOT NULL,

    PRIMARY KEY (`Id_ObatMasuk`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
