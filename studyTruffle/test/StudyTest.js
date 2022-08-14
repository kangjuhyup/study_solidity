const Study = artifacts.require("Study")

contract("Study", () => {

    it("start 'getC' test", async function () {
        const instance = await Study.deployed();
        console.log('contract : ', instance.address);
        const response = await instance.getC(1,2);
        assert.equal(response,3,"C is wrong");
    })

    it("start 'getMsg' test", async function () {
        const instance = await Study.deployed();
        const response = await instance.getMsg();
        assert.equal(response,"abc","Msg isn't equal")        
    })
})