"use client";

import { motion } from "framer-motion";
import { Star, Cpu, Heart, Languages } from "lucide-react";

const items = [
  { icon: Star, label: "5-Star Google Reviews" },
  { icon: Cpu, label: "Advanced Technology" },
  { icon: Heart, label: "Family Friendly" },
  { icon: Languages, label: "Se Habla Español" },
];

export default function TrustBar() {
  return (
    <div className="bg-sage-lightest border-y border-sage-lighter/50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="flex items-center gap-2 text-sage-dark"
            >
              <item.icon size={18} className="text-gold" />
              <span className="text-xs sm:text-sm font-medium">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
