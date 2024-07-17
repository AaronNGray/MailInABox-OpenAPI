# MailAlias

Mail alias details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | Email format. | 
**address_display** | **str** | Email format. | 
**forwards_to** | **List[str]** |  | 
**permitted_senders** | **List[str]** |  | 
**required** | **bool** |  | 

## Example

```python
from openapi_client.models.mail_alias import MailAlias

# TODO update the JSON string below
json = "{}"
# create an instance of MailAlias from a JSON string
mail_alias_instance = MailAlias.from_json(json)
# print the JSON string representation of the object
print(MailAlias.to_json())

# convert the object into a dict
mail_alias_dict = mail_alias_instance.to_dict()
# create an instance of MailAlias from a dict
mail_alias_from_dict = MailAlias.from_dict(mail_alias_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


