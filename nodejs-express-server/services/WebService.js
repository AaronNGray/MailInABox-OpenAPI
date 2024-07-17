/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Get web domains
* Returns all static web domains.
*
* returns List
* */
const getWebDomains = () => new Promise(
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
* Update web
* Updates static websites, used for updating domain root directories.
*
* returns String
* */
const updateWeb = () => new Promise(
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
  getWebDomains,
  updateWeb,
};
