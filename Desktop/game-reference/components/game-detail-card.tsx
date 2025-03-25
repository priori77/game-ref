"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

interface GameDetailSection {
  title: string
  content: string
  imagePath: string
}

interface GameDetailCardProps {
  title: string
  imagePath: string
  sections: GameDetailSection[]
  takeaways: string[]
  color: string
}

export default function GameDetailCard({ title, imagePath, sections, takeaways, color }: GameDetailCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      <div className="relative h-[300px] rounded-xl overflow-hidden">
        <Image
          src={imagePath || "/placeholder.svg?height=300&width=800"}
          alt={title}
          fill
          className="object-cover"
          unoptimized
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-40`}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-8">
          <h2 className="text-3xl font-bold text-white">{title}</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="bg-black/40 border-gray-800 overflow-hidden h-full">
              <div className={`h-1 w-full bg-gradient-to-r ${color}`}></div>
              <CardContent className="p-6">
                <div className="relative h-[200px] w-full mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={section.imagePath || "/placeholder.svg?height=200&width=400"}
                    alt={section.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{section.title}</h3>
                <p className="text-gray-300">{section.content}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className={`p-6 rounded-lg bg-gradient-to-r ${color} bg-opacity-10 border border-opacity-30`}
        style={{
          borderImageSlice: 1,
          borderWidth: "1px",
          borderImageSource: `linear-gradient(to right, ${color.replace("from-", "").replace("to-", "")})`,
        }}
      >
        <h3 className="text-xl font-bold mb-4 text-white">주요 참고 요소</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {takeaways.map((takeaway, index) => (
            <div key={index} className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
              <span className="text-gray-200">{takeaway}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

