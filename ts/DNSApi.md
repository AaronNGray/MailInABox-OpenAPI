# .DNSApi

All URIs are relative to *https://box.example.com/admin*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addDnsCustomARecord**](DNSApi.md#addDnsCustomARecord) | **POST** /dns/custom/{qname} | Add DNS custom A record
[**addDnsCustomRecord**](DNSApi.md#addDnsCustomRecord) | **POST** /dns/custom/{qname}/{rtype} | Add DNS custom record
[**addDnsSecondaryNameserver**](DNSApi.md#addDnsSecondaryNameserver) | **POST** /dns/secondary-nameserver | Add DNS secondary nameserver
[**getDnsCustomARecordsForQName**](DNSApi.md#getDnsCustomARecordsForQName) | **GET** /dns/custom/{qname} | Get DNS custom A records
[**getDnsCustomRecords**](DNSApi.md#getDnsCustomRecords) | **GET** /dns/custom | Get DNS custom records
[**getDnsCustomRecordsForQNameAndType**](DNSApi.md#getDnsCustomRecordsForQNameAndType) | **GET** /dns/custom/{qname}/{rtype} | Get DNS custom records
[**getDnsDump**](DNSApi.md#getDnsDump) | **GET** /dns/dump | Get DNS dump
[**getDnsSecondaryNameserver**](DNSApi.md#getDnsSecondaryNameserver) | **GET** /dns/secondary-nameserver | Get DNS secondary nameserver
[**getDnsZonefile**](DNSApi.md#getDnsZonefile) | **GET** /dns/zonefile/{zone} | Get DNS zonefile
[**getDnsZones**](DNSApi.md#getDnsZones) | **GET** /dns/zones | Get DNS zones
[**removeDnsCustomARecord**](DNSApi.md#removeDnsCustomARecord) | **DELETE** /dns/custom/{qname} | Remove DNS custom A record
[**removeDnsCustomRecord**](DNSApi.md#removeDnsCustomRecord) | **DELETE** /dns/custom/{qname}/{rtype} | Remove DNS custom record
[**updateDns**](DNSApi.md#updateDns) | **POST** /dns/update | Update DNS
[**updateDnsCustomARecord**](DNSApi.md#updateDnsCustomARecord) | **PUT** /dns/custom/{qname} | Update DNS custom A record
[**updateDnsCustomRecord**](DNSApi.md#updateDnsCustomRecord) | **PUT** /dns/custom/{qname}/{rtype} | Update DNS custom record


# **addDnsCustomARecord**
> string addDnsCustomARecord(body)

Adds a custom DNS A record for the specified query name.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DNSApi(configuration);

let body:.DNSApiAddDnsCustomARecordRequest = {
  // string | DNS query name.
  qname: "example.com",
  // string
  body: "1.2.3.4",
};

apiInstance.addDnsCustomARecord(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string**|  |
 **qname** | [**string**] | DNS query name. | defaults to undefined


### Return type

**string**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: text/html


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad request |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **addDnsCustomRecord**
> string addDnsCustomRecord(body)

Adds a custom DNS record for the specified query name and type.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DNSApi(configuration);

let body:.DNSApiAddDnsCustomRecordRequest = {
  // string | DNS record query name
  qname: "example.com",
  // DNSRecordType | Record type
  rtype: "MX",
  // string
  body: "1.2.3.4",
};

apiInstance.addDnsCustomRecord(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string**|  |
 **qname** | [**string**] | DNS record query name | defaults to undefined
 **rtype** | **DNSRecordType** | Record type | defaults to undefined


### Return type

**string**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: text/html


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad request |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **addDnsSecondaryNameserver**
> string addDnsSecondaryNameserver()

Adds one or more secondary nameservers. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DNSApi(configuration);

let body:.DNSApiAddDnsSecondaryNameserverRequest = {
  // string | Hostnames separated with commas or spaces.
  hostnames: "ns2.hostingcompany.com, ns3.hostingcompany.com",
};

apiInstance.addDnsSecondaryNameserver(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hostnames** | [**string**] | Hostnames separated with commas or spaces. | defaults to undefined


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

# **getDnsCustomARecordsForQName**
> Array<DNSCustomRecord> getDnsCustomARecordsForQName()

Returns all custom A records for the specified query name.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DNSApi(configuration);

let body:.DNSApiGetDnsCustomARecordsForQNameRequest = {
  // string | DNS query name.
  qname: "example.com",
};

apiInstance.getDnsCustomARecordsForQName(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **qname** | [**string**] | DNS query name. | defaults to undefined


### Return type

**Array<DNSCustomRecord>**

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

# **getDnsCustomRecords**
> Array<DNSCustomRecord> getDnsCustomRecords()

Returns all custom DNS records.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DNSApi(configuration);

let body:any = {};

apiInstance.getDnsCustomRecords(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<DNSCustomRecord>**

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

# **getDnsCustomRecordsForQNameAndType**
> Array<DNSCustomRecord> getDnsCustomRecordsForQNameAndType()

Returns all custom records for the specified query name and type.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DNSApi(configuration);

let body:.DNSApiGetDnsCustomRecordsForQNameAndTypeRequest = {
  // string | DNS record query name
  qname: "example.com",
  // DNSRecordType | Record type
  rtype: "MX",
};

apiInstance.getDnsCustomRecordsForQNameAndType(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **qname** | [**string**] | DNS record query name | defaults to undefined
 **rtype** | **DNSRecordType** | Record type | defaults to undefined


### Return type

**Array<DNSCustomRecord>**

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

# **getDnsDump**
> Array<Array<DNSDumpDomainsInner>> getDnsDump()

Returns all DNS records.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DNSApi(configuration);

let body:any = {};

apiInstance.getDnsDump(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<Array<DNSDumpDomainsInner>>**

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

# **getDnsSecondaryNameserver**
> DNSSecondaryNameserverResponse getDnsSecondaryNameserver()

Returns a list of nameserver hostnames. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DNSApi(configuration);

let body:any = {};

apiInstance.getDnsSecondaryNameserver(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**DNSSecondaryNameserverResponse**

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

# **getDnsZonefile**
> string getDnsZonefile()

Returns a DNS zone file for a hostname.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DNSApi(configuration);

let body:.DNSApiGetDnsZonefileRequest = {
  // string | Hostname
  zone: "example.com",
};

apiInstance.getDnsZonefile(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zone** | [**string**] | Hostname | defaults to undefined


### Return type

**string**

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

# **getDnsZones**
> Array<string> getDnsZones()

Returns an array of all managed top-level domains.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DNSApi(configuration);

let body:any = {};

apiInstance.getDnsZones(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<string>**

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

# **removeDnsCustomARecord**
> string removeDnsCustomARecord(body)

Removes a DNS custom A record for the specified domain & value.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DNSApi(configuration);

let body:.DNSApiRemoveDnsCustomARecordRequest = {
  // string | DNS query name.
  qname: "example.com",
  // string
  body: "1.2.3.4",
};

apiInstance.removeDnsCustomARecord(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string**|  |
 **qname** | [**string**] | DNS query name. | defaults to undefined


### Return type

**string**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: text/html


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad request |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **removeDnsCustomRecord**
> string removeDnsCustomRecord(body)

Removes a DNS custom record for the specified domain, type & value.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DNSApi(configuration);

let body:.DNSApiRemoveDnsCustomRecordRequest = {
  // string | DNS record query name
  qname: "example.com",
  // DNSRecordType | Record type
  rtype: "MX",
  // string
  body: "1.2.3.4",
};

apiInstance.removeDnsCustomRecord(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string**|  |
 **qname** | [**string**] | DNS record query name | defaults to undefined
 **rtype** | **DNSRecordType** | Record type | defaults to undefined


### Return type

**string**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: text/html


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad request |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateDns**
> string updateDns()

Updates the DNS. Involves creating zone files and restarting `nsd`.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DNSApi(configuration);

let body:.DNSApiUpdateDnsRequest = {
  // number | Force an update even if mailinabox detects no changes are required.
  force: 1,
};

apiInstance.updateDns(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **force** | [**number**] | Force an update even if mailinabox detects no changes are required. | defaults to undefined


### Return type

**string**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, text/html


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad request |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateDnsCustomARecord**
> string updateDnsCustomARecord(body)

Updates an existing DNS custom A record value for the specified qname.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DNSApi(configuration);

let body:.DNSApiUpdateDnsCustomARecordRequest = {
  // string | DNS query name.
  qname: "example.com",
  // string
  body: "1.2.3.4",
};

apiInstance.updateDnsCustomARecord(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string**|  |
 **qname** | [**string**] | DNS query name. | defaults to undefined


### Return type

**string**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: text/html


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad request |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateDnsCustomRecord**
> string updateDnsCustomRecord(body)

Updates an existing DNS custom record value for the specified qname and type.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DNSApi(configuration);

let body:.DNSApiUpdateDnsCustomRecordRequest = {
  // string | DNS record query name
  qname: "example.com",
  // DNSRecordType | Record type
  rtype: "MX",
  // string
  body: "1.2.3.4",
};

apiInstance.updateDnsCustomRecord(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string**|  |
 **qname** | [**string**] | DNS record query name | defaults to undefined
 **rtype** | **DNSRecordType** | Record type | defaults to undefined


### Return type

**string**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: text/html


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad request |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


