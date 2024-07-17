# coding: utf-8

"""
    Mail-in-a-Box

    Mail-in-a-Box API HTTP specification.  # Introduction This API is documented in [**OpenAPI format**](http://spec.openapis.org/oas/v3.0.3). ([View the full HTTP specification](https://raw.githubusercontent.com/mail-in-a-box/mailinabox/api-spec/api/mailinabox.yml).)  All endpoints are relative to `https://{host}/admin` and are secured with [`Basic Access` authentication](https://en.wikipedia.org/wiki/Basic_access_authentication). If you have multi-factor authentication enabled, authentication with a `user:password` combination will fail unless a valid OTP is supplied via the `x-auth-token` header. Authentication via a `user:user_key` pair is possible without the header being present. 

    The version of the OpenAPI document: 60.5
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from openapi_client.models.mail_user_privilege import MailUserPrivilege

class TestMailUserPrivilege(unittest.TestCase):
    """MailUserPrivilege unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def testMailUserPrivilege(self):
        """Test MailUserPrivilege"""
        # inst = MailUserPrivilege()

if __name__ == '__main__':
    unittest.main()
