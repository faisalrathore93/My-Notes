# JWT-Signature weakness

JSON Web Tokens are a storage mechanism for data. JWT can provide the following security mechanisms:

Encryption.
Signature.
JWT follow the following pattern:

Base64(Header).Base64(Data).Base64(Signature)
The header contains information on the security mechanisms used. For example, the following header: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXUyJ9 contains the following information:

{ "alg": "HS256", 
  "typ": "JWS"}
  
  
Multiple signature methods can be used to ensure the integrity of JWT:

RSA based
Elliptic curves
HMAC
None

## Vulnerability

Base64(Header).Base64(Data).Base64(Signature)

* Decode base64 value of header and set it to None & encode it back in base64
* Decode base64 value of data and change data as per your requirements & encode it back in base64
* Strip the thrid part of token that is Signature. to make it None
* Use the token in your request.
