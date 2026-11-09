
import { DevConfigOverrides } from './ConfigOverrides';
import { defaultConfig } from './DefaultConfig';

let mergedConfigs;

if (import.meta.env.DEV) {
  mergedConfigs = {
    ...defaultConfig,
    ...DevConfigOverrides,
  };
} else {
  mergedConfigs = {
    ...defaultConfig,
  };
}

export const config = { ...mergedConfigs };
