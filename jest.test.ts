/**
 * Jest setup test
 *
 * @description Basic test to ensure jest + transformers are working
 *
 * @group setup
 * @group unit
 */
describe("Jest Setup Test", () => {
  test("Basic Test", () => {
    expect(true).toBeTruthy();
  });
  test("NODE_ENV is 'test'", () => {
    expect(process.env.NODE_ENV).toBe("test");
  });
  test.todo("Todo Test");
  test.skip("Skip Test", () => {
    // This should never run
    expect(false).toBeTruthy();
  });
});
