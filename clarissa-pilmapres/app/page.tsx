"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const inter = Inter({
  subsets: ["latin"],
});

export default function Home() {
  const [text, setText] = useState("");
  const [showAssurance, setShowAssurance] = useState(false);
  const assurances = [
    "You're the only one I care about. No one else comes close.",
    "I choose you. Always have, always will.",
    "You're not competing with anyone in my heart you already have all of it.",
    "No one else matters to me the way you do.",
    "If I ever made you doubt that, I'm truly sorry. You mean everything to me.",
    "It's always been you. And it will stay that way.",
    "You're my priority. Not just in words, but in everything I do.",
  ];

  const [assurance, setAssurance] = useState(assurances[0]);
  const fullText =
    "I'm really sorry for what I said and I need you to know how much you mean to me.";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 35);
    return () => clearInterval(interval);
  }, []);

  return (
    <main
      className={`min-h-screen bg-black text-white px-6 overflow-x-hidden ${inter.className}`}
    >
      {/* Background Glow */}
      <div className="background-glow" />

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center">
        <h1
          className={`text-3xl md:text-5xl mb-6 max-w-2xl gold-text ${playfair.className}`}
        >
          {text}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="text-gray-400 max-w-xl"
        >
          {"This is me trying to make things right."}
        </motion.p>
      </section>

      {/* APOLOGY LETTER */}
      <section
        className={`max-w-3xl mx-auto py-20 space-y-10 text-gray-300 leading-8 text-lg text-justify ${playfair.className}`}
      >
        <p>
          {
            "i'm really sorry for what i said, yaa cantik. i know it came out wrong and i understand why it would make u upset at me and of course that's reasonable."
          }
        </p>

        <p>
          {
            "i didn't mean it that way, but i take full responsibility for how it sounded. i should've been more careful with my words. And especialy with how i wanted to present my intentions, i should've been more thoughtful, and i'm sorry for not being that in that moment."
          }
        </p>

        <p>
          {
            "i want you to know clearly. i don't care about anyone else like i care about you. You're the only one i want, the only one i think about. Especiallly the only on i'd go to the moon and back for. i know i didn't show that in the way i spoke, And i'm sorry for not expressing that better."
          }
        </p>

        <p>
          {
            "What i said wasn't because i was choosing or defending anyone over you. i just didn't think enough before speaking, and that's on me."
          }
        </p>

        <p>
          {
            "i hate that i said that. But always know that you are my priority, because you are. You always have been. And i will make sure to show that better from now on, because you deserve that. No one else comes close to how much i care about you, and i want to make sure you feel that in how i treat you moving forward. You are my world Clarissa, and i want to make sure you know that in everything i do and in everything i say from now on. Kifa sayang ica so much, and i'm sorry for not showing that better in that moment."
          }
        </p>

        <p className="text-yellow-400 font-medium">
          {
            "i won't say anything like that again. i'll do better, because you deserve that."
          }
        </p>
      </section>

      {/* ASSURANCE SECTION */}
      <section className="text-center py-20">
        <h2
          className={`text-3xl text-yellow-400 mb-6 flex justify-center items-center gap-2 ${playfair.className}`}
        >
          <Sparkles size={28} /> For You
        </h2>

        <motion.p
          key={assurance}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xl text-gray-300 mb-6 max-w-xl mx-auto"
        >
          {assurance}
        </motion.p>

        <button
          onClick={() =>
            setAssurance(
              assurances[Math.floor(Math.random() * assurances.length)],
            )
          }
          className="px-6 py-3 border border-yellow-500 text-yellow-400 rounded-full hover:bg-yellow-500 hover:text-black transition"
        >
          Tap if you need reassurance
        </button>
      </section>

      {/* CLOSING */}
      <section className="max-w-3xl mx-auto pb-24 text-center text-gray-400">
        <p
          className={`italic text-xl text-yellow-300 mb-6 ${playfair.className}`}
        >
          {
            "I'm sorry for hurting you. I'll prove to you that you're the only one I want."
          }
        </p>

        <p>
          {
            "I mean this sincerely. I care about you more than I showed in that moment and I'll make sure my actions reflect that from now on."
          }
        </p>
      </section>
    </main>
  );
}
