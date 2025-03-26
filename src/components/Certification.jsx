import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    name: "PearlThoughts-Internship-Frontend Developer",
    organization: "PearlThoughts",
    date: "Oct 2024",
    link: "https://drive.google.com/file/d/14yJm9aCKJ-J1Chg313ZOUmw_ji3jDZ1l/view?usp=drivesdk",
  },
  {
    name: "Programming Foundation With Python",
    organization: "NxtWave",
    date: "Apr 2023",
    link: "https://certificates.ccbp.in/academy/programming-foundations-with-python?id=GZXUQVUZVN",
  },
  {
    name: "Build Your Own Responsive Website",
    organization: "NxtWave",
    date: "May 2023",
    link: "https://certificates.ccbp.in/academy/build-your-own-responsive-website?id=VEROUPJMIK",
  },
  {
    name: "Build Your Own Static Website",
    organization: "NxtWave",
    date: "December 2023",
    link: "https://certificates.ccbp.in/academy/static-website?id=OOYBNPOQTS",
  },

  {
    name: "SQL Database",
    organization: "NxtWave",
    date: "Jan 2024",
    link: "https://certificates.ccbp.in/academy/introduction-to-databases?id=PWMWPIMGDP",
  },
  {
    name: "Developer Foundations",
    organization: "NxtWave",
    date: "Feb 2024",
    link: "https://certificates.ccbp.in/academy/developer-foundations?id=DCVGBTTTDF",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-center mb-12">Certifications</h2>
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors"
            >
              <div className="flex items-center mb-4">
                <Award className="w-8 h-8 text-blue-500 mr-3" />
                <h3 className="text-lg font-semibold">{cert.name}</h3>
              </div>
              <p className="text-gray-400 mb-2">{cert.organization}</p>
              <p className="text-gray-500 text-sm mb-4">{cert.date}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                View Certificate
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Certifications;
