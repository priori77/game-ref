import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ConceptDetail from "@/components/concept-detail"

export default function GameConceptPage() {
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
          <h1 className="text-4xl font-bold mb-2">프로젝트 S</h1>
          <p className="text-gray-400">AI야 만들어줘서 고마어</p>
        </div>

        <ConceptDetail />
      </div>

      <footer className="bg-black py-8 border-t border-gray-800 mt-16">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2025 프로젝트 S All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}

