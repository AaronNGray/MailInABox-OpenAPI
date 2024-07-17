# MailUser

Mail user details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | Email format. | 
**privileges** | [**List[MailUserPrivilege]**](MailUserPrivilege.md) |  | 
**status** | [**MailUserStatus**](MailUserStatus.md) |  | 
**mailbox** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.mail_user import MailUser

# TODO update the JSON string below
json = "{}"
# create an instance of MailUser from a JSON string
mail_user_instance = MailUser.from_json(json)
# print the JSON string representation of the object
print(MailUser.to_json())

# convert the object into a dict
mail_user_dict = mail_user_instance.to_dict()
# create an instance of MailUser from a dict
mail_user_from_dict = MailUser.from_dict(mail_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


