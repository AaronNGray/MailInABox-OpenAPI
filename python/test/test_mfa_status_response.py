# coding: utf-8

"""
    Mail-in-a-Box

    Mail-in-a-Box API HTTP specification.  # Introduction This API is documented in [**OpenAPI format**](http://spec.openapis.org/oas/v3.0.3). ([View the full HTTP specification](https://raw.githubusercontent.com/mail-in-a-box/mailinabox/api-spec/api/mailinabox.yml).)  All endpoints are relative to `https://{host}/admin` and are secured with [`Basic Access` authentication](https://en.wikipedia.org/wiki/Basic_access_authentication). If you have multi-factor authentication enabled, authentication with a `user:password` combination will fail unless a valid OTP is supplied via the `x-auth-token` header. Authentication via a `user:user_key` pair is possible without the header being present. 

    The version of the OpenAPI document: 60.5
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from openapi_client.models.mfa_status_response import MfaStatusResponse

class TestMfaStatusResponse(unittest.TestCase):
    """MfaStatusResponse unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> MfaStatusResponse:
        """Test MfaStatusResponse
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `MfaStatusResponse`
        """
        model = MfaStatusResponse()
        if include_optional:
            return MfaStatusResponse(
                enabled_mfa = openapi_client.models.mfa_status_response_enabled_mfa.MfaStatusResponse_enabled_mfa(
                    id = '', 
                    type = '', 
                    label = '', ),
                new_mfa = openapi_client.models.mfa_status_response_new_mfa.MfaStatusResponse_new_mfa(
                    type = '', 
                    secret = '', 
                    qr_code_base64 = '', )
            )
        else:
            return MfaStatusResponse(
        )
        """

    def testMfaStatusResponse(self):
        """Test MfaStatusResponse"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
