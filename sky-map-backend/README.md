Guide d'installation - Sky Map Project
Configuration requise

Docker
Node.js (v18+)
npm

Installation étape par étape
# 1. Lancer la base de données
docker-compose up -d

# 2. Cloner le projet
git clone https://github.com/MamadoubarryGLRSB/sky-map.git
cd sky-map-backend

# 3. Installer les dépendances
npm install

# 4. Configurer l'environnement
cp .env.example .env
# Modifier .env si nécessaire avec vos identifiants PostgreSQL

# 5. Initialiser la base de données
npx prisma migrate dev
npx prisma db seed

# 6. Lancer l'application
npm run start:dev


L'application sera disponible sur http://localhost:3000


Test des endpoints

http://localhost:3000/stars/nearest-visible
http://localhost:3000/stars/brightest
http://localhost:3000/stars/constellations
http://localhost:3000/stars/3/details
