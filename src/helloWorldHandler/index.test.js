import helloWorldHandler from '.';

describe('helloWorldHandler', () => {
  it('should return hello world', () => {
    return helloWorldHandler().then(response => {
      expect(response).toBe('hello world');
    });
  });
});
