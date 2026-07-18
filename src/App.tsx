import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Page from './Components/Page';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Page />} path={"/"} />
      </Routes>
    </Router>
  )
}
