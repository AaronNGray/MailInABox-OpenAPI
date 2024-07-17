# MailAliasByDomain

Mail aliases by domain.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain** | **str** | Hostname format. | 
**aliases** | [**List[MailAlias]**](MailAlias.md) |  | 

## Example

```python
from openapi_client.models.mail_alias_by_domain import MailAliasByDomain

# TODO update the JSON string below
json = "{}"
# create an instance of MailAliasByDomain from a JSON string
mail_alias_by_domain_instance = MailAliasByDomain.from_json(json)
# print the JSON string representation of the object
print(MailAliasByDomain.to_json())

# convert the object into a dict
mail_alias_by_domain_dict = mail_alias_by_domain_instance.to_dict()
# create an instance of MailAliasByDomain from a dict
mail_alias_by_domain_from_dict = MailAliasByDomain.from_dict(mail_alias_by_domain_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


