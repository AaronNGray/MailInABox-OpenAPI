# SSLStatus

SSL status details for domain.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain** | **str** | Hostname format. | 
**status** | [**SSLStatusType**](SSLStatusType.md) |  | 
**text** | **str** |  | 

## Example

```python
from openapi_client.models.ssl_status import SSLStatus

# TODO update the JSON string below
json = "{}"
# create an instance of SSLStatus from a JSON string
ssl_status_instance = SSLStatus.from_json(json)
# print the JSON string representation of the object
print(SSLStatus.to_json())

# convert the object into a dict
ssl_status_dict = ssl_status_instance.to_dict()
# create an instance of SSLStatus from a dict
ssl_status_from_dict = SSLStatus.from_dict(ssl_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


