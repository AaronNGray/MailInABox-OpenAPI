/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Generate SSL CSR
* Generates a Certificate Signing Request (CSR) for a domain & country code. 
*
* domain String Domain to generate CSR for.
* countrycode String 
* returns String
* */
const generateSSLCSR = ({ domain, countrycode }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        domain,
        countrycode,
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
* Get SSL status
* Returns the SSL status for all domains.
*
* returns SSLStatusResponse
* */
const getSSLStatus = () => new Promise(
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
* Install SSL certificate
* Installs a custom certificate. The chain certificate is optional. 
*
* domain String Hostname format.
* cert String TLS/SSL certificate.
* chain String TLS/SSL intermediate chain (if provided, else empty string).
* returns String
* */
const installSSLCertificate = ({ domain, cert, chain }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        domain,
        cert,
        chain,
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
* Provision SSL certificates
* Provisions certificates for all domains. 
*
* returns SSLCertificatesProvisionResponse
* */
const provisionSSLCertificates = () => new Promise(
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
  generateSSLCSR,
  getSSLStatus,
  installSSLCertificate,
  provisionSSLCertificates,
};
