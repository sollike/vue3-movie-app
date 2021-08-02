import { createApp } from 'vue'
import App from './App'
import router from './routes/index.js'

createApp(App)
  .use(router) //플러그인 연결
  .mount('#app')