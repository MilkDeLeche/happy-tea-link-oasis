import React, { useState, useEffect, useRef } from "react";
import Logo from "@/components/Logo";
import LinkButton from "@/components/LinkButton";
import BubbleBackground from "@/components/BubbleBackground";
import { 
  BookOpen, 
  MapPin, 
  Phone, 
  Clock,
  Instagram,
  ShoppingCart,
  Loader2
} from "lucide-react";

const VideoPlayer = ({ src, poster }: { src: string; poster: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { 
        threshold: 0.1,
        rootMargin: isMobile ? '20px' : '50px' // Smaller margin for mobile
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, [isMobile]);

  useEffect(() => {
    if (!videoRef.current) return;

    if (isVisible) {
      // Shorter delay for mobile
      const playTimer = setTimeout(() => {
        videoRef.current?.play().catch((error) => {
          console.error('Video playback failed:', error);
          setHasError(true);
        });
      }, isMobile ? 50 : 100);

      return () => clearTimeout(playTimer);
    } else {
      videoRef.current.pause();
    }
  }, [isVisible, isMobile]);

  const handleLoadedData = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  const defaultPoster = src.replace('.mp4', '-poster.jpg');
  const posterImage = poster || defaultPoster;

  return (
    <div className="relative w-full aspect-[9/16]">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/5 backdrop-blur-sm rounded-lg">
          <Loader2 className="w-5 h-5 sm:w-6 sm:h-6 animate-spin text-white/70" />
        </div>
      )}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/5 backdrop-blur-sm rounded-lg">
          <span className="text-xs sm:text-sm text-white/70">Error loading video</span>
        </div>
      )}
      <video 
        ref={videoRef}
        className="w-full aspect-[9/16] object-cover rounded-lg"
        muted
        loop
        playsInline
        preload={isMobile ? "none" : "metadata"}
        poster={posterImage}
        onLoadedData={handleLoadedData}
        onError={handleError}
        style={{ 
          transform: 'translate3d(0, 0, 0)',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          willChange: 'transform',
          opacity: isLoading || hasError ? 0 : 1,
          transition: 'opacity 0.3s ease'
        }}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};

const Index = () => {
  const [videosLoaded, setVideosLoaded] = useState(false);

  useEffect(() => {
    setVideosLoaded(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <BubbleBackground />
      
      <div className="container max-w-md mx-auto px-4 py-6 sm:py-10 flex flex-col items-center">
        <div className="w-32 sm:w-40 mb-4">
          <Logo />
        </div>
        
        <h1 className="text-4xl sm:text-5xl font-bold mb-2 text-violet-400 text-center" style={{ fontFamily: 'SummerPinch, cursive' }}>
          Happy Tea
        </h1>
        <p className="text-lg sm:text-xl text-amber-400 mb-4 sm:mb-6 text-center px-4" style={{ fontFamily: 'Nord, system-ui, -apple-system, sans-serif' }}>
          ¡Bubble tea que te hace feliz!
        </p>
        
        <div className="w-full space-y-2.5 sm:space-y-3">
          <a 
            href="https://instagram.com/happytea" 
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full p-3 sm:p-4 rounded-2xl sm:rounded-3xl bg-black/10 backdrop-blur-xl hover:bg-black/15 transition-all duration-300 border border-white/20 shadow-lg"
          >
            <div className="flex items-center mb-2 sm:mb-3">
              <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-pink-400" />
              <span className="ml-2 text-lg sm:text-xl font-medium text-white" style={{ 
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
              }}>Mi Instagram</span>
            </div>
            
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2 rounded-xl sm:rounded-2xl overflow-hidden">
              {videosLoaded && (
                <>
                  <div className="relative aspect-[9/16]">
                    <VideoPlayer 
                      src="/images/vid1.mp4" 
                      poster="/images/vid1-poster.jpg" 
                    />
                  </div>
                  <div className="relative aspect-[9/16]">
                    <img 
                      src="/images/bienvnido a otono.jpg" 
                      alt="Bienvenido Otoño - Nuevos Sabores"
                      className="w-full h-full object-cover rounded-lg"
                      loading="lazy"
                    />
                  </div>
                  <div className="relative aspect-[9/16]">
                    <VideoPlayer 
                      src="/images/vid2.mp4" 
                      poster="/images/vid2-poster.jpg" 
                    />
                  </div>
                </>
              )}
            </div>
            
            <div className="flex items-center mt-2 sm:mt-3">
              <div className="flex items-center">
                <img 
                  src="/images/happytealogo.jpg"
                  alt="Logo de Happy Tea"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover"
                  loading="lazy"
                />
                <span className="ml-2 text-sm sm:text-base text-white/90" style={{ 
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
                }}>Happy Tea</span>
              </div>
              <button className="ml-auto px-3 py-1 sm:px-4 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white text-xs sm:text-sm font-medium" style={{ 
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
              }}>
                Seguir
              </button>
            </div>
          </a>
          
          <LinkButton 
            href="https://pedidosya.com/happytea" 
            icon={<ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />} 
            label="PedidosYA" 
            className="shake-animation hover:bg-[#E31837] hover:text-white hover:border-transparent"
          />

          <LinkButton 
            href="https://happytea.com/menu" 
            icon={<BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />} 
            label="Nuestro Menú" 
          />
          
          <LinkButton 
            href="https://maps.google.com" 
            icon={<MapPin className="w-4 h-4 sm:w-5 sm:h-5" />} 
            label="Encuéntranos" 
          />
          
          <LinkButton 
            href="tel:+123456789" 
            icon={<Phone className="w-4 h-4 sm:w-5 sm:h-5" />} 
            label="Llámanos" 
          />
          
          <LinkButton 
            href="https://happytea.com/hours" 
            icon={<Clock className="w-4 h-4 sm:w-5 sm:h-5" />} 
            label="Horario" 
            className="night-to-sunrise"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
