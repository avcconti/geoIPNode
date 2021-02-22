
exports.handler = async (event) => {
    const fs = require('fs');
    const Reader = require('@maxmind/geoip2-node').Reader;
    
    const dbBuffer = fs.readFileSync('./GeoLite2-City.mmdb');
    const reader = Reader.openBuffer(dbBuffer);
    const ip=event.queryStringParameters.ip !== undefined ? event.queryStringParameters.ip : "1.1.1.1";
    const message=reader.city(ip);
    
    return message;
}
