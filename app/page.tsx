"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Training from "@/components/Training";
import Equipment from "@/components/Equipment";
import Transformation from "@/components/Transformation";
import Trainers from "@/components/Trainers";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Location from "@/components/Location";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("General Membership");

  const handleOpenModal = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setIsModalOpen(true);
  };

  return (
    <main className="relative min-h-screen bg-black text-[#D1D0D0] overflow-x-hidden selection:bg-[#E50914] selection:text-white">
      {/* Sticky Navigation */}
      <Navbar onOpenJoinModal={() => handleOpenModal("General Membership")} />

      {/* Hero Section with 3D Barbell Environment */}
      <Hero onOpenJoinModal={() => handleOpenModal("General Membership")} />

      {/* About Section with 3D Interactive Dumbbell */}
      <About onOpenJoinModal={() => handleOpenModal("General Membership")} />

      {/* Training Disciplines Section */}
      <Training onOpenJoinModal={handleOpenModal} />

      {/* Interactive Equipment Showcase with 3D Apparatus */}
      <Equipment />

      {/* Transformation & Philosophy Section with 3D Silhouette */}
      <Transformation onOpenJoinModal={() => handleOpenModal("General Membership")} />

      {/* Certified Trainers Architecture */}
      <Trainers onOpenJoinModal={handleOpenModal} />

      {/* Facility Atmosphere Gallery */}
      <Gallery />

      {/* Verified Google Reviews */}
      <Reviews />

      {/* Location, Directions & Operating Hours */}
      <Location />

      {/* Final Massive Conversion CTA */}
      <ContactCTA onOpenJoinModal={() => handleOpenModal("General Membership")} />

      {/* Footer */}
      <Footer />

      {/* Interactive Membership Inquiry Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialService={selectedService}
      />
    </main>
  );
}
