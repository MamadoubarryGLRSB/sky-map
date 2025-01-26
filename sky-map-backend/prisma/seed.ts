import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Création des constellations
  const constellations = [
    { name: 'Psc' },
    { name: 'Cet' },
    { name: 'And' },
    { name: 'Cas' },
    // Ajoutez d'autres constellations selon vos données
  ];

  for (const constellation of constellations) {
    await prisma.constellation.create({
      data: constellation,
    });
  }

  // Création des étoiles
  const stars = [
    {
      hip: 124,
      hd: 224893,
      hr: 9085,
      gl: 0,
      bf: '',
      ra: 0.026949,
      dec: 61.222801,
      dist: 943.3962,
      pmra: -1.34,
      pmdec: -23.0,
      rv: 5.58,
      mag: -4.293,
      absmag: 4.85,
      spect: 'F0III',
      ci: 0.407,
      x: 454.144163,
      y: 0.0,
      z: 826.885,
      vx: 0.0,
      vy: 0.0,
      vz: 0.0,
      rarad: 0.0,
      decrad: 0.0,
      pmrarad: 0.0,
      prdecrad: 0.0,
      lum: 1.0,
      var: '',
      var_min: 0.0,
      var_max: 0.0,
      constellationId: 1, // ID de la constellation correspondante
    },
    {
      hip: 343,
      hd: 225197,
      hr: 9101,
      gl: 0,
      bf: '',
      ra: 0.072165,
      dec: -16.529036,
      dist: 90.6618,
      pmra: -60.27,
      pmdec: -27.0,
      rv: 5.78,
      mag: 0.993,
      absmag: 0.993,
      spect: 'K0III',
      ci: 1.084,
      x: 86.89952,
      y: 1.641967,
      z: -25.793323,
      vx: -3.445e-5,
      vy: 2.299e-5,
      vz: -1.754e-5,
      rarad: 0.018892655987765305,
      decrad: -0.2884861027255437,
      pmrarad: 2.606843160347223e-7,
      prdecrad: -2.92197205e-7,
      lum: 34.89795674378744,
      var: '',
      var_min: 0,
      var_max: 0,
      constellationId: 2,
    },
    // Ajoutez d'autres étoiles selon vos données
  ];

  for (const star of stars) {
    await prisma.star.create({
      data: star,
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
