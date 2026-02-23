'use client';
import React, { useState } from 'react';
import Hero from '../components/Hero';
import ConceptSection from '../components/ConceptSection';
import TechniqueSection from '../components/TechniqueSection';
import LiveSection from '../components/LiveSection';
import ClosureSection from '../components/ClosureSection';
import ProductGrid from '../components/ProductGrid';
import IllustrationGrid from '../components/IllustrationGrid';
import Author from '../components/Author';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import PurchaseModal from '../components/PurchaseModal';

interface Product {
  name: string;
  price: string;
  productId: number;
}

interface HomeClientProps {
  initialSalesCount: number;
}

export default function HomeClient({ initialSalesCount }: HomeClientProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      <Navigation
        onPurchase={() =>
          openModal({ name: 'Volumen 1 + Volumen 2', price: '$170.000', productId: 3440 })
        }
      />

      {/* 1. Header & Main UX (Based on Wireframe) */}
      <Hero onPurchase={openModal} initialSalesCount={initialSalesCount} />

      <ConceptSection />
      <TechniqueSection />
      <LiveSection />

      {/* 2. Volumes UX (Based on Wireframe) */}
      <ProductGrid onPurchase={openModal} />

      {/* 3. Redistribution of remaining sections */}
      <IllustrationGrid />
      <Author />
      <FAQ />
      <ClosureSection onPurchase={openModal} />
      <Footer />

      <PurchaseModal isOpen={isModalOpen} onClose={closeModal} product={selectedProduct} />
    </>
  );
}
