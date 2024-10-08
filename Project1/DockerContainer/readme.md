# Docker Setup for Cal State East Bay Food App

This repository contains the Docker setup for the Bigbites Food App, which serves static content using Nginx.

## Prerequisites
- An AWS account to create an EC2 instance.
- A Docker Hub account to push and pull Docker images.
- Basic knowledge of terminal commands and SSH.

## Creating an Amazon EC2 Instance

1. **Log In to AWS Management Console**
   - Go to the AWS Management Console and log in with your AWS account credentials.

2. **Access the EC2 Dashboard**
   - Use the search bar to type **EC2** and click on **EC2** from the search results.

3. **Launch a New EC2 Instance**
   - Click the **Launch Instance** button.

4. **Choose an Amazon Machine Image (AMI)**
   - Select an **Ubuntu AMI** (ensure it is Free Tier eligible, such as Ubuntu 22.04 LTS).

5. **Choose an Instance Type**
   - Select **t2.micro**, which is Free Tier eligible.

6. **Configure Instance Details**
   - Configure any specific details as needed (default settings are usually sufficient).

7. **Add Storage**
   - Leave the default settings, typically an 8GB root volume.

8. **Add Tags (Optional)**
   - Add tags for better management, e.g., Key: **Name**, Value: **BigBite**.

9. **Configure Security Group**
   - Create a new security group or select an existing one. 
   - Add rules to allow necessary traffic:
     - Type: **Custom TCP** | Protocol: **TCP** | Port Range: **8080** | Source: **Anywhere (0.0.0.0/0)**
     - Type: **SSH** | Protocol: **TCP** | Port Range: **22** | Source: **My IP** (for security).

10. **Review and Launch**
    - Review your configurations and click **Launch**.
    - Create or select a key pair for SSH access, then download the key pair file (.pem).

11. **Access Your Instance**
    - Note the **Public IPv4 address** of your EC2 instance from the Instances tab.

## Docker Setup

### Dockerfile

The Dockerfile for the Cal State East Bay Food App is as follows:

```dockerfile
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
COPY ./Screenshot /usr/share/nginx/html/Screenshot

# Copy the custom Nginx configuration file
COPY ./default.conf /etc/nginx/conf.d/

# Expose port 80
EXPOSE 80
