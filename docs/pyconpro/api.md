---
id: api
title: API
---

## pyconpro.Connection

### `pyconpro.Connection()`

Returns a connection object.

### `pyconpro.Connection.Start(join=False)`

#### Arguments

`join`: If `true`, the function will hang until the connection has stopped.

:::caution
The `join` argument should never really be used. It will be removed soon.
:::

#### `pyconpro.Connection.Stop()`

Should always be called at the end of a program.


### `pyconpro.Connection.addPLC(ip, slot=0)`

Returns a `pyconpro.PLC` object.

#### Arguments

`ip`: The IP address of the PLC.

`slot`: The slot of the PLC (usually `0`). Default is `0`.


## pyconpro.PLC

### `pyconpro.PLC(connection, ip, slot)`

In most cases, use `pyconpro.Connection.addPLC` instead.

#### Arguments

`connection`: A `pyconpro.Connection` object.

`ip`: The IP address of the PLC

`slot`: The slot of the PLC (usualky `0`).


### `pyconpro.PLC.register()`

Registers a connection with the actual PLC (not the `pyconpro` object).
This must be called if `pyconpro.Connection.addPLC` was not used.


###  `pyconpro.PLC.addConsumer(hint, handler, args=(), kwargs={})`

Returns a `pyconpro.Consumer` object.

#### Arguments

`hint`: A `pyconpro.ConsumerHint` object.

`handler`: A function to be called when data is recieved.
That data (passed as a byte string) should be the first argument of the handler function.

`args`, `kwargs`: Addition arguments and keyword arguments to be passed to the handler.


## pyconpro.Consumer

### `pyconpro.Consumer(plc, hint, handler, args=(), kwargs={})`

In most cases, use `pyconpro.PLC.addConsumer` instead.

#### Arguments

`plc`: A `pyconpro.PLC` object.

`hint`: A `pyconpro.ConsumerHint` object.

`handler`: A function to be called when data is recieved.
That data (passed as a byte string) should be the first argument of the handler function.

`args`, `kwargs`: Addition arguments and keyword arguments to be passed to the handler.


### `pyconpro.Consumer.forwardOpen()`

Registers a forward open with the PLC.
This must be called if `pyconpro.PLC.addConsumer` was not used.


### `pyconpro.Consumer.Start()`

Starts a thread asking the PLC to send data.


### `pyconpro.Consumer.Stop()`

Stops asking for data.


## pyconpro.ConsumerHint (extends typing.NamedTuple)

A hint for the `pyconpro.Consumer` class.

```python
pyconpro.ConsumerHint(
    tag: str
    datasize: int
    rpi: int
    otrpi: int
)
```

`tag`: The tag name

`datasize`: The amount of data (in bytes) the Consumer should expect in each response.

:::important
`datasize` should the sum of the size of each variable in the tag + 2 for a header.
:::

`rpi`: The interval at which data should be recieved *in milliseconds*.

`otrpi`: The interval at which to keep the connection alive *in milliseconds*.

:::note
We usually set the `otrpi` to `rpi+100`.
:::