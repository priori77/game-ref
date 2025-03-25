"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface GameSection {
  title: string
  content: string
  imagePath: string
}

interface GameInfo {
  title: string
  description: string
  sections: GameSection[]
  mainImage: string
  color: string
}

interface GameDetailLayoutProps {
  gameInfo: GameInfo
}

export default function GameDetailLayout({ gameInfo }: GameDetailLayoutProps) {
  return (
    <div className="space-y-12">
      {/* Hero Section with Main Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative h-[400px] rounded-xl overflow-hidden"
      >
        <Image
          src={gameInfo.mainImage || "/placeholder.svg?height=400&width=800"}
          alt={gameInfo.title}
          fill
          className="object-cover"
          unoptimized
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${gameInfo.color} opacity-40`}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-8">
          <h2 className="text-3xl font-bold text-white mb-2">{gameInfo.title}</h2>
          <p className="text-xl text-gray-300">{gameInfo.description}</p>
        </div>
      </motion.div>

      {/* Game Sections with Left Text, Right Image */}
      <div className="space-y-16">
        {gameInfo.sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`flex flex-col lg:flex-row gap-8 ${index % 2 !== 0 ? "bg-black/20" : ""} p-4 rounded-lg`}
          >
            {/* Left Side - Text Content */}
            <div className="lg:w-1/2 flex flex-col justify-center">
              <div className={`h-1 w-24 bg-gradient-to-r ${gameInfo.color} mb-4`}></div>
              <h3 className="text-2xl font-bold mb-4 text-white">{section.title}</h3>
              <div className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">{section.content}</div>
            </div>

            {/* Right Side - Image */}
            <div className="lg:w-1/2">
              <Card className="overflow-hidden border-0 bg-transparent">
                <CardContent className="p-0">
                  <div className="relative h-[300px] w-full rounded-lg overflow-hidden">
                    <Image
                      src={section.imagePath || "/placeholder.svg?height=300&width=500"}
                      alt={section.title}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${gameInfo.color} opacity-10`}></div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

