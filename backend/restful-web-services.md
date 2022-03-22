## Idempotence
  * Is a property of some operations such that no matter how many times you execute them,
  you achieve the same result

  * Example: a function is considered idempotency if with the same input, 
  the result of the function is the same no matter how many times we call it

  * Http methods considered idempotency: GET, PUT, DELETE
  With these methods, we achieve the same result no matter how many times we call it

  * Http methods considered not idempotency: POST, PATCH
  
  PATCH is considered not idempotency because it depends on the design of this method,
  in some cases the result of this method is not the same when it is being called multiple times


## PUT vs PATCH
  * PUT: http request method used to update the entire record
  
  * PATCH: used to update a part of record
