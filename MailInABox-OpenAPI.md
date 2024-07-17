# MailInABox-OpenAPI

## Validate
```
docker run --rm \
  -v ${PWD}:/mnt/c/Users/aaron/Test/OpenAPI/MailInABox openapitools/openapi-generator-cli validate \
  -i /mnt/c/Users/aaron/Test/OpenAPI/MailInABox/mailinabox.yml \
```
## Generate Python
```
docker run --rm \
  -v ${PWD}:/mnt/c/Users/aaron/Test/OpenAPI/MailInABox openapitools/openapi-generator-cli generate \
  -i /mnt/c/Users/aaron/Test/OpenAPI/MailInABox/mailinabox.yml \
  -g python \
  -o /mnt/c/Users/aaron/Test/OpenAPI/MailInABox/python
```
## Generate TypeScript
```
docker run --rm \
  -v ${PWD}:/mnt/c/Users/aaron/Test/OpenAPI/MailInABox openapitools/openapi-generator-cli generate \
  -i /mnt/c/Users/aaron/Test/OpenAPI/MailInABox/mailinabox.yml \
  -g typescript \
  -o /mnt/c/Users/aaron/Test/OpenAPI/MailInABox/ts
```
```
--skip-validate-spec
```
