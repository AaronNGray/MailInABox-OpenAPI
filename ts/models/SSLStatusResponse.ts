/**
 * Mail-in-a-Box
 * Mail-in-a-Box API HTTP specification.  # Introduction This API is documented in [**OpenAPI format**](http://spec.openapis.org/oas/v3.0.3). ([View the full HTTP specification](https://raw.githubusercontent.com/mail-in-a-box/mailinabox/api-spec/api/mailinabox.yml).)  All endpoints are relative to `https://{host}/admin` and are secured with [`Basic Access` authentication](https://en.wikipedia.org/wiki/Basic_access_authentication). If you have multi-factor authentication enabled, authentication with a `user:password` combination will fail unless a valid OTP is supplied via the `x-auth-token` header. Authentication via a `user:user_key` pair is possible without the header being present. 
 *
 * OpenAPI spec version: 60.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SSLStatus } from '../models/SSLStatus';
import { HttpFile } from '../http/http';

/**
* SSL status response for all relevant domains.
*/
export class SSLStatusResponse {
    'canProvision': Array<string>;
    'status': Array<SSLStatus>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "canProvision",
            "baseName": "can_provision",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "Array<SSLStatus>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SSLStatusResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

