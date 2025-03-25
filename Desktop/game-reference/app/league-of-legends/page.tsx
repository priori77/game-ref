import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import GameDetailLayout from "@/components/game-detail-layout"

export default function LeagueOfLegendsPage() {
  const gameInfo = {
    title: "리그 오브 레전드 '집중포화 모드' (League of Legends: Concentrated Fire)",
    description:
      "기본 LoL 세계관을 탈피하고, 동물특공대 같은 색다른 테마로 가볍게 즐길 수 있는 게임 모드로, 자동 공격과 자유로운 이동을 활용한 빠른 전투 플레이스타일을 제공합니다.",
    sections: [
      {
        title: "스토리 컨셉",
        content:
          "집중포화 모드는 기존 리그 오브 레전드의 무거운 세계관에서 벗어나 보다 가볍고 유쾌한 분위기를 제공합니다. 동물특공대와 같은 테마를 차용하여, 플레이어들이 부담 없이 즐길 수 있는 환경을 조성합니다. 이 모드는 스토리보다는 게임플레이 자체에 중점을 두고 있어, 복잡한 배경 없이도 즉각적인 재미를 느낄 수 있습니다.",
        imagePath: "/images/jippo.png",
      },
      {
        title: "자동 공격 시스템",
        content:
          "집중포화 모드의 가장 큰 특징 중 하나는 자동 공격 시스템입니다. 플레이어는 적을 향해 자동으로 공격을 가하며, 이를 통해 조작의 부담을 줄이고 전략적 움직임과 스킬 사용에 더 집중할 수 있습니다. 이러한 시스템은 빠른 템포의 전투를 가능하게 하며, 초보자도 쉽게 접근할 수 있는 장점이 있습니다.",
        imagePath: "/images/auto_attack.gif",
      },
      {
        title: "간소화된 스킬 시스템",
        content:
          "집중포화 모드는 기존 리그 오브 레전드의 복잡한 스킬 시스템을 간소화하여, 두 개의 액티브 스킬과 기본 무기 공격만으로 게임플레이를 구성합니다. 이를 통해 플레이어는 복잡한 조합을 외울 필요 없이, 직관적이고 즉각적인 반응으로 전투를 진행할 수 있습니다. 간소화된 시스템은 진입 장벽을 낮추고, 누구나 쉽게 게임을 즐길 수 있게 합니다.",
        imagePath: "/images/skillsystem.png",
      },
    ],
    mainImage: "/images/jippo.png",
    color: "from-blue-900 to-teal-900",
  }

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
          <h1 className="text-4xl font-bold mb-2">{gameInfo.title}</h1>
          <p className="text-gray-400">새로운 방식의 MOBA 게임 모드</p>
        </div>

        <GameDetailLayout gameInfo={gameInfo} />
      </div>

      <footer className="bg-black py-8 border-t border-gray-800 mt-16">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2025 프로젝트 S All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}

