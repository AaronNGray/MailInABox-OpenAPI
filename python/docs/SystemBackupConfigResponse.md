# SystemBackupConfigResponse

Backup config response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enc_pw_file** | **str** |  | 
**file_target_directory** | **str** |  | 
**min_age_in_days** | **int** |  | 
**ssh_pub_key** | **str** |  | 
**target** | **str** |  | 
**target_user** | **str** |  | [optional] 
**target_pass** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.system_backup_config_response import SystemBackupConfigResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SystemBackupConfigResponse from a JSON string
system_backup_config_response_instance = SystemBackupConfigResponse.from_json(json)
# print the JSON string representation of the object
print(SystemBackupConfigResponse.to_json())

# convert the object into a dict
system_backup_config_response_dict = system_backup_config_response_instance.to_dict()
# create an instance of SystemBackupConfigResponse from a dict
system_backup_config_response_from_dict = SystemBackupConfigResponse.from_dict(system_backup_config_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


