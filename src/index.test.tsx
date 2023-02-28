const getUserById = (id: string) => {
  return new Promise((resolve) => {
    resolve({
      data: id,
      code: 0,
    });
  });
};

describe("getUserById", () => {
  it("获取 user === 1 的用户", async () => {
    const res = await getUserById("1");
    expect(res).toMatchSnapshot();
  });
});
