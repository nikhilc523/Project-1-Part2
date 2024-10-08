# Use a specific version of the official Nginx image
FROM nginx:1.23

# Copy the HTML files to the Nginx HTML directory
COPY ./home.html /usr/share/nginx/html/home.html
COPY ./about.html /usr/share/nginx/html/about.html
COPY ./contact.html /usr/share/nginx/html/contact.html
COPY ./sample.html /usr/share/nginx/html/sample.html

# Copy CSS files to the Nginx HTML directory
COPY ./style.css /usr/share/nginx/html/style.css
COPY ./responsive-style.css /usr/share/nginx/html/responsive-style.css
COPY ./contact.css /usr/share/nginx/html/contact.css

# Copy JavaScript files to the Nginx HTML directory
COPY ./js/main.js /usr/share/nginx/html/js/main.js

# Copy images to the Nginx HTML directory
COPY ./imgs /usr/share/nginx/html/imgs

# Copy screenshots to the Nginx HTML directory
COPY ./Screenshot /usr/share/nginx/html/Screenshot

# Copy the custom Nginx configuration file
COPY ./default.conf /etc/nginx/conf.d/

# Expose port 80
EXPOSE 80
