import { loadNacosAsync } from './nacos-loader.js';

export const loadConfigurationAsync = async () => {
  await loadNacosAsync();
};
