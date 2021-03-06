module.exports = function (RED) {
    function DINNode(config) {
        RED.nodes.createNode(this, config);
        this.plate = RED.nodes.getNode(config.config_plate).plate;
	this.input = config.input;
        var node = this;
        node.on('input', function (msg) {
            var state = this.plate.getDINbit(this.input);
            var msg = {payload: state}
            node.send(msg);
        });

        this.on('close', function () {
            // cleanup goes here
        });
    }
    RED.nodes.registerType("ppDIN", DINNode);
}
