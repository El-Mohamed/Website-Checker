import { Component, OnInit } from '@angular/core';
import { WhoIsResult } from 'src/app/interfaces/WhoIsResult';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit
{

  WhoIsResult: WhoIsResult = {} as WhoIsResult;
  CoockiesResult: any;
  CertificateResult: any;
  TargetWebsite: string;
  CertInfo: string = "b'Certificate:\\n    Data:\\n        Version: 3 (0x2)\\n        Serial Number:\\n            09:78:c9:33:77:a6:30:82:42:d4:8f:10:73:11:b8:62\\n        Signature Algorithm: sha256WithRSAEncryption\\n        Issuer: C = US, O = DigiCert Inc, OU = www.digicert.com, CN = DigiCert SHA2 Extended Validation Server CA\\n        Validity\\n            Not Before: Jan 15 00:00:00 2019 GMT\\n            Not After : Jan 19 12:00:00 2021 GMT\\n        Subject: businessCategory = Private Organization, jurisdictionC = NL, serialNumber = 32147382, C = NL, L = Utrecht, O = Bol.com B.V., CN = www.bol.com\\n        Subject Public Key Info:\\n            Public Key Algorithm: rsaEncryption\\n                RSA Public-Key: (2048 bit)\\n                Modulus:\\n                    00:c7:e9:7e:e0:0c:76:e5:85:5a:7f:27:10:3b:71:\\n                    bf:90:cb:44:b5:da:64:84:ef:4d:3e:ee:5b:d2:c4:\\n                    81:2c:d0:52:73:d9:b9:2a:1b:74:b3:6d:66:5a:da:\\n                    64:ed:4a:d5:0a:b9:f7:5a:c1:22:5f:95:e2:b9:d9:\\n                    20:6d:77:04:d1:e0:6c:76:4d:36:8c:cb:20:2e:5c:\\n                    1e:f3:4c:24:59:0d:a1:30:17:9f:06:26:c1:78:c9:\\n                    d6:1b:00:05:bd:55:26:ad:58:b8:45:d6:7d:c5:3e:\\n                    d1:b4:ae:d0:88:fd:85:fc:cb:d0:32:b0:22:11:30:\\n                    91:3f:1e:c7:d1:2b:9e:03:8f:38:f6:c9:bd:4d:8b:\\n                    12:41:88:36:11:ad:58:8c:79:77:06:82:3d:95:97:\\n                    ee:39:30:85:a9:68:66:8f:28:89:b3:2a:19:16:26:\\n                    96:8c:c5:d7:2a:08:23:b9:5c:fd:66:c8:4e:0a:5f:\\n                    91:56:b2:52:2c:c3:0a:c6:46:03:10:b7:68:03:1f:\\n                    c2:d9:97:cc:b2:b9:93:23:73:42:d7:16:1c:19:af:\\n                    d9:76:d9:c8:e1:88:92:f2:bb:f7:ba:1d:25:e4:33:\\n                    25:eb:2a:c5:81:df:c4:04:f6:36:5a:ad:71:ab:c7:\\n                    f1:7b:78:ed:0b:26:05:47:59:c5:a3:0b:aa:e3:84:\\n                    c0:35\\n                Exponent: 65537 (0x10001)\\n        X509v3 extensions:\\n            X509v3 Authority Key Identifier: \\n                keyid:3D:D3:50:A5:D6:A0:AD:EE:F3:4A:60:0A:65:D3:21:D4:F8:F8:D6:0F\\n\\n            X509v3 Subject Key Identifier: \\n                4A:CE:50:38:C8:0B:17:7D:E1:58:B2:7F:7B:F2:EF:3B:1D:24:97:40\\n            X509v3 Subject Alternative Name: \\n                DNS:www.bol.com, DNS:bol.com\\n            X509v3 Key Usage: critical\\n                Digital Signature, Key Encipherment\\n            X509v3 Extended Key Usage: \\n                TLS Web Server Authentication, TLS Web Client Authentication\\n            X509v3 CRL Distribution Points: \\n\\n                Full Name:\\n                  URI:http://crl3.digicert.com/sha2-ev-server-g2.crl\\n\\n                Full Name:\\n                  URI:http://crl4.digicert.com/sha2-ev-server-g2.crl\\n\\n            X509v3 Certificate Policies: \\n                Policy: 2.16.840.1.114412.2.1\\n                  CPS: https://www.digicert.com/CPS\\n                Policy: 2.23.140.1.1\\n\\n            Authority Information Access: \\n                OCSP - URI:http://ocsp.digicert.com\\n                CA Issuers - URI:http://cacerts.digicert.com/DigiCertSHA2ExtendedValidationServerCA.crt\\n\\n            X509v3 Basic Constraints: critical\\n                CA:FALSE\\n            CT Precertificate SCTs: \\n                Signed Certificate Timestamp:\\n                    Version   : v1 (0x0)\\n                    Log ID    : A4:B9:09:90:B4:18:58:14:87:BB:13:A2:CC:67:70:0A:\\n                                3C:35:98:04:F9:1B:DF:B8:E3:77:CD:0E:C8:0D:DC:10\\n                    Timestamp : Jan 15 10:08:01.604 2019 GMT\\n                    Extensions: none\\n                    Signature : ecdsa-with-SHA256\\n                                30:46:02:21:00:EE:4D:99:EC:FB:A1:6B:6B:EE:2B:CC:\\n                                03:1D:DF:23:C3:FA:A9:A6:D3:F3:AF:97:BB:55:94:3D:\\n                                9B:D3:89:1B:CB:02:21:00:B2:0A:E6:01:C9:12:F2:0E:\\n                                C9:E6:92:46:94:0F:5B:08:67:D3:2D:9B:F2:E3:5A:9D:\\n                                7B:B7:8D:CD:69:B9:FD:25\\n                Signed Certificate Timestamp:\\n                    Version   : v1 (0x0)\\n                    Log ID    : 56:14:06:9A:2F:D7:C2:EC:D3:F5:E1:BD:44:B2:3E:C7:\\n                                46:76:B9:BC:99:11:5C:C0:EF:94:98:55:D6:89:D0:DD\\n                    Timestamp : Jan 15 10:08:01.713 2019 GMT\\n                    Extensions: none\\n                    Signature : ecdsa-with-SHA256\\n                                30:45:02:20:24:BA:BE:F3:33:82:71:E2:CF:AA:34:1B:\\n                                4A:AF:FC:AD:BB:6F:0F:BC:E0:61:E2:39:48:8A:43:76:\\n                                91:DD:F8:53:02:21:00:89:E9:AD:34:9C:2C:44:54:5D:\\n                                B3:C0:A0:3C:A3:79:20:3B:A7:05:26:AD:E5:B5:92:09:\\n                                96:5E:C3:F8:BB:53:48\\n                Signed Certificate Timestamp:\\n                    Version   : v1 (0x0)\\n                    Log ID    : BB:D9:DF:BC:1F:8A:71:B5:93:94:23:97:AA:92:7B:47:\\n                                38:57:95:0A:AB:52:E8:1A:90:96:64:36:8E:1E:D1:85\\n                    Timestamp : Jan 15 10:08:01.627 2019 GMT\\n                    Extensions: none\\n                    Signature : ecdsa-with-SHA256\\n                                30:45:02:20:3C:DE:48:DA:4B:19:79:EF:2A:82:C6:6E:\\n                                01:CD:81:78:6C:04:80:11:82:92:31:42:64:EE:D0:AA:\\n                                06:93:F1:06:02:21:00:C3:9D:90:C9:52:B8:E0:5D:09:\\n                                99:1D:6C:63:F9:73:81:6D:48:20:90:0F:4F:4D:95:02:\\n                                43:77:1D:D4:8A:4F:62\\n    Signature Algorithm: sha256WithRSAEncryption\\n         61:4e:ad:51:29:8f:55:2e:4e:38:bc:a3:fe:82:3a:15:f6:75:\\n         05:12:81:cd:fe:28:ff:3e:8f:d9:88:33:3d:f4:9d:3d:86:b2:\\n         34:4e:e3:5f:60:c6:ee:3c:d5:2b:ba:be:6a:17:93:6f:21:e9:\\n         a4:e1:6d:3b:9a:cb:31:29:e4:c1:ec:fb:86:85:ba:bd:9d:74:\\n         9d:57:08:39:87:bc:4d:b1:41:4a:a7:9e:cc:c8:b1:39:b6:98:\\n         39:55:cb:dd:c4:a1:89:69:2e:bb:48:28:32:ac:49:fc:b3:77:\\n         e1:62:d3:0d:fb:90:0a:d3:b1:e8:74:0d:05:cc:7a:48:46:24:\\n         c8:67:3f:ac:a5:41:ba:9b:b1:8a:61:0b:96:a8:a5:f2:b4:44:\\n         a6:fb:fb:b3:a3:2e:3b:b1:2c:43:20:c3:3e:42:38:a5:45:f2:\\n         7d:7d:b8:20:0e:47:81:99:00:f5:2a:a7:6e:73:7e:24:89:c6:\\n         92:c6:76:e6:32:44:21:52:50:5a:f4:2f:46:b9:bd:ff:87:53:\\n         3e:2c:f5:0f:08:14:d3:34:48:96:0e:d1:9e:2e:1d:74:d8:27:\\n         cf:f5:52:50:be:be:bc:93:df:16:f8:53:58:3f:98:4e:9e:d6:\\n         5f:bc:96:a5:70:0b:97:66:d2:16:70:3a:91:06:49:f0:65:a1:\\n         93:67:59:6d\\n-----BEGIN CERTIFICATE-----\\nMIIHCTCCBfGgAwIBAgIQCXjJM3emMIJC1I8QcxG4YjANBgkqhkiG9w0BAQsFADB1\\nMQswCQYDVQQGEwJVUzEVMBMGA1UEChMMRGlnaUNlcnQgSW5jMRkwFwYDVQQLExB3\\nd3cuZGlnaWNlcnQuY29tMTQwMgYDVQQDEytEaWdpQ2VydCBTSEEyIEV4dGVuZGVk\\nIFZhbGlkYXRpb24gU2VydmVyIENBMB4XDTE5MDExNTAwMDAwMFoXDTIxMDExOTEy\\nMDAwMFowgZMxHTAbBgNVBA8MFFByaXZhdGUgT3JnYW5pemF0aW9uMRMwEQYLKwYB\\nBAGCNzwCAQMTAk5MMREwDwYDVQQFEwgzMjE0NzM4MjELMAkGA1UEBhMCTkwxEDAO\\nBgNVBAcTB1V0cmVjaHQxFTATBgNVBAoTDEJvbC5jb20gQi5WLjEUMBIGA1UEAxML\\nd3d3LmJvbC5jb20wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDH6X7g\\nDHblhVp/JxA7cb+Qy0S12mSE700+7lvSxIEs0FJz2bkqG3SzbWZa2mTtStUKufda\\nwSJfleK52SBtdwTR4Gx2TTaMyyAuXB7zTCRZDaEwF58GJsF4ydYbAAW9VSatWLhF\\n1n3FPtG0rtCI/YX8y9AysCIRMJE/HsfRK54Djzj2yb1NixJBiDYRrViMeXcGgj2V\\nl+45MIWpaGaPKImzKhkWJpaMxdcqCCO5XP1myE4KX5FWslIswwrGRgMQt2gDH8LZ\\nl8yyuZMjc0LXFhwZr9l22cjhiJLyu/e6HSXkMyXrKsWB38QE9jZarXGrx/F7eO0L\\nJgVHWcWjC6rjhMA1AgMBAAGjggN0MIIDcDAfBgNVHSMEGDAWgBQ901Cl1qCt7vNK\\nYApl0yHU+PjWDzAdBgNVHQ4EFgQUSs5QOMgLF33hWLJ/e/LvOx0kl0AwHwYDVR0R\\nBBgwFoILd3d3LmJvbC5jb22CB2JvbC5jb20wDgYDVR0PAQH/BAQDAgWgMB0GA1Ud\\nJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcDAjB1BgNVHR8EbjBsMDSgMqAwhi5odHRw\\nOi8vY3JsMy5kaWdpY2VydC5jb20vc2hhMi1ldi1zZXJ2ZXItZzIuY3JsMDSgMqAw\\nhi5odHRwOi8vY3JsNC5kaWdpY2VydC5jb20vc2hhMi1ldi1zZXJ2ZXItZzIuY3Js\\nMEsGA1UdIAREMEIwNwYJYIZIAYb9bAIBMCowKAYIKwYBBQUHAgEWHGh0dHBzOi8v\\nd3d3LmRpZ2ljZXJ0LmNvbS9DUFMwBwYFZ4EMAQEwgYgGCCsGAQUFBwEBBHwwejAk\\nBggrBgEFBQcwAYYYaHR0cDovL29jc3AuZGlnaWNlcnQuY29tMFIGCCsGAQUFBzAC\\nhkZodHRwOi8vY2FjZXJ0cy5kaWdpY2VydC5jb20vRGlnaUNlcnRTSEEyRXh0ZW5k\\nZWRWYWxpZGF0aW9uU2VydmVyQ0EuY3J0MAwGA1UdEwEB/wQCMAAwggF/BgorBgEE\\nAdZ5AgQCBIIBbwSCAWsBaQB3AKS5CZC0GFgUh7sTosxncAo8NZgE+RvfuON3zQ7I\\nDdwQAAABaFD7bkQAAAQDAEgwRgIhAO5Nmez7oWtr7ivMAx3fI8P6qabT86+Xu1WU\\nPZvTiRvLAiEAsgrmAckS8g7J5pJGlA9bCGfTLZvy41qde7eNzWm5/SUAdgBWFAaa\\nL9fC7NP14b1Esj7HRna5vJkRXMDvlJhV1onQ3QAAAWhQ+26xAAAEAwBHMEUCICS6\\nvvMzgnHiz6o0G0qv/K27bw+84GHiOUiKQ3aR3fhTAiEAiemtNJwsRFRds8CgPKN5\\nIDunBSat5bWSCZZew/i7U0gAdgC72d+8H4pxtZOUI5eqkntHOFeVCqtS6BqQlmQ2\\njh7RhQAAAWhQ+25bAAAEAwBHMEUCIDzeSNpLGXnvKoLGbgHNgXhsBIARgpIxQmTu\\n0KoGk/EGAiEAw52QyVK44F0JmR1sY/lzgW1IIJAPT02VAkN3HdSKT2IwDQYJKoZI\\nhvcNAQELBQADggEBAGFOrVEpj1UuTji8o/6COhX2dQUSgc3+KP8+j9mIMz30nT2G\\nsjRO419gxu481Su6vmoXk28h6aThbTuayzEp5MHs+4aFur2ddJ1XCDmHvE2xQUqn\\nnszIsTm2mDlVy93EoYlpLrtIKDKsSfyzd+Fi0w37kArTseh0DQXMekhGJMhnP6yl\\nQbqbsYphC5aopfK0RKb7+7OjLjuxLEMgwz5COKVF8n19uCAOR4GZAPUqp25zfiSJ\\nxpLGduYyRCFSUFr0L0a5vf+HUz4s9Q8IFNM0SJYO0Z4uHXTYJ8/1UlC+vryT3xb4\\nU1g/mE6e1l+8lqVwC5dm0hZwOpEGSfBloZNnWW0=\\n-----END CERTIFICATE-----\\n'";
  CertArray: string[] = [];
  constructor(public backendService: BackendService) { }

  ngOnInit(): void
  {
  }

  GetAllInformation()
  {
    this.GetWhoIsInformation();
    this.GetCookies();
    this.GetCertificate();
  }

  async GetWhoIsInformation()
  {
    try {
      this.WhoIsResult = await this.backendService.GetWhoIsInformation('mmcrypto.org');
    }
    catch (error) {
      console.log("error");
    }
  }

  async GetCookies()
  {
    try {
      this.CoockiesResult = await this.backendService.GetCookies(this.TargetWebsite);
    }
    catch (error) {
      console.log(error);
    }
  }

  async GetCertificate()
  {
    try {
      this.CertificateResult = await this.backendService.GetCertificate(this.TargetWebsite);
      console.log(this.CertificateResult);
      this.ToArray();
    }
    catch (error) {
      console.log(error);
    }
  }


  ToArray()
  {
    var res = "";
    for (var x = 0; x < this.CertificateResult.data.length; x++) {
      var r = this.CertificateResult.data[x] + this.CertificateResult.data[x + 1] + this.CertificateResult.data[x + 2];
      if (r == "\\n ") {
        console.log(r);

        this.CertArray.push(res);
        res = "";
      }
      else {
        res = res + this.CertificateResult.data[x];
      }
    }
    console.log(this.CertArray);
  }


}
