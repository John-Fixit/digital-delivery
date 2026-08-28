import { Accordion, AccordionItem } from "@heroui/react";
import { motion } from "framer-motion";
import { fadeDown, staggerContainer, viewport, zoomIn } from "../../../../lib/animations";

const faqs = [
  {
    question: "How does the escrow wallet actually work?",
    answer:
      "When you create a delivery request, your payment is moved into a secure escrow wallet — not paid directly to the rider. The rider only receives their payout once you confirm the delivery arrived as expected. If something goes wrong, funds stay protected until a dispute is resolved.",
  },
  {
    question: "How are riders and drivers verified?",
    answer:
      "Every rider goes through an identity and vehicle verification step before they can accept jobs. You can see a rider's verification status and delivery history before your package is ever picked up.",
  },
  {
    question: "What happens if my delivery doesn't arrive, or arrives damaged?",
    answer:
      "You can open a dispute directly from your dashboard. Funds held in escrow stay locked while our team reviews the case, so a rider can't be paid out on a delivery you haven't confirmed.",
  },
  {
    question: "Can I track my delivery in real time?",
    answer:
      "Yes — every shipment has a live status timeline from pickup to drop-off, so you always know exactly where your package is in the process.",
  },
  {
    question: "Do you support both local and interstate delivery?",
    answer:
      "We're starting with local, same-city delivery to get the experience right, with interstate park-to-park handoff rolling out as the network of verified drivers grows.",
  },
];

const FAQ = () => {
  return (
    <section className="landing-page-spacing py-24" id="faq">
      <motion.div
        className="flex flex-col items-center text-center mb-14"
        variants={staggerContainer(0.15)}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.h2 variants={zoomIn} className="text-3xl md:text-5xl font-black dark:text-white mb-4">
          Frequently asked questions
        </motion.h2>
        <motion.p variants={fadeDown} className="text-[#4d6599] dark:text-gray-400 text-lg max-w-2xl">
          Everything you need to know about shipping safely with escrow protection.
        </motion.p>
      </motion.div>

      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <Accordion variant="splitted" className="px-0 gap-4">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.question}
              aria-label={faq.question}
              title={<span className="font-bold text-[#0e121b] dark:text-white">{faq.question}</span>}
              className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-sm rounded-2xl"
            >
              <p className="text-[#4d6599] dark:text-gray-400 leading-relaxed pb-2">
                {faq.answer}
              </p>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
};

export default FAQ;
