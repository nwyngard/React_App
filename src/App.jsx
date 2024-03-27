import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import RecipeDetails from './pages/RecipeDetails';
import Feedback from './pages/Feedback';
import Admin from './pages/Admin';
import NotFound from './pages/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="recipedetails/:name" element={<RecipeDetails/>}/>
        <Route path="feedback" element={<Feedback />} />
        <Route path="admin" element={<Admin />} />
        <Route path="*" element={<NotFound />}/>
      </Route>
    </Routes>
  )
}

export default App