# SmtpRelayConfig

SMTP configuration details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** |  | 
**host** | **str** |  | 
**auth_enabled** | **bool** |  | 
**user** | **str** |  | 

## Example

```python
from openapi_client.models.smtp_relay_config import SmtpRelayConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SmtpRelayConfig from a JSON string
smtp_relay_config_instance = SmtpRelayConfig.from_json(json)
# print the JSON string representation of the object
print(SmtpRelayConfig.to_json())

# convert the object into a dict
smtp_relay_config_dict = smtp_relay_config_instance.to_dict()
# create an instance of SmtpRelayConfig from a dict
smtp_relay_config_from_dict = SmtpRelayConfig.from_dict(smtp_relay_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


