## Shellcheck
- www.shellcheck.net
- shellcheck can
  - check syntax errors of scripts
  - identify potential issues
- shellcheck cannot: detect issues with the environment that the script will be running in

## Error messages
- structure: "script name + descriptions to narrow down the root cause"


## Find help
(https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap12.html)
- commands: `man, help, info`
- internal commands: are commands that are built into the bash shell (inside bash)
- external commands: commands that are external to bash
- `type` command: 
  * is an internal command
  * get information about a command if it is an internal command or an external command (the location path of the command)
- `help` command:
  * get information about an internal command
  * `help cd` `help -d cd` `help -s cd`

- `man` and `info` commands: to get information about external commands
* `man` command: provide documentation on external commands called manual pages
  * `man cd` >> error
  * `man ls` >> manual page about `ls` command
  * `man -k "search_text"` to search in the short description of manual pages
  * `man -K "search_text` search the entire man pages
  (type '/' to search inside a man page)

* `info` command: provide documentation on external commands called info pages
  * tend to be more detailed on average than man pages
  * use in case you are not clear about the command after using the `man` command, or you want to have more official information
  * `info` >> show infor about core commands of the system that are categorized for you
  * 