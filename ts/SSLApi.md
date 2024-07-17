# .SSLApi

All URIs are relative to *https://box.example.com/admin*

Method | HTTP request | Description
------------- | ------------- | -------------
[**generateSSLCSR**](SSLApi.md#generateSSLCSR) | **POST** /ssl/csr/{domain} | Generate SSL CSR
[**getSSLStatus**](SSLApi.md#getSSLStatus) | **GET** /ssl/status | Get SSL status
[**installSSLCertificate**](SSLApi.md#installSSLCertificate) | **POST** /ssl/install | Install SSL certificate
[**provisionSSLCertificates**](SSLApi.md#provisionSSLCertificates) | **POST** /ssl/provision | Provision SSL certificates


# **generateSSLCSR**
> string generateSSLCSR()

Generates a Certificate Signing Request (CSR) for a domain & country code. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SSLApi(configuration);

let body:.SSLApiGenerateSSLCSRRequest = {
  // string | Domain to generate CSR for.
  domain: "example.com",
  // string
  countrycode: "GB",
};

apiInstance.generateSSLCSR(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domain** | [**string**] | Domain to generate CSR for. | defaults to undefined
 **countrycode** | [**string**] |  | defaults to undefined


### Return type

**string**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: text/html


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad request |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getSSLStatus**
> SSLStatusResponse getSSLStatus()

Returns the SSL status for all domains.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SSLApi(configuration);

let body:any = {};

apiInstance.getSSLStatus(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**SSLStatusResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/html


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **installSSLCertificate**
> string installSSLCertificate()

Installs a custom certificate. The chain certificate is optional. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SSLApi(configuration);

let body:.SSLApiInstallSSLCertificateRequest = {
  // string | Hostname format.
  domain: "example.com",
  // string | TLS/SSL certificate.
  cert: `-----BEGIN CERTIFICATE-----
MIICaDCCAVACAQAwIzELMAkGA1UEBhMCQlMxFDASBgNVBAMMC2V4YW1wbGUuY29t
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA3K6dwLM2Nk8kVhIBaZmp
eY6y7O0T3jrexEKlW839TVYdcH+K35V1NxilbMFKMuHeowGwFyyiqOy/OUYNeq+T
Rz3s4b1qG2p01dwlsXHHYmXLYTAhvqvY+CU5ksieuZbyHRTwbHViQ0xtRXwoVCnj
CkN7kJVpkLfVN0/BG6NBFpv/JI8F+hwp+IHdkC1gUXRrLJNC79ERqFP8HoqdQWNw
OGGFaOe2aQhvj2zt8wFncyKVc40UKVbSzGGzdL2MPiAJHgZ2lmeY1xDyX1lOt12R
IFPwtxmbxaxYaVfe2hxl7m88xV3OjYcKgwVYDusk2XJ37cGew5g+NbBvzEeEUpF9
5wIDAQABoAAwDQYJKoZIhvcNAQELBQADggEBAD7UPC3/Nkgpn53mT9puUonYdJg9
SD8vvTK/N78CzoEgPNyq+bYbqlcvVPKIdItf9TMiqfOSvW3e3NvkRisYle8Qp+0C
8pafXBvQ9eHt5CFeJn4sH9GnxeflOZT/P9Jnp71KtZQvOobirX4GgEWs79g+/NHb
Zyf8rbadt9HruNhKA5nlP8cn7Rdc/iuJU8MVSQszI1s1DEcXMPxr6iqb2g87/ifH
lWcK59kvRJkCcPhPzjpUy9NulucH4WFA/WqKeDNFS/oC+upV5w8EDEcfnenJFG+N
JmFDQESSfUxLPHLC660Wnf3GmrP/duZHpPC+qTe8b1AlQ7zDT3cOaAQ+Mb0=
-----END CERTIFICATE-----
`,
  // string | TLS/SSL intermediate chain (if provided, else empty string).
  chain: `-----BEGIN CERTIFICATE-----
MIICaDCCAVACAQAwIzELMAkGA1UEBhMCQlMxFDASBgNVBAMMC2V4YW1wbGUuY29t
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA3K6dwLM2Nk8kVhIBaZmp
eY6y7O0T3jrexEKlW839TVYdcH+K35V1NxilbMFKMuHeowGwFyyiqOy/OUYNeq+T
Rz3s4b1qG2p01dwlsXHHYmXLYTAhvqvY+CU5ksieuZbyHRTwbHViQ0xtRXwoVCnj
CkN7kJVpkLfVN0/BG6NBFpv/JI8F+hwp+IHdkC1gUXRrLJNC79ERqFP8HoqdQWNw
OGGFaOe2aQhvj2zt8wFncyKVc40UKVbSzGGzdL2MPiAJHgZ2lmeY1xDyX1lOt12R
IFPwtxmbxaxYaVfe2hxl7m88xV3OjYcKgwVYDusk2XJ37cGew5g+NbBvzEeEUpF9
5wIDAQABoAAwDQYJKoZIhvcNAQELBQADggEBAD7UPC3/Nkgpn53mT9puUonYdJg9
SD8vvTK/N78CzoEgPNyq+bYbqlcvVPKIdItf9TMiqfOSvW3e3NvkRisYle8Qp+0C
8pafXBvQ9eHt5CFeJn4sH9GnxeflOZT/P9Jnp71KtZQvOobirX4GgEWs79g+/NHb
Zyf8rbadt9HruNhKA5nlP8cn7Rdc/iuJU8MVSQszI1s1DEcXMPxr6iqb2g87/ifH
lWcK59kvRJkCcPhPzjpUy9NulucH4WFA/WqKeDNFS/oC+upV5w8EDEcfnenJFG+N
JmFDQESSfUxLPHLC660Wnf3GmrP/duZHpPC+qTe8b1AlQ7zDT3cOaAQ+Mb0=
-----END CERTIFICATE-----
`,
};

apiInstance.installSSLCertificate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domain** | [**string**] | Hostname format. | defaults to undefined
 **cert** | [**string**] | TLS/SSL certificate. | defaults to undefined
 **chain** | [**string**] | TLS/SSL intermediate chain (if provided, else empty string). | defaults to undefined


### Return type

**string**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: text/html


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad request |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **provisionSSLCertificates**
> SSLCertificatesProvisionResponse provisionSSLCertificates()

Provisions certificates for all domains. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SSLApi(configuration);

let body:any = {};

apiInstance.provisionSSLCertificates(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**SSLCertificatesProvisionResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/html


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


