import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import IllustrationGrid from '../components/IllustrationGrid';
import Author from '../components/Author';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

import Navigation from '../components/Navigation';

export default function Home() {
  return (
    <main>
      <Navigation />
      {/* 1. Header & Main UX (Based on Wireframe) */}
      <Hero />

      {/* 2. Volumes UX (Based on Wireframe) */}
      <ProductGrid />

      {/* 3. Redistribution of remaining sections */}
      <IllustrationGrid />
      <Author />
      <FAQ />
      <Footer />
    </main>
  );
}
