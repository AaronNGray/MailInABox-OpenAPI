# MfaStatusResponseEnabledMfa


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**type** | **str** |  | [optional] 
**label** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.mfa_status_response_enabled_mfa import MfaStatusResponseEnabledMfa

# TODO update the JSON string below
json = "{}"
# create an instance of MfaStatusResponseEnabledMfa from a JSON string
mfa_status_response_enabled_mfa_instance = MfaStatusResponseEnabledMfa.from_json(json)
# print the JSON string representation of the object
print(MfaStatusResponseEnabledMfa.to_json())

# convert the object into a dict
mfa_status_response_enabled_mfa_dict = mfa_status_response_enabled_mfa_instance.to_dict()
# create an instance of MfaStatusResponseEnabledMfa from a dict
mfa_status_response_enabled_mfa_from_dict = MfaStatusResponseEnabledMfa.from_dict(mfa_status_response_enabled_mfa_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


