"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Image from "next/image"

interface ReferenceGameCardProps {
  title: string
  imagePath: string
  description: string
  features: string[]
  color: string
  icon: ReactNode
}

export default function ReferenceGameCard({
  title,
  imagePath,
  description,
  features,
  color,
  icon,
}: ReferenceGameCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="h-full"
    >
      <Card className="overflow-hidden h-full bg-black/40 border-gray-800 hover:border-gray-700 transition-all duration-300">
        <div className={`h-2 w-full bg-gradient-to-r ${color}`}></div>
        <CardHeader className="relative p-0">
          <div className="relative h-[200px] w-full overflow-hidden">
            <Image
              src={imagePath || "/placeholder.svg?height=200&width=400"}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            <div className="absolute bottom-4 left-4 flex items-center gap-2">
              <div className={`p-2 rounded-full bg-gradient-to-r ${color}`}>{icon}</div>
              <h3 className="text-xl font-bold text-white">{title}</h3>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <p className="text-gray-300 mb-4">{description}</p>
          <h4 className="font-semibold text-white mb-2">주요 특징:</h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold">{index + 1}</span>
                </div>
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  )
}

