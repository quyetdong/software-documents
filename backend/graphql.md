# Overview
- GraphQL is a query language, provide a query in the form of a string that is sent to a server
- The server interprets the query and then returns the result in the form of JSON format


# Advantages
1. Faster: (Performance)
   - facilitate to cut down request query by choosing only the specific fields needed

2. Define data shape: (Specificity)
   - when we request GraphQL queries to the server, the server returns the response in a simple, secure, and predictable shape

3. Strongly typed
   - each level of a GraphQL query corresponds to a particular type, and each type describes a set of available fields

4. Latest version not required
   - In GraphQL, the result set or returned data is very specific according to the client's query, so when we add new product features, additional fields to the server, they don't affect the existing clients.

# Disadvantage
1. GraphQL Query Complexity
  - client requests too many nested fields data at a single time

2. GraphQL Caching

3. GraphQL Rate Limiting
   