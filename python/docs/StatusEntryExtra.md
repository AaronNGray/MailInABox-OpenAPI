# StatusEntryExtra

System entry extra information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**monospace** | **bool** |  | 
**text** | **str** |  | 

## Example

```python
from openapi_client.models.status_entry_extra import StatusEntryExtra

# TODO update the JSON string below
json = "{}"
# create an instance of StatusEntryExtra from a JSON string
status_entry_extra_instance = StatusEntryExtra.from_json(json)
# print the JSON string representation of the object
print(StatusEntryExtra.to_json())

# convert the object into a dict
status_entry_extra_dict = status_entry_extra_instance.to_dict()
# create an instance of StatusEntryExtra from a dict
status_entry_extra_from_dict = StatusEntryExtra.from_dict(status_entry_extra_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


