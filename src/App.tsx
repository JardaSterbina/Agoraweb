import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import Reservation from './pages/Reservation'
import Packs from './pages/Packs'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import GiftVouchers from './pages/GiftVoucher'
import NotFound from './pages/404Page' 
import Obchodnipodminky from './pages/obchodnipodminky';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import { HelmetProvider } from 'react-helmet-async';


function App() {
  return (
    <HelmetProvider>

    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sluzby" element={<Services />} />
          <Route path="/rezervace" element={<Reservation />} />
          <Route path="/balicky-a-plany" element={<Packs />} />
          <Route path="/galerie" element={<Gallery />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/darkovy-poukaz" element={<GiftVouchers />} />
          <Route path="/obchodni-podminky" element={<Obchodnipodminky />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="*" element={<NotFound />} /> {/* Add the 404 route */}
        </Routes>
      </Layout>
    </Router>
    </HelmetProvider>

  )
}

export default App
