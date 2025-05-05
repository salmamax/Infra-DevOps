FROM php:8.3-fpm

# 1. Instalar dependencias y extensiones
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    && docker-php-ext-install pdo_mysql opcache \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# 2. Configurar PHP para producción
RUN mv "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini"

# 3. Optimizar opcache (para Symfony)
RUN echo "opcache.enable=1" >> /usr/local/etc/php/conf.d/opcache.ini && \
    echo "opcache.enable_cli=1" >> /usr/local/etc/php/conf.d/opcache.ini && \
    echo "opcache.memory_consumption=128" >> /usr/local/etc/php/conf.d/opcache.ini && \
    echo "opcache.max_accelerated_files=10000" >> /usr/local/etc/php/conf.d/opcache.ini

# 4. Instalar Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# 5. Instalar dependencias de Symfony
WORKDIR /var/www/html
COPY backend/composer.* ./
RUN composer install --no-dev --no-scripts --optimize-autoloader

# 6. Copiar el código y optimizar
COPY backend .
RUN composer dump-autoload --optimize && \
    php bin/console cache:clear --env=prod && \
    chown -R www-data:www-data var/

# 7. Puerto y healthcheck (opcional)
EXPOSE 9000
HEALTHCHECK --interval=30s --timeout=3s \
    CMD php-fpm -t || exit 1
