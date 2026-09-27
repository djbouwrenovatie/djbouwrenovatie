import { Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import ScrollToTop from './components/ScrollToTop'

const Home = lazy(() => import('./pages/Home'))
const Diensten = lazy(() => import('./pages/Diensten'))
const Toiletrenovatie = lazy(() => import('./pages/diensten/Toiletrenovatie'))
const Badkamerrenovatie = lazy(() => import('./pages/diensten/Badkamerrenovatie'))
const Keukenrenovatie = lazy(() => import('./pages/diensten/Keukenrenovatie'))
const Schilderwerk = lazy(() => import('./pages/diensten/Schilderwerk'))
const Vloeren = lazy(() => import('./pages/diensten/Vloeren'))
const Dakwerk = lazy(() => import('./pages/diensten/Dakwerk'))
const Projecten = lazy(() => import('./pages/Projecten'))
const OverOns = lazy(() => import('./pages/OverOns'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))

function LoadingFallback() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '400px' }}>
      <div style={{ color: 'var(--color-text-light)' }}>Laden...</div>
    </div>
  )
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/diensten" element={<Diensten />} />
            <Route path="/diensten/toilet" element={<Toiletrenovatie />} />
            <Route path="/diensten/badkamer" element={<Badkamerrenovatie />} />
            <Route path="/diensten/keuken" element={<Keukenrenovatie />} />
            <Route path="/diensten/schilderwerk" element={<Schilderwerk />} />
            <Route path="/diensten/vloeren" element={<Vloeren />} />
            <Route path="/diensten/dakwerk" element={<Dakwerk />} />
            <Route path="/projecten" element={<Projecten />} />
            <Route path="/over-ons" element={<OverOns />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
