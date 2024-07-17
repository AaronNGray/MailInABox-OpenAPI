# DNSSecondaryNameserverResponse

Secondary nameserver/s response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hostnames** | **List[str]** |  | 

## Example

```python
from openapi_client.models.dns_secondary_nameserver_response import DNSSecondaryNameserverResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DNSSecondaryNameserverResponse from a JSON string
dns_secondary_nameserver_response_instance = DNSSecondaryNameserverResponse.from_json(json)
# print the JSON string representation of the object
print(DNSSecondaryNameserverResponse.to_json())

# convert the object into a dict
dns_secondary_nameserver_response_dict = dns_secondary_nameserver_response_instance.to_dict()
# create an instance of DNSSecondaryNameserverResponse from a dict
dns_secondary_nameserver_response_from_dict = DNSSecondaryNameserverResponse.from_dict(dns_secondary_nameserver_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


