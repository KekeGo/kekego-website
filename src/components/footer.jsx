import React from "react"

const Footer = () => {
  return (
    <footer className="h-[56px] absolute bottom-0 w-full text-white">
      <section className="flex justify-center">
        <span>© {new Date().getFullYear()} &middot; KekeGo</span>
      </section>
    </footer>
  )
}

export default Footer
