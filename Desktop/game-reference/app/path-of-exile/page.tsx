import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import GameDetailLayout from "@/components/game-detail-layout"

export default function PathOfExilePage() {
  const gameInfo = {
    title: "패스 오브 엑자일 (Path of Exile)",
    description:
      "어둡고 음울한 다크 판타지 세계관을 배경으로, 부패와 저주가 만연한 타락한 세계에서 추방자로서 자신의 운명을 개척하고 고난과 싸우는 서사를 갖는 핵 앤 슬래시 액션 RPG입니다.",
    sections: [
      {
        title: "스토리 컨셉",
        content:
          "1. 레이클라스트라는 어둡고 위험한 대륙을 배경으로함\n2. 플레이어는 추방된 자로서, 생존을 위해 싸움\n3. 부패, 광기, 그리고 초자연적인 공포로 가득찬 세상",
        imagePath: "/images/poe.jpg",
      },
      {
        title: "전투 플레이요소",
        content:
          "1. 매우 빠른 전투 템포\n2. 수많은 몬스터를 한 번에 제압하는 플레이스타일\n3. 다양한 무기(스킬)을 커스텀해 적들을 효과적으로 처리",
        imagePath: "/images/poe_intro.gif",
      },
      {
        title: "스킬 커스터마이징",
        content:
          "1. 스킬 젬을 장비에 장착해 능력 사용\n2. 다양한 서포트 젬을 사용해 스킬의 효과를 변형하거나 강화\n3. 자신만의 빌드를 구성해, 수 많은 조합이 가능",
        imagePath: "/images/poe_skill_custom.gif",
      },
    ],
    mainImage: "/images/poe.png",
    color: "from-purple-900 to-red-900",
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
          <p className="text-gray-400">핵 앤 슬래시 액션 RPG의 대표작</p>
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

