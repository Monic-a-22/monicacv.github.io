import React from "react"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Resume() {
  const resumeUrl = `${import.meta.env.BASE_URL}Monica_Rao_Resume.pdf`

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Resume</h1>
        <p className="text-slate-400 mt-3">Download the latest PDF version.</p>
        <a href={resumeUrl} download className="inline-block mt-6">
          <Button className="bg-violet-600 hover:bg-violet-700 text-white">
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </Button>
        </a>
      </div>
    </div>
  )
}
