#!/bin/bash

# Configurar permisos
chown -R www-data:www-data /var/www/html/var
chmod -R 777 /var/www/html/var

# Crear archivo de prueba si no existe
if [ ! -f /var/www/html/public/ping.php ]; then
    echo "<?php echo 'pong'; ?>" > /var/www/html/public/ping.php
fi

# Iniciar PHP-FPM con logging detallado
exec php-fpm -F -R --nodaemonize
