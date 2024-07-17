# SSLCertificatesProvisionResponseRequestsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**log** | **List[str]** |  | 
**result** | **str** |  | 
**domains** | **List[str]** |  | 

## Example

```python
from openapi_client.models.ssl_certificates_provision_response_requests_inner import SSLCertificatesProvisionResponseRequestsInner

# TODO update the JSON string below
json = "{}"
# create an instance of SSLCertificatesProvisionResponseRequestsInner from a JSON string
ssl_certificates_provision_response_requests_inner_instance = SSLCertificatesProvisionResponseRequestsInner.from_json(json)
# print the JSON string representation of the object
print(SSLCertificatesProvisionResponseRequestsInner.to_json())

# convert the object into a dict
ssl_certificates_provision_response_requests_inner_dict = ssl_certificates_provision_response_requests_inner_instance.to_dict()
# create an instance of SSLCertificatesProvisionResponseRequestsInner from a dict
ssl_certificates_provision_response_requests_inner_from_dict = SSLCertificatesProvisionResponseRequestsInner.from_dict(ssl_certificates_provision_response_requests_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


