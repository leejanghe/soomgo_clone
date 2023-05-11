import Layout from './components/common/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { GlobalStyles } from './styles/GlobalStyle';
function App() {
  return (
    <>
    <GlobalStyles />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
