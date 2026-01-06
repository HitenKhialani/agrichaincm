import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import LandingPage from './components/pages/LandingPage';
import Dashboard from './components/pages/Dashboard';
import ErrorBoundary from './components/common/ErrorBoundary';
import NotificationToast from './components/common/NotificationToast';
import './App.css';

function App() {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  return (
    <ErrorBoundary>
      <div className="App">
        {isAuthenticated ? <Dashboard /> : <LandingPage />}
        <NotificationToast />
      </div>
    </ErrorBoundary>
  );
}

export default App;