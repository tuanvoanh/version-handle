const redirectVersion = (payload) => (req, res, next) => {
    const version = req.headers['x-api-version'] || '2022-02-01';
    if (!payload[version]) {
        return res.status(400).send('version not match')
    }
    // const that = this
    payload[version].call(this, req, res, next)
}

module.exports = {
    redirectVersion
}