---
id: custom-install
title: Custom Installation
---

If you'd like to install the IMS Logger Server on a machine other that a Raspberry Pi, or you'd like to have more control during the installation, this is the page for you.

## Getting the Source Code

First, you will need to get the source code for the project. We recommend downloading the zip folder named *imslogger-compiled-source-code-\*.zip*, which can found at https://github.com/imslogger/imslogger-server/releases under "assets".

Extract the code and put it in a directory you'll remember.

## Setting up the Python Environment

In a terminal, go to the *imslogger-server* directory. Then, type the following commands.

```bash
sudo apt install python3-venv
python3 -m venv venv
source ./venv/bin/activate
```

This should start the python environment. Next, we'll install some python packages.

```bash
pip install django djangorestframework uwsgi pycomm3 mongoengine bitstruct 
```

## Installing MongoDB

For most people using the IMS Logger Server, MongoDB should be installed locally. This can be done using this command.

```bash
sudo apt install mongodb
```

Start the `mongodb` service and then check to see if it's running.

```bash
sudo service mongodb start
sudo service mongodb status
```

You should also be able to start the MongoDB shell.
```bash
mongo
```

## Installing Nginx

Nginx is used to server the django application (through uwsgi). In order to install it, use the following command.

```bash
sudo apt install nginx
```

Next, create a new file called *imslogger-site.conf* in */etc/nginx/sites-availible/* with the following contents.

```conf
# the upstream component nginx needs to connect to
upstream django {
    server unix:///some/path/to/imslogger-wsgi.sock; # for a file socket
    # server 127.0.0.1:8000; # for a web port socket
}

# configuration of the server
server {
    # the port your site will be served on
    listen      8000;
    # the domain name it will serve for
    server_name example.com; # substitute your machine's IP address or FQDN
    charset     utf-8;

    # max upload size
    client_max_body_size 75M;   # should be a fine value, but you can change it

    # Django media
    location /media  {
        alias /path/to/imslogger-server/djangosite/media;  # Django project's media files
    }

    location /static {
        alias /path/to/imslogger-server/djangosite/static; # Django project's static files
    }

    # Non-media requests to the Django server.
    location / {
        uwsgi_pass  django;
        include     /path/to/imslogger-server/djangosite/uwsgi_params;
    }
}
```

Be sure to update the paths accordingly. Once that's done, create a hard link between that file and new file in */etc/nginx/sites-enabled/* using the following command.

```bash
ln /etc/nginx/sites-availible/imslogger-site.conf /etc/nginx/sites-enabled/imslogger-site.conf
```

Then, restart the nginx server.
```bash
sudo /etc/init.d/nginx restart
```
