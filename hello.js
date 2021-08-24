// A handler which responds to "hello"-type messages.
const handler = async (req) => {
    operand.log("Handled incoming hello.");
    operand.respond("Hello! What's up?");
}