# StatusEntry

System status entry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**StatusEntryType**](StatusEntryType.md) |  | 
**text** | **str** |  | 
**extra** | [**List[StatusEntryExtra]**](StatusEntryExtra.md) |  | 

## Example

```python
from openapi_client.models.status_entry import StatusEntry

# TODO update the JSON string below
json = "{}"
# create an instance of StatusEntry from a JSON string
status_entry_instance = StatusEntry.from_json(json)
# print the JSON string representation of the object
print(StatusEntry.to_json())

# convert the object into a dict
status_entry_dict = status_entry_instance.to_dict()
# create an instance of StatusEntry from a dict
status_entry_from_dict = StatusEntry.from_dict(status_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


