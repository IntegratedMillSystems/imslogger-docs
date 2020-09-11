# The Server

**IMS Logger: The Server** is a front end web-interface and php api surrounding [**IMS Logger: The Command Line Utility**](cmd) and [**IMS Logger: The Python Library**](py).

## Quick Start
Use your favorite USB flashing program to flash the disk image (named something like *imsloggerX.X.X.img.gz*) onto the sd card of a Raspberry Pi. We prefer [rufus](https://rufus.ie/) since it works well with .gz files (NOT TESTED). You can also use programs like [Win32DiskImager](https://sourceforge.net/projects/win32diskimager/), but you may have to extract the disk image first (that can be done using [7-Zip](https://www.7-zip.org/)).

Once you've booted up your Pi with the newly flashed sd card, you'll probably have to change its IP address. The default address is `172.16.13.205` on the interface `eth0`, but if that doesn't work for you, you can change it by running this command on the Pi (through ssh over a direct ethernet connection, for example):

```bash
ifconfig <interface> <ip address>
```

Once you're connected to the local network, type the Pi's IP address into a web browser. If everything works, you should be greeted by a login in page. Login using the default credentials:

**Username:** admin  
**Password:** imslogger

### Changing the Password

Now you can try connecting to your PLC! Enter the PLC's IP address into the website and click Open (or Ping if want to test it first).

You should probably change the default credentials before you do anything else. This can be done by editing the file */var/www/settings/settings.hjson* on the Pi, which should look something like this:

```

```

To change the password, replace the current hash with password hash of your own (you can generate one [here](https://bcrypt-generator.com/)). You can also change the username by replacing `admin` with something else.