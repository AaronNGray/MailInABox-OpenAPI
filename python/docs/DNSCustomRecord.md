# DNSCustomRecord

Custom DNS record detail detail.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**qname** | **str** | Hostname format. | 
**rtype** | [**DNSRecordType**](DNSRecordType.md) |  | 
**value** | **str** |  | 

## Example

```python
from openapi_client.models.dns_custom_record import DNSCustomRecord

# TODO update the JSON string below
json = "{}"
# create an instance of DNSCustomRecord from a JSON string
dns_custom_record_instance = DNSCustomRecord.from_json(json)
# print the JSON string representation of the object
print(DNSCustomRecord.to_json())

# convert the object into a dict
dns_custom_record_dict = dns_custom_record_instance.to_dict()
# create an instance of DNSCustomRecord from a dict
dns_custom_record_from_dict = DNSCustomRecord.from_dict(dns_custom_record_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


