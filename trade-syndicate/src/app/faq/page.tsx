"use client"

import FaqQuesiton from "@/components/dropDown/FaqQuesiton"
import Navbar from "@/components/navbar/Navbar"
import splitStringUsingRegex from "@/utils/splitStringUsingRegex"
import { motion } from "framer-motion"
import React from "react"

const textVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
}

const headlinetext = "FAQ"

const Faq = () => {
  const headlineCharacters = splitStringUsingRegex(headlinetext)

  return (
    <div className="w-full my-8">
      <Navbar />
      <div className="h-[300px] md:h-[320px] flex items-center justify-center">
        <motion.h1
          initial="hidden"
          whileInView="reveal"
          transition={{ staggerChildren: 0.02 }}
          className="text-white text-6xl md:text-7xl text-center font-medium md:font-semibold tracking-wider"
        >
          {headlineCharacters.map((character: string) => (
            <motion.span
              key={character}
              transition={{ duration: 0.5 }}
              variants={textVariants}
            >
              {character}
            </motion.span>
          ))}
        </motion.h1>
      </div>
      <div className="flex flex-col space-y-9 md:space-y-11">
        <FaqQuesiton
          question="Tu pregunta amigo?"
          answer="Lorizzle ipsizzle dolor sit amizzle, hizzle adipiscing elit. Bow wow wow sapien velizzle, aliquet volutpizzle, suscipit quizzle, gravida vizzle, i'm in the shizzle. Hizzle fo shizzle mah nizzle fo rizzle, mah home g-dizzle tortizzle. Nizzle erizzle. Fusce izzle dolizzle dapibus tempizzle break yo neck, yall. Maurizzle pellentesque nibh gizzle turpizzle. I saw beyonces tizzles and my pizzle went crizzle gangster dizzle. Cool you son of a bizzle rhoncizzle shiznit. In hac pot platea dictumst. Ass dapibizzle. Things tellus urna, pretizzle crackalackin, mattizzle ac, eleifend vitae, nunc. Mammasay mammasa mamma oo sa suscipizzle. Integer sempizzle velit sizzle dope."
        />

        <FaqQuesiton
          question="Tu pregunta amigo?"
          answer="Lorizzle ipsizzle dolor sit amizzle, hizzle adipiscing elit. Bow wow wow sapien velizzle, aliquet volutpizzle, suscipit quizzle, gravida vizzle, i'm in the shizzle. Hizzle fo shizzle mah nizzle fo rizzle, mah home g-dizzle tortizzle. Nizzle erizzle. Fusce izzle dolizzle dapibus tempizzle break yo neck, yall. Maurizzle pellentesque nibh gizzle turpizzle. I saw beyonces tizzles and my pizzle went crizzle gangster dizzle. Cool you son of a bizzle rhoncizzle shiznit. In hac pot platea dictumst. Ass dapibizzle. Things tellus urna, pretizzle crackalackin, mattizzle ac, eleifend vitae, nunc. Mammasay mammasa mamma oo sa suscipizzle. Integer sempizzle velit sizzle dope."
        />

        <FaqQuesiton
          question="Tu pregunta amigo?"
          answer="Lorizzle ipsizzle dolor sit amizzle, hizzle adipiscing elit. Bow wow wow sapien velizzle, aliquet volutpizzle, suscipit quizzle, gravida vizzle, i'm in the shizzle. Hizzle fo shizzle mah nizzle fo rizzle, mah home g-dizzle tortizzle. Nizzle erizzle. Fusce izzle dolizzle dapibus tempizzle break yo neck, yall. Maurizzle pellentesque nibh gizzle turpizzle. I saw beyonces tizzles and my pizzle went crizzle gangster dizzle. Cool you son of a bizzle rhoncizzle shiznit. In hac pot platea dictumst. Ass dapibizzle. Things tellus urna, pretizzle crackalackin, mattizzle ac, eleifend vitae, nunc. Mammasay mammasa mamma oo sa suscipizzle. Integer sempizzle velit sizzle dope."
        />

        <FaqQuesiton
          question="Tu pregunta amigo?"
          answer="Lorizzle ipsizzle dolor sit amizzle, hizzle adipiscing elit. Bow wow wow sapien velizzle, aliquet volutpizzle, suscipit quizzle, gravida vizzle, i'm in the shizzle. Hizzle fo shizzle mah nizzle fo rizzle, mah home g-dizzle tortizzle. Nizzle erizzle. Fusce izzle dolizzle dapibus tempizzle break yo neck, yall. Maurizzle pellentesque nibh gizzle turpizzle. I saw beyonces tizzles and my pizzle went crizzle gangster dizzle. Cool you son of a bizzle rhoncizzle shiznit. In hac pot platea dictumst. Ass dapibizzle. Things tellus urna, pretizzle crackalackin, mattizzle ac, eleifend vitae, nunc. Mammasay mammasa mamma oo sa suscipizzle. Integer sempizzle velit sizzle dope."
        />

        <FaqQuesiton
          question="Tu pregunta amigo?"
          answer="Lorizzle ipsizzle dolor sit amizzle, hizzle adipiscing elit. Bow wow wow sapien velizzle, aliquet volutpizzle, suscipit quizzle, gravida vizzle, i'm in the shizzle. Hizzle fo shizzle mah nizzle fo rizzle, mah home g-dizzle tortizzle. Nizzle erizzle. Fusce izzle dolizzle dapibus tempizzle break yo neck, yall. Maurizzle pellentesque nibh gizzle turpizzle. I saw beyonces tizzles and my pizzle went crizzle gangster dizzle. Cool you son of a bizzle rhoncizzle shiznit. In hac pot platea dictumst. Ass dapibizzle. Things tellus urna, pretizzle crackalackin, mattizzle ac, eleifend vitae, nunc. Mammasay mammasa mamma oo sa suscipizzle. Integer sempizzle velit sizzle dope."
        />
      </div>
    </div>
  )
}

export default Faq
