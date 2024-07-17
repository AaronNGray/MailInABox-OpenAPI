/**
 * The SystemController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/SystemService');
const getRelayConfig = async (request, response) => {
  await Controller.handleRequest(request, response, service.getRelayConfig);
};

const getSystemBackupConfig = async (request, response) => {
  await Controller.handleRequest(request, response, service.getSystemBackupConfig);
};

const getSystemBackupStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.getSystemBackupStatus);
};

const getSystemPrivacyStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.getSystemPrivacyStatus);
};

const getSystemRebootStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.getSystemRebootStatus);
};

const getSystemStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.getSystemStatus);
};

const getSystemUpdates = async (request, response) => {
  await Controller.handleRequest(request, response, service.getSystemUpdates);
};

const getSystemUpstreamVersion = async (request, response) => {
  await Controller.handleRequest(request, response, service.getSystemUpstreamVersion);
};

const getSystemVersion = async (request, response) => {
  await Controller.handleRequest(request, response, service.getSystemVersion);
};

const performSystemBackup = async (request, response) => {
  await Controller.handleRequest(request, response, service.performSystemBackup);
};

const rebootSystem = async (request, response) => {
  await Controller.handleRequest(request, response, service.rebootSystem);
};

const setRelayConfig = async (request, response) => {
  await Controller.handleRequest(request, response, service.setRelayConfig);
};

const updateSystemBackupConfig = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateSystemBackupConfig);
};

const updateSystemPackages = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateSystemPackages);
};

const updateSystemPrivacy = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateSystemPrivacy);
};


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
