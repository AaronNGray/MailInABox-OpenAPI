# SSLStatusResponse

SSL status response for all relevant domains.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**can_provision** | **List[str]** |  | 
**status** | [**List[SSLStatus]**](SSLStatus.md) |  | 

## Example

```python
from openapi_client.models.ssl_status_response import SSLStatusResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SSLStatusResponse from a JSON string
ssl_status_response_instance = SSLStatusResponse.from_json(json)
# print the JSON string representation of the object
print(SSLStatusResponse.to_json())

# convert the object into a dict
ssl_status_response_dict = ssl_status_response_instance.to_dict()
# create an instance of SSLStatusResponse from a dict
ssl_status_response_from_dict = SSLStatusResponse.from_dict(ssl_status_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


