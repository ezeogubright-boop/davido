import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Check, X } from 'lucide-react';

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
  message?: string;
}

const NewsletterModal = ({ isOpen, onClose, message = "Thank you for subscribing!" }: NewsletterModalProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const tl = gsap.timeline();

    // Animate overlay fade in
    tl.to(overlayRef.current, {
      opacity: 1,
      duration: 0.3,
    }, 0)
    // Animate modal scale and slide up
    .to(modalRef.current, {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.5,
      ease: 'back.out(1.7)',
    }, 0)
    // Pulse the check icon
    .to(contentRef.current?.querySelector('.check-icon'), {
      scale: 1.2,
      duration: 0.5,
      ease: 'elastic.out',
    }, 0.3);

    // Auto close after 4 seconds
    const timer = setTimeout(() => {
      closeModal();
    }, 4000);

    return () => clearTimeout(timer);
  }, [isOpen]);

  const closeModal = () => {
    const tl = gsap.timeline({
      onComplete: onClose,
    });

    tl.to(modalRef.current, {
      opacity: 0,
      scale: 0.8,
      y: 20,
      duration: 0.4,
      ease: 'back.in',
    }, 0)
    .to(overlayRef.current, {
      opacity: 0,
      duration: 0.3,
    }, 0);
  };

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 opacity-0"
      onClick={closeModal}
    >
      <div
        ref={modalRef}
        className="relative opacity-0 scale-75 translate-y-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          ref={contentRef}
          className="bg-gradient-to-br from-void-black via-void-black to-neon-cyan/10 border border-neon-cyan/30 rounded-2xl px-8 py-12 w-96 shadow-2xl backdrop-blur-sm"
        >
          {/* Close button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Check icon with animation */}
          <div className="flex justify-center mb-6">
            <div className="check-icon w-16 h-16 rounded-full bg-gradient-to-br from-neon-cyan/30 to-neon-cyan/10 flex items-center justify-center border border-neon-cyan/50">
              <Check className="w-8 h-8 text-neon-cyan" />
            </div>
          </div>

          {/* Message */}
          <h3 className="text-center text-2xl font-display text-white mb-3">
            Success!
          </h3>
          <p className="text-center text-white/70 text-sm leading-relaxed">
            {message}
          </p>

          {/* Decorative elements */}
          <div className="mt-8 flex gap-2 justify-center">
            <div className="h-1 w-8 bg-neon-cyan/30 rounded-full" />
            <div className="h-1 w-8 bg-neon-cyan/60 rounded-full" />
            <div className="h-1 w-8 bg-neon-cyan/30 rounded-full" />
          </div>

          {/* Subtitle */}
          <p className="text-center text-xs text-white/40 mt-6">
            We'll be in touch soon
          </p>
        </div>

        {/* Glow effect background */}
        <div className="absolute inset-0 blur-xl bg-gradient-to-br from-neon-cyan/20 to-neon-soft/20 rounded-2xl -z-10 opacity-50" />
      </div>
    </div>
  );
};

export default NewsletterModal;
