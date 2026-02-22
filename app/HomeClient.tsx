'use client';
import React, { useState } from 'react';
import Hero from '../components/Hero/Hero';
import IllustrationGrid from '../components/IllustrationGrid/IllustrationGrid';
import ConceptSection from '../components/ConceptSection/ConceptSection';
import TechniqueSection from '../components/TechniqueSection/TechniqueSection';
import LiveSection from '../components/LiveSection/LiveSection';
import Author from '../components/Author/Author';
import ProductGrid from '../components/ProductGrid/ProductGrid';
import FAQ from '../components/FAQ/FAQ';
import ClosureSection from '../components/ClosureSection/ClosureSection';
import PurchaseModal from '../components/PurchaseModal/PurchaseModal';

interface Product {
  name: string;
  price: string;
  productId: number;
}

export default function HomeClient() {
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
      <main>
        {/* S1 — HERO */}
        <Hero />

        {/* S2 — GALERÍA MUDA */}
        <IllustrationGrid />

        {/* S3 — EL CONCEPTO */}
        <ConceptSection />

        {/* S4 — LA TÉCNICA */}
        <TechniqueSection />

        {/* S5 — EL LIVE */}
        <LiveSection />

        {/* S6 — EL AUTOR */}
        <Author />

        {/* S7 — EL PRODUCTO */}
        <ProductGrid onPurchase={openModal} />

        {/* S8 — FAQS */}
        <FAQ />

        {/* S9 — CIERRE */}
        <ClosureSection />
      </main>

      <PurchaseModal isOpen={isModalOpen} onClose={closeModal} product={selectedProduct} />
    </>
  );
}
