## Array
```
  numbers=(1 3 5 7)
  echo ${numbers[@]}
  echo ${!numbers[@]}
  echo ${#numbers[@]}

  unset numbers[1]
  numbers[0]=a
  echo ${numbers[@]}
  echo ${#numbers[@]}
  echo ${!numbers[@]}
```

## readarray command
- converts whatever it reads on its standard input stream into an array
```
  readarray -t days < days.txt
  echo ${days[@]@Q}
```
- every command in a pipeline is run on its own subshell >> the main shell cannot access to variables created in the subshell
>> use process substitution instead of pipeline
```
  readarray files < <(ls)
  echo ${files[@]@Q}
```

## for loops
```
  readarray -t files < files.txt
  for file in "${files[@]}"; do
    if [ -f "$file" ]; then
      echo "$file already exists"
    else
      touch "$file"
      echo "$file created"
    fi
  done
```