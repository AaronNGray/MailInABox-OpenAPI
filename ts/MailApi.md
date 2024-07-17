# .MailApi

All URIs are relative to *https://box.example.com/admin*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addMailUser**](MailApi.md#addMailUser) | **POST** /mail/users/add | Add mail user
[**addMailUserPrivilege**](MailApi.md#addMailUserPrivilege) | **POST** /mail/users/privileges/add | Add mail user privilege
[**getMailAliases**](MailApi.md#getMailAliases) | **GET** /mail/aliases | Get mail aliases
[**getMailDomains**](MailApi.md#getMailDomains) | **GET** /mail/domains | Get mail domains
[**getMailUserPrivileges**](MailApi.md#getMailUserPrivileges) | **GET** /mail/users/privileges | Get mail user privileges
[**getMailUsers**](MailApi.md#getMailUsers) | **GET** /mail/users | Get mail users
[**removeMailAlias**](MailApi.md#removeMailAlias) | **POST** /mail/aliases/remove | Remove mail alias
[**removeMailUser**](MailApi.md#removeMailUser) | **POST** /mail/users/remove | Remove mail user
[**removeMailUserPrivilege**](MailApi.md#removeMailUserPrivilege) | **POST** /mail/users/privileges/remove | Remove mail user privilege
[**setMailUserPassword**](MailApi.md#setMailUserPassword) | **POST** /mail/users/password | Set mail user password
[**upsertMailAlias**](MailApi.md#upsertMailAlias) | **POST** /mail/aliases/add | Upsert mail alias


# **addMailUser**
> string addMailUser()

Adds a new mail user.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MailApi(configuration);

let body:.MailApiAddMailUserRequest = {
  // string | Email format.
  email: "user@example.com",
  // string
  password: "password_example",
  // MailUserPrivilege
  privileges: "admin",
};

apiInstance.addMailUser(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | [**string**] | Email format. | defaults to undefined
 **password** | [**string**] |  | defaults to undefined
 **privileges** | **MailUserPrivilege** |  | defaults to undefined


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

# **addMailUserPrivilege**
> string addMailUserPrivilege()

Adds a privilege to an existing mail user.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MailApi(configuration);

let body:.MailApiAddMailUserPrivilegeRequest = {
  // string | Email format.
  email: "user@example.com",
  // MailUserPrivilege
  privilege: "admin",
};

apiInstance.addMailUserPrivilege(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | [**string**] | Email format. | defaults to undefined
 **privilege** | **MailUserPrivilege** |  | defaults to undefined


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

# **getMailAliases**
> Array<MailAliasByDomain> getMailAliases()

Returns all mail aliases.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MailApi(configuration);

let body:.MailApiGetMailAliasesRequest = {
  // MailAliasesResponseFormat | The format of the response. (optional)
  format: "json",
};

apiInstance.getMailAliases(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **MailAliasesResponseFormat** | The format of the response. | (optional) defaults to undefined


### Return type

**Array<MailAliasByDomain>**

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

# **getMailDomains**
> string getMailDomains()

Returns all mail domains.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MailApi(configuration);

let body:any = {};

apiInstance.getMailDomains(body).then((data:any) => {
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

# **getMailUserPrivileges**
> MailUserPrivilege getMailUserPrivileges()

Returns all privileges for an existing mail user.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MailApi(configuration);

let body:.MailApiGetMailUserPrivilegesRequest = {
  // string | The email you want to get privileges for. (optional)
  email: "user@example.com",
};

apiInstance.getMailUserPrivileges(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | [**string**] | The email you want to get privileges for. | (optional) defaults to undefined


### Return type

**MailUserPrivilege**

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

# **getMailUsers**
> Array<MailUserByDomain> getMailUsers()

Returns all mail users.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MailApi(configuration);

let body:.MailApiGetMailUsersRequest = {
  // MailUsersResponseFormat | The format of the response. (optional)
  format: "json",
};

apiInstance.getMailUsers(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **MailUsersResponseFormat** | The format of the response. | (optional) defaults to undefined


### Return type

**Array<MailUserByDomain>**

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

# **removeMailAlias**
> string removeMailAlias()

Removes a mail alias.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MailApi(configuration);

let body:.MailApiRemoveMailAliasRequest = {
  // string | Email format.
  address: "user@example.com",
};

apiInstance.removeMailAlias(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | [**string**] | Email format. | defaults to undefined


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

# **removeMailUser**
> string removeMailUser()

Removes an existing mail user.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MailApi(configuration);

let body:.MailApiRemoveMailUserRequest = {
  // string | Email format.
  email: "user@example.com",
};

apiInstance.removeMailUser(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | [**string**] | Email format. | defaults to undefined


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

# **removeMailUserPrivilege**
> string removeMailUserPrivilege()

Removes a privilege from an existing mail user.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MailApi(configuration);

let body:.MailApiRemoveMailUserPrivilegeRequest = {
  // string | Email format.
  email: "user@example.com",
  // MailUserPrivilege
  privilege: "admin",
};

apiInstance.removeMailUserPrivilege(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | [**string**] | Email format. | defaults to undefined
 **privilege** | **MailUserPrivilege** |  | defaults to undefined


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

# **setMailUserPassword**
> string setMailUserPassword()

Sets a password for an existing mail user.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MailApi(configuration);

let body:.MailApiSetMailUserPasswordRequest = {
  // string | Email format.
  email: "user@example.com",
  // string
  password: "password_example",
};

apiInstance.setMailUserPassword(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | [**string**] | Email format. | defaults to undefined
 **password** | [**string**] |  | defaults to undefined


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

# **upsertMailAlias**
> string upsertMailAlias()

Adds or updates a mail alias. If updating, you need to set `update_if_exists: 1`. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MailApi(configuration);

let body:.MailApiUpsertMailAliasRequest = {
  // number | Set to `1` when updating an alias.
  updateIfExists: 1,
  // string | Email format.
  address: "user@example.com",
  // string | If adding a regular or catch-all alias, the format needs to be `user@example.com`. Multiple address can be separated by newlines or commas.  If adding a domain alias, the format needs to be `@example.com`. 
  forwardsTo: "user1@example.com, user2@example.com",
  // string | Mail users that can send mail claiming to be from any address on the alias domain. Multiple address can be separated by newlines or commas.  Leave empty to allow any mail user listed in `forwards_to` to send mail claiming to be from any address on the alias domain. 
  permittedSenders: "user1@example.com, user2@example.com",
};

apiInstance.upsertMailAlias(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateIfExists** | [**number**] | Set to &#x60;1&#x60; when updating an alias. | defaults to undefined
 **address** | [**string**] | Email format. | defaults to undefined
 **forwardsTo** | [**string**] | If adding a regular or catch-all alias, the format needs to be &#x60;user@example.com&#x60;. Multiple address can be separated by newlines or commas.  If adding a domain alias, the format needs to be &#x60;@example.com&#x60;.  | defaults to undefined
 **permittedSenders** | [**string**] | Mail users that can send mail claiming to be from any address on the alias domain. Multiple address can be separated by newlines or commas.  Leave empty to allow any mail user listed in &#x60;forwards_to&#x60; to send mail claiming to be from any address on the alias domain.  | defaults to undefined


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


