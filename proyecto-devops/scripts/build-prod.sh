#!/bin/bash
echo "Building Angular..."
cd frontend && npm run build -- --configuration=production
cd ..

echo "Building Docker containers..."
docker-compose -f docker-compose.prod.yml build

echo "Starting services..."
docker-compose -f docker-compose.prod.yml up -d

echo "Optimizando Symfony..."
docker exec symfony_prod composer install --no-dev --optimize-autoloader
docker exec symfony_prod php bin/console cache:clear --env=prod
