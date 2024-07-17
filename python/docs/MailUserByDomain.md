# MailUserByDomain

Mail users by domain.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain** | **str** | Hostname format. | 
**users** | [**List[MailUser]**](MailUser.md) |  | 

## Example

```python
from openapi_client.models.mail_user_by_domain import MailUserByDomain

# TODO update the JSON string below
json = "{}"
# create an instance of MailUserByDomain from a JSON string
mail_user_by_domain_instance = MailUserByDomain.from_json(json)
# print the JSON string representation of the object
print(MailUserByDomain.to_json())

# convert the object into a dict
mail_user_by_domain_dict = mail_user_by_domain_instance.to_dict()
# create an instance of MailUserByDomain from a dict
mail_user_by_domain_from_dict = MailUserByDomain.from_dict(mail_user_by_domain_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


