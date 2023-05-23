## ssh protocol
- Secure shell
- allow one machine (the ssh client) to open a shell on another machine
  (the ssh server) over an encrypted network connection

## scp
- secure copy protocol
- use ssh to securely copy files from one location to another over an encrypted ssh connection
- `scp source target`
  * from local to remote server: 
    `scp ~/abc.txt user@ip_address:~/`
  * 