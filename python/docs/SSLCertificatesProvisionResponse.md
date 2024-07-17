# SSLCertificatesProvisionResponse

SSL certificates provision response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requests** | [**List[SSLCertificatesProvisionResponseRequestsInner]**](SSLCertificatesProvisionResponseRequestsInner.md) |  | 

## Example

```python
from openapi_client.models.ssl_certificates_provision_response import SSLCertificatesProvisionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SSLCertificatesProvisionResponse from a JSON string
ssl_certificates_provision_response_instance = SSLCertificatesProvisionResponse.from_json(json)
# print the JSON string representation of the object
print(SSLCertificatesProvisionResponse.to_json())

# convert the object into a dict
ssl_certificates_provision_response_dict = ssl_certificates_provision_response_instance.to_dict()
# create an instance of SSLCertificatesProvisionResponse from a dict
ssl_certificates_provision_response_from_dict = SSLCertificatesProvisionResponse.from_dict(ssl_certificates_provision_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


