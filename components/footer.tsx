"use client"

import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="section-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Image src="/logo-icon.png" alt="Sagelancer" width={40} height={40} />
              <span className="text-2xl font-bold">Sagelancer</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Complete digital solutions from UI/UX design to FlutterFlow development. Transform your vision into
              reality.
            </p>
            <div className="flex space-x-4">
              <Link 
                href="https://x.com/sagelancer" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#2CA35B] transition-colors cursor-pointer"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link 
                href="https://www.facebook.com/SagelancerHub" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#2CA35B] transition-colors cursor-pointer"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link 
                href="https://www.instagram.com/sagelancer/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#2CA35B] transition-colors cursor-pointer"
              >
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer">UI/UX Design</li>
              <li className="hover:text-white transition-colors cursor-pointer">Website Development</li>
              <li className="hover:text-white transition-colors cursor-pointer">Graphic Design</li>
              <li className="hover:text-white transition-colors cursor-pointer">FlutterFlow Apps</li>
              <li className="hover:text-white transition-colors cursor-pointer">Digital Strategy</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Company</h4>
            <ul className="space-y-3 text-gray-400">
              <Link href="/about" className="block hover:text-white transition-colors cursor-pointer">
                About Us
              </Link>
              <Link href="/portfolio" className="block hover:text-white transition-colors cursor-pointer">
                Portfolio
              </Link>
              <Link href="/process" className="block hover:text-white transition-colors cursor-pointer">
                Process
              </Link>
              <li className="hover:text-white transition-colors cursor-pointer">Blog</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li>hello@sagelancer.com</li>
              <li>+234 9069162012</li>
              <li>Abuja, Nigeria</li>
              <li className="pt-2">
                <span className="text-[#2CA35B] font-semibold">24/7 Support Available</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 mb-4 md:mb-0">&copy; 2024 Sagelancer. All rights reserved.</p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
