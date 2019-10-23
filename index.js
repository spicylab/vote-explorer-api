const Caver = require('caver-js');
const caver = new Caver('https://api.baobab.klaytn.net:8651/');
const cred = require('./cred.json');

const express = require('express');
const cors = require('cors');
const asyncHandler = require('express-async-handler');
const app = express();

app.use(cors());

caver.klay.getNodeInfo().then(console.log);
caver.klay.accounts.wallet.add(cred.privateKey);

const contract = new caver.klay.Contract(require('./abi.json'), '0xC2bc10230d60DC8Da3eAEE4305d65e8d0EED77a2', {
    from: cred.address,
    gasPrice: '25000000000'
});

app.get('/vote/mob/:id', asyncHandler(async (req, res) => {
    const resp = await contract.methods.getResultMob(req.params.id).call();

    console.log(resp);

    res.send({
        strength: parseInt(resp.strength),
        rewards: parseInt(resp.rewards),
        voteCount: parseInt(resp.totalVotes)
    });
}));
app.get('/vote/item/:id', asyncHandler(async (req, res) => {
    const resp = await contract.methods.getResultItem(req.params.id).call();

    console.log(resp);

    res.send({
        strength: parseInt(resp.strength),
        voteCount: parseInt(resp.totalVotes)
    });
}));

app.listen(3000, function () {
});