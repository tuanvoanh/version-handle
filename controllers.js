const demoV1 = async (req, res, next) => {
    return res.status(200).send('Demo version 1');
};

const demoV2 = async (req, res, next) => {
    return res.status(200).send('Demo version 2');
};

module.exports = {
    demoV1,
    demoV2
}