"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
}

export default function ServiceCard({ icon: Icon, title, description, href = "/services" }: ServiceCardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
      }}
    >
      <Link href={href}>
        <div className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-sage-lighter/30 hover:border-sage/30 h-full overflow-hidden">
          {/* Hover gradient */}
          <div className="absolute inset-0 bg-sage-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
          
          <div className="relative">
            <div className="w-14 h-14 rounded-xl bg-sage-lightest flex items-center justify-center mb-5 group-hover:bg-sage/10 transition-colors">
              <Icon size={26} className="text-sage group-hover:text-sage-dark transition-colors" />
            </div>
            <h3 className="font-playfair text-xl font-bold text-charcoal mb-3 group-hover:text-sage-dark transition-colors">
              {title}
            </h3>
            <p className="text-charcoal/60 text-sm leading-relaxed">
              {description}
            </p>
            <span className="inline-flex items-center gap-1 mt-4 text-sage text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              Learn More →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
