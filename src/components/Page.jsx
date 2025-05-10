import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Bone, PawPrintIcon as Paw, Heart, Mail, Menu, X, Anchor, BikeIcon, Calendar, Compass, Fish, Shell, Star, Waves, } from "lucide-react";
import { roadmapItems,characters, bikini } from "../constants";
import { motion } from "framer-motion"
import { cn } from '../lib/utils';


const Page = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    gallery: useRef(null),
    activities: useRef(null),
    contact: useRef(null),
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      Object.entries(sectionRefs).forEach(([section, ref]) => {
        if (ref.current) {
          const element = ref.current
          if (element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
            setActiveSection(section)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (section) => {
    setIsMenuOpen(false)
    sectionRefs[section].current?.scrollIntoView({ behavior: "smooth" })
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
   <div className="min-h-screen bg-amber-50 text-amber-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-amber-800 text-amber-50 shadow-md">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2"
            >
              <Paw className="h-6 w-6 text-amber-300" />
              <span className="text-xl font-bold">Beagle</span>
            </motion.div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md hover:bg-amber-700 transition-colors"
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex gap-6">
              {Object.keys(sectionRefs).map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize py-1 px-2 rounded transition-colors ${
                    activeSection === section ? "bg-amber-600 text-white" : "hover:bg-amber-700"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-amber-700"
          >
            <div className="flex flex-col py-2">
              {Object.keys(sectionRefs).map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize py-3 px-4 text-left ${activeSection === section ? "bg-amber-600" : ""}`}
                >
                  {section}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        ref={sectionRefs.home}
        className="pt-20 min-h-screen flex items-center justify-center bg-gradient-to-b from-amber-400 to-amber-200"
      >
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 text-center md:text-left"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-4 text-amber-900">
                Meet <span className="text-amber-700">Beagle</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-amber-800">
                The most adorable and playful beagle you'll ever meet!
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <button
                  onClick={() => scrollToSection("about")}
                  className="bg-amber-800 text-amber-50 px-8 py-3 rounded-full text-lg font-medium flex items-center gap-2 hover:bg-amber-900 transition-colors"
                >
                  Learn more <ChevronDown className="h-5 w-5" />
                </button>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:w-1/2"
            >
              <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl flex justify-center items-center">
                <img src="/images/dog/beagle.jfif" alt="Beagle the dog" className="object-cover w-full h-full" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={sectionRefs.about} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <Bone className="h-10 w-10 mx-auto mb-4 text-amber-500" />
            <h2 className="text-4xl font-bold mb-4">About Beagle</h2>
            <div className="h-1 w-20 bg-amber-400 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <div className="bg-amber-100 p-6 rounded-xl shadow-md">
                <h3 className="text-2xl font-semibold mb-4 text-amber-800">My Story</h3>
                <p className="mb-4">
                  Hi there! I'm Beagle, a 3-year-old beagle with a passion for adventures and treats. I joined my loving
                  family when I was just a puppy, and I've been bringing joy and excitement to their lives ever since!
                </p>
                <p>
                  I have a beautiful brown and white coat, floppy ears that everyone loves to pet, and an incredible
                  nose that can smell treats from miles away (well, almost!).
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { title: "Breed", value: "Beagle", emoji: "🐕", color: "bg-amber-600" },
                { title: "Age", value: "3 years", emoji: "🎂", color: "bg-amber-500" },
                { title: "Weight", value: "25 pounds", emoji: "⚖️", color: "bg-amber-400" },
                { title: "Favorite Toy", value: "Squeaky bone", emoji: "🦴", color: "bg-amber-300" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`${item.color} p-4 rounded-lg text-center relative overflow-hidden`}
                  style={{ color: index > 1 ? "#78350f" : "white" }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(251, 191, 36, 0.7)",
                  }}
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent animate-pulse"
                    style={{ animationDuration: `${3 + index * 0.5}s` }}
                  ></div>
                  <motion.div
                    className="text-2xl mb-1"
                    animate={{
                      y: [0, -5, 0],
                      rotate: [0, 5, 0, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      delay: index * 0.3,
                    }}
                  >
                    {item.emoji}
                  </motion.div>
                  <h4 className="font-bold text-xl mb-1">{item.title}</h4>
                  <p>{item.value}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section ref={sectionRefs.gallery} className="py-20 bg-amber-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <Paw className="h-10 w-10 mx-auto mb-4 text-amber-600" />
            <h2 className="text-4xl font-bold mb-4">Beagle's Gallery</h2>
            <div className="h-1 w-20 bg-amber-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { emoji: "🦮", title: "Park Day", desc: "Running free at the park!",imgUrl: "/images/dog/beagle.jfif" },
              { emoji: "🦴", title: "Treat Time", desc: "My favorite bone toy!",imgUrl: "/images/dog/beagle.jfif"  },
              { emoji: "🏠", title: "Home Sweet Home", desc: "Relaxing in my bed",imgUrl: "/images/dog/beagle.jfif" },
              { emoji: "🏞️", title: "Nature Walk", desc: "Exploring the trails",imgUrl: "/images/dog/beagle.jfif" },
              { emoji: "🧸", title: "Playtime", desc: "Playing with my toys",imgUrl: "/images/dog/beagle.jfif" },
              { emoji: "😴", title: "Nap Time", desc: "Dreaming of treats",imgUrl: "/images/dog/beagle.jfif" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, delay: index * 0.1 },
                  },
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                  boxShadow: "0 0 25px rgba(251, 191, 36, 0.8)",
                }}
                className="overflow-hidden rounded-xl relative bg-gradient-to-br from-amber-300 to-orange-300 shadow-lg"
              >
                <div
                  className="absolute inset-0 bg-gradient-to-br from-amber-400/30 to-orange-400/30 animate-pulse"
                  style={{ animationDuration: `${3 + index * 0.5}s` }}
                ></div>
                <div className="relative h-64 w-full">
                  <img
                    src={item.imgUrl}
                    alt={`Beagle photo ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                  <motion.div
                    className="absolute top-4 right-4 text-4xl z-10 drop-shadow-lg"
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 10, 0, -10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      delay: index * 0.2,
                    }}
                  >
                    {item.emoji}
                  </motion.div>
                </div>
                <div className="p-4 relative z-10 bg-white/80 backdrop-blur-sm">
                  <h3 className="font-semibold text-lg text-amber-800">{item.title}</h3>
                  <p className="text-amber-700">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section ref={sectionRefs.activities} className="py-20 bg-gradient-to-r from-amber-500 to-orange-400 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <Heart className="h-10 w-10 mx-auto mb-4 text-white" />
            <h2 className="text-4xl font-bold mb-4">Daily Activities</h2>
            <div className="h-1 w-20 bg-white mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Morning",
                emoji: "🌅",
                activities: ["Wake up at 7 AM", "Morning walk in the park", "Breakfast time", "Nap time"],
              },
              {
                title: "Afternoon",
                emoji: "☀️",
                activities: ["Playtime in the yard", "Training session", "Lunch time", "Afternoon nap"],
              },
              {
                title: "Evening",
                emoji: "🌙",
                activities: ["Evening walk", "Dinner time", "Cuddle time on the couch", "Bedtime at 10 PM"],
              },
            ].map((timeBlock, blockIndex) => (
              <motion.div
                key={blockIndex}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="relative rounded-xl p-6 shadow-lg overflow-hidden"
                style={{
                  background: "rgba(255, 255, 255, 0.15)",
                  backdropFilter: "blur(10px)",
                }}
                whileHover={{
                  boxShadow: "0 0 30px rgba(255, 255, 255, 0.4)",
                }}
              >
                {/* Glowing background effect */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-orange-300/20 animate-pulse"
                  style={{ animationDuration: `${4 + blockIndex * 0.7}s` }}
                ></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, 0, -10, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                        delay: blockIndex * 0.3,
                      }}
                      className="text-4xl"
                    >
                      {timeBlock.emoji}
                    </motion.div>
                    <h3 className="text-2xl font-bold text-center">{timeBlock.title}</h3>
                  </div>

                  <ul className="space-y-3">
                    {timeBlock.activities.map((activity, actIndex) => (
                      <motion.li
                        key={actIndex}
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                          transition: { delay: 0.1 * actIndex + 0.2 * blockIndex },
                        }}
                        viewport={{ once: true }}
                        whileHover={{ x: 5 }}
                      >
                        <span className="bg-amber-300 text-amber-800 rounded-full w-6 h-6 flex items-center justify-center font-bold">
                          {actIndex + 1}
                        </span>
                        <span>{activity}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={sectionRefs.contact} className="py-20 bg-amber-800 text-amber-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <Mail className="h-10 w-10 mx-auto mb-4 text-amber-300" />
            <h2 className="text-4xl font-bold mb-4">Connect with Beagle</h2>
            <div className="h-1 w-20 bg-amber-300 mx-auto"></div>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="bg-amber-700 rounded-xl p-8 shadow-xl"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Say Hello!</h3>
                  <p className="mb-6">
                    Want to meet Beagle or have questions about him? Fill out the form and we'll get back to you!
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-amber-600 p-2 rounded-full">
                        <Mail className="h-5 w-5" />
                      </div>
                      <span>beagle@dogmail.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-amber-600 p-2 rounded-full">
                        <Paw className="h-5 w-5" />
                      </div>
                      <span>@beagle_adventures</span>
                    </div>
                  </div>
                </div>
                <div>
                  <form className="space-y-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-3 rounded-lg bg-amber-600 placeholder-amber-200 text-white border border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-3 rounded-lg bg-amber-600 placeholder-amber-200 text-white border border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                      />
                    </div>
                    <div>
                      <textarea
                        placeholder="Your Message"
                        rows={4}
                        className="w-full p-3 rounded-lg bg-amber-600 placeholder-amber-200 text-white border border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                      ></textarea>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-amber-500 hover:bg-amber-400 text-amber-900 font-bold py-3 px-6 rounded-lg transition-colors"
                    >
                      Send Message
                    </motion.button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-amber-200 py-8">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center items-center gap-2 mb-4"
          >
            <Paw className="h-6 w-6 text-amber-400" />
            <span className="text-xl font-bold">Beagle</span>
          </motion.div>
          <p className="mb-4">© {new Date().getFullYear()} Beagle's Website. All rights reserved.</p>
          <div className="flex justify-center gap-4">
            <a href="#" className="hover:text-amber-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-amber-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-amber-400 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Page