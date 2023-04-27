## List operators
- A list of commands is created when you put one or more commands together on a given command line
- List operators: types of control operators that enable us to create lists of commands that operate in different ways
  * `&`  allow you to run the commands asynchronously
  * `;`  run commands sequentially 
  * `&&`  the second command only runs if the first one was successful (exit 0)
  * `||`  the second command only runs if the first one failed (non-zero exit code)

## Test commands
- Compare different information
- If a test is evaluated to be true, the test will return an exit status of 0 else return status of 1
- Integer test operators: `-eq -ne -gt -lt -geq -leq`
- string test operators: `= != -z -n`
- file test operators: `-e -f -d -x`
- syntax: 
  * `[ ]` to run integer test operators
  * `[[ ]]` to run string test operators/ file test operators
- ex:
  `$?` the variable that store the exist status of the last command
  `[ 2 -eq 2 ]`  (2 === 2)
  `[ 2 -ne 2 ]`  (2 !== 2)
  `[[ $a = $b ]]`
  `[[ -z $c ]]`

## If statement
- a type of compound command: starts with the reserved word `if` and ends with `fi`
- check the exit status of a command
```
if [ 3 -eq 3 ] && [ 3 -gt 5 ]; then
  echo test passed
elif [ 2 -gt 3 ] || [ 4 -lt 5 ]; then
  echo second test passed
else 
  echo test failed
fi
```