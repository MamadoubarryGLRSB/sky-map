import { Controller, Get, Param } from '@nestjs/common';
import { StarsService } from './stars.service';

@Controller('stars')
export class StarsController {
  constructor(private starsService: StarsService) {}

  // Récupère les 50 étoiles les plus proches visibles à l'œil nu (magnitude < 6)
  @Get('nearest-visible')
  getNearestVisibleStars() {
    return this.starsService.getNearestVisibleStars();
  }

  // Récupère les 50 étoiles les plus brillantes
  @Get('brightest')
  getBrightestStars() {
    return this.starsService.getBrightestStars();
  }

  // Récupère toutes les constellations avec leurs étoiles
  @Get('constellations')
  getConstellationsWithStars() {
    return this.starsService.getConstellationsWithStars();
  }

  // Récupère les détails d'une étoile spécifique pour le pop-up
  @Get(':id/details')
  getStarDetails(@Param('id') id: string) {
    return this.starsService.getStarDetails(parseInt(id));
  }
}
