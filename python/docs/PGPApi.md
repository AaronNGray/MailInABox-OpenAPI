# openapi_client.PGPApi

All URIs are relative to *https://box.example.com/admin*

Method | HTTP request | Description
------------- | ------------- | -------------
[**export_pgp_key**](PGPApi.md#export_pgp_key) | **GET** /system/pgp/{fpr}/export | Export a PGP key
[**get_pgp_key**](PGPApi.md#get_pgp_key) | **GET** /system/pgp/{fpr} | Get a specific PGP key
[**get_pgp_keys**](PGPApi.md#get_pgp_keys) | **GET** /system/pgp/ | Get all PGP keys
[**import_pgp_key**](PGPApi.md#import_pgp_key) | **POST** /system/pgp/import | Import a PGP key
[**remove_pgp_key**](PGPApi.md#remove_pgp_key) | **DELETE** /system/pgp/{fpr} | Remove a PGP key


# **export_pgp_key**
> str export_pgp_key()

Export a PGP key

Exports the PGP key with the given fingerprint.

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
    api_instance = openapi_client.PGPApi(api_client)

    try:
        # Export a PGP key
        api_response = api_instance.export_pgp_key()
        print("The response of PGPApi->export_pgp_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PGPApi->export_pgp_key: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**str**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**403** | Forbidden |  -  |
**404** | Key not found in public keyring |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_pgp_key**
> PgpKey get_pgp_key()

Get a specific PGP key

Gets a JSON summary of the PGP key with the given fingerprint.

### Example

* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.pgp_key import PgpKey
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
    api_instance = openapi_client.PGPApi(api_client)

    try:
        # Get a specific PGP key
        api_response = api_instance.get_pgp_key()
        print("The response of PGPApi->get_pgp_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PGPApi->get_pgp_key: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**PgpKey**](PgpKey.md)

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
**404** | Key not found in public keyring |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_pgp_keys**
> PgpKeyring get_pgp_keys()

Get all PGP keys

Gets a JSON summary of all public PGP keys in the keyring.

### Example

* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.pgp_keyring import PgpKeyring
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
    api_instance = openapi_client.PGPApi(api_client)

    try:
        # Get all PGP keys
        api_response = api_instance.get_pgp_keys()
        print("The response of PGPApi->get_pgp_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PGPApi->get_pgp_keys: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**PgpKeyring**](PgpKeyring.md)

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

# **import_pgp_key**
> PgpKeyImportResult import_pgp_key()

Import a PGP key

Imports a PGP key block into the keyring. Only public keys are accepted.

### Example

* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.pgp_key_import_result import PgpKeyImportResult
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
    api_instance = openapi_client.PGPApi(api_client)

    try:
        # Import a PGP key
        api_response = api_instance.import_pgp_key()
        print("The response of PGPApi->import_pgp_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PGPApi->import_pgp_key: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**PgpKeyImportResult**](PgpKeyImportResult.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Import refused |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_pgp_key**
> str remove_pgp_key()

Remove a PGP key

Removes the PGP key with the given fingerprint from the keyring

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
    api_instance = openapi_client.PGPApi(api_client)

    try:
        # Remove a PGP key
        api_response = api_instance.remove_pgp_key()
        print("The response of PGPApi->remove_pgp_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PGPApi->remove_pgp_key: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**str**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Operation successful |  -  |
**403** | Forbidden |  -  |
**404** | Key not found in public keyring |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

