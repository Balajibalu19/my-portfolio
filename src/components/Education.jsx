import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    degree: "Full Stack Development",
    school: "NxtWave",
    year: "Jan 2023 - sep 2024",
    description: "Full Stack Development with MERN Specialization",
  },

  {
    degree: "Bachelor of Technology",
    school: "Santhiram Engineering College",
    year: "2020 - 2024",
    description: "Specialized in Electronics & Communication Engineering",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-center mb-12">Education</h2>
        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="mb-8 bg-gray-800 rounded-lg p-6 relative"
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 p-3 rounded-full">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                  <p className="text-gray-400 text-lg mb-2">{edu.school}</p>
                  <div className="flex items-center text-gray-500 mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{edu.year}</span>
                  </div>
                  <p className="text-gray-300">{edu.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
