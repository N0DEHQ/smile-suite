"use client";

import { StaggerContainer, StaggerItem } from "./ScrollReveal";
import { Scan, MonitorSmartphone, Zap, Printer, ShieldCheck, Eye } from "lucide-react";

const tech = [
  {
    icon: Scan,
    name: "CBCT 3D Scanner",
    description: "Full 3D imaging of your jaw and teeth for precise diagnosis and treatment planning — all in seconds.",
  },
  {
    icon: MonitorSmartphone,
    name: "iTero Digital Scanner",
    description: "No messy impressions. Our digital scanner creates a perfect 3D model of your teeth in minutes.",
  },
  {
    icon: Zap,
    name: "Laser Dentistry",
    description: "Minimally invasive treatments with faster healing, less discomfort, and greater precision.",
  },
  {
    icon: Printer,
    name: "3D Printer",
    description: "Same-day dental solutions. Custom guides and models printed right in our office.",
  },
  {
    icon: ShieldCheck,
    name: "Digital X-Rays",
    description: "Up to 80% less radiation than traditional X-rays with instant, crystal-clear results.",
  },
  {
    icon: Eye,
    name: "Intraoral Cameras",
    description: "See exactly what we see. High-definition images help you understand your treatment plan.",
  },
];

export default function TechShowcase() {
  return (
    <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {tech.map((item) => (
        <StaggerItem key={item.name}>
          <div className="group bg-white rounded-2xl p-6 border border-sage-lighter/30 hover:border-sage/30 hover:shadow-lg transition-all duration-500 h-full">
            <div className="w-12 h-12 rounded-xl bg-sage/10 flex items-center justify-center mb-4 group-hover:bg-sage group-hover:text-white transition-all duration-300">
              <item.icon size={24} className="text-sage group-hover:text-white transition-colors" />
            </div>
            <h3 className="font-playfair text-lg font-bold text-charcoal mb-2">
              {item.name}
            </h3>
            <p className="text-charcoal/60 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}
