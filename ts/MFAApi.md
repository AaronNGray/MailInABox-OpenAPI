# .MFAApi

All URIs are relative to *https://box.example.com/admin*

Method | HTTP request | Description
------------- | ------------- | -------------
[**mfaStatus**](MFAApi.md#mfaStatus) | **POST** /mfa/status | Retrieve MFA status for you or another user
[**mfaTotpDisable**](MFAApi.md#mfaTotpDisable) | **POST** /mfa/disable | Disable multi-factor authentication for you or another user
[**mfaTotpEnable**](MFAApi.md#mfaTotpEnable) | **POST** /mfa/totp/enable | Enable TOTP authentication


# **mfaStatus**
> MfaStatusResponse mfaStatus()

Retrieves which type of MFA is used and configuration

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MFAApi(configuration);

let body:any = {};

apiInstance.mfaStatus(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**MfaStatusResponse**

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

# **mfaTotpDisable**
> string mfaTotpDisable()

Disables multi-factor authentication for the currently logged-in admin user or another user if a \'user\' parameter is submitted. Either disables all multi-factor authentication methods or the method corresponding to the optional property `mfa_id`.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MFAApi(configuration);

let body:.MFAApiMfaTotpDisableRequest = {
  // string (optional)
  mfaId: "mfaId_example",
};

apiInstance.mfaTotpDisable(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mfaId** | [**string**] |  | (optional) defaults to undefined


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
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **mfaTotpEnable**
> string mfaTotpEnable()

Enables TOTP authentication for the currently logged-in admin user

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MFAApi(configuration);

let body:.MFAApiMfaTotpEnableRequest = {
  // string
  secret: "secret_example",
  // string
  code: "code_example",
  // string (optional)
  label: "label_example",
};

apiInstance.mfaTotpEnable(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **secret** | [**string**] |  | defaults to undefined
 **code** | [**string**] |  | defaults to undefined
 **label** | [**string**] |  | (optional) defaults to undefined


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


