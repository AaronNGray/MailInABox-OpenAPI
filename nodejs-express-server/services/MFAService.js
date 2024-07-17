/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Retrieve MFA status for you or another user
* Retrieves which type of MFA is used and configuration
*
* returns MfaStatusResponse
* */
const mfaStatus = () => new Promise(
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
* Disable multi-factor authentication for you or another user
* Disables multi-factor authentication for the currently logged-in admin user or another user if a 'user' parameter is submitted. Either disables all multi-factor authentication methods or the method corresponding to the optional property `mfa_id`.
*
* mfaUnderscoreid String  (optional)
* returns String
* */
const mfaTotpDisable = ({ mfaUnderscoreid }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        mfaUnderscoreid,
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
* Enable TOTP authentication
* Enables TOTP authentication for the currently logged-in admin user
*
* secret String 
* code String 
* label String  (optional)
* returns String
* */
const mfaTotpEnable = ({ secret, code, label }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        secret,
        code,
        label,
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
  mfaStatus,
  mfaTotpDisable,
  mfaTotpEnable,
};
