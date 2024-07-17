# MfaStatusResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled_mfa** | [**MfaStatusResponseEnabledMfa**](MfaStatusResponseEnabledMfa.md) |  | [optional] 
**new_mfa** | [**MfaStatusResponseNewMfa**](MfaStatusResponseNewMfa.md) |  | [optional] 

## Example

```python
from openapi_client.models.mfa_status_response import MfaStatusResponse

# TODO update the JSON string below
json = "{}"
# create an instance of MfaStatusResponse from a JSON string
mfa_status_response_instance = MfaStatusResponse.from_json(json)
# print the JSON string representation of the object
print(MfaStatusResponse.to_json())

# convert the object into a dict
mfa_status_response_dict = mfa_status_response_instance.to_dict()
# create an instance of MfaStatusResponse from a dict
mfa_status_response_from_dict = MfaStatusResponse.from_dict(mfa_status_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


