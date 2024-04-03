# Setting up a ReactJS Application on AWS EC2

Setting up a web application on an AWS EC2 instance involves several steps, from launching the server to configuring Nginx to serve your application. In this guide, we’ll walk through each step to deploy a ReactJS application on an AWS EC2 Ubuntu server.
![1i (3)](https://github.com/codewithmuh/react-aws-ec2-nginx/assets/51082957/19ac2fc1-648f-4bed-9835-4bb653c0904a)

## Table of Contents:

1. [Launching an AWS EC2 Ubuntu Server](#launching-an-aws-ec2-ubuntu-server)
2. [Connecting to the AWS EC2 Instance](#connecting-to-the-aws-ec2-instance)
3. [Installing Node.js, NPM, and Nginx](#installing-nodejs-npm-and-nginx)
4. [Cloning the ReactJS App to EC2](#cloning-the-reactjs-app-to-ec2)
5. [Installing Required Dependencies](#installing-required-dependencies)
6. [Creating a Production Build](#creating-a-production-build)
7. [Configuring Nginx](#configuring-nginx)
8. [Starting the Application](#starting-the-application)
9. [Domain and SSL setup](#domain-and-ssl-setup)
10. [Conclusion](#conclusion)

### Complete YouTube Video Tutorial:

https://youtu.be/UK_OVKDRArs?si=G620QaGNjJOA0LGR

### Step 1: Launch an AWS EC2 Ubuntu Server

- Log in to the AWS Management Console.
- Navigate to the EC2 Dashboard.
- Click on “Launch Instance” and choose an Amazon Machine Image (AMI) with your preferred OS.

### Step 2: Connecting to the EC2 Instance

- Use your preferred SSH terminal to connect to the EC2 instance.
  - For example, if you’re on a Mac, you can use the Terminal app.

### Step 3: Installing Node.js, NPM, and Nginx

```bash
sudo apt-get update -y
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
sudo apt install npm -y
sudo apt install nginx -y
```
### Step 4: Cloning ReactJS App to EC2

- For Public Repository:
  ```bash
  git clone <YOUR-GIT-Repo>
  ```
- For Private Repository:
  ```bash
  git clone <YOUR-GIT-Repo>
  ```

it will ask you for your GitHub username and password. You can use a Personal Access Token instead of a password.  

### Step 5: Install all the required dependencies
  ```bash
  cd <project-folder>
  npm install
  ```
### Step 6: Create Production Build
  ```bash
  npm run build
  sudo mkdir /var/www/vhosts/frontend/
  sudo cp -R build/ /var/www/vhosts/frontend/
  ```
### Step 7: Create Nginx File
with this command, you can check if already a default nginx file exists. You have to remove it.


```bash
cd /etc/nginx/sites-enabled/
sudo rm -rf default
```

- Create a configuration file for Nginx using the following command:
  ```bash
  sudo vim /etc/nginx/sites-available/<nginx-file-name>
  ```

- Paste the provided server configuration inside the file created.

  ```bash
  server {
    listen 80 default_server;
    server_name _;

    location / {
        autoindex on;
        root /var/www/vhosts/frontend/build;
        try_files $uri /index.html;
      }
  }
  ```
  
- Activate the configuration using the following command:

  ```bash
  sudo ln -s /etc/nginx/sites-available/<nginx-file-name> /etc/nginx/sites-enabled/
  ```
### Step 8: Start the Application
- Restart Nginx and allow the changes to take place.
  ```bash
  sudo systemctl restart nginx
  sudo service nginx restart
  ```
- Additionally, in case of errors, you can check error logs and status.
### Step 9: Domain and SSL setup
**Domain**

First, you have to Public IP address or ec2 instance as An R3cord of your domain, it can be on any domain provider like GoDaddy. You can also watch the video.

**SSL Setup**

  ```bash
  sudo apt-get install certbot python3-certbot-nginx
  sudo certbot --nginx -d <domain-name>
  sudo systemctl reload nginx
  ```
### Step 10: Conclusion
Deploying a ReactJS application on an AWS EC2 instance requires careful configuration and setup. By following these steps, you can successfully launch your application and serve it using Nginx, ensuring a seamless user experience.
