import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { DNSApiRequestFactory, DNSApiResponseProcessor} from "../apis/DNSApi";
export class ObservableDNSApi {
    private requestFactory: DNSApiRequestFactory;
    private responseProcessor: DNSApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DNSApiRequestFactory,
        responseProcessor?: DNSApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DNSApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DNSApiResponseProcessor();
    }

    /**
     * Adds a custom DNS A record for the specified query name.
     * Add DNS custom A record
     * @param qname DNS query name.
     * @param body 
     */
    public addDnsCustomARecordWithHttpInfo(qname: string, body: string, _options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.addDnsCustomARecord(qname, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addDnsCustomARecordWithHttpInfo(rsp)));
            }));
    }

    /**
     * Adds a custom DNS A record for the specified query name.
     * Add DNS custom A record
     * @param qname DNS query name.
     * @param body 
     */
    public addDnsCustomARecord(qname: string, body: string, _options?: Configuration): Observable<string> {
        return this.addDnsCustomARecordWithHttpInfo(qname, body, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Adds a custom DNS record for the specified query name and type.
     * Add DNS custom record
     * @param qname DNS record query name
     * @param rtype Record type
     * @param body 
     */
    public addDnsCustomRecordWithHttpInfo(qname: string, rtype: DNSRecordType, body: string, _options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.addDnsCustomRecord(qname, rtype, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addDnsCustomRecordWithHttpInfo(rsp)));
            }));
    }

    /**
     * Adds a custom DNS record for the specified query name and type.
     * Add DNS custom record
     * @param qname DNS record query name
     * @param rtype Record type
     * @param body 
     */
    public addDnsCustomRecord(qname: string, rtype: DNSRecordType, body: string, _options?: Configuration): Observable<string> {
        return this.addDnsCustomRecordWithHttpInfo(qname, rtype, body, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Adds one or more secondary nameservers. 
     * Add DNS secondary nameserver
     * @param hostnames Hostnames separated with commas or spaces.
     */
    public addDnsSecondaryNameserverWithHttpInfo(hostnames: string, _options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.addDnsSecondaryNameserver(hostnames, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addDnsSecondaryNameserverWithHttpInfo(rsp)));
            }));
    }

    /**
     * Adds one or more secondary nameservers. 
     * Add DNS secondary nameserver
     * @param hostnames Hostnames separated with commas or spaces.
     */
    public addDnsSecondaryNameserver(hostnames: string, _options?: Configuration): Observable<string> {
        return this.addDnsSecondaryNameserverWithHttpInfo(hostnames, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Returns all custom A records for the specified query name.
     * Get DNS custom A records
     * @param qname DNS query name.
     */
    public getDnsCustomARecordsForQNameWithHttpInfo(qname: string, _options?: Configuration): Observable<HttpInfo<Array<DNSCustomRecord>>> {
        const requestContextPromise = this.requestFactory.getDnsCustomARecordsForQName(qname, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDnsCustomARecordsForQNameWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns all custom A records for the specified query name.
     * Get DNS custom A records
     * @param qname DNS query name.
     */
    public getDnsCustomARecordsForQName(qname: string, _options?: Configuration): Observable<Array<DNSCustomRecord>> {
        return this.getDnsCustomARecordsForQNameWithHttpInfo(qname, _options).pipe(map((apiResponse: HttpInfo<Array<DNSCustomRecord>>) => apiResponse.data));
    }

    /**
     * Returns all custom DNS records.
     * Get DNS custom records
     */
    public getDnsCustomRecordsWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<DNSCustomRecord>>> {
        const requestContextPromise = this.requestFactory.getDnsCustomRecords(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDnsCustomRecordsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns all custom DNS records.
     * Get DNS custom records
     */
    public getDnsCustomRecords(_options?: Configuration): Observable<Array<DNSCustomRecord>> {
        return this.getDnsCustomRecordsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<DNSCustomRecord>>) => apiResponse.data));
    }

    /**
     * Returns all custom records for the specified query name and type.
     * Get DNS custom records
     * @param qname DNS record query name
     * @param rtype Record type
     */
    public getDnsCustomRecordsForQNameAndTypeWithHttpInfo(qname: string, rtype: DNSRecordType, _options?: Configuration): Observable<HttpInfo<Array<DNSCustomRecord>>> {
        const requestContextPromise = this.requestFactory.getDnsCustomRecordsForQNameAndType(qname, rtype, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDnsCustomRecordsForQNameAndTypeWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns all custom records for the specified query name and type.
     * Get DNS custom records
     * @param qname DNS record query name
     * @param rtype Record type
     */
    public getDnsCustomRecordsForQNameAndType(qname: string, rtype: DNSRecordType, _options?: Configuration): Observable<Array<DNSCustomRecord>> {
        return this.getDnsCustomRecordsForQNameAndTypeWithHttpInfo(qname, rtype, _options).pipe(map((apiResponse: HttpInfo<Array<DNSCustomRecord>>) => apiResponse.data));
    }

    /**
     * Returns all DNS records.
     * Get DNS dump
     */
    public getDnsDumpWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<Array<DNSDumpDomainsInner>>>> {
        const requestContextPromise = this.requestFactory.getDnsDump(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDnsDumpWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns all DNS records.
     * Get DNS dump
     */
    public getDnsDump(_options?: Configuration): Observable<Array<Array<DNSDumpDomainsInner>>> {
        return this.getDnsDumpWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<Array<DNSDumpDomainsInner>>>) => apiResponse.data));
    }

    /**
     * Returns a list of nameserver hostnames. 
     * Get DNS secondary nameserver
     */
    public getDnsSecondaryNameserverWithHttpInfo(_options?: Configuration): Observable<HttpInfo<DNSSecondaryNameserverResponse>> {
        const requestContextPromise = this.requestFactory.getDnsSecondaryNameserver(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDnsSecondaryNameserverWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns a list of nameserver hostnames. 
     * Get DNS secondary nameserver
     */
    public getDnsSecondaryNameserver(_options?: Configuration): Observable<DNSSecondaryNameserverResponse> {
        return this.getDnsSecondaryNameserverWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<DNSSecondaryNameserverResponse>) => apiResponse.data));
    }

    /**
     * Returns a DNS zone file for a hostname.
     * Get DNS zonefile
     * @param zone Hostname
     */
    public getDnsZonefileWithHttpInfo(zone: string, _options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.getDnsZonefile(zone, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDnsZonefileWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns a DNS zone file for a hostname.
     * Get DNS zonefile
     * @param zone Hostname
     */
    public getDnsZonefile(zone: string, _options?: Configuration): Observable<string> {
        return this.getDnsZonefileWithHttpInfo(zone, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Returns an array of all managed top-level domains.
     * Get DNS zones
     */
    public getDnsZonesWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<string>>> {
        const requestContextPromise = this.requestFactory.getDnsZones(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDnsZonesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns an array of all managed top-level domains.
     * Get DNS zones
     */
    public getDnsZones(_options?: Configuration): Observable<Array<string>> {
        return this.getDnsZonesWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<string>>) => apiResponse.data));
    }

    /**
     * Removes a DNS custom A record for the specified domain & value.
     * Remove DNS custom A record
     * @param qname DNS query name.
     * @param body 
     */
    public removeDnsCustomARecordWithHttpInfo(qname: string, body: string, _options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.removeDnsCustomARecord(qname, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeDnsCustomARecordWithHttpInfo(rsp)));
            }));
    }

    /**
     * Removes a DNS custom A record for the specified domain & value.
     * Remove DNS custom A record
     * @param qname DNS query name.
     * @param body 
     */
    public removeDnsCustomARecord(qname: string, body: string, _options?: Configuration): Observable<string> {
        return this.removeDnsCustomARecordWithHttpInfo(qname, body, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Removes a DNS custom record for the specified domain, type & value.
     * Remove DNS custom record
     * @param qname DNS record query name
     * @param rtype Record type
     * @param body 
     */
    public removeDnsCustomRecordWithHttpInfo(qname: string, rtype: DNSRecordType, body: string, _options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.removeDnsCustomRecord(qname, rtype, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeDnsCustomRecordWithHttpInfo(rsp)));
            }));
    }

    /**
     * Removes a DNS custom record for the specified domain, type & value.
     * Remove DNS custom record
     * @param qname DNS record query name
     * @param rtype Record type
     * @param body 
     */
    public removeDnsCustomRecord(qname: string, rtype: DNSRecordType, body: string, _options?: Configuration): Observable<string> {
        return this.removeDnsCustomRecordWithHttpInfo(qname, rtype, body, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Updates the DNS. Involves creating zone files and restarting `nsd`.
     * Update DNS
     * @param force Force an update even if mailinabox detects no changes are required.
     */
    public updateDnsWithHttpInfo(force: number, _options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.updateDns(force, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateDnsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates the DNS. Involves creating zone files and restarting `nsd`.
     * Update DNS
     * @param force Force an update even if mailinabox detects no changes are required.
     */
    public updateDns(force: number, _options?: Configuration): Observable<string> {
        return this.updateDnsWithHttpInfo(force, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Updates an existing DNS custom A record value for the specified qname.
     * Update DNS custom A record
     * @param qname DNS query name.
     * @param body 
     */
    public updateDnsCustomARecordWithHttpInfo(qname: string, body: string, _options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.updateDnsCustomARecord(qname, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateDnsCustomARecordWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates an existing DNS custom A record value for the specified qname.
     * Update DNS custom A record
     * @param qname DNS query name.
     * @param body 
     */
    public updateDnsCustomARecord(qname: string, body: string, _options?: Configuration): Observable<string> {
        return this.updateDnsCustomARecordWithHttpInfo(qname, body, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Updates an existing DNS custom record value for the specified qname and type.
     * Update DNS custom record
     * @param qname DNS record query name
     * @param rtype Record type
     * @param body 
     */
    public updateDnsCustomRecordWithHttpInfo(qname: string, rtype: DNSRecordType, body: string, _options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.updateDnsCustomRecord(qname, rtype, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateDnsCustomRecordWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates an existing DNS custom record value for the specified qname and type.
     * Update DNS custom record
     * @param qname DNS record query name
     * @param rtype Record type
     * @param body 
     */
    public updateDnsCustomRecord(qname: string, rtype: DNSRecordType, body: string, _options?: Configuration): Observable<string> {
        return this.updateDnsCustomRecordWithHttpInfo(qname, rtype, body, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

}

import { MFAApiRequestFactory, MFAApiResponseProcessor} from "../apis/MFAApi";
export class ObservableMFAApi {
    private requestFactory: MFAApiRequestFactory;
    private responseProcessor: MFAApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: MFAApiRequestFactory,
        responseProcessor?: MFAApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MFAApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MFAApiResponseProcessor();
    }

    /**
     * Retrieves which type of MFA is used and configuration
     * Retrieve MFA status for you or another user
     */
    public mfaStatusWithHttpInfo(_options?: Configuration): Observable<HttpInfo<MfaStatusResponse>> {
        const requestContextPromise = this.requestFactory.mfaStatus(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.mfaStatusWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves which type of MFA is used and configuration
     * Retrieve MFA status for you or another user
     */
    public mfaStatus(_options?: Configuration): Observable<MfaStatusResponse> {
        return this.mfaStatusWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<MfaStatusResponse>) => apiResponse.data));
    }

    /**
     * Disables multi-factor authentication for the currently logged-in admin user or another user if a \'user\' parameter is submitted. Either disables all multi-factor authentication methods or the method corresponding to the optional property `mfa_id`.
     * Disable multi-factor authentication for you or another user
     * @param mfaId 
     */
    public mfaTotpDisableWithHttpInfo(mfaId?: string, _options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.mfaTotpDisable(mfaId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.mfaTotpDisableWithHttpInfo(rsp)));
            }));
    }

    /**
     * Disables multi-factor authentication for the currently logged-in admin user or another user if a \'user\' parameter is submitted. Either disables all multi-factor authentication methods or the method corresponding to the optional property `mfa_id`.
     * Disable multi-factor authentication for you or another user
     * @param mfaId 
     */
    public mfaTotpDisable(mfaId?: string, _options?: Configuration): Observable<string> {
        return this.mfaTotpDisableWithHttpInfo(mfaId, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Enables TOTP authentication for the currently logged-in admin user
     * Enable TOTP authentication
     * @param secret 
     * @param code 
     * @param label 
     */
    public mfaTotpEnableWithHttpInfo(secret: string, code: string, label?: string, _options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.mfaTotpEnable(secret, code, label, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.mfaTotpEnableWithHttpInfo(rsp)));
            }));
    }

    /**
     * Enables TOTP authentication for the currently logged-in admin user
     * Enable TOTP authentication
     * @param secret 
     * @param code 
     * @param label 
     */
    public mfaTotpEnable(secret: string, code: string, label?: string, _options?: Configuration): Observable<string> {
        return this.mfaTotpEnableWithHttpInfo(secret, code, label, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

}

import { MailApiRequestFactory, MailApiResponseProcessor} from "../apis/MailApi";
export class ObservableMailApi {
    private requestFactory: MailApiRequestFactory;
    private responseProcessor: MailApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: MailApiRequestFactory,
        responseProcessor?: MailApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MailApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MailApiResponseProcessor();
    }

    /**
     * Adds a new mail user.
     * Add mail user
     * @param email Email format.
     * @param password 
     * @param privileges 
     */
    public addMailUserWithHttpInfo(email: string, password: string, privileges: MailUserPrivilege, _options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.addMailUser(email, password, privileges, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addMailUserWithHttpInfo(rsp)));
            }));
    }

    /**
     * Adds a new mail user.
     * Add mail user
     * @param email Email format.
     * @param password 
     * @param privileges 
     */
    public addMailUser(email: string, password: string, privileges: MailUserPrivilege, _options?: Configuration): Observable<string> {
        return this.addMailUserWithHttpInfo(email, password, privileges, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Adds a privilege to an existing mail user.
     * Add mail user privilege
     * @param email Email format.
     * @param privilege 
     */
    public addMailUserPrivilegeWithHttpInfo(email: string, privilege: MailUserPrivilege, _options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.addMailUserPrivilege(email, privilege, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addMailUserPrivilegeWithHttpInfo(rsp)));
            }));
    }

    /**
     * Adds a privilege to an existing mail user.
     * Add mail user privilege
     * @param email Email format.
     * @param privilege 
     */
    public addMailUserPrivilege(email: string, privilege: MailUserPrivilege, _options?: Configuration): Observable<string> {
        return this.addMailUserPrivilegeWithHttpInfo(email, privilege, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Returns all mail aliases.
     * Get mail aliases
     * @param format The format of the response.
     */
    public getMailAliasesWithHttpInfo(format?: MailAliasesResponseFormat, _options?: Configuration): Observable<HttpInfo<Array<MailAliasByDomain>>> {
        const requestContextPromise = this.requestFactory.getMailAliases(format, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMailAliasesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns all mail aliases.
     * Get mail aliases
     * @param format The format of the response.
     */
    public getMailAliases(format?: MailAliasesResponseFormat, _options?: Configuration): Observable<Array<MailAliasByDomain>> {
        return this.getMailAliasesWithHttpInfo(format, _options).pipe(map((apiResponse: HttpInfo<Array<MailAliasByDomain>>) => apiResponse.data));
    }

    /**
     * Returns all mail domains.
     * Get mail domains
     */
    public getMailDomainsWithHttpInfo(_options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.getMailDomains(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMailDomainsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns all mail domains.
     * Get mail domains
     */
    public getMailDomains(_options?: Configuration): Observable<string> {
        return this.getMailDomainsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Returns all privileges for an existing mail user.
     * Get mail user privileges
     * @param email The email you want to get privileges for.
     */
    public getMailUserPrivilegesWithHttpInfo(email?: string, _options?: Configuration): Observable<HttpInfo<MailUserPrivilege>> {
        const requestContextPromise = this.requestFactory.getMailUserPrivileges(email, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMailUserPrivilegesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns all privileges for an existing mail user.
     * Get mail user privileges
     * @param email The email you want to get privileges for.
     */
    public getMailUserPrivileges(email?: string, _options?: Configuration): Observable<MailUserPrivilege> {
        return this.getMailUserPrivilegesWithHttpInfo(email, _options).pipe(map((apiResponse: HttpInfo<MailUserPrivilege>) => apiResponse.data));
    }

    /**
     * Returns all mail users.
     * Get mail users
     * @param format The format of the response.
     */
    public getMailUsersWithHttpInfo(format?: MailUsersResponseFormat, _options?: Configuration): Observable<HttpInfo<Array<MailUserByDomain>>> {
        const requestContextPromise = this.requestFactory.getMailUsers(format, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMailUsersWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns all mail users.
     * Get mail users
     * @param format The format of the response.
     */
    public getMailUsers(format?: MailUsersResponseFormat, _options?: Configuration): Observable<Array<MailUserByDomain>> {
        return this.getMailUsersWithHttpInfo(format, _options).pipe(map((apiResponse: HttpInfo<Array<MailUserByDomain>>) => apiResponse.data));
    }

    /**
     * Removes a mail alias.
     * Remove mail alias
     * @param address Email format.
     */
    public removeMailAliasWithHttpInfo(address: string, _options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.removeMailAlias(address, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeMailAliasWithHttpInfo(rsp)));
            }));
    }

    /**
     * Removes a mail alias.
     * Remove mail alias
     * @param address Email format.
     */
    public removeMailAlias(address: string, _options?: Configuration): Observable<string> {
        return this.removeMailAliasWithHttpInfo(address, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Removes an existing mail user.
     * Remove mail user
     * @param email Email format.
     */
    public removeMailUserWithHttpInfo(email: string, _options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.removeMailUser(email, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeMailUserWithHttpInfo(rsp)));
            }));
    }

    /**
     * Removes an existing mail user.
     * Remove mail user
     * @param email Email format.
     */
    public removeMailUser(email: string, _options?: Configuration): Observable<string> {
        return this.removeMailUserWithHttpInfo(email, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Removes a privilege from an existing mail user.
     * Remove mail user privilege
     * @param email Email format.
     * @param privilege 
     */
    public removeMailUserPrivilegeWithHttpInfo(email: string, privilege: MailUserPrivilege, _options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.removeMailUserPrivilege(email, privilege, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeMailUserPrivilegeWithHttpInfo(rsp)));
            }));
    }

    /**
     * Removes a privilege from an existing mail user.
     * Remove mail user privilege
     * @param email Email format.
     * @param privilege 
     */
    public removeMailUserPrivilege(email: string, privilege: MailUserPrivilege, _options?: Configuration): Observable<string> {
        return this.removeMailUserPrivilegeWithHttpInfo(email, privilege, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Sets a password for an existing mail user.
     * Set mail user password
     * @param email Email format.
     * @param password 
     */
    public setMailUserPasswordWithHttpInfo(email: string, password: string, _options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.setMailUserPassword(email, password, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setMailUserPasswordWithHttpInfo(rsp)));
            }));
    }

    /**
     * Sets a password for an existing mail user.
     * Set mail user password
     * @param email Email format.
     * @param password 
     */
    public setMailUserPassword(email: string, password: string, _options?: Configuration): Observable<string> {
        return this.setMailUserPasswordWithHttpInfo(email, password, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Adds or updates a mail alias. If updating, you need to set `update_if_exists: 1`. 
     * Upsert mail alias
     * @param updateIfExists Set to &#x60;1&#x60; when updating an alias.
     * @param address Email format.
     * @param forwardsTo If adding a regular or catch-all alias, the format needs to be &#x60;user@example.com&#x60;. Multiple address can be separated by newlines or commas.  If adding a domain alias, the format needs to be &#x60;@example.com&#x60;. 
     * @param permittedSenders Mail users that can send mail claiming to be from any address on the alias domain. Multiple address can be separated by newlines or commas.  Leave empty to allow any mail user listed in &#x60;forwards_to&#x60; to send mail claiming to be from any address on the alias domain. 
     */
    public upsertMailAliasWithHttpInfo(updateIfExists: number, address: string, forwardsTo: string, permittedSenders: string, _options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.upsertMailAlias(updateIfExists, address, forwardsTo, permittedSenders, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.upsertMailAliasWithHttpInfo(rsp)));
            }));
    }

    /**
     * Adds or updates a mail alias. If updating, you need to set `update_if_exists: 1`. 
     * Upsert mail alias
     * @param updateIfExists Set to &#x60;1&#x60; when updating an alias.
     * @param address Email format.
     * @param forwardsTo If adding a regular or catch-all alias, the format needs to be &#x60;user@example.com&#x60;. Multiple address can be separated by newlines or commas.  If adding a domain alias, the format needs to be &#x60;@example.com&#x60;. 
     * @param permittedSenders Mail users that can send mail claiming to be from any address on the alias domain. Multiple address can be separated by newlines or commas.  Leave empty to allow any mail user listed in &#x60;forwards_to&#x60; to send mail claiming to be from any address on the alias domain. 
     */
    public upsertMailAlias(updateIfExists: number, address: string, forwardsTo: string, permittedSenders: string, _options?: Configuration): Observable<string> {
        return this.upsertMailAliasWithHttpInfo(updateIfExists, address, forwardsTo, permittedSenders, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

}

import { PGPApiRequestFactory, PGPApiResponseProcessor} from "../apis/PGPApi";
export class ObservablePGPApi {
    private requestFactory: PGPApiRequestFactory;
    private responseProcessor: PGPApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PGPApiRequestFactory,
        responseProcessor?: PGPApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PGPApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PGPApiResponseProcessor();
    }

    /**
     * Exports the PGP key with the given fingerprint.
     * Export a PGP key
     */
    public exportPGPKeyWithHttpInfo(_options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.exportPGPKey(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.exportPGPKeyWithHttpInfo(rsp)));
            }));
    }

    /**
     * Exports the PGP key with the given fingerprint.
     * Export a PGP key
     */
    public exportPGPKey(_options?: Configuration): Observable<string> {
        return this.exportPGPKeyWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Gets a JSON summary of the PGP key with the given fingerprint.
     * Get a specific PGP key
     */
    public getPGPKeyWithHttpInfo(_options?: Configuration): Observable<HttpInfo<PgpKey>> {
        const requestContextPromise = this.requestFactory.getPGPKey(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPGPKeyWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets a JSON summary of the PGP key with the given fingerprint.
     * Get a specific PGP key
     */
    public getPGPKey(_options?: Configuration): Observable<PgpKey> {
        return this.getPGPKeyWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<PgpKey>) => apiResponse.data));
    }

    /**
     * Gets a JSON summary of all public PGP keys in the keyring.
     * Get all PGP keys
     */
    public getPGPKeysWithHttpInfo(_options?: Configuration): Observable<HttpInfo<PgpKeyring>> {
        const requestContextPromise = this.requestFactory.getPGPKeys(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPGPKeysWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets a JSON summary of all public PGP keys in the keyring.
     * Get all PGP keys
     */
    public getPGPKeys(_options?: Configuration): Observable<PgpKeyring> {
        return this.getPGPKeysWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<PgpKeyring>) => apiResponse.data));
    }

    /**
     * Imports a PGP key block into the keyring. Only public keys are accepted.
     * Import a PGP key
     */
    public importPGPKeyWithHttpInfo(_options?: Configuration): Observable<HttpInfo<PgpKeyImportResult>> {
        const requestContextPromise = this.requestFactory.importPGPKey(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.importPGPKeyWithHttpInfo(rsp)));
            }));
    }

    /**
     * Imports a PGP key block into the keyring. Only public keys are accepted.
     * Import a PGP key
     */
    public importPGPKey(_options?: Configuration): Observable<PgpKeyImportResult> {
        return this.importPGPKeyWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<PgpKeyImportResult>) => apiResponse.data));
    }

    /**
     * Removes the PGP key with the given fingerprint from the keyring
     * Remove a PGP key
     */
    public removePGPKeyWithHttpInfo(_options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.removePGPKey(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removePGPKeyWithHttpInfo(rsp)));
            }));
    }

    /**
     * Removes the PGP key with the given fingerprint from the keyring
     * Remove a PGP key
     */
    public removePGPKey(_options?: Configuration): Observable<string> {
        return this.removePGPKeyWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

}

