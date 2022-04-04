## Map vs Object
- Map: The `Map` object holds key-value pairs and remembers the original insertion order of the keys. Any value (objects and primitive values) may be used as either a key or a value.

  A Map object iterates its elements in insertion order, can you for...of loop on Map

## Set vs Array
- Set: The Set object lets you store unique values of any type, whether primitive values or object references.

  Set objects are collections of values. You can iterate through the elements of a set in insertion order.

## Promise.all([]): all or nothing
- stop and reject immediately when there is any promise in the list throw error (although promises in the list running in background but Promise.all don't care), then Promise.all will throw that error
- if all promises in the list resolved, Promise.all returns the result in the order of promises input

- Promise.allsettled([]): wait until all promises in the list resolved or rejected, then returns the result that is a list of values corresponding with each promise
