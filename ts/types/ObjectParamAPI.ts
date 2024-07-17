import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { DNSCustomRecord } from '../models/DNSCustomRecord';
import { DNSDumpDomainRecord } from '../models/DNSDumpDomainRecord';
import { DNSDumpDomainsInner } from '../models/DNSDumpDomainsInner';
import { DNSRecordType } from '../models/DNSRecordType';
import { DNSSecondaryNameserverResponse } from '../models/DNSSecondaryNameserverResponse';
import { GetWKDstatus200Response } from '../models/GetWKDstatus200Response';
import { LogoutResponse } from '../models/LogoutResponse';
import { MailAlias } from '../models/MailAlias';
import { MailAliasByDomain } from '../models/MailAliasByDomain';
import { MailAliasesResponseFormat } from '../models/MailAliasesResponseFormat';
import { MailUser } from '../models/MailUser';
import { MailUserByDomain } from '../models/MailUserByDomain';
import { MailUserPrivilege } from '../models/MailUserPrivilege';
import { MailUserStatus } from '../models/MailUserStatus';
import { MailUsersResponseFormat } from '../models/MailUsersResponseFormat';
import { MeAuthStatus } from '../models/MeAuthStatus';
import { MeResponse } from '../models/MeResponse';
import { MfaStatusResponse } from '../models/MfaStatusResponse';
import { MfaStatusResponseEnabledMfa } from '../models/MfaStatusResponseEnabledMfa';
import { MfaStatusResponseNewMfa } from '../models/MfaStatusResponseNewMfa';
import { PgpKey } from '../models/PgpKey';
import { PgpKeyImportResult } from '../models/PgpKeyImportResult';
import { PgpKeySubkeysInner } from '../models/PgpKeySubkeysInner';
import { PgpKeyring } from '../models/PgpKeyring';
import { SSLCertificatesProvisionResponse } from '../models/SSLCertificatesProvisionResponse';
import { SSLCertificatesProvisionResponseRequestsInner } from '../models/SSLCertificatesProvisionResponseRequestsInner';
import { SSLStatus } from '../models/SSLStatus';
import { SSLStatusResponse } from '../models/SSLStatusResponse';
import { SSLStatusType } from '../models/SSLStatusType';
import { SmtpRelayConfig } from '../models/SmtpRelayConfig';
import { StatusEntry } from '../models/StatusEntry';
import { StatusEntryExtra } from '../models/StatusEntryExtra';
import { StatusEntryType } from '../models/StatusEntryType';
import { SystemBackupConfigResponse } from '../models/SystemBackupConfigResponse';
import { SystemBackupStatus } from '../models/SystemBackupStatus';
import { SystemBackupStatusResponse } from '../models/SystemBackupStatusResponse';
import { SystemPrivacyStatus } from '../models/SystemPrivacyStatus';
import { WebDomain } from '../models/WebDomain';
import { WebDomainSslCertificateInner } from '../models/WebDomainSslCertificateInner';

import { ObservableDNSApi } from "./ObservableAPI";
import { DNSApiRequestFactory, DNSApiResponseProcessor} from "../apis/DNSApi";

export interface DNSApiAddDnsCustomARecordRequest {
    /**
     * DNS query name.
     * @type string
     * @memberof DNSApiaddDnsCustomARecord
     */
    qname: string
    /**
     * 
     * @type string
     * @memberof DNSApiaddDnsCustomARecord
     */
    body: string
}

export interface DNSApiAddDnsCustomRecordRequest {
    /**
     * DNS record query name
     * @type string
     * @memberof DNSApiaddDnsCustomRecord
     */
    qname: string
    /**
     * Record type
     * @type DNSRecordType
     * @memberof DNSApiaddDnsCustomRecord
     */
    rtype: DNSRecordType
    /**
     * 
     * @type string
     * @memberof DNSApiaddDnsCustomRecord
     */
    body: string
}

export interface DNSApiAddDnsSecondaryNameserverRequest {
    /**
     * Hostnames separated with commas or spaces.
     * @type string
     * @memberof DNSApiaddDnsSecondaryNameserver
     */
    hostnames: string
}

export interface DNSApiGetDnsCustomARecordsForQNameRequest {
    /**
     * DNS query name.
     * @type string
     * @memberof DNSApigetDnsCustomARecordsForQName
     */
    qname: string
}

export interface DNSApiGetDnsCustomRecordsRequest {
}

export interface DNSApiGetDnsCustomRecordsForQNameAndTypeRequest {
    /**
     * DNS record query name
     * @type string
     * @memberof DNSApigetDnsCustomRecordsForQNameAndType
     */
    qname: string
    /**
     * Record type
     * @type DNSRecordType
     * @memberof DNSApigetDnsCustomRecordsForQNameAndType
     */
    rtype: DNSRecordType
}

export interface DNSApiGetDnsDumpRequest {
}

export interface DNSApiGetDnsSecondaryNameserverRequest {
}

export interface DNSApiGetDnsZonefileRequest {
    /**
     * Hostname
     * @type string
     * @memberof DNSApigetDnsZonefile
     */
    zone: string
}

export interface DNSApiGetDnsZonesRequest {
}

export interface DNSApiRemoveDnsCustomARecordRequest {
    /**
     * DNS query name.
     * @type string
     * @memberof DNSApiremoveDnsCustomARecord
     */
    qname: string
    /**
     * 
     * @type string
     * @memberof DNSApiremoveDnsCustomARecord
     */
    body: string
}

export interface DNSApiRemoveDnsCustomRecordRequest {
    /**
     * DNS record query name
     * @type string
     * @memberof DNSApiremoveDnsCustomRecord
     */
    qname: string
    /**
     * Record type
     * @type DNSRecordType
     * @memberof DNSApiremoveDnsCustomRecord
     */
    rtype: DNSRecordType
    /**
     * 
     * @type string
     * @memberof DNSApiremoveDnsCustomRecord
     */
    body: string
}

export interface DNSApiUpdateDnsRequest {
    /**
     * Force an update even if mailinabox detects no changes are required.
     * @type number
     * @memberof DNSApiupdateDns
     */
    force: number
}

export interface DNSApiUpdateDnsCustomARecordRequest {
    /**
     * DNS query name.
     * @type string
     * @memberof DNSApiupdateDnsCustomARecord
     */
    qname: string
    /**
     * 
     * @type string
     * @memberof DNSApiupdateDnsCustomARecord
     */
    body: string
}

export interface DNSApiUpdateDnsCustomRecordRequest {
    /**
     * DNS record query name
     * @type string
     * @memberof DNSApiupdateDnsCustomRecord
     */
    qname: string
    /**
     * Record type
     * @type DNSRecordType
     * @memberof DNSApiupdateDnsCustomRecord
     */
    rtype: DNSRecordType
    /**
     * 
     * @type string
     * @memberof DNSApiupdateDnsCustomRecord
     */
    body: string
}

export class ObjectDNSApi {
    private api: ObservableDNSApi

