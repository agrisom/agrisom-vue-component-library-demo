import type { App } from 'vue';
import { BasicComponent } from './components';

export default {
  install: (app: App) => {
    app.component('BasicComponent', BasicComponent);
  }
};

export { BasicComponent };