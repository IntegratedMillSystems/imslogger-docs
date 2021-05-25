---
id: usage
title: Library Usage
sidebar_label: Usage
---

:::warning
Only one instance of the library can be used at a time.
:::

Without further ado, here's an example.

```python
from pyconpro import Connection
from imslogger import Logger

# First, start the connection
con = Connection()
con.Start()

# Next, add a plc
myPlc = con.addPLC("172.16.13.200")

# Finally, start the Logger
myLogger = Logger(
    myPlc, # PLC
    "test", # Tag name
    readinterval=1, # Read data once every second
    writeinterval=5, # Write to the database every five seconds
    db_name="my_log_db"
)
myLogger.Start()

input("Press ENTER to stop the logger")
myLogger.Stop()
```