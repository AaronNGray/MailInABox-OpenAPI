# .SystemApi

All URIs are relative to *https://box.example.com/admin*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getRelayConfig**](SystemApi.md#getRelayConfig) | **GET** /system/smtp/relay | Get SMTP relay configuration
[**getSystemBackupConfig**](SystemApi.md#getSystemBackupConfig) | **GET** /system/backup/config | Get system backup config
[**getSystemBackupStatus**](SystemApi.md#getSystemBackupStatus) | **GET** /system/backup/status | Get system backup status
[**getSystemPrivacyStatus**](SystemApi.md#getSystemPrivacyStatus) | **GET** /system/privacy | Get system privacy status
[**getSystemRebootStatus**](SystemApi.md#getSystemRebootStatus) | **GET** /system/reboot | Get system reboot status
[**getSystemStatus**](SystemApi.md#getSystemStatus) | **POST** /system/status | Get system status
[**getSystemUpdates**](SystemApi.md#getSystemUpdates) | **GET** /system/updates | Get system updates
[**getSystemUpstreamVersion**](SystemApi.md#getSystemUpstreamVersion) | **POST** /system/latest-upstream-version | Get system upstream version
[**getSystemVersion**](SystemApi.md#getSystemVersion) | **GET** /system/version | Get system version
[**performSystemBackup**](SystemApi.md#performSystemBackup) | **POST** /system/backup/new | Perform system backup
[**rebootSystem**](SystemApi.md#rebootSystem) | **POST** /system/reboot | Reboot system
[**setRelayConfig**](SystemApi.md#setRelayConfig) | **POST** /system/smtp/relay | Set SMTP relay configuration
[**updateSystemBackupConfig**](SystemApi.md#updateSystemBackupConfig) | **POST** /system/backup/config | Update system backup config
[**updateSystemPackages**](SystemApi.md#updateSystemPackages) | **POST** /system/update-packages | Update system packages
[**updateSystemPrivacy**](SystemApi.md#updateSystemPrivacy) | **POST** /system/privacy | Update system privacy


# **getRelayConfig**
> SmtpRelayConfig getRelayConfig()

Gets basic configuration on how the box should use third-party relay services to deliver mail.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SystemApi(configuration);

let body:any = {};

apiInstance.getRelayConfig(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**SmtpRelayConfig**

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

# **getSystemBackupConfig**
> SystemBackupConfigResponse getSystemBackupConfig()

Returns the system backup config.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SystemApi(configuration);

let body:any = {};

apiInstance.getSystemBackupConfig(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**SystemBackupConfigResponse**

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

# **getSystemBackupStatus**
> SystemBackupStatusResponse getSystemBackupStatus()

Returns the system backup status.  If the list of backups is empty, this implies no backups have been made yet. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SystemApi(configuration);

let body:any = {};

apiInstance.getSystemBackupStatus(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**SystemBackupStatusResponse**

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

# **getSystemPrivacyStatus**
> boolean getSystemPrivacyStatus()

Returns system privacy (new-version check) status.  Response:    - `true`: Private, new-version checks will not be performed   - `false`: Not private, new-version checks will be performed 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SystemApi(configuration);

let body:any = {};

apiInstance.getSystemPrivacyStatus(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**boolean**

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

# **getSystemRebootStatus**
> boolean getSystemRebootStatus()

Returns the system reboot status.  Response:    - `true`: A reboot is required   - `false`: A reboot is not required 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SystemApi(configuration);

let body:any = {};

apiInstance.getSystemRebootStatus(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**boolean**

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

# **getSystemStatus**
> Array<StatusEntry> getSystemStatus()

Returns an array of statuses which can include headings. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SystemApi(configuration);

let body:any = {};

apiInstance.getSystemStatus(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<StatusEntry>**

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

# **getSystemUpdates**
> string getSystemUpdates()

Returns system (apt) updates.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SystemApi(configuration);

let body:any = {};

apiInstance.getSystemUpdates(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**string**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getSystemUpstreamVersion**
> string getSystemUpstreamVersion()

Returns Mail-in-a-Box upstream version.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SystemApi(configuration);

let body:any = {};

apiInstance.getSystemUpstreamVersion(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**string**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getSystemVersion**
> string getSystemVersion()

Returns installed Mail-in-a-Box version.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SystemApi(configuration);

let body:any = {};

apiInstance.getSystemVersion(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**string**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **performSystemBackup**
> string performSystemBackup()

Performs a system backup.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SystemApi(configuration);

let body:.SystemApiPerformSystemBackupRequest = {
  // boolean
  full: false,
};

apiInstance.performSystemBackup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **full** | [**boolean**] |  | defaults to undefined


### Return type

**string**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: text/html, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **rebootSystem**
> string rebootSystem()

Reboots the system.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SystemApi(configuration);

let body:any = {};

apiInstance.rebootSystem(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**string**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **setRelayConfig**
> string setRelayConfig()

Sets the configuration on how the box should use third-party relays to deliver mail.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SystemApi(configuration);

let body:.SystemApiSetRelayConfigRequest = {
  // boolean
  enabled: true,
  // string
  host: "sendgrid.net",
  // boolean
  authEnabled: true,
  // string
  user: "apikey",
  // string
  key: "******",
};

apiInstance.setRelayConfig(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **enabled** | [**boolean**] |  | defaults to undefined
 **host** | [**string**] |  | defaults to undefined
 **authEnabled** | [**boolean**] |  | defaults to undefined
 **user** | [**string**] |  | defaults to undefined
 **key** | [**string**] |  | defaults to undefined


### Return type

**string**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: text/plain, text/html


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateSystemBackupConfig**
> string updateSystemBackupConfig()

Updates the system backup config.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SystemApi(configuration);

let body:.SystemApiUpdateSystemBackupConfigRequest = {
  // string
  target: "s3://s3.eu-central-1.amazonaws.com/box-example-com",
  // string
  targetUser: "username",
  // string
  targetPass: "password",
  // number
  minAge: 3,
};

apiInstance.updateSystemBackupConfig(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **target** | [**string**] |  | defaults to undefined
 **targetUser** | [**string**] |  | defaults to undefined
 **targetPass** | [**string**] |  | defaults to undefined
 **minAge** | [**number**] |  | defaults to undefined


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

# **updateSystemPackages**
> string updateSystemPackages()

Updates system (apt) packages.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SystemApi(configuration);

let body:any = {};

apiInstance.updateSystemPackages(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**string**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateSystemPrivacy**
> string updateSystemPrivacy()

Updates system privacy (new-version checks).  Request:    - `value: private`: Disable new version checks   - `value: off`: Enable new version checks 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SystemApi(configuration);

let body:.SystemApiUpdateSystemPrivacyRequest = {
  // SystemPrivacyStatus
  value: "private",
};

apiInstance.updateSystemPrivacy(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | **SystemPrivacyStatus** |  | defaults to undefined


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


