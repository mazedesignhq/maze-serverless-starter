import helloWorldHandler from '.';

const mockedCore = {
  config: {
    get: (key: string): string => key,
  },
  utils: {
    log: (message: string): void => console.log(message),
  },
  models: {
    User: {
      get: ({ userId }: { userId: number }) => ({
        id: userId,
        email: 'user@example.com',
      }),
    },
  },
};

const mockedEvent = {
  Type: 'hello',
  Value: 'world',
};

describe('helloWorldHandler', () => {
  it('should return hello world', () => {
    return helloWorldHandler(mockedCore, mockedEvent).then(response => {
      expect(response).toBe('hello world');
    });
  });
});
