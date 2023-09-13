import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { NotFound } from 'pages/NotFound';
import { Home } from 'pages/Home';
import { Moovies } from 'pages/Moovies';
import { MoovieDetails } from './MoovieDetails';
import { Cast } from './Cast';
import { Reviews } from './Review';
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="moovies" element={<Moovies />} />
        <Route path="moovies/:id" element={<MoovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
