import './Assets/Styles/Main.scss';
import Layout from "./Shared/Layout/Layout";
import { store } from './Store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
}

export default App;
