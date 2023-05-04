## While loop
```
  read -p "Enter a number: " num
  while [ $num -gt 10 ]; do
    echo "The number $num is greater than 10"
    num=$(($num - 1))
  done
```

## getopts command
```
while getopts "f:c:" opt; do
        case "$opt" in
                f)
                        echo "From Farenheit to Celcius $opt $OPTARG"
                        result=$(echo "scale=2; ($OPTARG-32) * 5/9" | bc)
                        echo "The result is $result"
                        ;;
                c) echo
                        echo "From Celcius to Farentheit $opt $OPTARG"
                        result=$(echo "scale=2; $OPTARG * 9/5 + 32" | bc)
                        echo "The result is $result"
                        ;;
                \?) echo "unknown option $opt";;
        esac
done
```

## Read-while loop
- https://stackoverflow.com/questions/28927162/why-process-substitution-does-not-always-work-with-while-loop-in-bash
- https://tldp.org/LDP/abs/html/process-sub.html
- Read-while loops are while loops that use the read command as their test command
* Process substitution: represent commands as files  `<(ls $HOME)`

```
while read line; do
        echo "$line"
done < file_path
```

```
while read file_name; do
        echo $file_name
done < <(ls $HOME)
```
