@app
makerspace

@aws
runtime typescript

@http
/api
  method get
  src /api

@tables
data
  scopeID *String
  dataID **String
  ttl TTL

@plugins
architect/plugin-typescript
