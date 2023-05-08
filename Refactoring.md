# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
Optional Chaining (?.): Optional chaining is used to simplify the nested if conditions and safely access the partitionKey property of event. If event or event.partitionKey is null or undefined, the expression will short-circuit and assign undefined to candidate.

Nullish Coalescing Operator (||): The nullish coalescing operator is used to provide a fallback value for candidate. If event or event.partitionKey is null or undefined, the operator will return TRIVIAL_PARTITION_KEY as the default value.

Method Chaining: Method chaining is used to perform hashing and stringifying operations on event or candidate. By chaining the operations together, the code becomes more concise and easier to read.

Simplified Type Check: Instead of explicitly checking typeof candidate using an if condition, the code directly uses JSON.stringify on candidate. This approach covers both cases where candidate is not a string and automatically converts it to a string if needed.

Eliminating Redundant Hashing: The code now checks the length of candidate and performs a hash operation only if the length exceeds MAX_PARTITION_KEY_LENGTH. This eliminates the redundant hashing that was present in the original code.