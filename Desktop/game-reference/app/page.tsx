import Link from "next/link"
import { ArrowRight, Cpu, Gamepad2, Sword } from "lucide-react"
import { Button } from "@/components/ui/button"
import GameHero from "@/components/game-hero"
import ReferenceGameCard from "@/components/reference-game-card"
import ConceptShowcase from "@/components/concept-showcase"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <GameHero />

      {/* Reference Games Section */}
      <section className="container mx-auto py-16 px-4">
        <div className="flex items-center gap-3 mb-8">
          <Gamepad2 className="h-8 w-8 text-primary" />
          <h2 className="text-3xl font-bold">레퍼런스 게임 소개</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link href="/path-of-exile" className="block h-full">
            <ReferenceGameCard
              title="패스 오브 엑자일"
              imagePath="/images/poe.png"
              description="어둡고 음울한 다크 판타지 세계관을 배경으로, 부패와 저주가 만연한 타락한 세계에서 추방자로서 자신의 운명을 개척하는 게임"
              features={[
                "빠르고 치명적인 전투 템포 (핵 앤 슬래쉬)",
                "다양한 스킬 젬과 아이템 조합을 통한 빌드 커스터마이징",
                "자신만의 빌드를 구성해, 수 많은 조합이 가능",
              ]}
              color="from-purple-900 to-red-900"
              icon={<Sword className="h-6 w-6" />}
            />
          </Link>

          <Link href="/league-of-legends" className="block h-full">
            <ReferenceGameCard
              title="리그 오브 레전드 '집중포화 모드'"
              imagePath="/images/jippo.png"
              description="기본 LoL 세계관을 탈피하고, 동물특공대 같은 색다른 테마로 가볍게 즐길 수 있는 게임 모드"
              features={[
                "자동 공격 및 WASD 기반 이동 (탑다운 슈터 스타일)",
                "간소화된 스킬 시스템 (두 개의 액티브 스킬과 기본 무기 공격)",
                "직관적이고 즉각적인 반응의 단순한 조작 방식",
              ]}
              color="from-blue-900 to-teal-900"
              icon={<Gamepad2 className="h-6 w-6" />}
            />
          </Link>
        </div>

        <div className="mt-8 text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              variant="default"
              className="group bg-gradient-to-r from-purple-600 to-red-600 hover:from-purple-700 hover:to-red-700 text-white font-medium"
            >
              <Link href="/path-of-exile" className="flex items-center gap-2">
                패스 오브 엑자일 자세히 보기
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              variant="default"
              className="group bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-medium"
            >
              <Link href="/league-of-legends" className="flex items-center gap-2">
                집중포화 모드 자세히 보기
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Game Concept Section */}
      <section className="py-16 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Cpu className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">세계관 설정</h2>
          </div>

          <ConceptShowcase />

          <div className="mt-12 text-center">
            <Button asChild variant="default" className="group">
              <Link href="/game-concept" className="flex items-center gap-2">
                컨셉 자세히 보기
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2025 프로젝트 S All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}

