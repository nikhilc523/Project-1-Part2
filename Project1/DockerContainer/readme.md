# Docker Container for BigBites Project

## Overview

This repository contains a Docker container for hosting a static website on an Amazon EC2 instance. The container includes all necessary software to run the website.

## Prerequisites

- An AWS account
- Basic knowledge of Docker and EC2
- Docker installed on your local machine (optional for building images locally)

## Steps to Create and Deploy the Docker Container

### 1. Set Up EC2 Instance
- Launch an EC2 instance with Ubuntu (20.04 LTS recommended).
- Configure security groups to allow HTTP and SSH access.

### 2. Install Docker on EC2
- SSH into your instance:
    ```bash
    ssh -i /path/to/your-key.pem ubuntu@your-ec2-public-ip
    ```
- Install Docker:
    ```bash
    sudo apt update
    sudo apt install docker.io
    sudo systemctl start docker
    sudo systemctl enable docker
    ```

### 3. Clone the Repository (if applicable)
- If your Docker setup is in a GitHub repository, clone it using:
    ```bash
    git clone https://github.com/YOUR_GITHUB_USERNAME/Project-1-Part2.git
    cd Project-1-Part2/DockerContainer
    ```

### 4. Build the Docker Image
- Run the following command to build your Docker image:
    ```bash
    docker build -t my-website .
    ```

### 5. Run the Docker Container
- Run the container, mapping port 80:
    ```bash
    docker run -d -p 80:80 my-website
    ```

## Push the Docker Image to Docker Hub

### 1. Log in to Docker Hub
- If you haven’t logged in yet, use:
    ```bash
    docker login
    ```

### 2. Tag Your Image
- Tag your Docker image so you can push it to Docker Hub:
    ```bash
    docker tag my-website YOUR_DOCKER_HUB_USERNAME/my-website
    ```

### 3. Push Your Image
- Push your tagged image to your Docker Hub repository:
    ```bash
    docker push YOUR_DOCKER_HUB_USERNAME/my-website
    ```

## Accessing the Docker Image from Docker Hub on EC2

### 1. Pull the Docker Image from Docker Hub
- If you need to run the Docker image from Docker Hub on another EC2 instance or the same instance after deleting the local image, use:
    ```bash
    docker pull YOUR_DOCKER_HUB_USERNAME/my-website
    ```

### 2. Run the Pulled Image
- Run the pulled image as you did before:
    ```bash
    docker run -d -p 80:80 YOUR_DOCKER_HUB_USERNAME/my-website
    ```

### 3. Access Your Website
- Open your web browser and navigate to `http://your-ec2-public-ip` to view your website.

## Video Documentation

- For a detailed visual walkthrough, please refer to my [YouTube Video]([YOUR_YOUTUBE_VIDEO_LINK_HERE](https://youtu.be/gJpJ8b_uVkc)) that demonstrates the entire setup process, deployment, and accessing the website.

## Conclusion

This project showcases how to deploy a static website using Docker on an Amazon EC2 instance. The setup includes all necessary configurations and provides a streamlined process for both local and cloud deployments.

