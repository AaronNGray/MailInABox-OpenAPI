# openapi_client.MFAApi

All URIs are relative to *https://box.example.com/admin*

Method | HTTP request | Description
------------- | ------------- | -------------
[**mfa_status**](MFAApi.md#mfa_status) | **POST** /mfa/status | Retrieve MFA status for you or another user
[**mfa_totp_disable**](MFAApi.md#mfa_totp_disable) | **POST** /mfa/disable | Disable multi-factor authentication for you or another user
[**mfa_totp_enable**](MFAApi.md#mfa_totp_enable) | **POST** /mfa/totp/enable | Enable TOTP authentication


# **mfa_status**
> MfaStatusResponse mfa_status()

Retrieve MFA status for you or another user

Retrieves which type of MFA is used and configuration

### Example

* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.mfa_status_response import MfaStatusResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://box.example.com/admin
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://box.example.com/admin"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MFAApi(api_client)

    try:
        # Retrieve MFA status for you or another user
        api_response = api_instance.mfa_status()
        print("The response of MFAApi->mfa_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MFAApi->mfa_status: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**MfaStatusResponse**](MfaStatusResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mfa_totp_disable**
> str mfa_totp_disable(mfa_id=mfa_id)

Disable multi-factor authentication for you or another user

Disables multi-factor authentication for the currently logged-in admin user or another user if a 'user' parameter is submitted. Either disables all multi-factor authentication methods or the method corresponding to the optional property `mfa_id`.

### Example

* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://box.example.com/admin
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://box.example.com/admin"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MFAApi(api_client)
    mfa_id = 'mfa_id_example' # str |  (optional)

    try:
        # Disable multi-factor authentication for you or another user
        api_response = api_instance.mfa_totp_disable(mfa_id=mfa_id)
        print("The response of MFAApi->mfa_totp_disable:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MFAApi->mfa_totp_disable: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mfa_id** | **str**|  | [optional] 

### Return type

**str**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mfa_totp_enable**
> str mfa_totp_enable(secret, code, label=label)

Enable TOTP authentication

Enables TOTP authentication for the currently logged-in admin user

### Example

* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://box.example.com/admin
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://box.example.com/admin"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MFAApi(api_client)
    secret = 'secret_example' # str | 
    code = 'code_example' # str | 
    label = 'label_example' # str |  (optional)

    try:
        # Enable TOTP authentication
        api_response = api_instance.mfa_totp_enable(secret, code, label=label)
        print("The response of MFAApi->mfa_totp_enable:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MFAApi->mfa_totp_enable: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **secret** | **str**|  | 
 **code** | **str**|  | 
 **label** | **str**|  | [optional] 

### Return type

**str**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad request |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

