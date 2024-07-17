# DNSDumpDomainRecord

Domain DNS record details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**explanation** | **str** |  | 
**qname** | **str** | Hostname format. | 
**rtype** | [**DNSRecordType**](DNSRecordType.md) |  | [optional] 
**value** | **str** |  | 

## Example

```python
from openapi_client.models.dns_dump_domain_record import DNSDumpDomainRecord

# TODO update the JSON string below
json = "{}"
# create an instance of DNSDumpDomainRecord from a JSON string
dns_dump_domain_record_instance = DNSDumpDomainRecord.from_json(json)
# print the JSON string representation of the object
print(DNSDumpDomainRecord.to_json())

# convert the object into a dict
dns_dump_domain_record_dict = dns_dump_domain_record_instance.to_dict()
# create an instance of DNSDumpDomainRecord from a dict
dns_dump_domain_record_from_dict = DNSDumpDomainRecord.from_dict(dns_dump_domain_record_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


