/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Export a PGP key
* Exports the PGP key with the given fingerprint.
*
* returns String
* */
const exportPGPKey = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get a specific PGP key
* Gets a JSON summary of the PGP key with the given fingerprint.
*
* returns PgpKey
* */
const getPGPKey = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all PGP keys
* Gets a JSON summary of all public PGP keys in the keyring.
*
* returns PgpKeyring
* */
const getPGPKeys = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Import a PGP key
* Imports a PGP key block into the keyring. Only public keys are accepted.
*
* returns PgpKeyImportResult
* */
const importPGPKey = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Remove a PGP key
* Removes the PGP key with the given fingerprint from the keyring
*
* returns String
* */
const removePGPKey = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  exportPGPKey,
  getPGPKey,
  getPGPKeys,
  importPGPKey,
  removePGPKey,
};
