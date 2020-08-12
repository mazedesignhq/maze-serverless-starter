type Core = {
  config: {
    get: (key: string) => string;
  },
  utils: {
    [key: string]: (...args: any[]) => any;
  },
  models: {
    [mod: string]: {
      [query: string]: (...args: any[]) => any;
    }
  }
}

export default (
  {
    config,
    utils,
    models,
  }: Core,
  event: object,
) => Promise.resolve('hello world');
