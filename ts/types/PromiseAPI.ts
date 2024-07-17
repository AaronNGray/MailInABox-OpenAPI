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
import { ObservableDNSApi } from './ObservableAPI';

import { DNSApiRequestFactory, DNSApiResponseProcessor} from "../apis/DNSApi";
export class PromiseDNSApi {
    private api: ObservableDNSApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DNSApiRequestFactory,
        responseProcessor?: DNSApiResponseProcessor
    ) {
        this.api = new ObservableDNSApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Adds a custom DNS A record for the specified query name.
     * Add DNS custom A record
     * @param qname DNS query name.
     * @param body 
     */
    public addDnsCustomARecordWithHttpInfo(qname: string, body: string, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.addDnsCustomARecordWithHttpInfo(qname, body, _options);
        return result.toPromise();
    }

    /**
     * Adds a custom DNS A record for the specified query name.
     * Add DNS custom A record
     * @param qname DNS query name.
     * @param body 
     */
    public addDnsCustomARecord(qname: string, body: string, _options?: Configuration): Promise<string> {
        const result = this.api.addDnsCustomARecord(qname, body, _options);
        return result.toPromise();
    }

    /**
     * Adds a custom DNS record for the specified query name and type.
     * Add DNS custom record
     * @param qname DNS record query name
     * @param rtype Record type
     * @param body 
     */
    public addDnsCustomRecordWithHttpInfo(qname: string, rtype: DNSRecordType, body: string, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.addDnsCustomRecordWithHttpInfo(qname, rtype, body, _options);
        return result.toPromise();
    }

    /**
     * Adds a custom DNS record for the specified query name and type.
     * Add DNS custom record
     * @param qname DNS record query name
     * @param rtype Record type
     * @param body 
     */
    public addDnsCustomRecord(qname: string, rtype: DNSRecordType, body: string, _options?: Configuration): Promise<string> {
        const result = this.api.addDnsCustomRecord(qname, rtype, body, _options);
        return result.toPromise();
    }

    /**
     * Adds one or more secondary nameservers. 
     * Add DNS secondary nameserver
     * @param hostnames Hostnames separated with commas or spaces.
     */
    public addDnsSecondaryNameserverWithHttpInfo(hostnames: string, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.addDnsSecondaryNameserverWithHttpInfo(hostnames, _options);
        return result.toPromise();
    }

    /**
     * Adds one or more secondary nameservers. 
     * Add DNS secondary nameserver
     * @param hostnames Hostnames separated with commas or spaces.
     */
    public addDnsSecondaryNameserver(hostnames: string, _options?: Configuration): Promise<string> {
        const result = this.api.addDnsSecondaryNameserver(hostnames, _options);
        return result.toPromise();
    }

    /**
     * Returns all custom A records for the specified query name.
     * Get DNS custom A records
     * @param qname DNS query name.
     */
    public getDnsCustomARecordsForQNameWithHttpInfo(qname: string, _options?: Configuration): Promise<HttpInfo<Array<DNSCustomRecord>>> {
        const result = this.api.getDnsCustomARecordsForQNameWithHttpInfo(qname, _options);
        return result.toPromise();
    }

    /**
     * Returns all custom A records for the specified query name.
     * Get DNS custom A records
     * @param qname DNS query name.
     */
    public getDnsCustomARecordsForQName(qname: string, _options?: Configuration): Promise<Array<DNSCustomRecord>> {
        const result = this.api.getDnsCustomARecordsForQName(qname, _options);
        return result.toPromise();
    }

    /**
     * Returns all custom DNS records.
     * Get DNS custom records
     */
    public getDnsCustomRecordsWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<DNSCustomRecord>>> {
        const result = this.api.getDnsCustomRecordsWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Returns all custom DNS records.
     * Get DNS custom records
     */
    public getDnsCustomRecords(_options?: Configuration): Promise<Array<DNSCustomRecord>> {
        const result = this.api.getDnsCustomRecords(_options);
        return result.toPromise();
    }

    /**
     * Returns all custom records for the specified query name and type.
     * Get DNS custom records
     * @param qname DNS record query name
     * @param rtype Record type
     */
    public getDnsCustomRecordsForQNameAndTypeWithHttpInfo(qname: string, rtype: DNSRecordType, _options?: Configuration): Promise<HttpInfo<Array<DNSCustomRecord>>> {
        const result = this.api.getDnsCustomRecordsForQNameAndTypeWithHttpInfo(qname, rtype, _options);
        return result.toPromise();
    }

    /**
     * Returns all custom records for the specified query name and type.
     * Get DNS custom records
     * @param qname DNS record query name
     * @param rtype Record type
     */
    public getDnsCustomRecordsForQNameAndType(qname: string, rtype: DNSRecordType, _options?: Configuration): Promise<Array<DNSCustomRecord>> {
        const result = this.api.getDnsCustomRecordsForQNameAndType(qname, rtype, _options);
        return result.toPromise();
    }

    /**
     * Returns all DNS records.
     * Get DNS dump
     */
    public getDnsDumpWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<Array<DNSDumpDomainsInner>>>> {
        const result = this.api.getDnsDumpWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Returns all DNS records.
     * Get DNS dump
     */
    public getDnsDump(_options?: Configuration): Promise<Array<Array<DNSDumpDomainsInner>>> {
        const result = this.api.getDnsDump(_options);
        return result.toPromise();
    }

    /**
     * Returns a list of nameserver hostnames. 
     * Get DNS secondary nameserver
     */
    public getDnsSecondaryNameserverWithHttpInfo(_options?: Configuration): Promise<HttpInfo<DNSSecondaryNameserverResponse>> {
        const result = this.api.getDnsSecondaryNameserverWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Returns a list of nameserver hostnames. 
     * Get DNS secondary nameserver
     */
    public getDnsSecondaryNameserver(_options?: Configuration): Promise<DNSSecondaryNameserverResponse> {
        const result = this.api.getDnsSecondaryNameserver(_options);
        return result.toPromise();
    }

    /**
     * Returns a DNS zone file for a hostname.
     * Get DNS zonefile
     * @param zone Hostname
     */
    public getDnsZonefileWithHttpInfo(zone: string, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.getDnsZonefileWithHttpInfo(zone, _options);
        return result.toPromise();
    }

    /**
     * Returns a DNS zone file for a hostname.
     * Get DNS zonefile
     * @param zone Hostname
     */
    public getDnsZonefile(zone: string, _options?: Configuration): Promise<string> {
        const result = this.api.getDnsZonefile(zone, _options);
        return result.toPromise();
    }

    /**
     * Returns an array of all managed top-level domains.
     * Get DNS zones
     */
    public getDnsZonesWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<string>>> {
        const result = this.api.getDnsZonesWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Returns an array of all managed top-level domains.
     * Get DNS zones
     */
    public getDnsZones(_options?: Configuration): Promise<Array<string>> {
        const result = this.api.getDnsZones(_options);
        return result.toPromise();
    }

    /**
     * Removes a DNS custom A record for the specified domain & value.
     * Remove DNS custom A record
     * @param qname DNS query name.
     * @param body 
     */
    public removeDnsCustomARecordWithHttpInfo(qname: string, body: string, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.removeDnsCustomARecordWithHttpInfo(qname, body, _options);
        return result.toPromise();
    }

    /**
     * Removes a DNS custom A record for the specified domain & value.
     * Remove DNS custom A record
     * @param qname DNS query name.
     * @param body 
     */
    public removeDnsCustomARecord(qname: string, body: string, _options?: Configuration): Promise<string> {
        const result = this.api.removeDnsCustomARecord(qname, body, _options);
        return result.toPromise();
    }

    /**
     * Removes a DNS custom record for the specified domain, type & value.
     * Remove DNS custom record
     * @param qname DNS record query name
     * @param rtype Record type
     * @param body 
     */
    public removeDnsCustomRecordWithHttpInfo(qname: string, rtype: DNSRecordType, body: string, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.removeDnsCustomRecordWithHttpInfo(qname, rtype, body, _options);
        return result.toPromise();
    }

    /**
     * Removes a DNS custom record for the specified domain, type & value.
     * Remove DNS custom record
     * @param qname DNS record query name
     * @param rtype Record type
     * @param body 
     */
    public removeDnsCustomRecord(qname: string, rtype: DNSRecordType, body: string, _options?: Configuration): Promise<string> {
        const result = this.api.removeDnsCustomRecord(qname, rtype, body, _options);
        return result.toPromise();
    }

    /**
     * Updates the DNS. Involves creating zone files and restarting `nsd`.
     * Update DNS
     * @param force Force an update even if mailinabox detects no changes are required.
     */
    public updateDnsWithHttpInfo(force: number, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.updateDnsWithHttpInfo(force, _options);
        return result.toPromise();
    }

    /**
     * Updates the DNS. Involves creating zone files and restarting `nsd`.
     * Update DNS
     * @param force Force an update even if mailinabox detects no changes are required.
     */
    public updateDns(force: number, _options?: Configuration): Promise<string> {
        const result = this.api.updateDns(force, _options);
        return result.toPromise();
    }

    /**
     * Updates an existing DNS custom A record value for the specified qname.
     * Update DNS custom A record
     * @param qname DNS query name.
     * @param body 
     */
    public updateDnsCustomARecordWithHttpInfo(qname: string, body: string, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.updateDnsCustomARecordWithHttpInfo(qname, body, _options);
        return result.toPromise();
    }

    /**
     * Updates an existing DNS custom A record value for the specified qname.
     * Update DNS custom A record
     * @param qname DNS query name.
     * @param body 
     */
    public updateDnsCustomARecord(qname: string, body: string, _options?: Configuration): Promise<string> {
        const result = this.api.updateDnsCustomARecord(qname, body, _options);
        return result.toPromise();
    }

    /**
     * Updates an existing DNS custom record value for the specified qname and type.
     * Update DNS custom record
     * @param qname DNS record query name
     * @param rtype Record type
     * @param body 
     */
    public updateDnsCustomRecordWithHttpInfo(qname: string, rtype: DNSRecordType, body: string, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.updateDnsCustomRecordWithHttpInfo(qname, rtype, body, _options);
        return result.toPromise();
    }

    /**
     * Updates an existing DNS custom record value for the specified qname and type.
     * Update DNS custom record
     * @param qname DNS record query name
     * @param rtype Record type
     * @param body 
     */
    public updateDnsCustomRecord(qname: string, rtype: DNSRecordType, body: string, _options?: Configuration): Promise<string> {
        const result = this.api.updateDnsCustomRecord(qname, rtype, body, _options);
        return result.toPromise();
    }


}



import { ObservableMFAApi } from './ObservableAPI';

import { MFAApiRequestFactory, MFAApiResponseProcessor} from "../apis/MFAApi";
export class PromiseMFAApi {
    private api: ObservableMFAApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MFAApiRequestFactory,
        responseProcessor?: MFAApiResponseProcessor
    ) {
        this.api = new ObservableMFAApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves which type of MFA is used and configuration
     * Retrieve MFA status for you or another user
     */
    public mfaStatusWithHttpInfo(_options?: Configuration): Promise<HttpInfo<MfaStatusResponse>> {
        const result = this.api.mfaStatusWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Retrieves which type of MFA is used and configuration
     * Retrieve MFA status for you or another user
     */
    public mfaStatus(_options?: Configuration): Promise<MfaStatusResponse> {
        const result = this.api.mfaStatus(_options);
        return result.toPromise();
    }

    /**
     * Disables multi-factor authentication for the currently logged-in admin user or another user if a \'user\' parameter is submitted. Either disables all multi-factor authentication methods or the method corresponding to the optional property `mfa_id`.
     * Disable multi-factor authentication for you or another user
     * @param mfaId 
     */
    public mfaTotpDisableWithHttpInfo(mfaId?: string, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.mfaTotpDisableWithHttpInfo(mfaId, _options);
        return result.toPromise();
    }

    /**
     * Disables multi-factor authentication for the currently logged-in admin user or another user if a \'user\' parameter is submitted. Either disables all multi-factor authentication methods or the method corresponding to the optional property `mfa_id`.
     * Disable multi-factor authentication for you or another user
     * @param mfaId 
     */
    public mfaTotpDisable(mfaId?: string, _options?: Configuration): Promise<string> {
        const result = this.api.mfaTotpDisable(mfaId, _options);
        return result.toPromise();
    }

    /**
     * Enables TOTP authentication for the currently logged-in admin user
     * Enable TOTP authentication
     * @param secret 
     * @param code 
     * @param label 
     */
    public mfaTotpEnableWithHttpInfo(secret: string, code: string, label?: string, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.mfaTotpEnableWithHttpInfo(secret, code, label, _options);
        return result.toPromise();
    }

    /**
     * Enables TOTP authentication for the currently logged-in admin user
     * Enable TOTP authentication
     * @param secret 
     * @param code 
     * @param label 
     */
    public mfaTotpEnable(secret: string, code: string, label?: string, _options?: Configuration): Promise<string> {
        const result = this.api.mfaTotpEnable(secret, code, label, _options);
        return result.toPromise();
    }


}



import { ObservableMailApi } from './ObservableAPI';

import { MailApiRequestFactory, MailApiResponseProcessor} from "../apis/MailApi";
export class PromiseMailApi {
    private api: ObservableMailApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MailApiRequestFactory,
        responseProcessor?: MailApiResponseProcessor
    ) {
        this.api = new ObservableMailApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Adds a new mail user.
     * Add mail user
     * @param email Email format.
     * @param password 
     * @param privileges 
     */
    public addMailUserWithHttpInfo(email: string, password: string, privileges: MailUserPrivilege, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.addMailUserWithHttpInfo(email, password, privileges, _options);
        return result.toPromise();
    }

    /**
     * Adds a new mail user.
     * Add mail user
     * @param email Email format.
     * @param password 
     * @param privileges 
     */
    public addMailUser(email: string, password: string, privileges: MailUserPrivilege, _options?: Configuration): Promise<string> {
        const result = this.api.addMailUser(email, password, privileges, _options);
        return result.toPromise();
    }

    /**
     * Adds a privilege to an existing mail user.
     * Add mail user privilege
     * @param email Email format.
     * @param privilege 
     */
    public addMailUserPrivilegeWithHttpInfo(email: string, privilege: MailUserPrivilege, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.addMailUserPrivilegeWithHttpInfo(email, privilege, _options);
        return result.toPromise();
    }

    /**
     * Adds a privilege to an existing mail user.
     * Add mail user privilege
     * @param email Email format.
     * @param privilege 
     */
    public addMailUserPrivilege(email: string, privilege: MailUserPrivilege, _options?: Configuration): Promise<string> {
        const result = this.api.addMailUserPrivilege(email, privilege, _options);
        return result.toPromise();
    }

    /**
     * Returns all mail aliases.
     * Get mail aliases
     * @param format The format of the response.
     */
    public getMailAliasesWithHttpInfo(format?: MailAliasesResponseFormat, _options?: Configuration): Promise<HttpInfo<Array<MailAliasByDomain>>> {
        const result = this.api.getMailAliasesWithHttpInfo(format, _options);
        return result.toPromise();
    }

    /**
     * Returns all mail aliases.
     * Get mail aliases
     * @param format The format of the response.
     */
    public getMailAliases(format?: MailAliasesResponseFormat, _options?: Configuration): Promise<Array<MailAliasByDomain>> {
        const result = this.api.getMailAliases(format, _options);
        return result.toPromise();
    }

    /**
     * Returns all mail domains.
     * Get mail domains
     */
    public getMailDomainsWithHttpInfo(_options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.getMailDomainsWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Returns all mail domains.
     * Get mail domains
     */
    public getMailDomains(_options?: Configuration): Promise<string> {
        const result = this.api.getMailDomains(_options);
        return result.toPromise();
    }

    /**
     * Returns all privileges for an existing mail user.
     * Get mail user privileges
     * @param email The email you want to get privileges for.
     */
    public getMailUserPrivilegesWithHttpInfo(email?: string, _options?: Configuration): Promise<HttpInfo<MailUserPrivilege>> {
        const result = this.api.getMailUserPrivilegesWithHttpInfo(email, _options);
        return result.toPromise();
    }

    /**
     * Returns all privileges for an existing mail user.
     * Get mail user privileges
     * @param email The email you want to get privileges for.
     */
    public getMailUserPrivileges(email?: string, _options?: Configuration): Promise<MailUserPrivilege> {
        const result = this.api.getMailUserPrivileges(email, _options);
        return result.toPromise();
    }

    /**
     * Returns all mail users.
     * Get mail users
     * @param format The format of the response.
     */
    public getMailUsersWithHttpInfo(format?: MailUsersResponseFormat, _options?: Configuration): Promise<HttpInfo<Array<MailUserByDomain>>> {
        const result = this.api.getMailUsersWithHttpInfo(format, _options);
        return result.toPromise();
    }

    /**
     * Returns all mail users.
     * Get mail users
     * @param format The format of the response.
     */
    public getMailUsers(format?: MailUsersResponseFormat, _options?: Configuration): Promise<Array<MailUserByDomain>> {
        const result = this.api.getMailUsers(format, _options);
        return result.toPromise();
    }

    /**
     * Removes a mail alias.
     * Remove mail alias
     * @param address Email format.
     */
    public removeMailAliasWithHttpInfo(address: string, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.removeMailAliasWithHttpInfo(address, _options);
        return result.toPromise();
    }

    /**
     * Removes a mail alias.
     * Remove mail alias
     * @param address Email format.
     */
    public removeMailAlias(address: string, _options?: Configuration): Promise<string> {
        const result = this.api.removeMailAlias(address, _options);
        return result.toPromise();
    }

    /**
     * Removes an existing mail user.
     * Remove mail user
     * @param email Email format.
     */
    public removeMailUserWithHttpInfo(email: string, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.removeMailUserWithHttpInfo(email, _options);
        return result.toPromise();
    }

    /**
     * Removes an existing mail user.
     * Remove mail user
     * @param email Email format.
     */
    public removeMailUser(email: string, _options?: Configuration): Promise<string> {
        const result = this.api.removeMailUser(email, _options);
        return result.toPromise();
    }

    /**
     * Removes a privilege from an existing mail user.
     * Remove mail user privilege
     * @param email Email format.
     * @param privilege 
     */
    public removeMailUserPrivilegeWithHttpInfo(email: string, privilege: MailUserPrivilege, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.removeMailUserPrivilegeWithHttpInfo(email, privilege, _options);
        return result.toPromise();
    }

    /**
     * Removes a privilege from an existing mail user.
     * Remove mail user privilege
     * @param email Email format.
     * @param privilege 
     */
    public removeMailUserPrivilege(email: string, privilege: MailUserPrivilege, _options?: Configuration): Promise<string> {
        const result = this.api.removeMailUserPrivilege(email, privilege, _options);
        return result.toPromise();
    }

    /**
     * Sets a password for an existing mail user.
     * Set mail user password
     * @param email Email format.
     * @param password 
     */
    public setMailUserPasswordWithHttpInfo(email: string, password: string, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.setMailUserPasswordWithHttpInfo(email, password, _options);
        return result.toPromise();
    }

    /**
     * Sets a password for an existing mail user.
     * Set mail user password
     * @param email Email format.
     * @param password 
     */
    public setMailUserPassword(email: string, password: string, _options?: Configuration): Promise<string> {
        const result = this.api.setMailUserPassword(email, password, _options);
        return result.toPromise();
    }

    /**
     * Adds or updates a mail alias. If updating, you need to set `update_if_exists: 1`. 
     * Upsert mail alias
     * @param updateIfExists Set to &#x60;1&#x60; when updating an alias.
     * @param address Email format.
     * @param forwardsTo If adding a regular or catch-all alias, the format needs to be &#x60;user@example.com&#x60;. Multiple address can be separated by newlines or commas.  If adding a domain alias, the format needs to be &#x60;@example.com&#x60;. 
     * @param permittedSenders Mail users that can send mail claiming to be from any address on the alias domain. Multiple address can be separated by newlines or commas.  Leave empty to allow any mail user listed in &#x60;forwards_to&#x60; to send mail claiming to be from any address on the alias domain. 
     */
    public upsertMailAliasWithHttpInfo(updateIfExists: number, address: string, forwardsTo: string, permittedSenders: string, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.upsertMailAliasWithHttpInfo(updateIfExists, address, forwardsTo, permittedSenders, _options);
        return result.toPromise();
    }

    /**
     * Adds or updates a mail alias. If updating, you need to set `update_if_exists: 1`. 
     * Upsert mail alias
     * @param updateIfExists Set to &#x60;1&#x60; when updating an alias.
     * @param address Email format.
     * @param forwardsTo If adding a regular or catch-all alias, the format needs to be &#x60;user@example.com&#x60;. Multiple address can be separated by newlines or commas.  If adding a domain alias, the format needs to be &#x60;@example.com&#x60;. 
     * @param permittedSenders Mail users that can send mail claiming to be from any address on the alias domain. Multiple address can be separated by newlines or commas.  Leave empty to allow any mail user listed in &#x60;forwards_to&#x60; to send mail claiming to be from any address on the alias domain. 
     */
    public upsertMailAlias(updateIfExists: number, address: string, forwardsTo: string, permittedSenders: string, _options?: Configuration): Promise<string> {
        const result = this.api.upsertMailAlias(updateIfExists, address, forwardsTo, permittedSenders, _options);
        return result.toPromise();
    }


}



import { ObservablePGPApi } from './ObservableAPI';

import { PGPApiRequestFactory, PGPApiResponseProcessor} from "../apis/PGPApi";
export class PromisePGPApi {
    private api: ObservablePGPApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PGPApiRequestFactory,
        responseProcessor?: PGPApiResponseProcessor
    ) {
        this.api = new ObservablePGPApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Exports the PGP key with the given fingerprint.
     * Export a PGP key
     */
    public exportPGPKeyWithHttpInfo(_options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.exportPGPKeyWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Exports the PGP key with the given fingerprint.
     * Export a PGP key
     */
    public exportPGPKey(_options?: Configuration): Promise<string> {
        const result = this.api.exportPGPKey(_options);
        return result.toPromise();
    }

    /**
     * Gets a JSON summary of the PGP key with the given fingerprint.
     * Get a specific PGP key
     */
    public getPGPKeyWithHttpInfo(_options?: Configuration): Promise<HttpInfo<PgpKey>> {
        const result = this.api.getPGPKeyWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Gets a JSON summary of the PGP key with the given fingerprint.
     * Get a specific PGP key
     */
    public getPGPKey(_options?: Configuration): Promise<PgpKey> {
        const result = this.api.getPGPKey(_options);
        return result.toPromise();
    }

    /**
     * Gets a JSON summary of all public PGP keys in the keyring.
     * Get all PGP keys
     */
    public getPGPKeysWithHttpInfo(_options?: Configuration): Promise<HttpInfo<PgpKeyring>> {
        const result = this.api.getPGPKeysWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Gets a JSON summary of all public PGP keys in the keyring.
     * Get all PGP keys
     */
    public getPGPKeys(_options?: Configuration): Promise<PgpKeyring> {
        const result = this.api.getPGPKeys(_options);
        return result.toPromise();
    }

    /**
     * Imports a PGP key block into the keyring. Only public keys are accepted.
     * Import a PGP key
     */
    public importPGPKeyWithHttpInfo(_options?: Configuration): Promise<HttpInfo<PgpKeyImportResult>> {
        const result = this.api.importPGPKeyWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Imports a PGP key block into the keyring. Only public keys are accepted.
     * Import a PGP key
     */
    public importPGPKey(_options?: Configuration): Promise<PgpKeyImportResult> {
        const result = this.api.importPGPKey(_options);
        return result.toPromise();
    }

    /**
     * Removes the PGP key with the given fingerprint from the keyring
     * Remove a PGP key
     */
    public removePGPKeyWithHttpInfo(_options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.removePGPKeyWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Removes the PGP key with the given fingerprint from the keyring
     * Remove a PGP key
     */
    public removePGPKey(_options?: Configuration): Promise<string> {
        const result = this.api.removePGPKey(_options);
        return result.toPromise();
    }


}



import { ObservableSSLApi } from './ObservableAPI';

import { SSLApiRequestFactory, SSLApiResponseProcessor} from "../apis/SSLApi";
export class PromiseSSLApi {
    private api: ObservableSSLApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SSLApiRequestFactory,
        responseProcessor?: SSLApiResponseProcessor
    ) {
        this.api = new ObservableSSLApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Generates a Certificate Signing Request (CSR) for a domain & country code. 
     * Generate SSL CSR
     * @param domain Domain to generate CSR for.
     * @param countrycode 
     */
    public generateSSLCSRWithHttpInfo(domain: string, countrycode: string, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.generateSSLCSRWithHttpInfo(domain, countrycode, _options);
        return result.toPromise();
    }

    /**
     * Generates a Certificate Signing Request (CSR) for a domain & country code. 
     * Generate SSL CSR
     * @param domain Domain to generate CSR for.
     * @param countrycode 
     */
    public generateSSLCSR(domain: string, countrycode: string, _options?: Configuration): Promise<string> {
        const result = this.api.generateSSLCSR(domain, countrycode, _options);
        return result.toPromise();
    }

    /**
     * Returns the SSL status for all domains.
     * Get SSL status
     */
    public getSSLStatusWithHttpInfo(_options?: Configuration): Promise<HttpInfo<SSLStatusResponse>> {
        const result = this.api.getSSLStatusWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Returns the SSL status for all domains.
     * Get SSL status
     */
    public getSSLStatus(_options?: Configuration): Promise<SSLStatusResponse> {
        const result = this.api.getSSLStatus(_options);
        return result.toPromise();
    }

    /**
     * Installs a custom certificate. The chain certificate is optional. 
     * Install SSL certificate
     * @param domain Hostname format.
     * @param cert TLS/SSL certificate.
     * @param chain TLS/SSL intermediate chain (if provided, else empty string).
     */
    public installSSLCertificateWithHttpInfo(domain: string, cert: string, chain: string, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.installSSLCertificateWithHttpInfo(domain, cert, chain, _options);
        return result.toPromise();
    }

    /**
     * Installs a custom certificate. The chain certificate is optional. 
     * Install SSL certificate
     * @param domain Hostname format.
     * @param cert TLS/SSL certificate.
     * @param chain TLS/SSL intermediate chain (if provided, else empty string).
     */
    public installSSLCertificate(domain: string, cert: string, chain: string, _options?: Configuration): Promise<string> {
        const result = this.api.installSSLCertificate(domain, cert, chain, _options);
        return result.toPromise();
    }

    /**
     * Provisions certificates for all domains. 
     * Provision SSL certificates
     */
    public provisionSSLCertificatesWithHttpInfo(_options?: Configuration): Promise<HttpInfo<SSLCertificatesProvisionResponse>> {
        const result = this.api.provisionSSLCertificatesWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Provisions certificates for all domains. 
     * Provision SSL certificates
     */
    public provisionSSLCertificates(_options?: Configuration): Promise<SSLCertificatesProvisionResponse> {
        const result = this.api.provisionSSLCertificates(_options);
        return result.toPromise();
    }


}



import { ObservableSystemApi } from './ObservableAPI';

import { SystemApiRequestFactory, SystemApiResponseProcessor} from "../apis/SystemApi";
export class PromiseSystemApi {
    private api: ObservableSystemApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SystemApiRequestFactory,
        responseProcessor?: SystemApiResponseProcessor
    ) {
        this.api = new ObservableSystemApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets basic configuration on how the box should use third-party relay services to deliver mail.
     * Get SMTP relay configuration
     */
    public getRelayConfigWithHttpInfo(_options?: Configuration): Promise<HttpInfo<SmtpRelayConfig>> {
        const result = this.api.getRelayConfigWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Gets basic configuration on how the box should use third-party relay services to deliver mail.
     * Get SMTP relay configuration
     */
    public getRelayConfig(_options?: Configuration): Promise<SmtpRelayConfig> {
        const result = this.api.getRelayConfig(_options);
        return result.toPromise();
    }

    /**
     * Returns the system backup config.
     * Get system backup config
     */
    public getSystemBackupConfigWithHttpInfo(_options?: Configuration): Promise<HttpInfo<SystemBackupConfigResponse>> {
        const result = this.api.getSystemBackupConfigWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Returns the system backup config.
     * Get system backup config
     */
    public getSystemBackupConfig(_options?: Configuration): Promise<SystemBackupConfigResponse> {
        const result = this.api.getSystemBackupConfig(_options);
        return result.toPromise();
    }

    /**
     * Returns the system backup status.  If the list of backups is empty, this implies no backups have been made yet. 
     * Get system backup status
     */
    public getSystemBackupStatusWithHttpInfo(_options?: Configuration): Promise<HttpInfo<SystemBackupStatusResponse>> {
        const result = this.api.getSystemBackupStatusWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Returns the system backup status.  If the list of backups is empty, this implies no backups have been made yet. 
     * Get system backup status
     */
    public getSystemBackupStatus(_options?: Configuration): Promise<SystemBackupStatusResponse> {
        const result = this.api.getSystemBackupStatus(_options);
        return result.toPromise();
    }

    /**
     * Returns system privacy (new-version check) status.  Response:    - `true`: Private, new-version checks will not be performed   - `false`: Not private, new-version checks will be performed 
     * Get system privacy status
     */
    public getSystemPrivacyStatusWithHttpInfo(_options?: Configuration): Promise<HttpInfo<boolean>> {
        const result = this.api.getSystemPrivacyStatusWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Returns system privacy (new-version check) status.  Response:    - `true`: Private, new-version checks will not be performed   - `false`: Not private, new-version checks will be performed 
     * Get system privacy status
     */
    public getSystemPrivacyStatus(_options?: Configuration): Promise<boolean> {
        const result = this.api.getSystemPrivacyStatus(_options);
        return result.toPromise();
    }

    /**
     * Returns the system reboot status.  Response:    - `true`: A reboot is required   - `false`: A reboot is not required 
     * Get system reboot status
     */
    public getSystemRebootStatusWithHttpInfo(_options?: Configuration): Promise<HttpInfo<boolean>> {
        const result = this.api.getSystemRebootStatusWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Returns the system reboot status.  Response:    - `true`: A reboot is required   - `false`: A reboot is not required 
     * Get system reboot status
     */
    public getSystemRebootStatus(_options?: Configuration): Promise<boolean> {
        const result = this.api.getSystemRebootStatus(_options);
        return result.toPromise();
    }

    /**
     * Returns an array of statuses which can include headings. 
     * Get system status
     */
    public getSystemStatusWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<StatusEntry>>> {
        const result = this.api.getSystemStatusWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Returns an array of statuses which can include headings. 
     * Get system status
     */
    public getSystemStatus(_options?: Configuration): Promise<Array<StatusEntry>> {
        const result = this.api.getSystemStatus(_options);
        return result.toPromise();
    }

    /**
     * Returns system (apt) updates.
     * Get system updates
     */
    public getSystemUpdatesWithHttpInfo(_options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.getSystemUpdatesWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Returns system (apt) updates.
     * Get system updates
     */
    public getSystemUpdates(_options?: Configuration): Promise<string> {
        const result = this.api.getSystemUpdates(_options);
        return result.toPromise();
    }

    /**
     * Returns Mail-in-a-Box upstream version.
     * Get system upstream version
     */
    public getSystemUpstreamVersionWithHttpInfo(_options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.getSystemUpstreamVersionWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Returns Mail-in-a-Box upstream version.
     * Get system upstream version
     */
    public getSystemUpstreamVersion(_options?: Configuration): Promise<string> {
        const result = this.api.getSystemUpstreamVersion(_options);
        return result.toPromise();
    }

    /**
     * Returns installed Mail-in-a-Box version.
     * Get system version
     */
    public getSystemVersionWithHttpInfo(_options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.getSystemVersionWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Returns installed Mail-in-a-Box version.
     * Get system version
     */
    public getSystemVersion(_options?: Configuration): Promise<string> {
        const result = this.api.getSystemVersion(_options);
        return result.toPromise();
    }

    /**
     * Performs a system backup.
     * Perform system backup
     * @param full 
     */
    public performSystemBackupWithHttpInfo(full: boolean, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.performSystemBackupWithHttpInfo(full, _options);
        return result.toPromise();
    }

    /**
     * Performs a system backup.
     * Perform system backup
     * @param full 
     */
    public performSystemBackup(full: boolean, _options?: Configuration): Promise<string> {
        const result = this.api.performSystemBackup(full, _options);
        return result.toPromise();
    }

    /**
     * Reboots the system.
     * Reboot system
     */
    public rebootSystemWithHttpInfo(_options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.rebootSystemWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Reboots the system.
     * Reboot system
     */
    public rebootSystem(_options?: Configuration): Promise<string> {
        const result = this.api.rebootSystem(_options);
        return result.toPromise();
    }

    /**
     * Sets the configuration on how the box should use third-party relays to deliver mail.
     * Set SMTP relay configuration
     * @param enabled 
     * @param host 
     * @param authEnabled 
     * @param user 
     * @param key 
     */
    public setRelayConfigWithHttpInfo(enabled: boolean, host: string, authEnabled: boolean, user: string, key: string, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.setRelayConfigWithHttpInfo(enabled, host, authEnabled, user, key, _options);
        return result.toPromise();
    }

    /**
     * Sets the configuration on how the box should use third-party relays to deliver mail.
     * Set SMTP relay configuration
     * @param enabled 
     * @param host 
     * @param authEnabled 
     * @param user 
     * @param key 
     */
    public setRelayConfig(enabled: boolean, host: string, authEnabled: boolean, user: string, key: string, _options?: Configuration): Promise<string> {
        const result = this.api.setRelayConfig(enabled, host, authEnabled, user, key, _options);
        return result.toPromise();
    }

    /**
     * Updates the system backup config.
     * Update system backup config
     * @param target 
     * @param targetUser 
     * @param targetPass 
     * @param minAge 
     */
    public updateSystemBackupConfigWithHttpInfo(target: string, targetUser: string, targetPass: string, minAge: number, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.updateSystemBackupConfigWithHttpInfo(target, targetUser, targetPass, minAge, _options);
        return result.toPromise();
    }

    /**
     * Updates the system backup config.
     * Update system backup config
     * @param target 
     * @param targetUser 
     * @param targetPass 
     * @param minAge 
     */
    public updateSystemBackupConfig(target: string, targetUser: string, targetPass: string, minAge: number, _options?: Configuration): Promise<string> {
        const result = this.api.updateSystemBackupConfig(target, targetUser, targetPass, minAge, _options);
        return result.toPromise();
    }

    /**
     * Updates system (apt) packages.
     * Update system packages
     */
    public updateSystemPackagesWithHttpInfo(_options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.updateSystemPackagesWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Updates system (apt) packages.
     * Update system packages
     */
    public updateSystemPackages(_options?: Configuration): Promise<string> {
        const result = this.api.updateSystemPackages(_options);
        return result.toPromise();
    }

    /**
     * Updates system privacy (new-version checks).  Request:    - `value: private`: Disable new version checks   - `value: off`: Enable new version checks 
     * Update system privacy
     * @param value 
     */
    public updateSystemPrivacyWithHttpInfo(value: SystemPrivacyStatus, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.updateSystemPrivacyWithHttpInfo(value, _options);
        return result.toPromise();
    }

    /**
     * Updates system privacy (new-version checks).  Request:    - `value: private`: Disable new version checks   - `value: off`: Enable new version checks 
     * Update system privacy
     * @param value 
     */
    public updateSystemPrivacy(value: SystemPrivacyStatus, _options?: Configuration): Promise<string> {
        const result = this.api.updateSystemPrivacy(value, _options);
        return result.toPromise();
    }


}



import { ObservableUserApi } from './ObservableAPI';

import { UserApiRequestFactory, UserApiResponseProcessor} from "../apis/UserApi";
export class PromiseUserApi {
    private api: ObservableUserApi

    public constructor(
        configuration: Configuration,
        requestFactory?: UserApiRequestFactory,
        responseProcessor?: UserApiResponseProcessor
    ) {
        this.api = new ObservableUserApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns user information and a session API key.  Authenticate a user by supplying the auth token as a base64 encoded string in format `email:password` using basic authentication headers.  If successful, a long-lived `api_key` is returned which can be used for subsequent requests to the API in place of the password. 
     * Exchange a username and password for a session API key.
     */
    public loginWithHttpInfo(_options?: Configuration): Promise<HttpInfo<MeResponse>> {
        const result = this.api.loginWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Returns user information and a session API key.  Authenticate a user by supplying the auth token as a base64 encoded string in format `email:password` using basic authentication headers.  If successful, a long-lived `api_key` is returned which can be used for subsequent requests to the API in place of the password. 
     * Exchange a username and password for a session API key.
     */
    public login(_options?: Configuration): Promise<MeResponse> {
        const result = this.api.login(_options);
        return result.toPromise();
    }

    /**
     * Invalidates a session API key so that it cannot be used after this API call. 
     * Invalidates a session API key.
     */
    public logoutWithHttpInfo(_options?: Configuration): Promise<HttpInfo<LogoutResponse>> {
        const result = this.api.logoutWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Invalidates a session API key so that it cannot be used after this API call. 
     * Invalidates a session API key.
     */
    public logout(_options?: Configuration): Promise<LogoutResponse> {
        const result = this.api.logout(_options);
        return result.toPromise();
    }


}



import { ObservableWKDApi } from './ObservableAPI';

import { WKDApiRequestFactory, WKDApiResponseProcessor} from "../apis/WKDApi";
export class PromiseWKDApi {
    private api: ObservableWKDApi

    public constructor(
        configuration: Configuration,
        requestFactory?: WKDApiRequestFactory,
        responseProcessor?: WKDApiResponseProcessor
    ) {
        this.api = new ObservableWKDApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets the current configuration applied to the Web Key Directory for each email hosted in the box, along with a JSON summary of all public PGP keys in the keyring.
     * Get WKD status
     */
    public getWKDstatusWithHttpInfo(_options?: Configuration): Promise<HttpInfo<GetWKDstatus200Response>> {
        const result = this.api.getWKDstatusWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Gets the current configuration applied to the Web Key Directory for each email hosted in the box, along with a JSON summary of all public PGP keys in the keyring.
     * Get WKD status
     */
    public getWKDstatus(_options?: Configuration): Promise<GetWKDstatus200Response> {
        const result = this.api.getWKDstatus(_options);
        return result.toPromise();
    }


}



import { ObservableWebApi } from './ObservableAPI';

import { WebApiRequestFactory, WebApiResponseProcessor} from "../apis/WebApi";
export class PromiseWebApi {
    private api: ObservableWebApi

    public constructor(
        configuration: Configuration,
        requestFactory?: WebApiRequestFactory,
        responseProcessor?: WebApiResponseProcessor
    ) {
        this.api = new ObservableWebApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns all static web domains.
     * Get web domains
     */
    public getWebDomainsWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<WebDomain>>> {
        const result = this.api.getWebDomainsWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Returns all static web domains.
     * Get web domains
     */
    public getWebDomains(_options?: Configuration): Promise<Array<WebDomain>> {
        const result = this.api.getWebDomains(_options);
        return result.toPromise();
    }

    /**
     * Updates static websites, used for updating domain root directories.
     * Update web
     */
    public updateWebWithHttpInfo(_options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.updateWebWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Updates static websites, used for updating domain root directories.
     * Update web
     */
    public updateWeb(_options?: Configuration): Promise<string> {
        const result = this.api.updateWeb(_options);
        return result.toPromise();
    }


}



