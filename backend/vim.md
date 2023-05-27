# Introduction
- An advanced text editor
- Vim = Vi + Improved
(Vi - visual: a text editor)
- Ubiquitous and Powerful

# Vim modes
- Three main modes
  * Normal mode (Command mode - press ESC): anything you type is considered as a command
  * Insert mode (type "i"): what you type is going to the document/file
  * Line mode (type colon ":"): to give commands to work with documents, to go to a specific line of the documents
-
# Commands
## Navigation commands
- Move by single character or line: "h, j, k, l"
- Move by page: to the next page "ctrl + f", to the previous page "ctrl + b"
- Move word by word: "w, b, W (ignore punctuation), B (ignore punctuation)"
- Move in line: to the beginning of the line "0, ^ (the the first character in the line)"
- Go to a specific line: "[line-number] + gg" or "[line-number] + G", only "gg" go to the first line, "G" go to the last line
- Go to a specific line with line mode: ": + {line-number}", go to the last line with ": + $"
- Focus to the line you're in: "z + Enter"
- Show information abt the file you're editing: "ctrl + g" = ":f" = ":file"
- ":set ruler" vs ":set noruler"
-
## Deleting commands
- Pattern 1: "operator + motion"
- Pattern 2: "number + operator + motion" (repeat the command a number of times)

