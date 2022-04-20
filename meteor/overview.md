## Meteor Cloud vs Galaxy
- Meteor cloud including: Galaxy hosting, Meteor APM, Atmosphere

- Galaxy hosting: hosting service of Meteor
- Meteor APM: performance monitoring tool for Meteor apps on Galaxy
- Atmosphere: the community library of open source packages built and used by thousands of Meteor Developers

## Deploy meteor app to Galaxy
- Create account on cloud.meteor.com
- Go to Applications setting in your cloud meteor account
- Create/deploy new app on cloud meteor
- Link app with github repository and configure for the app
- After that, when you make a git push, the app will automatically deployed

## Packages only for prototyping (not secure for production)
- autopublish (to demo get all data from client side)
- insecure (to demo insert data from client side)

## To create methods on server side for client side to use:
- Meteor.methods();
- Once a method is created and import in server/main.js, it will be global in the entire app
