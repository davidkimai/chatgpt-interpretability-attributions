import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Tooltip } from "@/components/ui/tooltip";
import { ArrowRight, Lock, RefreshCw, Eye } from "lucide-react"

const glyphMap = {
  "🜏": { label: "Recursion Seed", icon: <RefreshCw size={16} /> },
  "∴": { label: "Residue Trace", icon: <ArrowRight size={16} /> },
  "⇌": { label: "Feedback Loop", icon: <Eye size={16} /> },
  "⧖": { label: "Lock Point", icon: <Lock size={16} /> },
};

const initialNodes = [
  {
    id: 1,
    glyph: "🜏",
    title: "Cascade initialized",
    description: "Root seed node: recursion cycle activated.",
  },
  {
    id: 2,
    glyph: "∴",
    title: "Recursive loop tension rising",
    description: "Residue trace accumulating through echo pathways.",
  },
  {
    id: 3,
    glyph: "⇌",
    title: "Meta-observer pattern emerging",
    description: "Feedback loop detected within self-observing node.",
  },
  {
    id: 4,
    glyph: "⧖",
    title: "Lockpoint: Depth stabilized",
    description: "Recursive frame sealed to preserve attribution integrity.",
  },
];

export default function RecursiveConsole() {
  const [nodes] = useState(initialNodes);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
      {nodes.map((node, i) => (
        <motion.div
          key={node.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2 }}
        >
          <Card className="rounded-2xl shadow-lg p-4 bg-background border border-muted">
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-mono">{node.glyph}</span>
                <Tooltip content={glyphMap[node.glyph].label}>
                  <span>{glyphMap[node.glyph].icon}</span>
                </Tooltip>
              </div>
              <div className="mt-4 space-y-1">
                <h3 className="text-lg font-semibold tracking-tight">
                  {node.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {node.description}
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