    public constructor(configuration: Configuration, requestFactory?: DNSApiRequestFactory, responseProcessor?: DNSApiResponseProcessor) {
        this.api = new ObservableDNSApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Adds a custom DNS A record for the specified query name.
     * Add DNS custom A record
     * @param param the request object
     */
    public addDnsCustomARecordWithHttpInfo(param: DNSApiAddDnsCustomARecordRequest, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.addDnsCustomARecordWithHttpInfo(param.qname, param.body,  options).toPromise();
    }

    /**
     * Adds a custom DNS A record for the specified query name.
     * Add DNS custom A record
     * @param param the request object
     */
    public addDnsCustomARecord(param: DNSApiAddDnsCustomARecordRequest, options?: Configuration): Promise<string> {
        return this.api.addDnsCustomARecord(param.qname, param.body,  options).toPromise();
    }

    /**
     * Adds a custom DNS record for the specified query name and type.
     * Add DNS custom record
     * @param param the request object
     */
    public addDnsCustomRecordWithHttpInfo(param: DNSApiAddDnsCustomRecordRequest, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.addDnsCustomRecordWithHttpInfo(param.qname, param.rtype, param.body,  options).toPromise();
    }

    /**
     * Adds a custom DNS record for the specified query name and type.
     * Add DNS custom record
     * @param param the request object
     */
    public addDnsCustomRecord(param: DNSApiAddDnsCustomRecordRequest, options?: Configuration): Promise<string> {
        return this.api.addDnsCustomRecord(param.qname, param.rtype, param.body,  options).toPromise();
    }

    /**
     * Adds one or more secondary nameservers. 
     * Add DNS secondary nameserver
     * @param param the request object
     */
    public addDnsSecondaryNameserverWithHttpInfo(param: DNSApiAddDnsSecondaryNameserverRequest, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.addDnsSecondaryNameserverWithHttpInfo(param.hostnames,  options).toPromise();
    }

    /**
     * Adds one or more secondary nameservers. 
     * Add DNS secondary nameserver
     * @param param the request object
     */
    public addDnsSecondaryNameserver(param: DNSApiAddDnsSecondaryNameserverRequest, options?: Configuration): Promise<string> {
        return this.api.addDnsSecondaryNameserver(param.hostnames,  options).toPromise();
    }

    /**
     * Returns all custom A records for the specified query name.
     * Get DNS custom A records
     * @param param the request object
     */
    public getDnsCustomARecordsForQNameWithHttpInfo(param: DNSApiGetDnsCustomARecordsForQNameRequest, options?: Configuration): Promise<HttpInfo<Array<DNSCustomRecord>>> {
        return this.api.getDnsCustomARecordsForQNameWithHttpInfo(param.qname,  options).toPromise();
    }

    /**
     * Returns all custom A records for the specified query name.
     * Get DNS custom A records
     * @param param the request object
     */
    public getDnsCustomARecordsForQName(param: DNSApiGetDnsCustomARecordsForQNameRequest, options?: Configuration): Promise<Array<DNSCustomRecord>> {
        return this.api.getDnsCustomARecordsForQName(param.qname,  options).toPromise();
    }

    /**
     * Returns all custom DNS records.
     * Get DNS custom records
     * @param param the request object
     */
    public getDnsCustomRecordsWithHttpInfo(param: DNSApiGetDnsCustomRecordsRequest = {}, options?: Configuration): Promise<HttpInfo<Array<DNSCustomRecord>>> {
        return this.api.getDnsCustomRecordsWithHttpInfo( options).toPromise();
    }

    /**
     * Returns all custom DNS records.
     * Get DNS custom records
     * @param param the request object
     */
    public getDnsCustomRecords(param: DNSApiGetDnsCustomRecordsRequest = {}, options?: Configuration): Promise<Array<DNSCustomRecord>> {
        return this.api.getDnsCustomRecords( options).toPromise();
    }

    /**
     * Returns all custom records for the specified query name and type.
     * Get DNS custom records
     * @param param the request object
     */
    public getDnsCustomRecordsForQNameAndTypeWithHttpInfo(param: DNSApiGetDnsCustomRecordsForQNameAndTypeRequest, options?: Configuration): Promise<HttpInfo<Array<DNSCustomRecord>>> {
        return this.api.getDnsCustomRecordsForQNameAndTypeWithHttpInfo(param.qname, param.rtype,  options).toPromise();
    }

    /**
     * Returns all custom records for the specified query name and type.
     * Get DNS custom records
     * @param param the request object
     */
    public getDnsCustomRecordsForQNameAndType(param: DNSApiGetDnsCustomRecordsForQNameAndTypeRequest, options?: Configuration): Promise<Array<DNSCustomRecord>> {
        return this.api.getDnsCustomRecordsForQNameAndType(param.qname, param.rtype,  options).toPromise();
    }

    /**
     * Returns all DNS records.
     * Get DNS dump
     * @param param the request object
     */
    public getDnsDumpWithHttpInfo(param: DNSApiGetDnsDumpRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Array<DNSDumpDomainsInner>>>> {
        return this.api.getDnsDumpWithHttpInfo( options).toPromise();
    }

    /**
     * Returns all DNS records.
     * Get DNS dump
     * @param param the request object
     */
    public getDnsDump(param: DNSApiGetDnsDumpRequest = {}, options?: Configuration): Promise<Array<Array<DNSDumpDomainsInner>>> {
        return this.api.getDnsDump( options).toPromise();
    }

    /**
     * Returns a list of nameserver hostnames. 
     * Get DNS secondary nameserver
     * @param param the request object
     */
    public getDnsSecondaryNameserverWithHttpInfo(param: DNSApiGetDnsSecondaryNameserverRequest = {}, options?: Configuration): Promise<HttpInfo<DNSSecondaryNameserverResponse>> {
        return this.api.getDnsSecondaryNameserverWithHttpInfo( options).toPromise();
    }

    /**
     * Returns a list of nameserver hostnames. 
     * Get DNS secondary nameserver
     * @param param the request object
     */
    public getDnsSecondaryNameserver(param: DNSApiGetDnsSecondaryNameserverRequest = {}, options?: Configuration): Promise<DNSSecondaryNameserverResponse> {
        return this.api.getDnsSecondaryNameserver( options).toPromise();
    }

    /**
     * Returns a DNS zone file for a hostname.
     * Get DNS zonefile
     * @param param the request object
     */
    public getDnsZonefileWithHttpInfo(param: DNSApiGetDnsZonefileRequest, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.getDnsZonefileWithHttpInfo(param.zone,  options).toPromise();
    }

    /**
     * Returns a DNS zone file for a hostname.
     * Get DNS zonefile
     * @param param the request object
     */
    public getDnsZonefile(param: DNSApiGetDnsZonefileRequest, options?: Configuration): Promise<string> {
        return this.api.getDnsZonefile(param.zone,  options).toPromise();
    }

    /**
     * Returns an array of all managed top-level domains.
     * Get DNS zones
     * @param param the request object
     */
    public getDnsZonesWithHttpInfo(param: DNSApiGetDnsZonesRequest = {}, options?: Configuration): Promise<HttpInfo<Array<string>>> {
        return this.api.getDnsZonesWithHttpInfo( options).toPromise();
    }

    /**
     * Returns an array of all managed top-level domains.
     * Get DNS zones
     * @param param the request object
     */
    public getDnsZones(param: DNSApiGetDnsZonesRequest = {}, options?: Configuration): Promise<Array<string>> {
        return this.api.getDnsZones( options).toPromise();
    }

    /**
     * Removes a DNS custom A record for the specified domain & value.
     * Remove DNS custom A record
     * @param param the request object
     */
    public removeDnsCustomARecordWithHttpInfo(param: DNSApiRemoveDnsCustomARecordRequest, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.removeDnsCustomARecordWithHttpInfo(param.qname, param.body,  options).toPromise();
    }

    /**
     * Removes a DNS custom A record for the specified domain & value.
     * Remove DNS custom A record
     * @param param the request object
     */
    public removeDnsCustomARecord(param: DNSApiRemoveDnsCustomARecordRequest, options?: Configuration): Promise<string> {
        return this.api.removeDnsCustomARecord(param.qname, param.body,  options).toPromise();
    }

    /**
     * Removes a DNS custom record for the specified domain, type & value.
     * Remove DNS custom record
     * @param param the request object
     */
    public removeDnsCustomRecordWithHttpInfo(param: DNSApiRemoveDnsCustomRecordRequest, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.removeDnsCustomRecordWithHttpInfo(param.qname, param.rtype, param.body,  options).toPromise();
    }

    /**
     * Removes a DNS custom record for the specified domain, type & value.
     * Remove DNS custom record
     * @param param the request object
     */
    public removeDnsCustomRecord(param: DNSApiRemoveDnsCustomRecordRequest, options?: Configuration): Promise<string> {
        return this.api.removeDnsCustomRecord(param.qname, param.rtype, param.body,  options).toPromise();
    }

    /**
     * Updates the DNS. Involves creating zone files and restarting `nsd`.
     * Update DNS
     * @param param the request object
     */
    public updateDnsWithHttpInfo(param: DNSApiUpdateDnsRequest, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.updateDnsWithHttpInfo(param.force,  options).toPromise();
    }

    /**
     * Updates the DNS. Involves creating zone files and restarting `nsd`.
     * Update DNS
     * @param param the request object
     */
    public updateDns(param: DNSApiUpdateDnsRequest, options?: Configuration): Promise<string> {
        return this.api.updateDns(param.force,  options).toPromise();
    }

    /**
     * Updates an existing DNS custom A record value for the specified qname.
     * Update DNS custom A record
     * @param param the request object
     */
    public updateDnsCustomARecordWithHttpInfo(param: DNSApiUpdateDnsCustomARecordRequest, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.updateDnsCustomARecordWithHttpInfo(param.qname, param.body,  options).toPromise();
    }

    /**
     * Updates an existing DNS custom A record value for the specified qname.
     * Update DNS custom A record
     * @param param the request object
     */
    public updateDnsCustomARecord(param: DNSApiUpdateDnsCustomARecordRequest, options?: Configuration): Promise<string> {
        return this.api.updateDnsCustomARecord(param.qname, param.body,  options).toPromise();
    }

    /**
     * Updates an existing DNS custom record value for the specified qname and type.
     * Update DNS custom record
     * @param param the request object
     */
    public updateDnsCustomRecordWithHttpInfo(param: DNSApiUpdateDnsCustomRecordRequest, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.updateDnsCustomRecordWithHttpInfo(param.qname, param.rtype, param.body,  options).toPromise();
    }

    /**
     * Updates an existing DNS custom record value for the specified qname and type.
     * Update DNS custom record
     * @param param the request object
     */
    public updateDnsCustomRecord(param: DNSApiUpdateDnsCustomRecordRequest, options?: Configuration): Promise<string> {
        return this.api.updateDnsCustomRecord(param.qname, param.rtype, param.body,  options).toPromise();
    }

}

import { ObservableMFAApi } from "./ObservableAPI";
import { MFAApiRequestFactory, MFAApiResponseProcessor} from "../apis/MFAApi";

export interface MFAApiMfaStatusRequest {
}

export interface MFAApiMfaTotpDisableRequest {
    /**
     * 
     * @type string
     * @memberof MFAApimfaTotpDisable
     */
    mfaId?: string
}

export interface MFAApiMfaTotpEnableRequest {
    /**
     * 
     * @type string
     * @memberof MFAApimfaTotpEnable
     */
    secret: string
    /**
     * 
     * @type string
     * @memberof MFAApimfaTotpEnable
     */
    code: string
    /**
     * 
     * @type string
     * @memberof MFAApimfaTotpEnable
     */
    label?: string
}

export class ObjectMFAApi {
    private api: ObservableMFAApi

    public constructor(configuration: Configuration, requestFactory?: MFAApiRequestFactory, responseProcessor?: MFAApiResponseProcessor) {
        this.api = new ObservableMFAApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves which type of MFA is used and configuration
     * Retrieve MFA status for you or another user
     * @param param the request object
     */
    public mfaStatusWithHttpInfo(param: MFAApiMfaStatusRequest = {}, options?: Configuration): Promise<HttpInfo<MfaStatusResponse>> {
        return this.api.mfaStatusWithHttpInfo( options).toPromise();
    }

    /**
     * Retrieves which type of MFA is used and configuration
     * Retrieve MFA status for you or another user
     * @param param the request object
     */
    public mfaStatus(param: MFAApiMfaStatusRequest = {}, options?: Configuration): Promise<MfaStatusResponse> {
        return this.api.mfaStatus( options).toPromise();
    }

    /**
     * Disables multi-factor authentication for the currently logged-in admin user or another user if a \'user\' parameter is submitted. Either disables all multi-factor authentication methods or the method corresponding to the optional property `mfa_id`.
     * Disable multi-factor authentication for you or another user
     * @param param the request object
     */
    public mfaTotpDisableWithHttpInfo(param: MFAApiMfaTotpDisableRequest = {}, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.mfaTotpDisableWithHttpInfo(param.mfaId,  options).toPromise();
    }

    /**
     * Disables multi-factor authentication for the currently logged-in admin user or another user if a \'user\' parameter is submitted. Either disables all multi-factor authentication methods or the method corresponding to the optional property `mfa_id`.
     * Disable multi-factor authentication for you or another user
     * @param param the request object
     */
    public mfaTotpDisable(param: MFAApiMfaTotpDisableRequest = {}, options?: Configuration): Promise<string> {
        return this.api.mfaTotpDisable(param.mfaId,  options).toPromise();
    }

    /**
     * Enables TOTP authentication for the currently logged-in admin user
     * Enable TOTP authentication
     * @param param the request object
     */
    public mfaTotpEnableWithHttpInfo(param: MFAApiMfaTotpEnableRequest, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.mfaTotpEnableWithHttpInfo(param.secret, param.code, param.label,  options).toPromise();
    }

    /**
     * Enables TOTP authentication for the currently logged-in admin user
     * Enable TOTP authentication
     * @param param the request object
     */
    public mfaTotpEnable(param: MFAApiMfaTotpEnableRequest, options?: Configuration): Promise<string> {
        return this.api.mfaTotpEnable(param.secret, param.code, param.label,  options).toPromise();
    }

}

import { ObservableMailApi } from "./ObservableAPI";
import { MailApiRequestFactory, MailApiResponseProcessor} from "../apis/MailApi";

export interface MailApiAddMailUserRequest {
    /**
     * Email format.
     * @type string
     * @memberof MailApiaddMailUser
     */
    email: string
    /**
     * 
     * @type string
     * @memberof MailApiaddMailUser
     */
    password: string
    /**
     * 
     * @type MailUserPrivilege
     * @memberof MailApiaddMailUser
     */
    privileges: MailUserPrivilege
}

export interface MailApiAddMailUserPrivilegeRequest {
    /**
     * Email format.
     * @type string
     * @memberof MailApiaddMailUserPrivilege
     */
    email: string
    /**
     * 
     * @type MailUserPrivilege
     * @memberof MailApiaddMailUserPrivilege
     */
    privilege: MailUserPrivilege
}

export interface MailApiGetMailAliasesRequest {
    /**
     * The format of the response.
     * @type MailAliasesResponseFormat
     * @memberof MailApigetMailAliases
     */
    format?: MailAliasesResponseFormat
}

export interface MailApiGetMailDomainsRequest {
}

export interface MailApiGetMailUserPrivilegesRequest {
    /**
     * The email you want to get privileges for.
     * @type string
     * @memberof MailApigetMailUserPrivileges
     */
    email?: string
}

export interface MailApiGetMailUsersRequest {
    /**
     * The format of the response.
     * @type MailUsersResponseFormat
     * @memberof MailApigetMailUsers
     */
    format?: MailUsersResponseFormat
}

export interface MailApiRemoveMailAliasRequest {
    /**
     * Email format.
     * @type string
     * @memberof MailApiremoveMailAlias
     */
    address: string
}

export interface MailApiRemoveMailUserRequest {
    /**
     * Email format.
     * @type string
     * @memberof MailApiremoveMailUser
     */
    email: string
}

export interface MailApiRemoveMailUserPrivilegeRequest {
    /**
     * Email format.
     * @type string
     * @memberof MailApiremoveMailUserPrivilege
     */
    email: string
    /**
     * 
     * @type MailUserPrivilege
     * @memberof MailApiremoveMailUserPrivilege
     */
    privilege: MailUserPrivilege
}

export interface MailApiSetMailUserPasswordRequest {
    /**
     * Email format.
     * @type string
     * @memberof MailApisetMailUserPassword
     */
    email: string
    /**
     * 
     * @type string
     * @memberof MailApisetMailUserPassword
     */
    password: string
}

export interface MailApiUpsertMailAliasRequest {
    /**
     * Set to &#x60;1&#x60; when updating an alias.
     * @type number
     * @memberof MailApiupsertMailAlias
     */
    updateIfExists: number
    /**
     * Email format.
     * @type string
     * @memberof MailApiupsertMailAlias
     */
    address: string
    /**
     * If adding a regular or catch-all alias, the format needs to be &#x60;user@example.com&#x60;. Multiple address can be separated by newlines or commas.  If adding a domain alias, the format needs to be &#x60;@example.com&#x60;. 
     * @type string
     * @memberof MailApiupsertMailAlias
     */
    forwardsTo: string
    /**
     * Mail users that can send mail claiming to be from any address on the alias domain. Multiple address can be separated by newlines or commas.  Leave empty to allow any mail user listed in &#x60;forwards_to&#x60; to send mail claiming to be from any address on the alias domain. 
     * @type string
     * @memberof MailApiupsertMailAlias
     */
    permittedSenders: string
}

export class ObjectMailApi {
    private api: ObservableMailApi

    public constructor(configuration: Configuration, requestFactory?: MailApiRequestFactory, responseProcessor?: MailApiResponseProcessor) {
        this.api = new ObservableMailApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Adds a new mail user.
     * Add mail user
     * @param param the request object
     */
    public addMailUserWithHttpInfo(param: MailApiAddMailUserRequest, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.addMailUserWithHttpInfo(param.email, param.password, param.privileges,  options).toPromise();
    }

    /**
     * Adds a new mail user.
     * Add mail user
     * @param param the request object
     */
    public addMailUser(param: MailApiAddMailUserRequest, options?: Configuration): Promise<string> {
        return this.api.addMailUser(param.email, param.password, param.privileges,  options).toPromise();
    }

    /**
     * Adds a privilege to an existing mail user.
     * Add mail user privilege
     * @param param the request object
     */
    public addMailUserPrivilegeWithHttpInfo(param: MailApiAddMailUserPrivilegeRequest, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.addMailUserPrivilegeWithHttpInfo(param.email, param.privilege,  options).toPromise();
    }

    /**
     * Adds a privilege to an existing mail user.
     * Add mail user privilege
     * @param param the request object
     */
    public addMailUserPrivilege(param: MailApiAddMailUserPrivilegeRequest, options?: Configuration): Promise<string> {
        return this.api.addMailUserPrivilege(param.email, param.privilege,  options).toPromise();
    }

    /**
     * Returns all mail aliases.
     * Get mail aliases
     * @param param the request object
     */
    public getMailAliasesWithHttpInfo(param: MailApiGetMailAliasesRequest = {}, options?: Configuration): Promise<HttpInfo<Array<MailAliasByDomain>>> {
        return this.api.getMailAliasesWithHttpInfo(param.format,  options).toPromise();
    }

    /**
     * Returns all mail aliases.
     * Get mail aliases
     * @param param the request object
     */
    public getMailAliases(param: MailApiGetMailAliasesRequest = {}, options?: Configuration): Promise<Array<MailAliasByDomain>> {
        return this.api.getMailAliases(param.format,  options).toPromise();
    }

    /**
     * Returns all mail domains.
     * Get mail domains
     * @param param the request object
     */
    public getMailDomainsWithHttpInfo(param: MailApiGetMailDomainsRequest = {}, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.getMailDomainsWithHttpInfo( options).toPromise();
    }

    /**
     * Returns all mail domains.
     * Get mail domains
     * @param param the request object
     */
    public getMailDomains(param: MailApiGetMailDomainsRequest = {}, options?: Configuration): Promise<string> {
        return this.api.getMailDomains( options).toPromise();
    }

    /**
     * Returns all privileges for an existing mail user.
     * Get mail user privileges
     * @param param the request object
     */
    public getMailUserPrivilegesWithHttpInfo(param: MailApiGetMailUserPrivilegesRequest = {}, options?: Configuration): Promise<HttpInfo<MailUserPrivilege>> {
        return this.api.getMailUserPrivilegesWithHttpInfo(param.email,  options).toPromise();
    }

    /**
     * Returns all privileges for an existing mail user.
     * Get mail user privileges
     * @param param the request object
     */
    public getMailUserPrivileges(param: MailApiGetMailUserPrivilegesRequest = {}, options?: Configuration): Promise<MailUserPrivilege> {
        return this.api.getMailUserPrivileges(param.email,  options).toPromise();
    }

    /**
     * Returns all mail users.
     * Get mail users
     * @param param the request object
     */
    public getMailUsersWithHttpInfo(param: MailApiGetMailUsersRequest = {}, options?: Configuration): Promise<HttpInfo<Array<MailUserByDomain>>> {
        return this.api.getMailUsersWithHttpInfo(param.format,  options).toPromise();
    }

    /**
     * Returns all mail users.
     * Get mail users
     * @param param the request object
     */
    public getMailUsers(param: MailApiGetMailUsersRequest = {}, options?: Configuration): Promise<Array<MailUserByDomain>> {
        return this.api.getMailUsers(param.format,  options).toPromise();
    }

    /**
     * Removes a mail alias.
     * Remove mail alias
     * @param param the request object
     */
    public removeMailAliasWithHttpInfo(param: MailApiRemoveMailAliasRequest, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.removeMailAliasWithHttpInfo(param.address,  options).toPromise();
    }

    /**
     * Removes a mail alias.
     * Remove mail alias
     * @param param the request object
     */
    public removeMailAlias(param: MailApiRemoveMailAliasRequest, options?: Configuration): Promise<string> {
        return this.api.removeMailAlias(param.address,  options).toPromise();
    }

    /**
     * Removes an existing mail user.
     * Remove mail user
     * @param param the request object
     */
    public removeMailUserWithHttpInfo(param: MailApiRemoveMailUserRequest, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.removeMailUserWithHttpInfo(param.email,  options).toPromise();
    }

    /**
     * Removes an existing mail user.
     * Remove mail user
     * @param param the request object
     */
    public removeMailUser(param: MailApiRemoveMailUserRequest, options?: Configuration): Promise<string> {
        return this.api.removeMailUser(param.email,  options).toPromise();
    }

    /**
     * Removes a privilege from an existing mail user.
     * Remove mail user privilege
     * @param param the request object
     */
    public removeMailUserPrivilegeWithHttpInfo(param: MailApiRemoveMailUserPrivilegeRequest, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.removeMailUserPrivilegeWithHttpInfo(param.email, param.privilege,  options).toPromise();
    }

    /**
     * Removes a privilege from an existing mail user.
     * Remove mail user privilege
     * @param param the request object
     */
    public removeMailUserPrivilege(param: MailApiRemoveMailUserPrivilegeRequest, options?: Configuration): Promise<string> {
        return this.api.removeMailUserPrivilege(param.email, param.privilege,  options).toPromise();
    }

    /**
     * Sets a password for an existing mail user.
     * Set mail user password
     * @param param the request object
     */
    public setMailUserPasswordWithHttpInfo(param: MailApiSetMailUserPasswordRequest, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.setMailUserPasswordWithHttpInfo(param.email, param.password,  options).toPromise();
    }

    /**
     * Sets a password for an existing mail user.
     * Set mail user password
     * @param param the request object
     */
    public setMailUserPassword(param: MailApiSetMailUserPasswordRequest, options?: Configuration): Promise<string> {
        return this.api.setMailUserPassword(param.email, param.password,  options).toPromise();
    }

    /**
     * Adds or updates a mail alias. If updating, you need to set `update_if_exists: 1`. 
     * Upsert mail alias
     * @param param the request object
     */
    public upsertMailAliasWithHttpInfo(param: MailApiUpsertMailAliasRequest, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.upsertMailAliasWithHttpInfo(param.updateIfExists, param.address, param.forwardsTo, param.permittedSenders,  options).toPromise();
    }

    /**
     * Adds or updates a mail alias. If updating, you need to set `update_if_exists: 1`. 
     * Upsert mail alias
     * @param param the request object
     */
    public upsertMailAlias(param: MailApiUpsertMailAliasRequest, options?: Configuration): Promise<string> {
        return this.api.upsertMailAlias(param.updateIfExists, param.address, param.forwardsTo, param.permittedSenders,  options).toPromise();
    }

}

import { ObservablePGPApi } from "./ObservableAPI";
import { PGPApiRequestFactory, PGPApiResponseProcessor} from "../apis/PGPApi";

export interface PGPApiExportPGPKeyRequest {
}

export interface PGPApiGetPGPKeyRequest {
}

export interface PGPApiGetPGPKeysRequest {
}

export interface PGPApiImportPGPKeyRequest {
}

export interface PGPApiRemovePGPKeyRequest {
}

export class ObjectPGPApi {
    private api: ObservablePGPApi

    public constructor(configuration: Configuration, requestFactory?: PGPApiRequestFactory, responseProcessor?: PGPApiResponseProcessor) {
        this.api = new ObservablePGPApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Exports the PGP key with the given fingerprint.
     * Export a PGP key
     * @param param the request object
     */
    public exportPGPKeyWithHttpInfo(param: PGPApiExportPGPKeyRequest = {}, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.exportPGPKeyWithHttpInfo( options).toPromise();
    }

    /**
     * Exports the PGP key with the given fingerprint.
     * Export a PGP key
     * @param param the request object
     */
    public exportPGPKey(param: PGPApiExportPGPKeyRequest = {}, options?: Configuration): Promise<string> {
        return this.api.exportPGPKey( options).toPromise();
    }

    /**
     * Gets a JSON summary of the PGP key with the given fingerprint.
     * Get a specific PGP key
     * @param param the request object
     */
    public getPGPKeyWithHttpInfo(param: PGPApiGetPGPKeyRequest = {}, options?: Configuration): Promise<HttpInfo<PgpKey>> {
        return this.api.getPGPKeyWithHttpInfo( options).toPromise();
    }

    /**
     * Gets a JSON summary of the PGP key with the given fingerprint.
     * Get a specific PGP key
     * @param param the request object
     */
    public getPGPKey(param: PGPApiGetPGPKeyRequest = {}, options?: Configuration): Promise<PgpKey> {
        return this.api.getPGPKey( options).toPromise();
    }

    /**
     * Gets a JSON summary of all public PGP keys in the keyring.
     * Get all PGP keys
     * @param param the request object
     */
    public getPGPKeysWithHttpInfo(param: PGPApiGetPGPKeysRequest = {}, options?: Configuration): Promise<HttpInfo<PgpKeyring>> {
        return this.api.getPGPKeysWithHttpInfo( options).toPromise();
    }

    /**
     * Gets a JSON summary of all public PGP keys in the keyring.
     * Get all PGP keys
     * @param param the request object
     */
    public getPGPKeys(param: PGPApiGetPGPKeysRequest = {}, options?: Configuration): Promise<PgpKeyring> {
        return this.api.getPGPKeys( options).toPromise();
    }

    /**
     * Imports a PGP key block into the keyring. Only public keys are accepted.
     * Import a PGP key
     * @param param the request object
     */
    public importPGPKeyWithHttpInfo(param: PGPApiImportPGPKeyRequest = {}, options?: Configuration): Promise<HttpInfo<PgpKeyImportResult>> {
        return this.api.importPGPKeyWithHttpInfo( options).toPromise();
    }

    /**
     * Imports a PGP key block into the keyring. Only public keys are accepted.
     * Import a PGP key
     * @param param the request object
     */
    public importPGPKey(param: PGPApiImportPGPKeyRequest = {}, options?: Configuration): Promise<PgpKeyImportResult> {
        return this.api.importPGPKey( options).toPromise();
    }

    /**
     * Removes the PGP key with the given fingerprint from the keyring
     * Remove a PGP key
     * @param param the request object
     */
    public removePGPKeyWithHttpInfo(param: PGPApiRemovePGPKeyRequest = {}, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.removePGPKeyWithHttpInfo( options).toPromise();
    }

    /**
     * Removes the PGP key with the given fingerprint from the keyring
     * Remove a PGP key
     * @param param the request object
     */
    public removePGPKey(param: PGPApiRemovePGPKeyRequest = {}, options?: Configuration): Promise<string> {
        return this.api.removePGPKey( options).toPromise();
    }

}

import { ObservableSSLApi } from "./ObservableAPI";
import { SSLApiRequestFactory, SSLApiResponseProcessor} from "../apis/SSLApi";

export interface SSLApiGenerateSSLCSRRequest {
    /**
     * Domain to generate CSR for.
     * @type string
     * @memberof SSLApigenerateSSLCSR
     */
    domain: string
    /**
     * 
     * @type string
     * @memberof SSLApigenerateSSLCSR
     */
    countrycode: string
}

export interface SSLApiGetSSLStatusRequest {
}

export interface SSLApiInstallSSLCertificateRequest {
    /**
     * Hostname format.
     * @type string
     * @memberof SSLApiinstallSSLCertificate
     */
    domain: string
    /**
     * TLS/SSL certificate.
     * @type string
     * @memberof SSLApiinstallSSLCertificate
     */
    cert: string
    /**
     * TLS/SSL intermediate chain (if provided, else empty string).
     * @type string
     * @memberof SSLApiinstallSSLCertificate
     */
    chain: string
}

export interface SSLApiProvisionSSLCertificatesRequest {
}

export class ObjectSSLApi {
    private api: ObservableSSLApi

    public constructor(configuration: Configuration, requestFactory?: SSLApiRequestFactory, responseProcessor?: SSLApiResponseProcessor) {
        this.api = new ObservableSSLApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Generates a Certificate Signing Request (CSR) for a domain & country code. 
     * Generate SSL CSR
     * @param param the request object
     */
    public generateSSLCSRWithHttpInfo(param: SSLApiGenerateSSLCSRRequest, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.generateSSLCSRWithHttpInfo(param.domain, param.countrycode,  options).toPromise();
    }

    /**
     * Generates a Certificate Signing Request (CSR) for a domain & country code. 
     * Generate SSL CSR
     * @param param the request object
     */
    public generateSSLCSR(param: SSLApiGenerateSSLCSRRequest, options?: Configuration): Promise<string> {
        return this.api.generateSSLCSR(param.domain, param.countrycode,  options).toPromise();
    }

    /**
     * Returns the SSL status for all domains.
     * Get SSL status
     * @param param the request object
     */
    public getSSLStatusWithHttpInfo(param: SSLApiGetSSLStatusRequest = {}, options?: Configuration): Promise<HttpInfo<SSLStatusResponse>> {
        return this.api.getSSLStatusWithHttpInfo( options).toPromise();
    }

    /**
     * Returns the SSL status for all domains.
     * Get SSL status
     * @param param the request object
     */
    public getSSLStatus(param: SSLApiGetSSLStatusRequest = {}, options?: Configuration): Promise<SSLStatusResponse> {
        return this.api.getSSLStatus( options).toPromise();
    }

    /**
     * Installs a custom certificate. The chain certificate is optional. 
     * Install SSL certificate
     * @param param the request object
     */
    public installSSLCertificateWithHttpInfo(param: SSLApiInstallSSLCertificateRequest, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.installSSLCertificateWithHttpInfo(param.domain, param.cert, param.chain,  options).toPromise();
    }

    /**
     * Installs a custom certificate. The chain certificate is optional. 
     * Install SSL certificate
     * @param param the request object
     */
    public installSSLCertificate(param: SSLApiInstallSSLCertificateRequest, options?: Configuration): Promise<string> {
        return this.api.installSSLCertificate(param.domain, param.cert, param.chain,  options).toPromise();
    }

    /**
     * Provisions certificates for all domains. 
     * Provision SSL certificates
     * @param param the request object
     */
    public provisionSSLCertificatesWithHttpInfo(param: SSLApiProvisionSSLCertificatesRequest = {}, options?: Configuration): Promise<HttpInfo<SSLCertificatesProvisionResponse>> {
        return this.api.provisionSSLCertificatesWithHttpInfo( options).toPromise();
    }

    /**
     * Provisions certificates for all domains. 
     * Provision SSL certificates
     * @param param the request object
     */
    public provisionSSLCertificates(param: SSLApiProvisionSSLCertificatesRequest = {}, options?: Configuration): Promise<SSLCertificatesProvisionResponse> {
        return this.api.provisionSSLCertificates( options).toPromise();
    }

}

import { ObservableSystemApi } from "./ObservableAPI";
import { SystemApiRequestFactory, SystemApiResponseProcessor} from "../apis/SystemApi";

export interface SystemApiGetRelayConfigRequest {
}

export interface SystemApiGetSystemBackupConfigRequest {
}

export interface SystemApiGetSystemBackupStatusRequest {
}

export interface SystemApiGetSystemPrivacyStatusRequest {
}

export interface SystemApiGetSystemRebootStatusRequest {
}

export interface SystemApiGetSystemStatusRequest {
}

export interface SystemApiGetSystemUpdatesRequest {
}

export interface SystemApiGetSystemUpstreamVersionRequest {
}

export interface SystemApiGetSystemVersionRequest {
}

export interface SystemApiPerformSystemBackupRequest {
    /**
     * 
     * @type boolean
     * @memberof SystemApiperformSystemBackup
     */
    full: boolean
}

export interface SystemApiRebootSystemRequest {
}

export interface SystemApiSetRelayConfigRequest {
    /**
     * 
     * @type boolean
     * @memberof SystemApisetRelayConfig
     */
    enabled: boolean
    /**
     * 
     * @type string
     * @memberof SystemApisetRelayConfig
     */
    host: string
    /**
     * 
     * @type boolean
     * @memberof SystemApisetRelayConfig
     */
    authEnabled: boolean
    /**
     * 
     * @type string
     * @memberof SystemApisetRelayConfig
     */
    user: string
    /**
     * 
     * @type string
     * @memberof SystemApisetRelayConfig
     */
    key: string
}

export interface SystemApiUpdateSystemBackupConfigRequest {
    /**
     * 
     * @type string
     * @memberof SystemApiupdateSystemBackupConfig
     */
    target: string
    /**
     * 
     * @type string
     * @memberof SystemApiupdateSystemBackupConfig
     */
    targetUser: string
    /**
     * 
     * @type string
     * @memberof SystemApiupdateSystemBackupConfig
     */
    targetPass: string
    /**
     * 
     * @type number
     * @memberof SystemApiupdateSystemBackupConfig
     */
    minAge: number
}

export interface SystemApiUpdateSystemPackagesRequest {
}

export interface SystemApiUpdateSystemPrivacyRequest {
    /**
     * 
     * @type SystemPrivacyStatus
     * @memberof SystemApiupdateSystemPrivacy
     */
    value: SystemPrivacyStatus
}

export class ObjectSystemApi {
    private api: ObservableSystemApi

    public constructor(configuration: Configuration, requestFactory?: SystemApiRequestFactory, responseProcessor?: SystemApiResponseProcessor) {
        this.api = new ObservableSystemApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets basic configuration on how the box should use third-party relay services to deliver mail.
     * Get SMTP relay configuration
     * @param param the request object
     */
    public getRelayConfigWithHttpInfo(param: SystemApiGetRelayConfigRequest = {}, options?: Configuration): Promise<HttpInfo<SmtpRelayConfig>> {
        return this.api.getRelayConfigWithHttpInfo( options).toPromise();
    }

    /**
     * Gets basic configuration on how the box should use third-party relay services to deliver mail.
     * Get SMTP relay configuration
     * @param param the request object
     */
    public getRelayConfig(param: SystemApiGetRelayConfigRequest = {}, options?: Configuration): Promise<SmtpRelayConfig> {
        return this.api.getRelayConfig( options).toPromise();
    }

    /**
     * Returns the system backup config.
     * Get system backup config
     * @param param the request object
     */
    public getSystemBackupConfigWithHttpInfo(param: SystemApiGetSystemBackupConfigRequest = {}, options?: Configuration): Promise<HttpInfo<SystemBackupConfigResponse>> {
        return this.api.getSystemBackupConfigWithHttpInfo( options).toPromise();
    }

    /**
     * Returns the system backup config.
     * Get system backup config
     * @param param the request object
     */
    public getSystemBackupConfig(param: SystemApiGetSystemBackupConfigRequest = {}, options?: Configuration): Promise<SystemBackupConfigResponse> {
        return this.api.getSystemBackupConfig( options).toPromise();
    }

    /**
     * Returns the system backup status.  If the list of backups is empty, this implies no backups have been made yet. 
     * Get system backup status
     * @param param the request object
     */
    public getSystemBackupStatusWithHttpInfo(param: SystemApiGetSystemBackupStatusRequest = {}, options?: Configuration): Promise<HttpInfo<SystemBackupStatusResponse>> {
        return this.api.getSystemBackupStatusWithHttpInfo( options).toPromise();
    }

    /**
     * Returns the system backup status.  If the list of backups is empty, this implies no backups have been made yet. 
     * Get system backup status
     * @param param the request object
     */
    public getSystemBackupStatus(param: SystemApiGetSystemBackupStatusRequest = {}, options?: Configuration): Promise<SystemBackupStatusResponse> {
        return this.api.getSystemBackupStatus( options).toPromise();
    }

    /**
     * Returns system privacy (new-version check) status.  Response:    - `true`: Private, new-version checks will not be performed   - `false`: Not private, new-version checks will be performed 
     * Get system privacy status
     * @param param the request object
     */
    public getSystemPrivacyStatusWithHttpInfo(param: SystemApiGetSystemPrivacyStatusRequest = {}, options?: Configuration): Promise<HttpInfo<boolean>> {
        return this.api.getSystemPrivacyStatusWithHttpInfo( options).toPromise();
    }

    /**
     * Returns system privacy (new-version check) status.  Response:    - `true`: Private, new-version checks will not be performed   - `false`: Not private, new-version checks will be performed 
     * Get system privacy status
     * @param param the request object
     */
    public getSystemPrivacyStatus(param: SystemApiGetSystemPrivacyStatusRequest = {}, options?: Configuration): Promise<boolean> {
        return this.api.getSystemPrivacyStatus( options).toPromise();
    }

    /**
     * Returns the system reboot status.  Response:    - `true`: A reboot is required   - `false`: A reboot is not required 
     * Get system reboot status
     * @param param the request object
     */
    public getSystemRebootStatusWithHttpInfo(param: SystemApiGetSystemRebootStatusRequest = {}, options?: Configuration): Promise<HttpInfo<boolean>> {
        return this.api.getSystemRebootStatusWithHttpInfo( options).toPromise();
    }

    /**
     * Returns the system reboot status.  Response:    - `true`: A reboot is required   - `false`: A reboot is not required 
     * Get system reboot status
     * @param param the request object
     */
    public getSystemRebootStatus(param: SystemApiGetSystemRebootStatusRequest = {}, options?: Configuration): Promise<boolean> {
        return this.api.getSystemRebootStatus( options).toPromise();
    }

    /**
     * Returns an array of statuses which can include headings. 
     * Get system status
     * @param param the request object
     */
    public getSystemStatusWithHttpInfo(param: SystemApiGetSystemStatusRequest = {}, options?: Configuration): Promise<HttpInfo<Array<StatusEntry>>> {
        return this.api.getSystemStatusWithHttpInfo( options).toPromise();
    }

    /**
     * Returns an array of statuses which can include headings. 
     * Get system status
     * @param param the request object
     */
    public getSystemStatus(param: SystemApiGetSystemStatusRequest = {}, options?: Configuration): Promise<Array<StatusEntry>> {
        return this.api.getSystemStatus( options).toPromise();
    }

    /**
     * Returns system (apt) updates.
     * Get system updates
     * @param param the request object
     */
    public getSystemUpdatesWithHttpInfo(param: SystemApiGetSystemUpdatesRequest = {}, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.getSystemUpdatesWithHttpInfo( options).toPromise();
    }

    /**
     * Returns system (apt) updates.
     * Get system updates
     * @param param the request object
     */
    public getSystemUpdates(param: SystemApiGetSystemUpdatesRequest = {}, options?: Configuration): Promise<string> {
        return this.api.getSystemUpdates( options).toPromise();
    }

    /**
     * Returns Mail-in-a-Box upstream version.
     * Get system upstream version
     * @param param the request object
     */
    public getSystemUpstreamVersionWithHttpInfo(param: SystemApiGetSystemUpstreamVersionRequest = {}, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.getSystemUpstreamVersionWithHttpInfo( options).toPromise();
    }

    /**
     * Returns Mail-in-a-Box upstream version.
     * Get system upstream version
     * @param param the request object
     */
    public getSystemUpstreamVersion(param: SystemApiGetSystemUpstreamVersionRequest = {}, options?: Configuration): Promise<string> {
        return this.api.getSystemUpstreamVersion( options).toPromise();
    }

    /**
     * Returns installed Mail-in-a-Box version.
     * Get system version
     * @param param the request object
     */
    public getSystemVersionWithHttpInfo(param: SystemApiGetSystemVersionRequest = {}, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.getSystemVersionWithHttpInfo( options).toPromise();
    }

    /**
     * Returns installed Mail-in-a-Box version.
     * Get system version
     * @param param the request object
     */
    public getSystemVersion(param: SystemApiGetSystemVersionRequest = {}, options?: Configuration): Promise<string> {
        return this.api.getSystemVersion( options).toPromise();
    }

    /**
     * Performs a system backup.
     * Perform system backup
     * @param param the request object
     */
    public performSystemBackupWithHttpInfo(param: SystemApiPerformSystemBackupRequest, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.performSystemBackupWithHttpInfo(param.full,  options).toPromise();
    }

    /**
     * Performs a system backup.
     * Perform system backup
     * @param param the request object
     */
    public performSystemBackup(param: SystemApiPerformSystemBackupRequest, options?: Configuration): Promise<string> {
        return this.api.performSystemBackup(param.full,  options).toPromise();
    }

    /**
     * Reboots the system.
     * Reboot system
     * @param param the request object
     */
    public rebootSystemWithHttpInfo(param: SystemApiRebootSystemRequest = {}, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.rebootSystemWithHttpInfo( options).toPromise();
    }

    /**
     * Reboots the system.
     * Reboot system
     * @param param the request object
     */
    public rebootSystem(param: SystemApiRebootSystemRequest = {}, options?: Configuration): Promise<string> {
        return this.api.rebootSystem( options).toPromise();
    }

    /**
     * Sets the configuration on how the box should use third-party relays to deliver mail.
     * Set SMTP relay configuration
     * @param param the request object
     */
    public setRelayConfigWithHttpInfo(param: SystemApiSetRelayConfigRequest, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.setRelayConfigWithHttpInfo(param.enabled, param.host, param.authEnabled, param.user, param.key,  options).toPromise();
    }

    /**
     * Sets the configuration on how the box should use third-party relays to deliver mail.
     * Set SMTP relay configuration
     * @param param the request object
     */
    public setRelayConfig(param: SystemApiSetRelayConfigRequest, options?: Configuration): Promise<string> {
        return this.api.setRelayConfig(param.enabled, param.host, param.authEnabled, param.user, param.key,  options).toPromise();
    }

    /**
     * Updates the system backup config.
     * Update system backup config
     * @param param the request object
     */
    public updateSystemBackupConfigWithHttpInfo(param: SystemApiUpdateSystemBackupConfigRequest, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.updateSystemBackupConfigWithHttpInfo(param.target, param.targetUser, param.targetPass, param.minAge,  options).toPromise();
    }

    /**
     * Updates the system backup config.
     * Update system backup config
     * @param param the request object
     */
    public updateSystemBackupConfig(param: SystemApiUpdateSystemBackupConfigRequest, options?: Configuration): Promise<string> {
        return this.api.updateSystemBackupConfig(param.target, param.targetUser, param.targetPass, param.minAge,  options).toPromise();
    }

    /**
     * Updates system (apt) packages.
     * Update system packages
     * @param param the request object
     */
    public updateSystemPackagesWithHttpInfo(param: SystemApiUpdateSystemPackagesRequest = {}, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.updateSystemPackagesWithHttpInfo( options).toPromise();
    }

    /**
     * Updates system (apt) packages.
     * Update system packages
     * @param param the request object
     */
    public updateSystemPackages(param: SystemApiUpdateSystemPackagesRequest = {}, options?: Configuration): Promise<string> {
        return this.api.updateSystemPackages( options).toPromise();
    }

    /**
     * Updates system privacy (new-version checks).  Request:    - `value: private`: Disable new version checks   - `value: off`: Enable new version checks 
     * Update system privacy
     * @param param the request object
     */
    public updateSystemPrivacyWithHttpInfo(param: SystemApiUpdateSystemPrivacyRequest, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.updateSystemPrivacyWithHttpInfo(param.value,  options).toPromise();
    }

    /**
     * Updates system privacy (new-version checks).  Request:    - `value: private`: Disable new version checks   - `value: off`: Enable new version checks 
     * Update system privacy
     * @param param the request object
     */
    public updateSystemPrivacy(param: SystemApiUpdateSystemPrivacyRequest, options?: Configuration): Promise<string> {
        return this.api.updateSystemPrivacy(param.value,  options).toPromise();
    }

}

import { ObservableUserApi } from "./ObservableAPI";
import { UserApiRequestFactory, UserApiResponseProcessor} from "../apis/UserApi";

export interface UserApiLoginRequest {
}

export interface UserApiLogoutRequest {
}

export class ObjectUserApi {
    private api: ObservableUserApi

    public constructor(configuration: Configuration, requestFactory?: UserApiRequestFactory, responseProcessor?: UserApiResponseProcessor) {
        this.api = new ObservableUserApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns user information and a session API key.  Authenticate a user by supplying the auth token as a base64 encoded string in format `email:password` using basic authentication headers.  If successful, a long-lived `api_key` is returned which can be used for subsequent requests to the API in place of the password. 
     * Exchange a username and password for a session API key.
     * @param param the request object
     */
    public loginWithHttpInfo(param: UserApiLoginRequest = {}, options?: Configuration): Promise<HttpInfo<MeResponse>> {
        return this.api.loginWithHttpInfo( options).toPromise();
    }

    /**
     * Returns user information and a session API key.  Authenticate a user by supplying the auth token as a base64 encoded string in format `email:password` using basic authentication headers.  If successful, a long-lived `api_key` is returned which can be used for subsequent requests to the API in place of the password. 
     * Exchange a username and password for a session API key.
     * @param param the request object
     */
    public login(param: UserApiLoginRequest = {}, options?: Configuration): Promise<MeResponse> {
        return this.api.login( options).toPromise();
    }

    /**
     * Invalidates a session API key so that it cannot be used after this API call. 
     * Invalidates a session API key.
     * @param param the request object
     */
    public logoutWithHttpInfo(param: UserApiLogoutRequest = {}, options?: Configuration): Promise<HttpInfo<LogoutResponse>> {
        return this.api.logoutWithHttpInfo( options).toPromise();
    }

    /**
     * Invalidates a session API key so that it cannot be used after this API call. 
     * Invalidates a session API key.
     * @param param the request object
     */
    public logout(param: UserApiLogoutRequest = {}, options?: Configuration): Promise<LogoutResponse> {
        return this.api.logout( options).toPromise();
    }

}

import { ObservableWKDApi } from "./ObservableAPI";
import { WKDApiRequestFactory, WKDApiResponseProcessor} from "../apis/WKDApi";

export interface WKDApiGetWKDstatusRequest {
}

export class ObjectWKDApi {
    private api: ObservableWKDApi

    public constructor(configuration: Configuration, requestFactory?: WKDApiRequestFactory, responseProcessor?: WKDApiResponseProcessor) {
        this.api = new ObservableWKDApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets the current configuration applied to the Web Key Directory for each email hosted in the box, along with a JSON summary of all public PGP keys in the keyring.
     * Get WKD status
     * @param param the request object
     */
    public getWKDstatusWithHttpInfo(param: WKDApiGetWKDstatusRequest = {}, options?: Configuration): Promise<HttpInfo<GetWKDstatus200Response>> {
        return this.api.getWKDstatusWithHttpInfo( options).toPromise();
    }

    /**
     * Gets the current configuration applied to the Web Key Directory for each email hosted in the box, along with a JSON summary of all public PGP keys in the keyring.
     * Get WKD status
     * @param param the request object
     */
    public getWKDstatus(param: WKDApiGetWKDstatusRequest = {}, options?: Configuration): Promise<GetWKDstatus200Response> {
        return this.api.getWKDstatus( options).toPromise();
    }

}

import { ObservableWebApi } from "./ObservableAPI";
import { WebApiRequestFactory, WebApiResponseProcessor} from "../apis/WebApi";

export interface WebApiGetWebDomainsRequest {
}

export interface WebApiUpdateWebRequest {
}

export class ObjectWebApi {
    private api: ObservableWebApi

    public constructor(configuration: Configuration, requestFactory?: WebApiRequestFactory, responseProcessor?: WebApiResponseProcessor) {
        this.api = new ObservableWebApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns all static web domains.
     * Get web domains
     * @param param the request object
     */
    public getWebDomainsWithHttpInfo(param: WebApiGetWebDomainsRequest = {}, options?: Configuration): Promise<HttpInfo<Array<WebDomain>>> {
        return this.api.getWebDomainsWithHttpInfo( options).toPromise();
    }

    /**
     * Returns all static web domains.
     * Get web domains
     * @param param the request object
     */
    public getWebDomains(param: WebApiGetWebDomainsRequest = {}, options?: Configuration): Promise<Array<WebDomain>> {
        return this.api.getWebDomains( options).toPromise();
    }

    /**
     * Updates static websites, used for updating domain root directories.
     * Update web
     * @param param the request object
     */
    public updateWebWithHttpInfo(param: WebApiUpdateWebRequest = {}, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.updateWebWithHttpInfo( options).toPromise();
    }

    /**
     * Updates static websites, used for updating domain root directories.
     * Update web
     * @param param the request object
     */
    public updateWeb(param: WebApiUpdateWebRequest = {}, options?: Configuration): Promise<string> {
        return this.api.updateWeb( options).toPromise();
    }

}
