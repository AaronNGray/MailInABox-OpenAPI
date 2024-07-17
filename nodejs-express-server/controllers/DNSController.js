/**
 * The DNSController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/DNSService');
const addDnsCustomARecord = async (request, response) => {
  await Controller.handleRequest(request, response, service.addDnsCustomARecord);
};

const addDnsCustomRecord = async (request, response) => {
  await Controller.handleRequest(request, response, service.addDnsCustomRecord);
};

const addDnsSecondaryNameserver = async (request, response) => {
  await Controller.handleRequest(request, response, service.addDnsSecondaryNameserver);
};

const getDnsCustomARecordsForQName = async (request, response) => {
  await Controller.handleRequest(request, response, service.getDnsCustomARecordsForQName);
};

const getDnsCustomRecords = async (request, response) => {
  await Controller.handleRequest(request, response, service.getDnsCustomRecords);
};

const getDnsCustomRecordsForQNameAndType = async (request, response) => {
  await Controller.handleRequest(request, response, service.getDnsCustomRecordsForQNameAndType);
};

const getDnsDump = async (request, response) => {
  await Controller.handleRequest(request, response, service.getDnsDump);
};

const getDnsSecondaryNameserver = async (request, response) => {
  await Controller.handleRequest(request, response, service.getDnsSecondaryNameserver);
};

const getDnsZonefile = async (request, response) => {
  await Controller.handleRequest(request, response, service.getDnsZonefile);
};

const getDnsZones = async (request, response) => {
  await Controller.handleRequest(request, response, service.getDnsZones);
};

const removeDnsCustomARecord = async (request, response) => {
  await Controller.handleRequest(request, response, service.removeDnsCustomARecord);
};

const removeDnsCustomRecord = async (request, response) => {
  await Controller.handleRequest(request, response, service.removeDnsCustomRecord);
};

const updateDns = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateDns);
};

const updateDnsCustomARecord = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateDnsCustomARecord);
};

const updateDnsCustomRecord = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateDnsCustomRecord);
};


module.exports = {
  addDnsCustomARecord,
  addDnsCustomRecord,
  addDnsSecondaryNameserver,
  getDnsCustomARecordsForQName,
  getDnsCustomRecords,
  getDnsCustomRecordsForQNameAndType,
  getDnsDump,
  getDnsSecondaryNameserver,
  getDnsZonefile,
  getDnsZones,
  removeDnsCustomARecord,
  removeDnsCustomRecord,
  updateDns,
  updateDnsCustomARecord,
  updateDnsCustomRecord,
};
