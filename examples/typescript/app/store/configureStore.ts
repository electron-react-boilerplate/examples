import productionConfigureStore from './configureStore.production'
import developmentConfigureStore from './configureStore.development'

export default (
  process.env.NODE_ENV === 'production'
    ? productionConfigureStore
    : developmentConfigureStore
);
