# coding: utf-8

# flake8: noqa

"""
    Mail-in-a-Box

    Mail-in-a-Box API HTTP specification.  # Introduction This API is documented in [**OpenAPI format**](http://spec.openapis.org/oas/v3.0.3). ([View the full HTTP specification](https://raw.githubusercontent.com/mail-in-a-box/mailinabox/api-spec/api/mailinabox.yml).)  All endpoints are relative to `https://{host}/admin` and are secured with [`Basic Access` authentication](https://en.wikipedia.org/wiki/Basic_access_authentication). If you have multi-factor authentication enabled, authentication with a `user:password` combination will fail unless a valid OTP is supplied via the `x-auth-token` header. Authentication via a `user:user_key` pair is possible without the header being present. 

    The version of the OpenAPI document: 60.5
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


__version__ = "1.0.0"

# import apis into sdk package
from openapi_client.api.dns_api import DNSApi
from openapi_client.api.mfa_api import MFAApi
from openapi_client.api.mail_api import MailApi
from openapi_client.api.pgp_api import PGPApi
from openapi_client.api.ssl_api import SSLApi
from openapi_client.api.system_api import SystemApi
from openapi_client.api.user_api import UserApi
from openapi_client.api.wkd_api import WKDApi
from openapi_client.api.web_api import WebApi

# import ApiClient
from openapi_client.api_response import ApiResponse
from openapi_client.api_client import ApiClient
from openapi_client.configuration import Configuration
from openapi_client.exceptions import OpenApiException
from openapi_client.exceptions import ApiTypeError
from openapi_client.exceptions import ApiValueError
from openapi_client.exceptions import ApiKeyError
from openapi_client.exceptions import ApiAttributeError
from openapi_client.exceptions import ApiException

# import models into sdk package
from openapi_client.models.dns_custom_record import DNSCustomRecord
from openapi_client.models.dns_dump_domain_record import DNSDumpDomainRecord
from openapi_client.models.dns_dump_domains_inner import DNSDumpDomainsInner
from openapi_client.models.dns_record_type import DNSRecordType
from openapi_client.models.dns_secondary_nameserver_response import DNSSecondaryNameserverResponse
from openapi_client.models.get_wk_dstatus200_response import GetWKDstatus200Response
from openapi_client.models.logout_response import LogoutResponse
from openapi_client.models.mail_alias import MailAlias
from openapi_client.models.mail_alias_by_domain import MailAliasByDomain
from openapi_client.models.mail_aliases_response_format import MailAliasesResponseFormat
from openapi_client.models.mail_user import MailUser
from openapi_client.models.mail_user_by_domain import MailUserByDomain
from openapi_client.models.mail_user_privilege import MailUserPrivilege
from openapi_client.models.mail_user_status import MailUserStatus
from openapi_client.models.mail_users_response_format import MailUsersResponseFormat
from openapi_client.models.me_auth_status import MeAuthStatus
from openapi_client.models.me_response import MeResponse
from openapi_client.models.mfa_status_response import MfaStatusResponse
from openapi_client.models.mfa_status_response_enabled_mfa import MfaStatusResponseEnabledMfa
from openapi_client.models.mfa_status_response_new_mfa import MfaStatusResponseNewMfa
from openapi_client.models.pgp_key import PgpKey
from openapi_client.models.pgp_key_import_result import PgpKeyImportResult
from openapi_client.models.pgp_key_subkeys_inner import PgpKeySubkeysInner
from openapi_client.models.pgp_keyring import PgpKeyring
from openapi_client.models.ssl_certificates_provision_response import SSLCertificatesProvisionResponse
from openapi_client.models.ssl_certificates_provision_response_requests_inner import SSLCertificatesProvisionResponseRequestsInner
from openapi_client.models.ssl_status import SSLStatus
from openapi_client.models.ssl_status_response import SSLStatusResponse
from openapi_client.models.ssl_status_type import SSLStatusType
from openapi_client.models.smtp_relay_config import SmtpRelayConfig
from openapi_client.models.status_entry import StatusEntry
from openapi_client.models.status_entry_extra import StatusEntryExtra
from openapi_client.models.status_entry_type import StatusEntryType
from openapi_client.models.system_backup_config_response import SystemBackupConfigResponse
from openapi_client.models.system_backup_status import SystemBackupStatus
from openapi_client.models.system_backup_status_response import SystemBackupStatusResponse
from openapi_client.models.system_privacy_status import SystemPrivacyStatus
from openapi_client.models.web_domain import WebDomain
from openapi_client.models.web_domain_ssl_certificate_inner import WebDomainSslCertificateInner
