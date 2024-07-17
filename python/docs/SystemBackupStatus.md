# SystemBackupStatus

Backup status details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | **datetime** |  | 
**date_delta** | **str** |  | 
**date_str** | **str** |  | 
**deleted_in** | **str** |  | [optional] 
**full** | **bool** |  | 
**size** | **int** |  | 
**volumes** | **int** |  | 

## Example

```python
from openapi_client.models.system_backup_status import SystemBackupStatus

# TODO update the JSON string below
json = "{}"
# create an instance of SystemBackupStatus from a JSON string
system_backup_status_instance = SystemBackupStatus.from_json(json)
# print the JSON string representation of the object
print(SystemBackupStatus.to_json())

# convert the object into a dict
system_backup_status_dict = system_backup_status_instance.to_dict()
# create an instance of SystemBackupStatus from a dict
system_backup_status_from_dict = SystemBackupStatus.from_dict(system_backup_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


