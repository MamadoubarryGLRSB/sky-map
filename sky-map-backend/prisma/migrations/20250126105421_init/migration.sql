-- CreateTable
CREATE TABLE "Star" (
    "id" SERIAL NOT NULL,
    "hip" INTEGER NOT NULL,
    "hd" INTEGER NOT NULL,
    "hr" INTEGER NOT NULL,
    "gl" INTEGER NOT NULL,
    "bf" TEXT NOT NULL,
    "ra" DOUBLE PRECISION NOT NULL,
    "dec" DOUBLE PRECISION NOT NULL,
    "dist" DOUBLE PRECISION NOT NULL,
    "pmra" DOUBLE PRECISION NOT NULL,
    "pmdec" DOUBLE PRECISION NOT NULL,
    "rv" DOUBLE PRECISION NOT NULL,
    "mag" DOUBLE PRECISION NOT NULL,
    "absmag" DOUBLE PRECISION NOT NULL,
    "spect" TEXT NOT NULL,
    "ci" DOUBLE PRECISION NOT NULL,
    "x" DOUBLE PRECISION NOT NULL,
    "y" DOUBLE PRECISION NOT NULL,
    "z" DOUBLE PRECISION NOT NULL,
    "vx" DOUBLE PRECISION NOT NULL,
    "vy" DOUBLE PRECISION NOT NULL,
    "vz" DOUBLE PRECISION NOT NULL,
    "rarad" DOUBLE PRECISION NOT NULL,
    "decrad" DOUBLE PRECISION NOT NULL,
    "pmrarad" DOUBLE PRECISION NOT NULL,
    "prdecrad" DOUBLE PRECISION NOT NULL,
    "lum" DOUBLE PRECISION NOT NULL,
    "var" TEXT NOT NULL,
    "var_min" DOUBLE PRECISION NOT NULL,
    "var_max" DOUBLE PRECISION NOT NULL,
    "constellationId" INTEGER,

    CONSTRAINT "Star_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Constellation" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Constellation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Star" ADD CONSTRAINT "Star_constellationId_fkey" FOREIGN KEY ("constellationId") REFERENCES "Constellation"("id") ON DELETE SET NULL ON UPDATE CASCADE;
