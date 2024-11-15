"use client";
import React from "react";
import { HeroParallax } from "../../components/ui/HeroParallax";
import {products} from '@/data'
export default function ProjectPage() {
  return <HeroParallax products={products} />;
}
