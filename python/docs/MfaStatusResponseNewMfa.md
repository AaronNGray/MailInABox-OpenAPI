# MfaStatusResponseNewMfa


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | [optional] 
**secret** | **str** |  | [optional] 
**qr_code_base64** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.mfa_status_response_new_mfa import MfaStatusResponseNewMfa

# TODO update the JSON string below
json = "{}"
# create an instance of MfaStatusResponseNewMfa from a JSON string
mfa_status_response_new_mfa_instance = MfaStatusResponseNewMfa.from_json(json)
# print the JSON string representation of the object
print(MfaStatusResponseNewMfa.to_json())

# convert the object into a dict
mfa_status_response_new_mfa_dict = mfa_status_response_new_mfa_instance.to_dict()
# create an instance of MfaStatusResponseNewMfa from a dict
mfa_status_response_new_mfa_from_dict = MfaStatusResponseNewMfa.from_dict(mfa_status_response_new_mfa_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


