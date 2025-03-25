"use client"

import { motion } from "framer-motion"
import { Cpu, Zap, Bomb, Users } from "lucide-react"
import Image from "next/image"

export default function ConceptShowcase() {
  const features = [
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "AI 지배 세계",
      description: "인공지능이 인류를 지배하고 대부분의 도시와 영토를 점령한 디스토피아 세계관",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "인류의 저항",
      description: "살아남은 인간들이 AI 점령 지역을 탈환하기 위한 반격을 시작",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "핵 앤 슬래시",
      description: "수많은 기계 적들을 한 번에 쓸어버리는 통쾌한 전투 시스템",
    },
    {
      icon: <Bomb className="h-6 w-6" />,
      title: "폭발적 재미",
      description: "기계들이 펑펑 터지는 시원한 이펙트와 파괴의 쾌감을 느낄 수 있는 게임플레이",
    },
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative h-[400px] rounded-lg overflow-hidden"
      >
        <Image src="/images/robot.gif" alt="AI vs Humans Concept" fill className="object-cover" unoptimized />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-6">
          <h3 className="text-2xl font-bold mb-2 text-white">AI가 지배한 세상에서의 인류의 반격</h3>
          <p className="text-cyan-300 text-lg">인간 VS AI 로봇 대립구도의 SF 핵 앤 슬래시</p>
        </div>
      </motion.div>

      <div className="space-y-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-cyan-600 to-blue-700 flex items-center justify-center flex-shrink-0">
              {feature.icon}
            </div>
            <div>
              <h4 className="text-xl font-semibold text-white mb-1">{feature.title}</h4>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 p-4 border border-blue-800 rounded-lg bg-blue-950/30"
        >
          <p className="text-blue-300 italic">
            "핵심 재미: 기계들을 쓸어버리고 기계들이 펑 터지면서 그곳에서 재미를 느끼는 느낌적인 느낌~?"
          </p>
        </motion.div>
      </div>
    </div>
  )
}

