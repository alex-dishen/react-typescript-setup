import { Routes, Route } from 'react-router-dom';
import useScrollToTop from 'hooks/useScrollToTop';

const App = () => {
  useScrollToTop();

  return (
    <Routes>
      <Route path="/" element={} />
    </Routes>
  );
};

export default App;
