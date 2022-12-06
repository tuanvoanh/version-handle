const express = require('express');
const { demoV1, demoV2 } = require('./controllers');
const { redirectVersion } = require('./midlewares');
const router = express.Router()

router.get('/demo', redirectVersion({
    '2022-01-02': demoV1,
    '2022-02-02': demoV2,
}));

module.exports = router;