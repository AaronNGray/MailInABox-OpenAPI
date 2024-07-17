# SystemBackupStatusResponse

Backup status response. Lists the status for all backups.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backups** | [**List[SystemBackupStatus]**](SystemBackupStatus.md) |  | [optional] 
**unmatched_file_size** | **int** |  | 
**error** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.system_backup_status_response import SystemBackupStatusResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SystemBackupStatusResponse from a JSON string
system_backup_status_response_instance = SystemBackupStatusResponse.from_json(json)
# print the JSON string representation of the object
print(SystemBackupStatusResponse.to_json())

# convert the object into a dict
system_backup_status_response_dict = system_backup_status_response_instance.to_dict()
# create an instance of SystemBackupStatusResponse from a dict
system_backup_status_response_from_dict = SystemBackupStatusResponse.from_dict(system_backup_status_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


