import React, { useEffect } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import Layout from "@/Layout.jsx"
import { createPageUrl } from "@/utils"

import Home from "@/pages/Home.jsx"
import About from "@/pages/About.jsx"
import Skills from "@/pages/Skills.jsx"
import Experience from "@/pages/Experience.jsx"
import CaseStudies from "@/pages/CaseStudies.jsx"
import Achievements from "@/pages/Achievements.jsx"
import Testimonials from "@/pages/Testimonials.jsx"
import Contact from "@/pages/Contact.jsx"

const pages = [
  { name: "Home", component: Home },
  { name: "About", component: About },
  { name: "Skills", component: Skills },
  { name: "Experience", component: Experience },
  { name: "CaseStudies", component: CaseStudies },
  { name: "Achievements", component: Achievements },
  { name: "Testimonials", component: Testimonials },
  { name: "Contact", component: Contact },
]

function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash)
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" })
        return
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }, [location.pathname, location.hash])

  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {pages.map((page) => {
          const PageComponent = page.component
          const path = createPageUrl(page.name)

          return (
            <Route
              key={page.name}
              path={path}
              element={
                <Layout currentPageName={page.name}>
                  <PageComponent />
                </Layout>
              }
            />
          )
        })}
      </Routes>
    </>
  )
}
