# GetWKDstatus200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**keys** | [**List[PgpKey]**](PgpKey.md) |  | 
**wkd** | **object** |  | 

## Example

```python
from openapi_client.models.get_wk_dstatus200_response import GetWKDstatus200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetWKDstatus200Response from a JSON string
get_wk_dstatus200_response_instance = GetWKDstatus200Response.from_json(json)
# print the JSON string representation of the object
print(GetWKDstatus200Response.to_json())

# convert the object into a dict
get_wk_dstatus200_response_dict = get_wk_dstatus200_response_instance.to_dict()
# create an instance of GetWKDstatus200Response from a dict
get_wk_dstatus200_response_from_dict = GetWKDstatus200Response.from_dict(get_wk_dstatus200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


