import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Page from './Components/Page';
import NotFound from './Components/NotFound/NotFound';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Page />} path={"/"} />
        <Route element={<NotFound />} path={"*"} />
      </Routes>
    </Router>
  )
}
