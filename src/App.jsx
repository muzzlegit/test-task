import { Route, Routes } from 'react-router-dom';

import TweetsLibrary from 'components/TweetsLibrary';
import Layout from 'components/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<>sdfsdfs</>} />
        <Route path="/tweets" element={<TweetsLibrary />} />
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
