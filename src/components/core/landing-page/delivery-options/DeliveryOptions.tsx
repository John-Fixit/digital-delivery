import { motion } from "framer-motion";
import {
  fadeDown,
  fadeUp,
  skewLeft,
  skewRight,
  skewUp,
  staggerContainer,
  viewport,
  zoomIn,
} from "../../../../lib/animations";

const options = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBAKvLs85DAiCPIoXqbfVPAHjlUvKMyYtsQthuqovetb-Mk18duduagNdkqCHvu05uyvAe2TJ6VUDe2wgOGNZ-o9uyJh8RZlsMybxDwgMQv8Oc6iwaYn0PYuv10AME0-Wu2qA2zxkMWSA2w7Psz7QYFkI2z--pOZHS0UXXAj5UYdXDIb10kHq4tVzaN4rcfwitDxQpcGAchFFyLiUJzMoDyIjLPUTpI1OvQK1qax2OTNH342k_zCY80vknQ-Qf32m5M9JqwDKWv5SQ",
    alt: "Intra-state",
    title: "Intra-state Express",
    desc: "Quick delivery within your city or state. Average 4-hour turnaround.",
    variant: skewLeft,
    delay: 0,
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuALhE7hNrgvPSFjMXU534bRI5iMGWZwgyU-vFPH-Hgtby1vOGWfE8QDyYzF9hWWP-Q5ahTXLRzUG4pgEik1Cm0tg6BpMMcS25hrnH3q_dfY74G8FxSDyMn3GHgjl3dfRwK1FdCnJgN5yCsqRq9WU6EyEWFiF2r1YcHEKP-RXVoURYqSFWM03aPd1acxPhdfSdIYavcqXhRbWQ0LZc6OPajXlmVhp22cjBa0oAAXNFuTReHwtV5VkquJv8oeYKa7yZqI-5F6cPYo45s",
    alt: "Park to park",
    title: "Park-to-Park",
    desc: "The most economical way for interstate cargo. Send from hub to hub.",
    variant: skewUp,
    delay: 0.1,
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWP8tbX8gruKOO9bnyUlMeTFRa5melPD7E3m--Q8x-0c6oH9RClNoS24KuBMs-Hk-6Lb6NTVv29E7xOCA20kWIzurtJZ9WI50youVNtbU2ruq0Avf1FiIl8ZRaUjGPzXr134ecc0tRAZKefpMnSiY8RqZe5WtNgVsoQSXGYIpCaUOXh1ffzfbH9kVueawjDl4CdOmFV9wryBDVsZKn0tGN42mC7wm9A1bJxKmNUU89r01mGKm5j54YdgvkLV4eby-jz_Jkr04UsME",
    alt: "Door to door",
    title: "Door-to-Door Courier",
    desc: "Premium service picking up from your doorstep and delivering directly to theirs.",
    variant: skewRight,
    delay: 0.2,
  },
];

const DeliveryOptions = () => {
  const repeatViewport = { once: false, amount: 0.45 };

  return (
    <>
      <section
        className="w-full py-24 bg-gray-200 dark:bg-background-dark"
        id="delivery-options"
      >
        <div className="landing-page-spacing">
          {/* Heading */}
          <motion.div
            className="flex flex-col items-center text-center mb-16"
            variants={staggerContainer(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={repeatViewport}
          >
            <motion.h2
              variants={zoomIn}
              className="text-3xl md:text-5xl font-black text-default-900 mb-4"
            >
              Flexible Delivery Options
            </motion.h2>
            <motion.p variants={fadeDown} className="text-default-500 text-lg max-w-2xl">
              Tailored logistics solutions for every scale of shipment.
            </motion.p>
          </motion.div>

          {/* Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer(0.16)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {options.map(({ src, alt, title, desc, variant }, i) => (
              <motion.div
                key={i}
                variants={variant}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 180, damping: 18 }}
                className="group cursor-pointer"
              >
                <div className="h-64 rounded-3xl overflow-hidden mb-6 shadow-md">
                  <motion.img
                    alt={alt}
                    src={src}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.12 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
                    whileHover={{ scale: 1.06 }}
                  />
                </div>

                <motion.h4
                  variants={fadeUp}
                  className="text-2xl font-bold mb-2"
                >
                  {title}
                </motion.h4>
                <motion.p variants={fadeUp} className="text-gray-500">
                  {desc}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default DeliveryOptions;
