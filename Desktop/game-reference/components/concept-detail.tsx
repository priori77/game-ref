"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Cpu, Users, Swords, Zap, Map, Layers, Shield, Bomb } from "lucide-react"

export default function ConceptDetail() {
  const worldElements = [
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "AI 지배 세계",
      description:
        "인공지능이 인류를 지배하고 대부분의 도시와 영토를 점령한 디스토피아 세계관입니다. 기계들은 자신들만의 도시와 기지를 건설하고, 인간들을 노예로 삼거나 제거하려 합니다.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "인류의 저항",
      description:
        "살아남은 인간들이 AI 점령 지역을 탈환하기 위한 반격을 시작합니다. 인류는 지하 기지와 은신처에서 힘을 모으고 기계들의 약점을 연구하며 반격을 준비합니다.",
    },
    {
      icon: <Map className="h-6 w-6" />,
      title: "도시 탈환",
      description:
        "플레이어는 AI가 점령한 도시와 지역을 하나씩 탈환해 나가며 인류의 영토를 확장합니다. 각 지역은 고유한 특성과 적 유형을 가지고 있습니다.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "기술 발전",
      description:
        "인류는 AI의 기술을 역이용하여 새로운 무기와 방어 시스템을 개발합니다. 플레이어는 탈환한 지역에서 얻은 기술을 활용해 더 강력한 장비를 제작할 수 있습니다.",
    },
  ]

  const gameplayElements = [
    {
      icon: <Swords className="h-6 w-6" />,
      title: "핵 앤 슬래시 전투",
      description:
        "빠르고 화려한 전투 시스템으로 수많은 기계 적들을 한 번에 쓸어버리는 통쾌함을 제공합니다. 다양한 무기와 스킬을 조합하여 자신만의 전투 스타일을 구축할 수 있습니다.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "전기 기반 스킬",
      description:
        "전기 충격, EMP 폭발 등 기계를 무력화시키는 특수 능력을 활용하여 전략적인 전투를 펼칠 수 있습니다. 전기 기반 스킬은 기계 적들에게 특히 효과적입니다.",
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "다양한 적 유형",
      description:
        "소형 드론부터 거대 메카까지 다양한 유형의 AI 적들이 등장합니다. 각 적 유형은 고유한 공격 패턴과 약점을 가지고 있어 다양한 전략이 요구됩니다.",
    },
    {
      icon: <Bomb className="h-6 w-6" />,
      title: "폭발적 이펙트",
      description:
        "기계들이 파괴될 때 화려한 폭발과 시각 효과를 제공하여 플레이어에게 파괴의 쾌감을 선사합니다. 연쇄 폭발과 같은 시스템으로 더욱 만족스러운 경험을 제공합니다.",
    },
  ]

  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative h-[400px] rounded-xl overflow-hidden"
      >
        <Image src="/images/humanvsai.jpg" alt="AI vs Humans Concept Art" fill className="object-cover" unoptimized />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-8">
          <h2 className="text-3xl font-bold text-white mb-2">AI가 지배한 세상에서의 인류의 반격</h2>
          <p className="text-xl text-gray-300">다크 판타지를 넘어선 새로운 세계관, SF 핵 앤 슬래시</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="p-6 bg-blue-950/20 border border-blue-900/30 rounded-lg"
      >
        <h3 className="text-2xl font-bold mb-4 text-white">핵심 컨셉</h3>
        <p className="text-gray-300 text-lg leading-relaxed">
          대부분의 핵 앤 슬래시 장르의 게임은 다크판타지(VS악마 대립 구도)가 많습니다. 이 게임은 그러한 전통적인
          설정에서 벗어나 AI가 지배한 세상에서 살아남은 인간들이 AI들이 점령한 지역을 침공하고 탈환하는 새로운 컨셉을
          제시합니다.
        </p>
        <div className="mt-4 p-4 bg-gradient-to-r from-cyan-950/30 to-blue-950/30 rounded-lg border border-cyan-800/30">
          <p className="text-cyan-300 italic font-medium">
            "핵심 재미: 기계들을 쓸어버리고 기계들이 펑 터지면서 그곳에서 재미를 느끼는 느낌적인 느낌~?"
          </p>
        </div>
      </motion.div>

      <Tabs defaultValue="world" className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-gray-900/50">
          <TabsTrigger
            value="world"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-700 data-[state=active]:to-purple-700"
          >
            세계관
          </TabsTrigger>
          <TabsTrigger
            value="gameplay"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-700 data-[state=active]:to-purple-700"
          >
            게임플레이
          </TabsTrigger>
        </TabsList>

        <TabsContent value="world" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {worldElements.map((element, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-black/40 border-gray-800 h-full">
                  <CardContent className="p-6">
                    <div className="flex gap-4 mb-4">
                      <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center flex-shrink-0">
                        {element.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-white">{element.title}</h4>
                      </div>
                    </div>
                    <p className="text-gray-300">{element.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8"
          >
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image src="/images/distopia.png" alt="AI Dystopian World" fill className="object-cover" unoptimized />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-6">
                <h3 className="text-2xl font-bold text-white mb-2">디스토피아 세계관</h3>
                <p className="text-gray-300">
                  인류의 창조물이 창조자를 지배하게 된 암울한 미래, 그러나 인류의 희망은 아직 꺼지지 않았습니다.
                </p>
              </div>
            </div>
          </motion.div>
        </TabsContent>

        <TabsContent value="gameplay" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {gameplayElements.map((element, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-black/40 border-gray-800 h-full">
                  <CardContent className="p-6">
                    <div className="flex gap-4 mb-4">
                      <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-cyan-600 to-blue-700 flex items-center justify-center flex-shrink-0">
                        {element.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-white">{element.title}</h4>
                      </div>
                    </div>
                    <p className="text-gray-300">{element.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8"
          >
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=800"
                alt="Gameplay Concept"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-6">
                <h3 className="text-2xl font-bold text-white mb-2">핵 앤 슬래시 액션</h3>
                <p className="text-gray-300">
                  수많은 기계 적들을 화려한 스킬과 무기로 쓸어버리는 통쾌한 전투 경험을 제공합니다.
                </p>
              </div>
            </div>
          </motion.div>
        </TabsContent>
      </Tabs>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="p-6 bg-gradient-to-r from-purple-950/30 to-blue-950/30 rounded-lg border border-purple-800/30"
      >
        <h3 className="text-2xl font-bold mb-4 text-white">레퍼런스 게임과의 차별점</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-xl font-semibold text-purple-300 mb-3">패스 오브 엑자일과의 차별점</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold">1</span>
                </div>
                <span>다크 판타지가 아닌 디스토피아 미래 세계관</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold">2</span>
                </div>
                <span>더 직관적이고 간소화된 스킬 시스템</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold">3</span>
                </div>
                <span>영토 탈환이라는 명확한 진행 목표</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-blue-300 mb-3">LoL 집중포화 모드와의 차별점</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold">1</span>
                </div>
                <span>더 깊은 세계관과 스토리 요소</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold">2</span>
                </div>
                <span>더 다양한 무기와 장비 커스터마이징</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold">3</span>
                </div>
                <span>오픈 월드 요소와 영토 탈환 시스템</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

