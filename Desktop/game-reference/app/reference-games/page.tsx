import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import GameDetailCard from "@/components/game-detail-card"

export default function ReferenceGamesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="mb-8">
          <Button asChild variant="ghost" className="group mb-4">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              홈으로 돌아가기
            </Link>
          </Button>
          <h1 className="text-4xl font-bold mb-2">레퍼런스 게임 상세 분석</h1>
          <p className="text-gray-400">
            핵 앤 슬래시 장르의 대표적인 게임들을 분석하여 새로운 게임 컨셉에 적용할 요소들을 찾아봅니다.
          </p>
        </div>

        <div className="space-y-16">
          <GameDetailCard
            title="패스 오브 엑자일 (Path of Exile)"
            imagePath="/placeholder.svg?height=400&width=800"
            sections={[
              {
                title: "스토리 컨셉",
                content:
                  "어둡고 음울한 다크 판타지 세계관을 배경으로, 부패와 저주가 만연한 타락한 세계에서 추방자로서 자신의 운명을 개척하고 고난과 싸우는 서사를 갖습니다.",
                imagePath: "/placeholder.svg?height=300&width=500",
              },
              {
                title: "전투 플레이요소",
                content:
                  "빠르고 치명적인 전투 템포속에서 수많은 몬스터를 한 번에 제압하는 플레이스타일 (핵 앤 슬래쉬)이 특징입니다. 플레이어는 다양한 스킬과 무기를 활용하여 몰려오는 적들을 효과적으로 처리해야 합니다.",
                imagePath: "/placeholder.svg?height=300&width=500",
              },
              {
                title: "���킬 커스터마이징과 자원 관리",
                content:
                  "다양한 스킬 젬과 아이템을 조합을 통해 개성 있는 빌드를 구성하며, 마나 및 쿨타임 관리를 통한 전략적 전투 운영이 핵심입니다. 이러한 깊은 커스터마이징 시스템은 플레이어에게 무한한 빌드 가능성을 제공합니다.",
                imagePath: "/placeholder.svg?height=300&width=500",
              },
            ]}
            takeaways={[
              "깊은 커스터마이징 시스템",
              "빠른 전투 템포와 다수의 적 처치",
              "다크 판타지 세계관의 몰입감",
              "전략적 자원 관리의 중요성",
            ]}
            color="from-purple-900 to-red-900"
          />

          <GameDetailCard
            title="리그 오브 레전드 '집중포화 모드' (League of Legends: Concentrated Fire)"
            imagePath="/placeholder.svg?height=400&width=800"
            sections={[
              {
                title: "스토리 컨셉",
                content:
                  "기본 LoL 세계관을 탈피하고, 동물특공대 같은 색다른 테마로 가볍게 즐길 수 있는 분위기를 제공합니다. 이는 기존 게임의 무거운 분위기에서 벗어나 새로운 경험을 제공합니다.",
                imagePath: "/placeholder.svg?height=300&width=500",
              },
              {
                title: "자동 공격 및 WASD 기반 이동",
                content:
                  "상시 몰려드는 적들을 빠르게 처리하기 위해, 자동 공격과 자유로운 이동(탑다운 슈터 스타일)을 활용한 빠른 전투 플레이스타일을 제공합니다. 이는 플레이어가 전략적 위치 선정과 회피에 집중할 수 있게 합니다.",
                imagePath: "/placeholder.svg?height=300&width=500",
              },
              {
                title: "간소화된 스킬 시스템",
                content:
                  "두 개의 액티브 스킬과 기본 무기 공격을 통해, 직관적이고 즉각전인 반응으로 단순한 조작으로 전투를 진행하는 점이 두드러집니다. 이러한 간소화는 진입장벽을 낮추고 즉각적인 재미를 제공합니다.",
                imagePath: "/placeholder.svg?height=300&width=500",
              },
            ]}
            takeaways={[
              "직관적인 조작 시스템",
              "자유로운 이동과 자동 공격의 조합",
              "가벼운 테마와 분위기",
              "간소화된 스킬 시스템의 접근성",
            ]}
            color="from-blue-900 to-teal-900"
          />
        </div>
      </div>

      <footer className="bg-black py-8 border-t border-gray-800 mt-16">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2025 프로젝트 S All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}

