# WebDomain

Web domain details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_root** | **str** |  | 
**domain** | **str** | Hostname format. | 
**root** | **str** |  | 
**ssl_certificate** | [**List[WebDomainSslCertificateInner]**](WebDomainSslCertificateInner.md) |  | 
**static_enabled** | **bool** |  | 

## Example

```python
from openapi_client.models.web_domain import WebDomain

# TODO update the JSON string below
json = "{}"
# create an instance of WebDomain from a JSON string
web_domain_instance = WebDomain.from_json(json)
# print the JSON string representation of the object
print(WebDomain.to_json())

# convert the object into a dict
web_domain_dict = web_domain_instance.to_dict()
# create an instance of WebDomain from a dict
web_domain_from_dict = WebDomain.from_dict(web_domain_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


