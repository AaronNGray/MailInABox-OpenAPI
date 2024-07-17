/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Add mail user
* Adds a new mail user.
*
* email String Email format.
* password String 
* privileges MailUserPrivilege 
* returns String
* */
const addMailUser = ({ email, password, privileges }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        email,
        password,
        privileges,
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
* Add mail user privilege
* Adds a privilege to an existing mail user.
*
* email String Email format.
* privilege MailUserPrivilege 
* returns String
* */
const addMailUserPrivilege = ({ email, privilege }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        email,
        privilege,
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
* Get mail aliases
* Returns all mail aliases.
*
* format MailAliasesResponseFormat The format of the response. (optional)
* returns List
* */
const getMailAliases = ({ format }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        format,
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
* Get mail domains
* Returns all mail domains.
*
* returns String
* */
const getMailDomains = () => new Promise(
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
* Get mail user privileges
* Returns all privileges for an existing mail user.
*
* email String The email you want to get privileges for. (optional)
* returns MailUserPrivilege
* */
const getMailUserPrivileges = ({ email }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        email,
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
* Get mail users
* Returns all mail users.
*
* format MailUsersResponseFormat The format of the response. (optional)
* returns List
* */
const getMailUsers = ({ format }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        format,
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
* Remove mail alias
* Removes a mail alias.
*
* address String Email format.
* returns String
* */
const removeMailAlias = ({ address }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        address,
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
* Remove mail user
* Removes an existing mail user.
*
* email String Email format.
* returns String
* */
const removeMailUser = ({ email }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        email,
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
* Remove mail user privilege
* Removes a privilege from an existing mail user.
*
* email String Email format.
* privilege MailUserPrivilege 
* returns String
* */
const removeMailUserPrivilege = ({ email, privilege }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        email,
        privilege,
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
* Set mail user password
* Sets a password for an existing mail user.
*
* email String Email format.
* password String 
* returns String
* */
const setMailUserPassword = ({ email, password }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        email,
        password,
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
* Upsert mail alias
* Adds or updates a mail alias. If updating, you need to set `update_if_exists: 1`. 
*
* updateUnderscoreifUnderscoreexists Integer Set to `1` when updating an alias.
* address String Email format.
* forwardsUnderscoreto String If adding a regular or catch-all alias, the format needs to be `user@example.com`. Multiple address can be separated by newlines or commas.  If adding a domain alias, the format needs to be `@example.com`. 
* permittedUnderscoresenders String Mail users that can send mail claiming to be from any address on the alias domain. Multiple address can be separated by newlines or commas.  Leave empty to allow any mail user listed in `forwards_to` to send mail claiming to be from any address on the alias domain. 
* returns String
* */
const upsertMailAlias = ({ updateUnderscoreifUnderscoreexists, address, forwardsUnderscoreto, permittedUnderscoresenders }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        updateUnderscoreifUnderscoreexists,
        address,
        forwardsUnderscoreto,
        permittedUnderscoresenders,
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
  addMailUser,
  addMailUserPrivilege,
  getMailAliases,
  getMailDomains,
  getMailUserPrivileges,
  getMailUsers,
  removeMailAlias,
  removeMailUser,
  removeMailUserPrivilege,
  setMailUserPassword,
  upsertMailAlias,
};
