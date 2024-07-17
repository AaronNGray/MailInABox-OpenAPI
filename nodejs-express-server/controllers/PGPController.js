/**
 * The PGPController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/PGPService');
const exportPGPKey = async (request, response) => {
  await Controller.handleRequest(request, response, service.exportPGPKey);
};

const getPGPKey = async (request, response) => {
  await Controller.handleRequest(request, response, service.getPGPKey);
};

const getPGPKeys = async (request, response) => {
  await Controller.handleRequest(request, response, service.getPGPKeys);
};

const importPGPKey = async (request, response) => {
  await Controller.handleRequest(request, response, service.importPGPKey);
};

const removePGPKey = async (request, response) => {
  await Controller.handleRequest(request, response, service.removePGPKey);
};


module.exports = {
  exportPGPKey,
  getPGPKey,
  getPGPKeys,
  importPGPKey,
  removePGPKey,
};
