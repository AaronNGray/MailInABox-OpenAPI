/**
 * The MailController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/MailService');
const addMailUser = async (request, response) => {
  await Controller.handleRequest(request, response, service.addMailUser);
};

const addMailUserPrivilege = async (request, response) => {
  await Controller.handleRequest(request, response, service.addMailUserPrivilege);
};

const getMailAliases = async (request, response) => {
  await Controller.handleRequest(request, response, service.getMailAliases);
};

const getMailDomains = async (request, response) => {
  await Controller.handleRequest(request, response, service.getMailDomains);
};

const getMailUserPrivileges = async (request, response) => {
  await Controller.handleRequest(request, response, service.getMailUserPrivileges);
};

const getMailUsers = async (request, response) => {
  await Controller.handleRequest(request, response, service.getMailUsers);
};

const removeMailAlias = async (request, response) => {
  await Controller.handleRequest(request, response, service.removeMailAlias);
};

const removeMailUser = async (request, response) => {
  await Controller.handleRequest(request, response, service.removeMailUser);
};

const removeMailUserPrivilege = async (request, response) => {
  await Controller.handleRequest(request, response, service.removeMailUserPrivilege);
};

const setMailUserPassword = async (request, response) => {
  await Controller.handleRequest(request, response, service.setMailUserPassword);
};

const upsertMailAlias = async (request, response) => {
  await Controller.handleRequest(request, response, service.upsertMailAlias);
};


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
