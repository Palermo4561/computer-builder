import {
  SavedComputers,
  Home,
  Loader,
  CreateComponent,
  Navbar,
  CreateComputer,
} from './pages';

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path='create-computer' element={<CreateComputer />} />
          <Route path='computers' element={<SavedComputers />} />
          <Route path='create-component' element={<CreateComponent />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