import { SSLApiRequestFactory, SSLApiResponseProcessor} from "../apis/SSLApi";
export class ObservableSSLApi {
    private requestFactory: SSLApiRequestFactory;
    private responseProcessor: SSLApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SSLApiRequestFactory,
        responseProcessor?: SSLApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SSLApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SSLApiResponseProcessor();
    }

    /**
     * Generates a Certificate Signing Request (CSR) for a domain & country code. 
     * Generate SSL CSR
     * @param domain Domain to generate CSR for.
     * @param countrycode 
     */
    public generateSSLCSRWithHttpInfo(domain: string, countrycode: string, _options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.generateSSLCSR(domain, countrycode, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.generateSSLCSRWithHttpInfo(rsp)));
            }));
    }

    /**
     * Generates a Certificate Signing Request (CSR) for a domain & country code. 
     * Generate SSL CSR
     * @param domain Domain to generate CSR for.
     * @param countrycode 
     */
    public generateSSLCSR(domain: string, countrycode: string, _options?: Configuration): Observable<string> {
        return this.generateSSLCSRWithHttpInfo(domain, countrycode, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Returns the SSL status for all domains.
     * Get SSL status
     */
    public getSSLStatusWithHttpInfo(_options?: Configuration): Observable<HttpInfo<SSLStatusResponse>> {
        const requestContextPromise = this.requestFactory.getSSLStatus(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSSLStatusWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the SSL status for all domains.
     * Get SSL status
     */
    public getSSLStatus(_options?: Configuration): Observable<SSLStatusResponse> {
        return this.getSSLStatusWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<SSLStatusResponse>) => apiResponse.data));
    }

    /**
     * Installs a custom certificate. The chain certificate is optional. 
     * Install SSL certificate
     * @param domain Hostname format.
     * @param cert TLS/SSL certificate.
     * @param chain TLS/SSL intermediate chain (if provided, else empty string).
     */
    public installSSLCertificateWithHttpInfo(domain: string, cert: string, chain: string, _options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.installSSLCertificate(domain, cert, chain, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.installSSLCertificateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Installs a custom certificate. The chain certificate is optional. 
     * Install SSL certificate
     * @param domain Hostname format.
     * @param cert TLS/SSL certificate.
     * @param chain TLS/SSL intermediate chain (if provided, else empty string).
     */
    public installSSLCertificate(domain: string, cert: string, chain: string, _options?: Configuration): Observable<string> {
        return this.installSSLCertificateWithHttpInfo(domain, cert, chain, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Provisions certificates for all domains. 
     * Provision SSL certificates
     */
    public provisionSSLCertificatesWithHttpInfo(_options?: Configuration): Observable<HttpInfo<SSLCertificatesProvisionResponse>> {
        const requestContextPromise = this.requestFactory.provisionSSLCertificates(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.provisionSSLCertificatesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Provisions certificates for all domains. 
     * Provision SSL certificates
     */
    public provisionSSLCertificates(_options?: Configuration): Observable<SSLCertificatesProvisionResponse> {
        return this.provisionSSLCertificatesWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<SSLCertificatesProvisionResponse>) => apiResponse.data));
    }

}

import { SystemApiRequestFactory, SystemApiResponseProcessor} from "../apis/SystemApi";
export class ObservableSystemApi {
    private requestFactory: SystemApiRequestFactory;
    private responseProcessor: SystemApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SystemApiRequestFactory,
        responseProcessor?: SystemApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SystemApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SystemApiResponseProcessor();
    }

    /**
     * Gets basic configuration on how the box should use third-party relay services to deliver mail.
     * Get SMTP relay configuration
     */
    public getRelayConfigWithHttpInfo(_options?: Configuration): Observable<HttpInfo<SmtpRelayConfig>> {
        const requestContextPromise = this.requestFactory.getRelayConfig(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRelayConfigWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets basic configuration on how the box should use third-party relay services to deliver mail.
     * Get SMTP relay configuration
     */
    public getRelayConfig(_options?: Configuration): Observable<SmtpRelayConfig> {
        return this.getRelayConfigWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<SmtpRelayConfig>) => apiResponse.data));
    }

    /**
     * Returns the system backup config.
     * Get system backup config
     */
    public getSystemBackupConfigWithHttpInfo(_options?: Configuration): Observable<HttpInfo<SystemBackupConfigResponse>> {
        const requestContextPromise = this.requestFactory.getSystemBackupConfig(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSystemBackupConfigWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the system backup config.
     * Get system backup config
     */
    public getSystemBackupConfig(_options?: Configuration): Observable<SystemBackupConfigResponse> {
        return this.getSystemBackupConfigWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<SystemBackupConfigResponse>) => apiResponse.data));
    }

    /**
     * Returns the system backup status.  If the list of backups is empty, this implies no backups have been made yet. 
     * Get system backup status
     */
    public getSystemBackupStatusWithHttpInfo(_options?: Configuration): Observable<HttpInfo<SystemBackupStatusResponse>> {
        const requestContextPromise = this.requestFactory.getSystemBackupStatus(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSystemBackupStatusWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the system backup status.  If the list of backups is empty, this implies no backups have been made yet. 
     * Get system backup status
     */
    public getSystemBackupStatus(_options?: Configuration): Observable<SystemBackupStatusResponse> {
        return this.getSystemBackupStatusWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<SystemBackupStatusResponse>) => apiResponse.data));
    }

    /**
     * Returns system privacy (new-version check) status.  Response:    - `true`: Private, new-version checks will not be performed   - `false`: Not private, new-version checks will be performed 
     * Get system privacy status
     */
    public getSystemPrivacyStatusWithHttpInfo(_options?: Configuration): Observable<HttpInfo<boolean>> {
        const requestContextPromise = this.requestFactory.getSystemPrivacyStatus(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSystemPrivacyStatusWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns system privacy (new-version check) status.  Response:    - `true`: Private, new-version checks will not be performed   - `false`: Not private, new-version checks will be performed 
     * Get system privacy status
     */
    public getSystemPrivacyStatus(_options?: Configuration): Observable<boolean> {
        return this.getSystemPrivacyStatusWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<boolean>) => apiResponse.data));
    }

    /**
     * Returns the system reboot status.  Response:    - `true`: A reboot is required   - `false`: A reboot is not required 
     * Get system reboot status
     */
    public getSystemRebootStatusWithHttpInfo(_options?: Configuration): Observable<HttpInfo<boolean>> {
        const requestContextPromise = this.requestFactory.getSystemRebootStatus(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSystemRebootStatusWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the system reboot status.  Response:    - `true`: A reboot is required   - `false`: A reboot is not required 
     * Get system reboot status
     */
    public getSystemRebootStatus(_options?: Configuration): Observable<boolean> {
        return this.getSystemRebootStatusWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<boolean>) => apiResponse.data));
    }

    /**
     * Returns an array of statuses which can include headings. 
     * Get system status
     */
    public getSystemStatusWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<StatusEntry>>> {
        const requestContextPromise = this.requestFactory.getSystemStatus(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSystemStatusWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns an array of statuses which can include headings. 
     * Get system status
     */
    public getSystemStatus(_options?: Configuration): Observable<Array<StatusEntry>> {
        return this.getSystemStatusWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<StatusEntry>>) => apiResponse.data));
    }

    /**
     * Returns system (apt) updates.
     * Get system updates
     */
    public getSystemUpdatesWithHttpInfo(_options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.getSystemUpdates(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSystemUpdatesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns system (apt) updates.
     * Get system updates
     */
    public getSystemUpdates(_options?: Configuration): Observable<string> {
        return this.getSystemUpdatesWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Returns Mail-in-a-Box upstream version.
     * Get system upstream version
     */
    public getSystemUpstreamVersionWithHttpInfo(_options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.getSystemUpstreamVersion(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSystemUpstreamVersionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns Mail-in-a-Box upstream version.
     * Get system upstream version
     */
    public getSystemUpstreamVersion(_options?: Configuration): Observable<string> {
        return this.getSystemUpstreamVersionWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Returns installed Mail-in-a-Box version.
     * Get system version
     */
    public getSystemVersionWithHttpInfo(_options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.getSystemVersion(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSystemVersionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns installed Mail-in-a-Box version.
     * Get system version
     */
    public getSystemVersion(_options?: Configuration): Observable<string> {
        return this.getSystemVersionWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Performs a system backup.
     * Perform system backup
     * @param full 
     */
    public performSystemBackupWithHttpInfo(full: boolean, _options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.performSystemBackup(full, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.performSystemBackupWithHttpInfo(rsp)));
            }));
    }

    /**
     * Performs a system backup.
     * Perform system backup
     * @param full 
     */
    public performSystemBackup(full: boolean, _options?: Configuration): Observable<string> {
        return this.performSystemBackupWithHttpInfo(full, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Reboots the system.
     * Reboot system
     */
    public rebootSystemWithHttpInfo(_options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.rebootSystem(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.rebootSystemWithHttpInfo(rsp)));
            }));
    }

    /**
     * Reboots the system.
     * Reboot system
     */
    public rebootSystem(_options?: Configuration): Observable<string> {
        return this.rebootSystemWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
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
    public setRelayConfigWithHttpInfo(enabled: boolean, host: string, authEnabled: boolean, user: string, key: string, _options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.setRelayConfig(enabled, host, authEnabled, user, key, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setRelayConfigWithHttpInfo(rsp)));
            }));
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
    public setRelayConfig(enabled: boolean, host: string, authEnabled: boolean, user: string, key: string, _options?: Configuration): Observable<string> {
        return this.setRelayConfigWithHttpInfo(enabled, host, authEnabled, user, key, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Updates the system backup config.
     * Update system backup config
     * @param target 
     * @param targetUser 
     * @param targetPass 
     * @param minAge 
     */
    public updateSystemBackupConfigWithHttpInfo(target: string, targetUser: string, targetPass: string, minAge: number, _options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.updateSystemBackupConfig(target, targetUser, targetPass, minAge, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateSystemBackupConfigWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates the system backup config.
     * Update system backup config
     * @param target 
     * @param targetUser 
     * @param targetPass 
     * @param minAge 
     */
    public updateSystemBackupConfig(target: string, targetUser: string, targetPass: string, minAge: number, _options?: Configuration): Observable<string> {
        return this.updateSystemBackupConfigWithHttpInfo(target, targetUser, targetPass, minAge, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Updates system (apt) packages.
     * Update system packages
     */
    public updateSystemPackagesWithHttpInfo(_options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.updateSystemPackages(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateSystemPackagesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates system (apt) packages.
     * Update system packages
     */
    public updateSystemPackages(_options?: Configuration): Observable<string> {
        return this.updateSystemPackagesWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Updates system privacy (new-version checks).  Request:    - `value: private`: Disable new version checks   - `value: off`: Enable new version checks 
     * Update system privacy
     * @param value 
     */
    public updateSystemPrivacyWithHttpInfo(value: SystemPrivacyStatus, _options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.updateSystemPrivacy(value, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateSystemPrivacyWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates system privacy (new-version checks).  Request:    - `value: private`: Disable new version checks   - `value: off`: Enable new version checks 
     * Update system privacy
     * @param value 
     */
    public updateSystemPrivacy(value: SystemPrivacyStatus, _options?: Configuration): Observable<string> {
        return this.updateSystemPrivacyWithHttpInfo(value, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

}

import { UserApiRequestFactory, UserApiResponseProcessor} from "../apis/UserApi";
export class ObservableUserApi {
    private requestFactory: UserApiRequestFactory;
    private responseProcessor: UserApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: UserApiRequestFactory,
        responseProcessor?: UserApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new UserApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new UserApiResponseProcessor();
    }

    /**
     * Returns user information and a session API key.  Authenticate a user by supplying the auth token as a base64 encoded string in format `email:password` using basic authentication headers.  If successful, a long-lived `api_key` is returned which can be used for subsequent requests to the API in place of the password. 
     * Exchange a username and password for a session API key.
     */
    public loginWithHttpInfo(_options?: Configuration): Observable<HttpInfo<MeResponse>> {
        const requestContextPromise = this.requestFactory.login(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.loginWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns user information and a session API key.  Authenticate a user by supplying the auth token as a base64 encoded string in format `email:password` using basic authentication headers.  If successful, a long-lived `api_key` is returned which can be used for subsequent requests to the API in place of the password. 
     * Exchange a username and password for a session API key.
     */
    public login(_options?: Configuration): Observable<MeResponse> {
        return this.loginWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<MeResponse>) => apiResponse.data));
    }

    /**
     * Invalidates a session API key so that it cannot be used after this API call. 
     * Invalidates a session API key.
     */
    public logoutWithHttpInfo(_options?: Configuration): Observable<HttpInfo<LogoutResponse>> {
        const requestContextPromise = this.requestFactory.logout(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.logoutWithHttpInfo(rsp)));
            }));
    }

    /**
     * Invalidates a session API key so that it cannot be used after this API call. 
     * Invalidates a session API key.
     */
    public logout(_options?: Configuration): Observable<LogoutResponse> {
        return this.logoutWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<LogoutResponse>) => apiResponse.data));
    }

}

import { WKDApiRequestFactory, WKDApiResponseProcessor} from "../apis/WKDApi";
export class ObservableWKDApi {
    private requestFactory: WKDApiRequestFactory;
    private responseProcessor: WKDApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: WKDApiRequestFactory,
        responseProcessor?: WKDApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new WKDApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new WKDApiResponseProcessor();
    }

    /**
     * Gets the current configuration applied to the Web Key Directory for each email hosted in the box, along with a JSON summary of all public PGP keys in the keyring.
     * Get WKD status
     */
    public getWKDstatusWithHttpInfo(_options?: Configuration): Observable<HttpInfo<GetWKDstatus200Response>> {
        const requestContextPromise = this.requestFactory.getWKDstatus(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getWKDstatusWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the current configuration applied to the Web Key Directory for each email hosted in the box, along with a JSON summary of all public PGP keys in the keyring.
     * Get WKD status
     */
    public getWKDstatus(_options?: Configuration): Observable<GetWKDstatus200Response> {
        return this.getWKDstatusWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<GetWKDstatus200Response>) => apiResponse.data));
    }

}

import { WebApiRequestFactory, WebApiResponseProcessor} from "../apis/WebApi";
export class ObservableWebApi {
    private requestFactory: WebApiRequestFactory;
    private responseProcessor: WebApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: WebApiRequestFactory,
        responseProcessor?: WebApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new WebApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new WebApiResponseProcessor();
    }

    /**
     * Returns all static web domains.
     * Get web domains
     */
    public getWebDomainsWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<WebDomain>>> {
        const requestContextPromise = this.requestFactory.getWebDomains(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getWebDomainsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns all static web domains.
     * Get web domains
     */
    public getWebDomains(_options?: Configuration): Observable<Array<WebDomain>> {
        return this.getWebDomainsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<WebDomain>>) => apiResponse.data));
    }

    /**
     * Updates static websites, used for updating domain root directories.
     * Update web
     */
    public updateWebWithHttpInfo(_options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.updateWeb(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateWebWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates static websites, used for updating domain root directories.
     * Update web
     */
    public updateWeb(_options?: Configuration): Observable<string> {
        return this.updateWebWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

}
