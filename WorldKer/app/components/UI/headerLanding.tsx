'use client'

import React, { useState, useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import ButtonLanding from "./buttonLanding"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from 'lucide-react'

export default function HeaderLanding() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        if (window.scrollY > 0) {
          headerRef.current.classList.add('sticky', 'top-0', 'z-50')
        } else {
          headerRef.current.classList.remove('sticky', 'top-0', 'z-50')
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const navLinks = [
    { href: "#nosotros", label: { "/landing": "Sobre Nosotros", "/landing/PT": "Sobre Nós", "/landing/EN": "About Us", "/landing/RS": "About Us" } },
    { href: "#pilares", label: { "/landing": "Nuestros Pilares", "/landing/PT": "Nossos Pilares", "/landing/EN": "Our Pillars", "/landing/RS": "Our Pillars" } },
    { href: "#precios", label: { "/landing": "Precios", "/landing/PT": "Preços", "/landing/EN": "Pricing", "/landing/RS": "Pricing" } },
    { href: "#contacto", label: { "/landing": "Contacto", "/landing/PT": "Contato", "/landing/EN": "Contact", "/landing/RS": "Contact" } },
  ]

  const languages = [
    { code: "", flag: "/spain.png", alt: "SPAIN Flag" },
    { code: "PT", flag: "/portugal.png", alt: "Portugal Flag" },
    { code: "RS", flag: "/rusia.png", alt: "Russia Flag" },
    { code: "EN", flag: "/usa.png", alt: "USA Flag" },
  ]

  const buttons = [
    { href: "/demo", text: { "/landing": "Solicitar una demo", "/landing/PT": "Solicitar uma demo", "/landing/EN": "Request a demo", "/landing/RS": "Request a demo" } },
    { href: "/sign-in", text: { "/landing": "Iniciar sesión", "/landing/PT": "Iniciar sessão", "/landing/EN": "Sign in", "/landing/RS": "Sign in" } },
    { href: "/sign-up", text: { "/landing": "Registrarse", "/landing/PT": "Registrar-se", "/landing/EN": "Sign up", "/landing/RS": "Sign up" } },
  ]

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault()
    setIsMenuOpen(false)
    
    const targetElement = document.querySelector(href)
    if (targetElement) {
      const headerHeight = headerRef.current?.offsetHeight || 0
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="relative w-full">
      <header ref={headerRef} className="bg-black/5 w-full flex items-center justify-between px-4 py-2 border border-white/10 backdrop-blur-[2px] transition-all duration-300">
        <Link href="/">
          <div className="flex items-center">
            <Image
              src="/LogoWorldKer.png"
              alt="Logo WorldKer"
              width={56}
              height={56}
              className="h-8 sm:h-14 mr-3"
            />
            <div className="text-white text-lg sm:text-4xl font-figtree font-bold italic">
              WorldKer
            </div>
          </div>
        </Link>

        {(pathname === "/landing" || pathname === "/landing/EN" || pathname === "/landing/PT" || pathname === "/landing/RS") && (
          <>
            <nav className="hidden md:flex items-center space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative text-white hover:text-blue-300 font-figtree font-bold group"
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  {link.label[pathname as keyof typeof link.label]}
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              {languages.map((lang) => (
                <Link key={lang.code} href={`/landing${lang.code ? `/${lang.code}` : ''}`}>
                  <button className="flex items-center justify-center w-12 h-12 rounded-lg hover:bg-gray-700/50 transition-colors duration-300">
                    <Image
                      src={lang.flag}
                      alt={lang.alt}
                      width={32}
                      height={32}
                      className="w-8 h-8 object-cover"
                    />
                  </button>
                </Link>
              ))}

              {buttons.map((button) => (
                <ButtonLanding
                  key={button.href}
                  href={button.href}
                  text={button.text[pathname as keyof typeof button.text]}
                />
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white hover:text-blue-300 transition-colors duration-300"
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </>
        )}
      </header>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div 
          ref={menuRef}
          className="md:hidden fixed inset-0 bg-black/90 z-50 overflow-y-auto pt-16"
        >
          <nav className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white hover:text-blue-300 font-figtree font-bold text-lg"
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.label[pathname as keyof typeof link.label]}
              </a>
            ))}

            <div className="flex flex-wrap justify-center gap-4 mt-4">
              {languages.map((lang) => (
                <Link key={lang.code} href={`/landing${lang.code ? `/${lang.code}` : ''}`}>
                  <button
                    className="flex items-center justify-center w-12 h-12 rounded-lg hover:bg-gray-700/50 transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Image
                      src={lang.flag}
                      alt={lang.alt}
                      width={32}
                      height={32}
                      className="w-8 h-8 object-cover"
                    />
                  </button>
                </Link>
              ))}
            </div>

            <div className="flex flex-col items-center space-y-4 mt-4">
              {buttons.map((button) => (
                <ButtonLanding
                  key={button.href}
                  href={button.href}
                  text={button.text[pathname as keyof typeof button.text]}
                  onClick={() => setIsMenuOpen(false)}
                />
              ))}
            </div>
          </nav>
        </div>
      )}
    </div>
  )
}