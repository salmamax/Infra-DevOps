FROM php:8.3-fpm

# Instalar dependencias
RUN apt-get update && apt-get install -y \
    git unzip curl && \
    docker-php-ext-install pdo_mysql opcache && \
    apt-get clean

# Configuración de PHP-FPM
RUN echo "pm = dynamic" > /usr/local/etc/php-fpm.d/zz-docker.conf && \
    echo "pm.max_children = 20" >> /usr/local/etc/php-fpm.d/zz-docker.conf && \
    echo "pm.start_servers = 5" >> /usr/local/etc/php-fpm.d/zz-docker.conf && \
    echo "pm.min_spare_servers = 5" >> /usr/local/etc/php-fpm.d/zz-docker.conf && \
    echo "pm.max_spare_servers = 10" >> /usr/local/etc/php-fpm.d/zz-docker.conf && \
    echo "listen = 9000" >> /usr/local/etc/php-fpm.d/zz-docker.conf && \
    echo "catch_workers_output = yes" >> /usr/local/etc/php-fpm.d/zz-docker.conf

WORKDIR /var/www/html

COPY docker/php/start.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/start.sh

CMD ["start.sh"]
