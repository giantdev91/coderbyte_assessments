const crypto = require("crypto");
const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  test("should generate deterministic partition key when event is provided", () => {
    const event = {
      partitionKey: "myPartitionKey",
      // Add other properties if needed
    };

    const result = deterministicPartitionKey(event);

    const expected = crypto
      .createHash("sha3-512")
      .update(JSON.stringify(event))
      .digest("hex");

    expect(result).toEqual(expected);
  });

  test("should generate deterministic partition key when event is not provided", () => {
    const event = null;

    const result = deterministicPartitionKey(event);

    const expected = crypto
      .createHash("sha3-512")
      .update("0")
      .digest("hex");

    expect(result).toEqual(expected);
  });

  test("should handle non-string candidate", () => {
    const event = {
      partitionKey: 123,
      // Add other properties if needed
    };

    const result = deterministicPartitionKey(event);

    const expected = crypto
      .createHash("sha3-512")
      .update(JSON.stringify(event.partitionKey))
      .digest("hex");

    expect(result).toEqual(expected);
  });

  test("should handle long partition key", () => {
    const event = {
      partitionKey: "a".repeat(300), // Create a partition key longer than MAX_PARTITION_KEY_LENGTH
      // Add other properties if needed
    };

    const result = deterministicPartitionKey(event);

    const expected = crypto
      .createHash("sha3-512")
      .update(crypto.createHash("sha3-512").update(event.partitionKey).digest("hex"))
      .digest("hex");

    expect(result).toEqual(expected);
  });
});