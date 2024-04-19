chmod -R ugo+rw /.composer
chown -R $USER:www-data /var/www/html/storage/
chown -R $USER:www-data /var/www/html/bootstrap/cache/
chmod -R 775 /var/www/html/storage/
chmod -R 775 /var/www/html/bootstrap/cache/

echo "Running composer"
composer global require hirak/prestissimo
composer install --working-dir=/var/www/html

php artisan inertia:start-ssr

echo "Caching config..."
php artisan config:cache

echo "Caching routes..."
# php artisan route:cache

echo "Running migrations..."
# php artisan migrate:fresh --seed --force

php artisan route:list
