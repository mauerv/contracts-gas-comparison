const SimpleERC20 = artifacts.require("SimpleERC20");
const ERC20Generator = artifacts.require("ERC20Generator");

module.exports = function (deployer) {
  deployer.deploy(SimpleERC20, 100000);
  deployer.deploy(
    ERC20Generator,
    "Token",
    "TKN",
    18,
    1000000,
    1000000,
    true,
    true
  );
};
