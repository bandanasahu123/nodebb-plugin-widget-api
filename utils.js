'use strict'
/* globals module, require */

let Utils = {}

Utils.buildReqObject = function (req) {
  var headers = req.headers
  var encrypted = !!req.connection.encrypted
  var host = headers.host
  var referer = headers.referer || ''
  if (!host) {
    host = url.parse(referer).host || ''
  }

  return {
    uid: req.uid,
    params: req.params,
    method: req.method,
    body: req.body,
    ip: req.ip,
    host: host,
    protocol: encrypted ? 'https' : 'http',
    secure: encrypted,
    url: referer,
    path: referer.substr(referer.indexOf(host) + host.length),
    headers: headers
  }
}

module.exports = Utils
