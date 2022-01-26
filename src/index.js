import ReactDOM from 'react-dom'
import App from './App'
import './assets/main.css'
import Rutas from './routes'

// Redux
import { Provider } from 'react-redux'
import store from './data/store'

ReactDOM.render(
    <Provider store={store}> 
    <Rutas />
    <App />
    </Provider>, document.getElementById('root'))
