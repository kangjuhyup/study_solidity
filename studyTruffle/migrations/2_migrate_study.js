const Study = artifacts.require('Study');

module.exports = function(deployer) {
    deployer.deploy(Study);
};