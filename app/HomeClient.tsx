'use client';
import React, { useState } from 'react';
import Hero from '../components/Hero';
import FeaturedPoem from '../components/Hero/FeaturedPoem';
import ProductGrid from '../components/ProductGrid';
import IllustrationGrid from '../components/IllustrationGrid';
import Author from '../components/Author';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import PurchaseModal from '../components/PurchaseModal';
import LiveEventBanner from '../components/LiveEventBanner/LiveEventBanner';
import ProcessSection from '../components/ProcessSection/ProcessSection';

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
      <Navigation onPurchase={openModal} />

      {/* 1. Impact & Live Event Context */}
      <Hero initialSalesCount={initialSalesCount} />
      <LiveEventBanner />

      {/* 2. Argument Visual */}
      <IllustrationGrid onPurchase={openModal} />

      {/* 3. Emotional Hook */}
      <FeaturedPoem />

      {/* 4. Product & Conversion */}
      <ProductGrid onPurchase={openModal} />

      {/* 5. Deep Dive / Process */}
      <ProcessSection />

      {/* 6. Authority & Trust */}
      <Author />

      {/* 7. Objection Handling */}
      <FAQ onPurchase={openModal} />
      <Footer />

      <PurchaseModal isOpen={isModalOpen} onClose={closeModal} product={selectedProduct} />
    </>
  );
}
