## Code Organization
- Repository >> Modules >> Packages >> Source files

- A repository contains one or more modules; typically contains only one module, located at the root of the repository.
- `go.mod` file: declare the module path - the import path prefix for all packages within the module.

## Rules
- A name is exported if it begins with a capital letter, else it is not exported
- When importing a package, you can refer only to its exported names
- Type comes after the variable name
- A function can return any number of results
- Go's return values may be named. If so, they are treated as variables defined at the top of the function.
- `naked` return: a `return` statement without arguments returns the named return values

- `var` statement declares a list of variables, the type is last or omitted if an initializer present
- short variable declarations and assignment: `:=`, only available inside a function

## Types
### Basic types
- 


## Zero values
- Variables declared without an explicit initial value are given their zero value:
  
  0 for numeric types
  
  false for boolean
  
  "" empty string for strings

