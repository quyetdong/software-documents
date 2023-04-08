## Set bash to default
chsh -s /bin/bash
echo $SHELL
bash --version

## Shells vs Script
- Shell: a program that interprets the commands you type in your terminal and passes them on to the operating system
  (command-line interpreter)
- Bash: one of the most popular shells
- Script: a file containing series of commands run by the shell
- 

## File Permission
- View file permission: ls -l
- Change file permission: chmod [octal_number] [file_name]
  (to get the octal number, search for permissions calculator)

## Parameter, variable, shell parameter expansion (get the parameter's value)
- Parameter: any entity that stores values
- Three types of shell parameters in bash:
  * Variables
  * Positional parameters
  * Special parameters
- Variable: a parameter whose value you can manually change
  * User-defined variables (should be in lowercase)
  * Shell variables (almost all in uppercase)
- Parameter expansion: format the variable value and get the formatted value
  * ${variable:1:3}

### Bourne shell variables vs Bash shell variables

## Shell expansions
- Brace expansion `{}`
  * string list: `echo {1,a,b,c}`
  * range list: `echo {001..100..2}`
- Parameter expansion `${}` `$variable_name`
  * ${variable^^}
- Arithmetic expansion `$(())`
  * Only work on the whole numbers
    * $(( number_x ** number_y ))
- Command substitution `$()`
  * Write out command and get the value of the command
    * $(command) : $(date :%H:%m:%S)
- bc command: to work on decimal numbers `bc`
  * bc - basic calculator: an arbitrary precision numeric processing language
  * | : pipe
  * example: >> echo "scale=3; 13/4" | bc
- Tilde expansion `~`
  * refer to the current user's home directory: $HOME
  * $PWD: ~+  (current directory)
  * $OLDPWD: ~- (previous directory)
  * ~username: if username valid, return the path to that user's home directory

## How Bash Processes Command Lines
- 6 steps
  * Step 1: Tokenization
  * Step 2: Commnad Identification
  * Step 3: Shell Expansions
  * Step 4: Quote Removal
  * Step 5: Redirections
  * Step 6: Execution
  
- Quoting: removing the meaning of special characters so that they can be interpreted literally by the shell
- Quoting methods:
  * backslashes `\` remove special meaning from the next character
  * Single quotes `' '` remove special meaning from all characters inside
  * Double quotes `" "` remove special meaning from all except dollar signs $ and backticks ` 

### 1.Tokenization
- A token is a sequence of characters that is considered as a single unit by the shell
- Bash uses meta characters (unquoted) to break up a command line into tokens -> tokenization
- 10 meta characters
  * The pipe `|`
  * The ampersand `&`
  * The semicolon `;`
  * The left and right parentheses `()`
  * The less than and greater than signs `<>`
  * The whitespace characters `space, tab, new line`
- Two types of token
  * Word: sequence of characters that contains no unquoted meta character
  * Operator: sequence of characters that contains at least one unquoted meta character
    + Control Operator `vs` Redirection Operator
    + Control Operators: `newline, |, ||, &, ;, (), etc...`
    + Redirection Operators: `>`

### 2.Command Identification
- From tokens in step 1, bash creates simple commands and compound commands
- Simple commands: separated by control operators
  * Ex: `echo 1 2 3` -> first word `echo` is the command name, remaining is arguments to that command
- Compound commands: bash's programming constructs
  * Starts with a reserved word, and terminated by a corresponding reserved word
  
### 3.Shell's Expansions
- 4 stages follow the order (priority) below
  * Stage 1: Brace expansion
  * Stage 2: (order by the position they appear in the command line from left to right)
    + Parameter expansion
    + Arithmetic expansion
    + Command substitution
    + Tilde expansion
  * Stage 3: Word splitting
  * Stage 4: File name expansion (Globbing)

- Word Splitting: is a process the shell performs to split the result of some unquoted expansions into separate words
  * Only perform on the results of unquoted: Parameter expansions, Arithmetic expansions, Command substitutions
  * The characters used to split words are governed by the IFS variable (Internal Field Separator): IFS contains space, tab, newline by default
  * echo ${IFS@Q} ... zsh  printf "[%s]\n" $IFS

- Globbing
  * Only perform on words
  * Globbing patterns: words that contain unquoted Special Pattern Characters `*, ?, [`
  * `*` match any character regardless of its length
  * `?` match any single character (exactly one character)
  * `[]` match any single character that placed inside the square brackets

### 4.Quote Removal
- During quote removal, the shell removes all unquoted backslashes, single quote characters,
 and double quote characters that did not result from a shell expansion

### 5.Redirection
- Operators: `<` `>` `2>`
- Linux and Unix derived systems allow commands to take advantage of three standard data streams, each of which is given a stream No.
  * stream 0: Standard Input stream (stdin)
    + an alternative way of provding input to a command, aside from using command line arguments
    + by default is the user input (from keyboard)
    + Ex: cat < hello.txt (get input from hello.txt, short command: cat hello.txt)
  * stream 1: Standard Output stream (stdout)
    + contains the data that is produced after a successful command execution 
    + Ex: echo "this is some output" > output.txt
  * stream 2: Standard Error stream (stderr)
    + contains all error mesages and status messages that a command produces
    + not considered as the main output of a command
    + Ex: ls non-exist-file 2> error.txt



