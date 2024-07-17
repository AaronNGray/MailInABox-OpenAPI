# PgpKeyring

Describes all PGP keys in the keyring

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**daemon** | [**PgpKey**](PgpKey.md) |  | 
**imported** | [**List[PgpKey]**](PgpKey.md) |  | 

## Example

```python
from openapi_client.models.pgp_keyring import PgpKeyring

# TODO update the JSON string below
json = "{}"
# create an instance of PgpKeyring from a JSON string
pgp_keyring_instance = PgpKeyring.from_json(json)
# print the JSON string representation of the object
print(PgpKeyring.to_json())

# convert the object into a dict
pgp_keyring_dict = pgp_keyring_instance.to_dict()
# create an instance of PgpKeyring from a dict
pgp_keyring_from_dict = PgpKeyring.from_dict(pgp_keyring_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


