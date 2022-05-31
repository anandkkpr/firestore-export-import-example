# What is this?

This is a SAMPLE project that demonstrates how to export ALL your Firestore Database data using the current GCP API requirements as of 2022-05.

This project make use of the [Firestore Export Import](https://www.npmjs.com/package/firestore-export-import) project to do the heavy lifting.

In order to simply use this project to export your own data:

* Install dependencies: `npm i` OR `yarn`.
* Please generate your "Private Key" using the [Stackoverflow article here](https://stackoverflow.com/a/49481169).
* Rename the file that is downloaded to `privateServiceKey.json`. NOTE: The file should have a simliar structure as provided in the `privateServiceKey.json.example` file at the root of this project.
* Run the export script AND redirect its output to a file name of your choice (assuming you are running this command on a *Nix machine): `node index.js > firestore_full-database-backup.json`.
