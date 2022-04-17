## TCP (Transmission Control Protocol)
- TCP is one of the main protocols of the Internet protocol suite
- The Internet Protocol (IP) is the address system of the Internet and has the core function of delivering packets of information from a source device to a target device. IP is the primary way in which network connections are made, and it establishes the basis of the Internet. IP does not handle packet ordering or error checking. Such functionality requires another protocol, typically TCP.
- IP is a connectionless protocol, which means that each unit of data is individually addressed and routed from the source device to the target device, and the target does not send an acknowledgement back to the source. That’s where protocols such as the Transmission Control Protocol (TCP) come in.
- TCP is used in conjunction with IP in order to maintain a connection between the sender and the target and to ensure packet order.
- TCP provides a communication service at an intermediate level between an application program and the Internet Protocol. It provides host-to-host connectivity at the Transport Layer of the Internet model. 


## HTTP protocol
- is unidirectional where the client sends request and the server sends the response
- HTTP can run on top of any reliable connection-oriented protocol such as TCP, SCTP
- stateless protocol: the connection auto terminated after client received response from the server

## WebSocket
- is bidirectional, full-duplex protocol that is used in the same scenario of client-server communication, starts from `ws://` or `wss://`, also run on top of TCP
- stateful protocol, which means the connection between client and server will keep alive until it is terminated by either party (client or server)
- When to use web socket:
    - Real-time web application: Real-time web application uses a web socket to show the data at the client end, which is continuously being sent by the backend server. In WebSocket, data is continuously pushed/transmitted into the same connection which is already open, that is why WebSocket is faster and improves the application performance. 
For e.g. in a trading website or bitcoin trading, for displaying the price fluctuation and movement data is continuously pushed by the backend server to the client end by using a WebSocket channel.
    - Gaming application
    - Chat application
- When not to use web socket:
    - WebSocket can be used if we want any real-time updated or continuous streams of data that are being transmitted over the network. 
    If we want to fetch old data, or want to get the data only once to process it with an application we should go with HTTP protocol, old data which is not required very frequently or fetched only once can be queried by the simple HTTP request, so in this scenario, it’s better not use WebSocket

