# coding: utf-8

"""
    Mail-in-a-Box

    Mail-in-a-Box API HTTP specification.  # Introduction This API is documented in [**OpenAPI format**](http://spec.openapis.org/oas/v3.0.3). ([View the full HTTP specification](https://raw.githubusercontent.com/mail-in-a-box/mailinabox/api-spec/api/mailinabox.yml).)  All endpoints are relative to `https://{host}/admin` and are secured with [`Basic Access` authentication](https://en.wikipedia.org/wiki/Basic_access_authentication). If you have multi-factor authentication enabled, authentication with a `user:password` combination will fail unless a valid OTP is supplied via the `x-auth-token` header. Authentication via a `user:user_key` pair is possible without the header being present. 

    The version of the OpenAPI document: 60.5
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


from __future__ import annotations
import pprint
import re  # noqa: F401
import json

from pydantic import BaseModel, ConfigDict, Field, StrictInt
from typing import Any, ClassVar, Dict, List
from typing import Optional, Set
from typing_extensions import Self

class PgpKeyImportResult(BaseModel):
    """
    The result of the key import operation
    """ # noqa: E501
    keys_read: StrictInt = Field(description="Keys in the import")
    keys_added: StrictInt = Field(description="New keys")
    keys_unchanged: StrictInt = Field(description="Keys that were not modified")
    uids_added: StrictInt = Field(description="New user ID's")
    sigs_added: StrictInt = Field(description="New key signatures")
    revs_added: StrictInt = Field(description="New revocation certificates")
    __properties: ClassVar[List[str]] = ["keys_read", "keys_added", "keys_unchanged", "uids_added", "sigs_added", "revs_added"]

    model_config = ConfigDict(
        populate_by_name=True,
        validate_assignment=True,
        protected_namespaces=(),
    )


    def to_str(self) -> str:
        """Returns the string representation of the model using alias"""
        return pprint.pformat(self.model_dump(by_alias=True))

    def to_json(self) -> str:
        """Returns the JSON representation of the model using alias"""
        # TODO: pydantic v2: use .model_dump_json(by_alias=True, exclude_unset=True) instead
        return json.dumps(self.to_dict())

    @classmethod
    def from_json(cls, json_str: str) -> Optional[Self]:
        """Create an instance of PgpKeyImportResult from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self) -> Dict[str, Any]:
        """Return the dictionary representation of the model using alias.

        This has the following differences from calling pydantic's
        `self.model_dump(by_alias=True)`:

        * `None` is only added to the output dict for nullable fields that
          were set at model initialization. Other fields with value `None`
          are ignored.
        """
        excluded_fields: Set[str] = set([
        ])

        _dict = self.model_dump(
            by_alias=True,
            exclude=excluded_fields,
            exclude_none=True,
        )
        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of PgpKeyImportResult from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "keys_read": obj.get("keys_read"),
            "keys_added": obj.get("keys_added"),
            "keys_unchanged": obj.get("keys_unchanged"),
            "uids_added": obj.get("uids_added"),
            "sigs_added": obj.get("sigs_added"),
            "revs_added": obj.get("revs_added")
        })
        return _obj


