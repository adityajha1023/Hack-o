import React, { useState } from 'react';
import { Plus, } from 'lucide-react';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What is Hack O\'Clock 2.0?',
      answer: 'Hack O\'Clock 2.0 is a high-impact hackathon designed to connect academic learning with real-world tech challenges. It brings together teams, mentors, judges, and sponsors to collaborate on innovative projects and launch careers in the tech industry.'
    },
    {
      question: 'What are the rules and guidelines?',
      answer: 'All projects must be original work created during the hackathon. We encourage collaboration and creativity while maintaining ethical standards. Detailed guidelines will be provided during the kickoff event.'
    },
    {
      question: 'What prizes are awarded?',
      answer: 'Winning teams receive prizes, recognition, and opportunities to connect with industry leaders and potential employers. We\'re also proud to support the top teams with resources and mentorship for further development.'
    },
    {
      question: 'How long is the hackathon?',
      answer: 'Hack O\'Clock 2.0 features both online and on-campus rounds. The online round allows broader participation, while the top 80 teams advance to the on-campus final round where 60 teams stay overnight for an intensive development session.'
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black px-6 sm:px-10 lg:px-20 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 mb-12 lg:mb-16">
          <p className="font-bold text-[#E10600] uppercase text-p lg:w-[25%]">
            FAQ
          </p>
          <div className="w-full lg:w-[75%]">
            <h2 className="text-h3 font-semibold mb-4 text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-p text-white/70">
              Find answers to common questions about Hack O'Clock 2.0. If you have more questions, feel free to reach out to our team.
            </p>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 lg:w-[75%] lg:ml-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-start justify-between gap-6 p-6 bg-white/5 border border-gray-800 shadow-xl rounded-t-xl hover:shadow-2xl transition-all duration-300 text-left"
              >
                <span className="text-h6 font-semibold text-white/90 transition-colors duration-300">
                  {faq.question}
                </span>
                <Plus
                  size={20}
                  className={`text-white/90 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="p-6 bg-white/5 border border-t-0 border-gray-800 rounded-b-xl">
                  <p className="text-p text-gray-300">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className='flex flex-row gap-2 py-4 lg:w-[75%] lg:ml-auto mt-6'>
        <a href="#" className='py-2 px-4 bg-white text-black font-semibold border border-[rgba(0,0,0,0.1)] hover:scale-105 transition-all duration-300 rounded-full'>Still got Questions?</a>
        <a href="#" className='py-2 px-4 bg-[rgba(255,255,255,0.2)] backdrop-blur-md font-semibold border border-[rgba(0,0,0,0.1)] hover:scale-105 transition-all duration-300 rounded-full text-gray-300'>Contact us</a>
      </div>
      </div>
    </section>
  );
}

export default FAQ;
