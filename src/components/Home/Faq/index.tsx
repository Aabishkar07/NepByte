"use client";
import { useState } from "react";

const FAQ = () => {
const [openItems, setOpenItems] = useState<{ [key: number]: boolean }>({});

  const faqData = [
    {
      question: "What services does NepByte offer as an IT company in Kathmandu?",
      answer:
        "NepByte provides a full range of IT services including web and mobile app development, SEO (local, technical, video), digital marketing, UI/UX and graphic design, domain registration, and web hosting. We deliver customized solutions to help businesses grow online.",
    },
    {
      question: "How can NepByte help my business grow in Kathmandu?",
      answer:
        "We help by creating professional websites and apps, improving your search engine rankings, managing your social media and paid ads, and designing attractive branding materials. Our goal is to boost your online visibility and increase your customers.",
    },
    {
      question: "Why should I choose NepByte over other IT companies in Kathmandu?",
      answer:
        "NepByte stands out because of our experienced team, personalized approach, affordable pricing, and strong local market knowledge. We have a proven track record of delivering quality results to Nepali businesses.",
    },
    {
      question: "Does NepByte provide support after project completion?",
      answer:
        "Yes! We offer ongoing support and maintenance to ensure your website, app, or digital marketing campaigns run smoothly long after launch.",
    },

    {
      question: "How can I get a quote for my project?",
      answer:
        "Simply contact us through our website or call us directly. We will listen to your needs and provide a free consultation along with a detailed, customized project quote.",
    },
    {
      question: "Is NepByte experienced with SEO for businesses in Kathmandu?",
      answer:
        "Absolutely. NepByte specializes in SEO tailored for the Nepali market, including local SEO to help your business rank higher on Google and attract customers nearby.",
    },

  ];

const toggleFAQ = (index: number) => {
  setOpenItems((prev) => ({
    ...prev,
    [index]: !prev[index],
  }));
};

  return (
    <section className="py-16 md:py-24 relative">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
            <span className="text-primary text-sm font-medium">Got Questions?</span>
          </div>

          <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked{" "}
            <span className="relative inline-block">
              <span className="text-primary bg-gradient-to-r from-primary to-tealGreen bg-clip-text text-transparent">
                Questions
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-tealGreen rounded-full opacity-60"></div>
            </span>
          </h2>

          <p className="text-muted text-opacity-80 text-lg max-w-2xl mx-auto">
            Find answers to common questions about our IT services, processes, and how we can help grow your business.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className="group relative rounded-2xl h-fit"
              style={{ alignSelf: 'flex-start' }}
            >
              {/* Background and Border */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/3 via-transparent to-primary/5 rounded-2xl" />
              <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-white/20 transition-colors duration-300" />

              {/* FAQ Content */}
              <div className="relative p-6 md:p-8">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left focus:outline-none"
                  aria-expanded={openItems[index] || false}
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-white text-lg md:text-xl font-semibold leading-relaxed flex-1">
                      {faq.question}
                    </h3>

                    {/* Toggle Icon */}
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center mt-1">
                      <svg
                        className={`w-5 h-5 text-primary transition-transform duration-300 ${
                          openItems[index] ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </button>

                {/* Answer with proper height handling */}
                <div className={`transition-all duration-500 ease-in-out ${
                  openItems[index] 
                    ? "opacity-100 mt-6" 
                    : "opacity-0 mt-0"
                }`}>
                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      openItems[index] 
                        ? "max-h-screen" 
                        : "max-h-0"
                    }`}
                  >
                    <div className="pt-6 border-t border-white/10">
                      <p className="text-muted text-opacity-80 text-base md:text-lg leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Left Accent Line */}
              <div className={`absolute left-0 top-8 w-1 bg-gradient-to-b from-primary to-tealGreen rounded-full transition-all duration-300 ${
                openItems[index] 
                  ? "h-16 opacity-100" 
                  : "h-0 opacity-0"
              }`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;