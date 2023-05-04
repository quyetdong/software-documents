## Positional Parameters
- The shell assigns numbers called positional parameters to each command line argument
- `$1 $2 .... ${n}` 
- `${10}`


## Special parameters
* We can't change the value of special parameters
+ `#` show the number of positional parameters that have been provided to the script
  `$#` to expand the paramter's value (parameter expansion)
+ `0` show the script's name
  `$0` 
+ `@`
  $@: Expands to each positional parameter as its own word with subsequent word splitting
    $1 $2 $3 ... $N (>> subject to word splitting)
  "$@": Expands to each positional parameter as its own word without subsequent word splitting
    "$1" "$2" "$3" ... "$N"
+ `*`
  $*: exactly same as $@
  "$*": Expands to all positional parameter as one word separated by the first letter of the IFS variable without subsequent word splitting


## Read command
- By default will save the user's input string into the variable `REPLY`
- read varname1 varname2
- read -t 10 -s -n 4 -p "input smth" varname

## Select command
- By default will save the user's option into the variable `RESPONSE`
```
select varname in option1 option2 option3; do
  echo "You selected $varname"
  break
done
```
- Give instruction to users by editting the variable `PS3`

