import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Food Munch",
    description:
      "Food Munch is an online food delivery platform that connects users with a variety of restaurants, offering fast and convenient meal ordering..",
    image:
      "https://media.licdn.com/dms/image/sync/v2/D5627AQG3V_4-K1jVsg/articleshare-shrink_480/articleshare-shrink_480/0/1711543138369?e=1743591600&v=beta&t=nYE0fRquOJ0a2Z6A3akm_6I8mDfnICvmYieOSvYUkbs",
    tech: ["HTML", "CSS", "Bootstrap", "Flex Box"],
    liveLink: "https://balajibala12.ccbp.tech/",
  },

  {
    title: "Todos Application",
    description:
      "A Todos application is a task management tool that helps users create, organize, and track their daily tasks efficiently.",
    image:
      "https://img.freepik.com/free-photo/programming-background-collage_23-2149901770.jpg?t=st=1742986483~exp=1742990083~hmac=9f0591fa9e23e34bc44e0f94dd2b4c474f99d27ac6d28113da172b4a5d8fe7ef&w=1060",
    tech: ["HTML", "CSS", "Java Script", "Bootstrap"],
    liveLink: "https://balajidynamic.ccbp.tech/",
  },

  {
    title: "Product Catalog",
    description:
      "A product catalog is an organized digital or printed listing of products, showcasing details like descriptions, prices, images, and specifications for easy browsing and purchasing.",
    image:
      "https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074075.jpg?t=st=1742986718~exp=1742990318~hmac=7d433f2c3ad7e14aee821dcda495d731c84061b99ad9e4b7f5358c60d83eb3cf&w=1380",
    tech: ["React JS", " Tailwind CSS", "Node JS"],
    liveLink: "https://balajibalu19.github.io/react-product-catalog/",
  },
  {
    title: "Profile Explorer with Interactive Mapping",
    description:
      "Profile Explorer with Interactive Mapping is a dynamic application that visualizes user profiles on an interactive map, allowing users to explore, filter, and analyze location-based data seamlessly.",
    image:
      "https://img.freepik.com/free-vector/travelling-man-with-backpack_23-2148597753.jpg?t=st=1742987109~exp=1742990709~hmac=3f025ec23a751f17ecf5bdfa37a511cd0359577cff58f1a285d4e62a15a69b51&w=826",
    tech: ["React JS", "Tailwind CSS", "Node JS", "Express "],
    liveLink: "https://balajibalu19.github.io/Frontend_Case/",
  },
  {
    title: "Tourism Website",
    description:
      "A tourism website is an online platform that provides travel information, destination guides, booking services, and curated experiences to help users plan and enjoy their trips.",
    image:
      "https://img.freepik.com/free-photo/full-shot-travel-concept-with-landmarks_23-2149153258.jpg?t=st=1742987606~exp=1742991206~hmac=b0f06d4e95e4929312e538b5df55b3d06eec6f34476f1f38be012db0c16b8756&w=1380",
    tech: ["HTML", "CSS", "Bootstrap"],
    liveLink: "https://balajibala.ccbp.tech/",
  },
  {
    title: "Prime Video",
    description:
      "Prime Video is a streaming service by Amazon that offers a vast collection of movies, TV shows, and exclusive originals for on-demand viewing.",
    image:
      "https://img.freepik.com/free-photo/male-couch-holding-rewind-button-icon_53876-49303.jpg?t=st=1742988505~exp=1742992105~hmac=07ad8dc68fa4d46cd7446e10351cedb0a110ae9b2772a8b9cca227100d8e81e8&w=900",
    tech: ["React JS", "Tailwind CSS", "MangoDB"],
    liveLink: "https://balajidprime.ccbp.tech/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-800 rounded-lg overflow-hidden"
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-blue-400 hover:text-blue-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
