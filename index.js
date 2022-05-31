const { initializeFirebaseApp } = require('firestore-export-import')
const { backups } = require('firestore-export-import')
const serviceAccount = require('./edventures-ai-firebase-adminsdk-8qu5a-891c15d054.json')

// Initiate Firebase App
// appName is optional, you can omit it.
const appName = '[DEFAULT]'
initializeFirebaseApp(serviceAccount)

backups()
  .then((collections) => {
    // You can do whatever you want with collections
    console.log(JSON.stringify(collections))
  });
