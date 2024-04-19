FROM richarvey/nginx-php-fpm:latest

# RUN curl -sS https://getcomposer.org/installer | php -- \
# --install-dir=/usr/bin --filename=composer && chmod +x /usr/bin/composer

COPY . .

RUN apk update
RUN apk add --no-cache npm

RUN npm install
RUN npm run build

# Image config
ENV SKIP_COMPOSER 1
ENV WEBROOT /var/www/html/public
ENV PHP_ERRORS_STDERR 1
ENV RUN_SCRIPTS 1
ENV REAL_IP_HEADER 1

# Laravel config
ENV APP_ENV production
ENV APP_DEBUG false
ENV LOG_CHANNEL stderr

# Allow composer to run as root
ENV COMPOSER_ALLOW_SUPERUSER 1

CMD ["/start.sh"]
