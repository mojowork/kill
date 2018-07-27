'use strict';

const http = require('http');

class Kill{
    constructor() {
        this.cb = (req, res) => {};
    }

    use(cb) {
        this.cb = cb;
    }

    listen() {
        const svr = http.createServer(this.cb);
        console.log('arguments', arguments);
        svr.listen(...arguments);
    }
}

module.exports = Kill;
