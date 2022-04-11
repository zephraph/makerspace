@app
makerspace

@http
/api
  method get
  src /api

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
