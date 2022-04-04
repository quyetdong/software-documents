# Data structure
## SQL vs NoSQL:
  - SQL:
      * Advantage: select query fast (use index), RDMS growth
        database structure is built solidly, prevent error
      * Disadvantage: index can make insert query slow

  - NoSQL:
      * Advantage:
          Flexible, good fit when need to save data from third party that we cannot control the data format
          Efficient for database that focus on inserting new record (fast)

# MySQL
## Transaction 
  * A sequential group of statements, queries or operations such as select, insert, update or delete 
  to perform as a one single work unit that can be committed or rolled back.

  * A transaction cannot be successful without completing each operation available in the set

  * Modifications made by the transaction are successful when the transaction is committed

  * If any statement fails, all modifications are undone when the transaction is rolled back

## Grapql


## Compare between two kinds of index in mysql: hash-index vs b-tree index
- hash-index: key-value index
  useful for queries equal `=` or not equal `!=`
- b-tree index: binary tree index
  useful for queries `=` `!=` `>` `<`

