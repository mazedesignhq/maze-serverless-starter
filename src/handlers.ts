import { config, utils, models } from '@mazeapp/maze-api-core';

import helloWorldHandler from './helloWorldHandler';

export const helloWorld = async (event: object) => helloWorldHandler({ config, utils, models }, event);
