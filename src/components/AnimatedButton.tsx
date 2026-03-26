"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ComponentProps } from "react";

type ButtonProps = ComponentProps<typeof Button>;

export function AnimatedButton({ children, className, ...props }: ButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      <Button className={className} {...props}>
        {children}
      </Button>
    </motion.div>
  );
}
