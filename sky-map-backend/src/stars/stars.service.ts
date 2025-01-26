import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class StarsService {
  constructor(private prisma: PrismaService) {}

  // Récupère les 50 étoiles les plus proches de la Terre visibles à l'œil nu
  // Une étoile est visible à l'œil nu si sa magnitude < 6
  // Retourne aussi la constellation associée à chaque étoile
  async getNearestVisibleStars() {
    return this.prisma.star.findMany({
      where: {
        mag: { lt: 6 },
      },
      orderBy: {
        dist: 'asc',
      },
      distinct: ['hip'], // Éviter les doublons d'étoiles
      take: 50,
      include: {
        constellation: true,
      },
    });
  }
  // Récupère les 50 étoiles les plus brillantes
  // La brillance est déterminée par la magnitude (plus elle est faible, plus l'étoile est brillante)
  async getBrightestStars() {
    return this.prisma.star.findMany({
      orderBy: {
        mag: 'asc', // Tri par magnitude croissante (du plus brillant au moins brillant)
      },
      take: 50,
      include: {
        constellation: true,
      },
    });
  }

  // Récupère les constellations avec leurs étoiles associées
  async getConstellationsWithStars() {
    return this.prisma.constellation.findMany({
      distinct: ['name'], // Éviter les doublons de constellations
      include: {
        stars: true,
      },
    });
  }

  // Récupère les détails d'une étoile pour le pop-up
  async getStarDetails(starId: number) {
    return this.prisma.star.findUnique({
      where: { id: starId },
      include: {
        constellation: {
          include: {
            stars: true, // Inclut les autres étoiles de la même constellation
          },
        },
      },
    });
  }
}
