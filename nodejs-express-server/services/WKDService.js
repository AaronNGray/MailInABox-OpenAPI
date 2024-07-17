/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Get WKD status
* Gets the current configuration applied to the Web Key Directory for each email hosted in the box, along with a JSON summary of all public PGP keys in the keyring.
*
* returns getWKDstatus_200_response
* */
const getWKDstatus = () => new Promise(
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
  getWKDstatus,
};
