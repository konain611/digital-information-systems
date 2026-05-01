"use client";

import Image from "next/image";
import { useTranslationsClient } from "@/lib/i18n/client";
import { detectLocale } from "@/lib/i18n/utils";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer1() {
  const locale = detectLocale(typeof window !== "undefined" ? window.location.pathname : "/");
  const t = useTranslationsClient(locale);
  const isRTL = locale === "ur" || locale === "ar";

  const socialLinks = {
    facebook: "#",
    instagram: "#", 
    twitter: "#",
    linkedin: "#"
  };

  return (
    <>
      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out;
        }
        
        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out;
        }
      `}</style>
      <footer className="relative w-full bg-[#003366] overflow-hidden">
      {/* Flashlight effect background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(ellipse 300px 150px at ${isRTL ? '15% 40%' : '85% 40%'}, rgba(255, 145, 2, 0.25) 0%, rgba(255, 145, 2, 0.1) 30%, transparent 70%)`
        }}
      />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className={`flex flex-col lg:flex-row items-center justify-between gap-12 `}>
          
          {/* Logo Section */}
          <div className="flex items-center animate-slide-in-left">
            <div className="relative">
              <Image
                src="/logo-2.png"
                alt="DIGINFO"
                width={360}
                height={180}
                className="object-contain"
              />
            </div>
          </div>

          {/* Text and Social Media Section */}
          <div className={`flex flex-col items-center lg:items-end gap-6 text-center lg:text-right ${isRTL ? 'lg:text-left' : ''} animate-slide-in-right`}>
            <p className="text-white max-w-md leading-relaxed">
              Developing personalize our customer journeys to increase satisfaction & loyalty of our expansion. Bexon has been a game.
            </p>
            
            {/* Social Media Icons */}
            <div className={`flex gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <a 
                href={socialLinks.facebook}
                className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-[#003366] transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href={socialLinks.instagram}
                className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-[#003366] transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href={socialLinks.twitter}
                className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-[#003366] transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href={socialLinks.linkedin}
                className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-[#003366] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}