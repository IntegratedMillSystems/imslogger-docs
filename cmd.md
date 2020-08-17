# The Command Line Utility

**IMS Logger: The Command Line Utility** is a python-based command line utility for [**IMS Logger: The Python Library**](py).

**NOTE:** Like **IMS Logger: The Python Library**, **The Command Line Utility** was primarily designed to work with [*The Server*](/docs/server). It can be used without **The Server**, but the commands will still print out raw JSON as opposed to nicely formatted text.

## Quick Start

### Linux, MacOS
Copy and paste these commands into ~/.bashrc file or ~/.bash_profile.
```bash
PYTHON3='/usr/bin/python3'
SCRIPTS_DIR='/var/www/html'

alias imsl-gettags='$PYTHON3 $SCRIPTS_DIR/gettags.py'
alias imsl-readtag='$PYTHON3 $SCRIPTS_DIR/readtag.py'
alias imsl-startlog='$PYTHON3 $SCRIPTS_DIR/_startlog_child.py'
alias imsl-startlog-thread='$PYTHON3 $SCRIPTS_DIR/startlog.py'
alias imsl-stoplog='$PYTHON3 $SCRIPTS_DIR/stoplog.py'
```
Then, update `PYTHON3` to match the path of your python 3 binary and update `SCRIPTS_DIR` to match the path of the scripts folder that you downloaded.

You may also have to install the python library `autologging`, which can be done using this command.
```bash
pip install autologging
```

### Windows
**WARNING:** Does not work on Windows without major changes.

Create a new file with the .bat extension (`C:\Users\<username>\imslogger-aliases.bat`, for example) and paste the following commands into it.
```batch
@echo off

set PYTHON3=%APPDATA%\..\Local\Programs\Python\Python38-32\python.exe
set SCRIPTS_DIR=C:\Users\<username>\imslogger-cmd

doskey imsl-gettags=%PYTHON3% %SCRIPTS_DIR%/gettags.py
doskey imsl-readtag=%PYTHON3% %SCRIPTS_DIR%/readtag.py
doskey imsl-startlog=%PYTHON3% %SCRIPTS_DIR%/_startlog_child.py
doskey imsl-startlog-thread=%PYTHON3% %SCRIPTS_DIR%/startlog.py
doskey imsl-stoplog=%PYTHON3% %SCRIPTS_DIR%/stoplog.py
```
Then, update `PYTHON3` to match the path of your python 3 binary and update `SCRIPTS_DIR` to match the path of the scripts folder that you downloaded.

Finally, we'll need to add this file to the registry. Open regedit, and then navigate to `HKEY_CURRENT_USER` > `Software` > `Microsoft` > `Command Processor`. Then, add a string valued entry with the name `AutoRun` and set its value to the path of the file you just created (in our case, `C:\Users\<username>\imslogger-aliases.bat`).

You may also have to install the python library `autologging`, which can be done using this command.
```bash
pip install autologging
```
Please note that `pip` is not always in the `PATH` on Windows, so you have to set that before this command will work.

## Command Reference

**imsl-gettags**
<div class="indent">

```bash
usage: gettags.py [-h] IP

Get a list of tags from a PLC and return a JSON object.

positional arguments:
  IP          The IP address of the PLC

optional arguments:
  -h, --help  show this help message and exit
```
**NOTE:** Outputs Raw JSON
</div>

**imsl-readtag**
<div class="indent">

```bash
usage: readtag.py [-h] IP Tag

Reads the value of a tag

positional arguments:
  IP          The IP address of the PLC
  Tag         The tag to log data from

optional arguments:
  -h, --help  show this help message and exit
```
**NOTE:** Outputs Raw JSON
</div>

**imsl-startlog**
<div class="indent">

```bash
usage: _startlog_child.py [-h] [-r Read Interval] [-w Write Interval]
                          [-s Save Interval] [-d DateTime Format]
                          [-f Destination Folder] [-p File Prefix]
                          [-c Process Cache Name]
                          IP Tag

Logs a tag

positional arguments:
  IP                    The IP address of the PLC
  Tag                   The tag to log data from

optional arguments:
  -h, --help            show this help message and exit
  -r Read Interval, --read-interval Read Interval
                        The interval between each data point in seconds (the
                        RPI)
  -w Write Interval, --write-interval Write Interval
                        The interval at which the program writes and flushes
                        to the output file in seconds
  -s Save Interval, --save-interval Save Interval
                        The interval at which the output file is closed and a
                        new file is made
  -d DateTime Format, --datetime-format DateTime Format
                        The datetime format to use when saving timestamps to a
                        csv file.
  -f Destination Folder, --folder Destination Folder
                        The destination of the output files (a new folder will
                        be made if it does not exist)
  -p File Prefix, --prefix File Prefix
                        The prefix used for the output files
  -c Process Cache Name, --cache Process Cache Name
                        The file to which the process information will be
                        appended (must be json)
```
**NOTE:** Will log until the `CTRL-C` is pressed or the terminal closes.
</div>

**imsl-startlog-thread**
<div class="indent">

```bash
usage: startlog.py [-h] [-r Read Interval] [-w Write Interval]
                   [-s Save Interval] [-d DateTime Format]
                   [-f Destination Folder] [-p File Prefix]
                   [-c Process Cache Name]
                   IP Tag

Starts a log process

positional arguments:
  IP                    The IP address of the PLC
  Tag                   The tag to log data from

optional arguments:
  -h, --help            show this help message and exit
  -r Read Interval, --read-interval Read Interval
                        The interval between each data point in seconds (the
                        RPI)
  -w Write Interval, --write-interval Write Interval
                        The interval at which the program writes and flushes
                        to the output file in seconds
  -s Save Interval, --save-interval Save Interval
                        The interval at which the output file is closed and a
                        new file is made
  -d DateTime Format, --datetime-format DateTime Format
                        The datetime format to use when saving timestamps to a
                        csv file.
  -f Destination Folder, --folder Destination Folder
                        The destination of the output files (a new folder will
                        be made if it does not exist)
  -p File Prefix, --prefix File Prefix
                        The prefix used for the output files
  -c Process Cache Name, --cache Process Cache Name
                        The file to which the process information will be
                        appended (must be json)
```
**NOTE:** Starts logging in a different process. Can only be stopped by **imsl-stoplog** if a process cache is used.
</div>

**imsl-stoplog**
<div class="indent">

```bash
usage: stoplog.py [-h] -c Process_Cache_Name IP Tag

Stops a log process using a process cache

positional arguments:
  IP                    The IP address of the PLC
  Tag                   The tag to log data from

optional arguments:
  -h, --help            show this help message and exit
  -c Process_Cache_Name, --cache Process_Cache_Name
                        The file to which the process information will be
                        appended (must be json)
```
</div>
