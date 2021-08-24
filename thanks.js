// Reply to thank you messages automatically.
const handler = async (req) => {
    operand.log("Handled incoming thanks.");
    operand.respond("You're welcome!");
}