# PgpKeySubkeysInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**algorithm** | **str** |  | 
**auth** | **bool** |  | 
**cert** | **bool** |  | 
**encr** | **bool** |  | 
**sign** | **bool** |  | 
**bits** | **int** |  | 
**expired** | **bool** |  | 
**expires** | **int** |  | 
**expires_days** | **datetime** |  | 
**fpr** | **str** |  | 
**master** | **bool** |  | 

## Example

```python
from openapi_client.models.pgp_key_subkeys_inner import PgpKeySubkeysInner

# TODO update the JSON string below
json = "{}"
# create an instance of PgpKeySubkeysInner from a JSON string
pgp_key_subkeys_inner_instance = PgpKeySubkeysInner.from_json(json)
# print the JSON string representation of the object
print(PgpKeySubkeysInner.to_json())

# convert the object into a dict
pgp_key_subkeys_inner_dict = pgp_key_subkeys_inner_instance.to_dict()
# create an instance of PgpKeySubkeysInner from a dict
pgp_key_subkeys_inner_from_dict = PgpKeySubkeysInner.from_dict(pgp_key_subkeys_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


