import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import componentsRegister from './components-register'

createApp(App).use(router).mount('#app')
/* 全局注册组件 */
const app =createApp(App)
for (const cpn of componentsRegister) {
  app.component(cpn.name, cpn)
}
