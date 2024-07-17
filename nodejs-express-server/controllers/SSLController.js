/**
 * The SSLController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/SSLService');
const generateSSLCSR = async (request, response) => {
  await Controller.handleRequest(request, response, service.generateSSLCSR);
};

const getSSLStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.getSSLStatus);
};

const installSSLCertificate = async (request, response) => {
  await Controller.handleRequest(request, response, service.installSSLCertificate);
};

const provisionSSLCertificates = async (request, response) => {
  await Controller.handleRequest(request, response, service.provisionSSLCertificates);
};


module.exports = {
  generateSSLCSR,
  getSSLStatus,
  installSSLCertificate,
  provisionSSLCertificates,
};
