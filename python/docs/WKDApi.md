# openapi_client.WKDApi

All URIs are relative to *https://box.example.com/admin*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_wk_dstatus**](WKDApi.md#get_wk_dstatus) | **GET** /system/pgp/wkd | Get WKD status


# **get_wk_dstatus**
> GetWKDstatus200Response get_wk_dstatus()

Get WKD status

Gets the current configuration applied to the Web Key Directory for each email hosted in the box, along with a JSON summary of all public PGP keys in the keyring.

### Example

* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.get_wk_dstatus200_response import GetWKDstatus200Response
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
    api_instance = openapi_client.WKDApi(api_client)

    try:
        # Get WKD status
        api_response = api_instance.get_wk_dstatus()
        print("The response of WKDApi->get_wk_dstatus:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WKDApi->get_wk_dstatus: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**GetWKDstatus200Response**](GetWKDstatus200Response.md)

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

