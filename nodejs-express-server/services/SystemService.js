/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Get SMTP relay configuration
* Gets basic configuration on how the box should use third-party relay services to deliver mail.
*
* returns SmtpRelayConfig
* */
const getRelayConfig = () => new Promise(
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
* Get system backup config
* Returns the system backup config.
*
* returns SystemBackupConfigResponse
* */
const getSystemBackupConfig = () => new Promise(
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
* Get system backup status
* Returns the system backup status.  If the list of backups is empty, this implies no backups have been made yet. 
*
* returns SystemBackupStatusResponse
* */
const getSystemBackupStatus = () => new Promise(
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
* Get system privacy status
* Returns system privacy (new-version check) status.  Response:    - `true`: Private, new-version checks will not be performed   - `false`: Not private, new-version checks will be performed 
*
* returns Boolean
* */
const getSystemPrivacyStatus = () => new Promise(
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
* Get system reboot status
* Returns the system reboot status.  Response:    - `true`: A reboot is required   - `false`: A reboot is not required 
*
* returns Boolean
* */
const getSystemRebootStatus = () => new Promise(
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
* Get system status
* Returns an array of statuses which can include headings. 
*
* returns List
* */
const getSystemStatus = () => new Promise(
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
* Get system updates
* Returns system (apt) updates.
*
* returns String
* */
const getSystemUpdates = () => new Promise(
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
* Get system upstream version
* Returns Mail-in-a-Box upstream version.
*
* returns String
* */
const getSystemUpstreamVersion = () => new Promise(
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
* Get system version
* Returns installed Mail-in-a-Box version.
*
* returns String
* */
const getSystemVersion = () => new Promise(
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
* Perform system backup
* Performs a system backup.
*
* full Boolean 
* returns String
* */
const performSystemBackup = ({ full }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        full,
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
* Reboot system
* Reboots the system.
*
* returns String
* */
const rebootSystem = () => new Promise(
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
* Set SMTP relay configuration
* Sets the configuration on how the box should use third-party relays to deliver mail.
*
* enabled Boolean 
* host String 
* authUnderscoreenabled Boolean 
* user String 
* key String 
* returns String
* */
const setRelayConfig = ({ enabled, host, authUnderscoreenabled, user, key }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        enabled,
        host,
        authUnderscoreenabled,
        user,
        key,
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
* Update system backup config
* Updates the system backup config.
*
* target String 
* targetUnderscoreuser String 
* targetUnderscorepass String 
* minUnderscoreage Integer 
* returns String
* */
const updateSystemBackupConfig = ({ target, targetUnderscoreuser, targetUnderscorepass, minUnderscoreage }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        target,
        targetUnderscoreuser,
        targetUnderscorepass,
        minUnderscoreage,
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
* Update system packages
* Updates system (apt) packages.
*
* returns String
* */
const updateSystemPackages = () => new Promise(
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
* Update system privacy
* Updates system privacy (new-version checks).  Request:    - `value: private`: Disable new version checks   - `value: off`: Enable new version checks 
*
* value SystemPrivacyStatus 
* returns String
* */
const updateSystemPrivacy = ({ value }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        value,
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
  getRelayConfig,
  getSystemBackupConfig,
  getSystemBackupStatus,
  getSystemPrivacyStatus,
  getSystemRebootStatus,
  getSystemStatus,
  getSystemUpdates,
  getSystemUpstreamVersion,
  getSystemVersion,
  performSystemBackup,
  rebootSystem,
  setRelayConfig,
  updateSystemBackupConfig,
  updateSystemPackages,
  updateSystemPrivacy,
};
