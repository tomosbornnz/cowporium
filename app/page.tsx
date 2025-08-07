import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cloud, MilkIcon as Cow, GlassesIcon as Sunglasses, Zap, Shield, Globe, Users, BarChart3, Headphones } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function CaaSLanding() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <Link href="/" className="flex items-center justify-center gap-2">
          <div className="relative">
            <Cloud className="h-8 w-8 text-blue-600" />
            <Cow className="h-4 w-4 text-amber-600 absolute -bottom-1 -right-1" />
          </div>
          <span className="text-xl font-bold text-gray-900">CaaS</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#features" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Features
          </Link>
          <Link href="#pricing" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Pricing
          </Link>
          <Link href="#about" className="text-sm font-medium hover:text-blue-600 transition-colors">
            About
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Contact
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant="secondary" className="w-fit">
                    <Zap className="w-3 h-3 mr-1" />
                    Now with 99.9% Moo-time
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Welcome to{" "}
                    <span className="text-blue-600">Clowd</span> as a Service
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    The world's first cloud platform designed specifically for bovine management and premium eyewear solutions. 
                    Scale your herd and style with enterprise-grade moo-bility.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Start Your Free Trial
                  </Button>
                  <Button variant="outline" size="lg">
                    Watch Demo
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Shield className="w-4 h-4" />
                    SOC 2 Compliant
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    10,000+ Happy Farmers
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <Image
                    src="/cartoon-cow-sunglasses-clouds.png"
                    width="400"
                    height="400"
                    alt="Cow with sunglasses in the clouds"
                    className="rounded-2xl shadow-2xl"
                  />
                  <div className="absolute -top-4 -right-4 bg-blue-600 text-white p-2 rounded-full">
                    <Cloud className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline">Features</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Everything you need for modern farming and fashion
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our comprehensive platform combines cutting-edge cloud technology with bovine intelligence and eyewear excellence.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Cow className="w-8 h-8 text-amber-600" />
                    <CardTitle>Herd Management Cloud</CardTitle>
                  </div>
                  <CardDescription>
                    Monitor, track, and optimize your cattle operations with real-time analytics and AI-powered insights.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• GPS tracking for every cow</li>
                    <li>• Health monitoring dashboards</li>
                    <li>• Automated feeding schedules</li>
                    <li>• Milk production analytics</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Sunglasses className="w-8 h-8 text-gray-800" />
                    <CardTitle>Eyewear-as-a-Service</CardTitle>
                  </div>
                  <CardDescription>
                    Premium sunglasses management platform with style analytics and UV protection monitoring.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Style recommendation engine</li>
                    <li>• UV protection analytics</li>
                    <li>• Inventory management</li>
                    <li>• Trend forecasting</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Globe className="w-8 h-8 text-green-600" />
                    <CardTitle>Global Pasture Network</CardTitle>
                  </div>
                  <CardDescription>
                    Connect with farmers worldwide and share grazing resources through our distributed pasture cloud.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Pasture sharing marketplace</li>
                    <li>• Weather integration</li>
                    <li>• Soil quality monitoring</li>
                    <li>• Community forums</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-8 h-8 text-blue-600" />
                    <CardTitle>Moo-Analytics</CardTitle>
                  </div>
                  <CardDescription>
                    Advanced business intelligence for your farm operations with predictive modeling and ROI tracking.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Profit optimization models</li>
                    <li>• Market price predictions</li>
                    <li>• Custom dashboards</li>
                    <li>• Export compliance</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Shield className="w-8 h-8 text-red-600" />
                    <CardTitle>Enterprise Security</CardTitle>
                  </div>
                  <CardDescription>
                    Bank-level security for your most valuable assets - your cows and your sunglasses collection.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• End-to-end encryption</li>
                    <li>• Biometric cow identification</li>
                    <li>• Theft prevention alerts</li>
                    <li>• Compliance reporting</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Headphones className="w-8 h-8 text-purple-600" />
                    <CardTitle>24/7 Moo-Support</CardTitle>
                  </div>
                  <CardDescription>
                    Round-the-clock support from our team of certified bovine cloud specialists and style consultants.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Live chat support</li>
                    <li>• Video consultations</li>
                    <li>• Emergency response</li>
                    <li>• Training programs</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-4 lg:gap-12">
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="text-4xl font-bold">2M+</div>
                <div className="text-blue-100">Cows Managed</div>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="text-4xl font-bold">500K+</div>
                <div className="text-blue-100">Sunglasses Tracked</div>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="text-4xl font-bold">99.9%</div>
                <div className="text-blue-100">Uptime</div>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="text-4xl font-bold">150+</div>
                <div className="text-blue-100">Countries</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to revolutionize your farm and style?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of farmers and fashion enthusiasts who trust CaaS for their cloud needs.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <form className="flex gap-2">
                  <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
                  <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                    Get Started
                  </Button>
                </form>
                <p className="text-xs text-gray-500">
                  Start your free 30-day trial. No credit card required.{" "}
                  <Link href="/terms" className="underline underline-offset-2 hover:text-blue-600">
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Clowd as a Service. All rights reserved. No cows were harmed in the making of this platform.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-500 hover:text-blue-600">
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-500 hover:text-blue-600">
            Privacy Policy
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-500 hover:text-blue-600">
            Cookie Policy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
