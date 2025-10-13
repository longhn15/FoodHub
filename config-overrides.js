
// file này để ghi đè(overide) webpack
const {
    override, useBabelRc
} = require("customize-cra");

module.exports = override(
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useBabelRc()
);