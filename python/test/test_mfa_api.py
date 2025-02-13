# coding: utf-8

"""
    Mail-in-a-Box

    Mail-in-a-Box API HTTP specification.  # Introduction This API is documented in [**OpenAPI format**](http://spec.openapis.org/oas/v3.0.3). ([View the full HTTP specification](https://raw.githubusercontent.com/mail-in-a-box/mailinabox/api-spec/api/mailinabox.yml).)  All endpoints are relative to `https://{host}/admin` and are secured with [`Basic Access` authentication](https://en.wikipedia.org/wiki/Basic_access_authentication). If you have multi-factor authentication enabled, authentication with a `user:password` combination will fail unless a valid OTP is supplied via the `x-auth-token` header. Authentication via a `user:user_key` pair is possible without the header being present. 

    The version of the OpenAPI document: 60.5
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from openapi_client.api.mfa_api import MFAApi


class TestMFAApi(unittest.TestCase):
    """MFAApi unit test stubs"""

    def setUp(self) -> None:
        self.api = MFAApi()

    def tearDown(self) -> None:
        pass

    def test_mfa_status(self) -> None:
        """Test case for mfa_status

        Retrieve MFA status for you or another user
        """
        pass

    def test_mfa_totp_disable(self) -> None:
        """Test case for mfa_totp_disable

        Disable multi-factor authentication for you or another user
        """
        pass

    def test_mfa_totp_enable(self) -> None:
        """Test case for mfa_totp_enable

        Enable TOTP authentication
        """
        pass


if __name__ == '__main__':
    unittest.main()
