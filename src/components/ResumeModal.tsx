"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Download, Share2, Check } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl?: string;
}

export function ResumeModal({
  isOpen,
  onClose,
  pdfUrl = "/resume/Rodip-Chettri-Product-Designer-Resume.pdf",
}: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleShare = async () => {
    const fullUrl = `${window.location.origin}${pdfUrl}`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Rodip Chettri — Product Designer Resume",
          text: "Check out Rodip Chettri's Product Designer Resume",
          url: fullUrl,
        });
        return;
      } catch {
        // User cancelled or share failed, fallback to copy
      }
    }

    try {
      await navigator.clipboard.writeText(fullUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback if clipboard API is unavailable
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-5xl h-[88vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-neutral-200 z-10"
            role="dialog"
            aria-modal="true"
            aria-label="Resume Modal Viewer"
          >
            {/* Header Toolbar */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-neutral-200 bg-neutral-50/90 shrink-0">
              <div className="flex items-center gap-3 min-w-0">
                <span className="w-2.5 h-2.5 rounded-full bg-p-green shrink-0" />
                <h3 className="font-adventor text-[15px] sm:text-[17px] font-bold text-p-main truncate">
                  Rodip Chettri — Resume.pdf
                </h3>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 shrink-0">
                {/* Share Button */}
                <button
                  type="button"
                  onClick={handleShare}
                  aria-label="Share Resume"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[13px] sm:text-[14px] font-medium font-sans text-neutral-700 bg-white border border-neutral-200 hover:bg-neutral-100 hover:text-black transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-p-green" />
                      <span className="text-p-green font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-4 h-4 text-neutral-500" />
                      <span className="hidden xs:inline">Share</span>
                    </>
                  )}
                </button>

                {/* Download Button */}
                <a
                  href={pdfUrl}
                  download="Rodip-Chettri-Product-Designer-Resume.pdf"
                  aria-label="Download Resume PDF"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-[13px] sm:text-[14px] font-medium font-sans text-white bg-p-main hover:bg-black transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span className="hidden xs:inline">Download</span>
                </a>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close Modal"
                  className="p-1.5 rounded-lg text-neutral-500 hover:text-black hover:bg-neutral-200/60 transition-colors ml-1 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Toast Feedback */}
            <AnimatePresence>
              {copied && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-16 left-1/2 -translate-x-1/2 z-30 px-4 py-2 bg-p-main text-white font-sans text-[13px] font-medium rounded-full shadow-lg flex items-center gap-2"
                >
                  <Check className="w-4 h-4 text-p-green" />
                  <span>Resume link copied to clipboard!</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Embedded PDF Viewer Body */}
            <div className="flex-1 w-full bg-neutral-100 relative overflow-hidden">
              <iframe
                src={`${pdfUrl}#toolbar=1&view=FitH`}
                title="Rodip Chettri Product Designer Resume"
                className="w-full h-full border-0"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default ResumeModal;
