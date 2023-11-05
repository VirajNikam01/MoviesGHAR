import { Provider } from 'react-redux';
import Body from './components/Body';
import appStore from './utility/appStore';

function App() {
  return (
    <Provider store={appStore}>
    <div className="App">
     <Body/>
    </div>
    </Provider>
  );
}

export default App;
