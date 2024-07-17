/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Add DNS custom A record
* Adds a custom DNS A record for the specified query name.
*
* qname String DNS query name.
* body String 
* returns String
* */
const addDnsCustomARecord = ({ qname, body }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        qname,
        body,
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
* Add DNS custom record
* Adds a custom DNS record for the specified query name and type.
*
* qname String DNS record query name
* rtype DNSRecordType Record type
* body String 
* returns String
* */
const addDnsCustomRecord = ({ qname, rtype, body }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        qname,
        rtype,
        body,
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
* Add DNS secondary nameserver
* Adds one or more secondary nameservers. 
*
* hostnames String Hostnames separated with commas or spaces.
* returns String
* */
const addDnsSecondaryNameserver = ({ hostnames }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        hostnames,
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
* Get DNS custom A records
* Returns all custom A records for the specified query name.
*
* qname String DNS query name.
* returns List
* */
const getDnsCustomARecordsForQName = ({ qname }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        qname,
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
* Get DNS custom records
* Returns all custom DNS records.
*
* returns List
* */
const getDnsCustomRecords = () => new Promise(
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
* Get DNS custom records
* Returns all custom records for the specified query name and type.
*
* qname String DNS record query name
* rtype DNSRecordType Record type
* returns List
* */
const getDnsCustomRecordsForQNameAndType = ({ qname, rtype }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        qname,
        rtype,
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
* Get DNS dump
* Returns all DNS records.
*
* returns List
* */
const getDnsDump = () => new Promise(
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
* Get DNS secondary nameserver
* Returns a list of nameserver hostnames. 
*
* returns DNSSecondaryNameserverResponse
* */
const getDnsSecondaryNameserver = () => new Promise(
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
* Get DNS zonefile
* Returns a DNS zone file for a hostname.
*
* zone String Hostname
* returns String
* */
const getDnsZonefile = ({ zone }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        zone,
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
* Get DNS zones
* Returns an array of all managed top-level domains.
*
* returns List
* */
const getDnsZones = () => new Promise(
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
* Remove DNS custom A record
* Removes a DNS custom A record for the specified domain & value.
*
* qname String DNS query name.
* body String 
* returns String
* */
const removeDnsCustomARecord = ({ qname, body }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        qname,
        body,
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
* Remove DNS custom record
* Removes a DNS custom record for the specified domain, type & value.
*
* qname String DNS record query name
* rtype DNSRecordType Record type
* body String 
* returns String
* */
const removeDnsCustomRecord = ({ qname, rtype, body }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        qname,
        rtype,
        body,
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
* Update DNS
* Updates the DNS. Involves creating zone files and restarting `nsd`.
*
* force Integer Force an update even if mailinabox detects no changes are required.
* returns String
* */
const updateDns = ({ force }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        force,
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
* Update DNS custom A record
* Updates an existing DNS custom A record value for the specified qname.
*
* qname String DNS query name.
* body String 
* returns String
* */
const updateDnsCustomARecord = ({ qname, body }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        qname,
        body,
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
* Update DNS custom record
* Updates an existing DNS custom record value for the specified qname and type.
*
* qname String DNS record query name
* rtype DNSRecordType Record type
* body String 
* returns String
* */
const updateDnsCustomRecord = ({ qname, rtype, body }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        qname,
        rtype,
        body,
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
