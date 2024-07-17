# PgpKeyImportResult

The result of the key import operation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**keys_read** | **int** | Keys in the import | 
**keys_added** | **int** | New keys | 
**keys_unchanged** | **int** | Keys that were not modified | 
**uids_added** | **int** | New user ID&#39;s | 
**sigs_added** | **int** | New key signatures | 
**revs_added** | **int** | New revocation certificates | 

## Example

```python
from openapi_client.models.pgp_key_import_result import PgpKeyImportResult

# TODO update the JSON string below
json = "{}"
# create an instance of PgpKeyImportResult from a JSON string
pgp_key_import_result_instance = PgpKeyImportResult.from_json(json)
# print the JSON string representation of the object
print(PgpKeyImportResult.to_json())

# convert the object into a dict
pgp_key_import_result_dict = pgp_key_import_result_instance.to_dict()
# create an instance of PgpKeyImportResult from a dict
pgp_key_import_result_from_dict = PgpKeyImportResult.from_dict(pgp_key_import_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


