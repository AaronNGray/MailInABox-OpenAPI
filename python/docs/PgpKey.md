# PgpKey

Parseable, human-friendly information about a PGP key

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ids** | **List[str]** |  | 
**ids_emails** | **List[str]** |  | [optional] 
**master_fpr** | **str** |  | 
**revoked** | **bool** |  | 
**subkeys** | [**List[PgpKeySubkeysInner]**](PgpKeySubkeysInner.md) |  | 

## Example

```python
from openapi_client.models.pgp_key import PgpKey

# TODO update the JSON string below
json = "{}"
# create an instance of PgpKey from a JSON string
pgp_key_instance = PgpKey.from_json(json)
# print the JSON string representation of the object
print(PgpKey.to_json())

# convert the object into a dict
pgp_key_dict = pgp_key_instance.to_dict()
# create an instance of PgpKey from a dict
pgp_key_from_dict = PgpKey.from_dict(pgp_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


