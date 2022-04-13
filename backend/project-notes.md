# Nodejs application
- Advantage:
  - Only run in one thread but can still process multiple concurrent requests efficiently without clogging the RAM
  - Offers High-performance for Real-time Applications

- Disadvantage:
  - Reduces performance when handling Heavy Computing Tasks.
  >> this can be solved by using worker threads  

- Design:
  - App - Router - Controller - Service - Model
  - Path convention: /api/v1
  - Api Document: Swagger