- Deleting: "x" delete the character at the cursor position
- "X": delete the character to the left of the cursor
- "d + w": delete a word (start where your cursor is)
- (d: for delete - an operator, w: for word motion - a motion)
- "d + j": delete the current and the next line
- "d + k": delete the current and the previous line
- "dd": delete the current line
- "3dd": repeat "dd" three times >> delete three lines starting from the current line
- "3dw" = "d3w": (number + operator + motion), "3w" is also a motion
- "." command: repeat the previous editing command
- Shortcuts: "D" = "d$", "x" = "dl", "X" = "dh"
-
## Help commands
- ":h[elp]": opens up a new window with help document in read-only mode
- ":h search_key": to get help about a command
- "Ctrl + w + Ctrl + w": flip forth and back between your document and the help document
- "Ctrl + o": go back to the previous search in the help document
- "Ctrl + i": go forward to the next search in the help document
- "Ctrl + d" and "tab" + arrow keys: command line completion
- Wild menu, to turn on: ":set wildmenu" or ":set wmnu"; to turn off ":set nowmnu"
-
## Cut, Copy and Paste
- "d + {motion}" / "x": cut text, not just delete it (cut = delete and save into a register - default or unnamed register)
- "p": put or paste your cut text after the cursor position
- "P": put your text before the cursor
- "y": copy or yanked into a register
- "yy": copy a line
- "y3w": copy three words
- "u": undo an operator
- "Ctrl + r": redo the last operator that has been undo
-
## Vim Registers 
- Used to store and retrieve texts
- Registers are preceded with double quote (")
- Three most common register types:
  * Unnamed: ""
  * Numbered: "0 "1  ... "9
  * Named: "a ... "z
- To display registers: `:reg`

- Unnamed register ("") holds text from d, c, s, x, and y operations

- Register 0 ("0) holds last text yanked (y) 
- Register 1 ("1) holds last text deleted (d) or changed (c)
- Register 2 ("2) holds the most recent text deleted (d) or changed (c) before the last one (stored in register 1)
- Black hole register ("_): to delete a text but not save into the unnamed and 1 register
- To put text from a register: `"2 + p` (put text from register 2)
- `^J`: new line character in registers (=Enter)

- Named registers: "a "b "c ... "z
- Store text (ex: a line) into a register: `"{register_name} + yy"`
- To append text into a register, use the capital letter of the register name: `" + shift + {register_name} + yy`
-
## Inserting, Changing, Replacing and Joining
- Insert: 
  * "i" - insert texts before the current cursor position
  * "I" - insert texts before the first character of the current line 
  * "a" - append texts after the current cursor position
  * "A" - append texts after the last character of the current line
  * "o" - begin a new line below the cursor and place you into the insert mode
  * "O" (shift + o) - begin a new line above the cursor and place you into the insert mode
  * "[count] + i" - repeat inserting the [count] times (after you've done inserting and press Escape)
  ------------------------------ 
- Replace: 
  * "R": enter the Replace mode
  * When you're in replace mode, each character you type replaces an existing character in the line
  * "r + {new_character}": change the character at the cursor position by the "new_character"
- Change:
  * "[register] + c + {motion}": delete texts in the motion and put you into the insert mode
  * Quite similar to delete commands "d + {motion}"
  * Shortcuts: "C" = "c$" 
  * "~": toggle case of a letter
  * "g + ~ + {motion}": toggle case of ALL letters in the motion
  * "g + ~ + ~": change case of the entire line
  * "g + U + {motion}": change all letters in the motion to Upper case
  * "g + u + {motion}": change all letters in the motion to lower case
- Join lines:
  * "[count] + J".
  * "[count] + g + J"

## Search, Find and Replace
- Search: considered as a motion
 * "f + {character}": search forward (to the right) and go to that character in the line 
 * "t + {character}": search forward (to the right) and put the cursor on the position before that character in the line 
 * "F + {character}": search backward (to the left) and go to that character in the line 
 * ";": repeat previous search line command
 * ",": repeat previous search line command but in the opposite direction
 * "*": search forward for the word at or nearest the cursor position
 * "#": search backward for the word at or nearest the cursor position
 * "/ + {text}": search forward for the "text" in the entire document/file 
 * "? + {text}": search backward in the entire file
 * "n": repeat the search entire command
 * "N": repeat the search entire command in the opposite direction
- Substitute:
 * ":[range]s/{pattern}/new/[flags]": replace {pattern} by new (can use "#" instead of "/")
 * ":.,$s/{pattern}/new/[flags]": replace {pattern} by new from current line to the last line
 * "range" = "%" = "1,$": all lines (entire file)
 * "range" = "/pattern-1/,/pattern-2/": range from pattern-1 to pattern-2 
 * ":s/{pattern}/new/[flags]": default to replace text on the current line
 * 
## Text objects
- Text objects are used after an operator, it's very similar to using motions
- Text objects allow you making commands on the entire object regardless of the cursor position
- "{operator}{a/i}{object}"
- "a": include the object delimiter
- "i": (inner) not include the object delimiter
- "daw": delete the word at the cursor position including the white space
- "diw": delete the word, left the white space
- "w": uses spaces and punctuations as word boundaries
- "shift + w" (capital w): only uses spaces as word boundaries
- "as": the text object for an entire sentence
- "is": the text object for an inner sentence
- A sentence boundary is a period/exclamation mark/question mark (. ! ?) followed by either the end of a line or by a space or tab
- a paragraph boundary is a blank line
- "ap": the text object for an entire paragraph
- "i[" = "i]": the text object for all items between [] that the cursor is in
- "a[" = "a]"
- "a(" = "a)" = "ab", "i(" = "i)" = "ib"
- "at": a tag (<tag>inside tag</tag>)
- "it": inner tag
- "a{" = "a}" = "aB"

## Macros
- Macros are a recorded series of keystrokes
- use registers to store those keystrokes
- start record a macro into a register: "q + {register_name}"
- done recording: "q" 
- to play the macro: "@ + {register_name}"
- repeat the most executed macro: "@@"
- append to a macro: "q + {captial_registername}"
- Best practices: 
  * Normalize cursor position at the beginning of the macro: 0
  * Position your cursor at the end of the macro to enable easy repeats: j
  * 
- repeat a macro in a range: ":[range]normal @{register_name}"
- repeat a macro with count: "[count]@{register_name}" 
- save marcos in vimrc file: let @{register_name} = 'keystrokes'
- 
## Visual mode
- characterwise visual mode: "v"
- linewise visual mode: "V"
- blockwise visual mode: "Ctrl-v" (vertical visual mode)
- after you've selected your desired text, you can perform an operation on that text
- change direction of highlighted text, put the cursor on the other end of the highlighted area: "o" (and "shift + o" - capital o for visual block)
- reselect the latest highlighted text: "g + v"
- to indent(shift) one line in visual mode: "shift +v + >"
- to indent one line under the cursor: ">>"
- to center a line: ": + ce + [width]" (ce = center)
-
## vimrc
- rc = run commands
- each time vim starts, it runs the commands in the .vimrc file
- :set 'history'?
- color color_scheme_name
- map
- modeline
- mkvimrc
- 
## Vim buffers and windows
- Buffers
  - Buffer is a temporary memory area in which data is stored while it is being transferred or processed
  - ":ls" = ":buffers" = ":files": show list of files are openning with vim
  - ":b{number}": show a specific file associated with the `number`
  - ":b {file_name}" 
  - "Ctrl + ^": switch back to the previous opened buffer
  - ":set hidden"
  - ":qall!"
  - ":wall"
  - ":bn"
  - ":badd + {file_name}"
  - ":bd + {indicator}"
  - ":bufdo + {command}" 
  - ":e"
  - ":Ex"
- Windows
  - ":sp" = ":split" = "Ctrl-w + s": horizontal split
  - ":sp + [file_path]"
  - ":vs" = ":vsplit" = "Ctrl-w + v": vertical split
  - "Ctrl-w + q": quit the window
  -  "|" = "shift + \": open file path in directory tree
  - ":on" = ":only" = "Ctrl-w + o": make the current window being the only window on the screen (close others except the current one)
  - "Ctrl-w + w"; "Ctrl-w + {h/j/k/l}"
  - "Ctr-w + ="; "Ctr-w + _ "

  - ":ba" = ":ball": opens all buffers in their own windows
  - ":windo + {command}" 
  - 
- Plugins
  * ":pa + {plugin_name}" = ":packadd + {plugin_name}"
  * ":CtrlP": work with other files in the folder



