const fetchUser = require('./userService')

test('fetches user with mock API', async () => {
    const mockApi = {
        get: jest.fn().mockResolvedValue({ data: { firstName: "Alice"}})
    };

    const user = await fetchUser(mockApi);

    expect(mockApi.get).toHaveBeenCalledWith('./user');
    expect(user).toEqual({ firstName: 'Alice'});
});