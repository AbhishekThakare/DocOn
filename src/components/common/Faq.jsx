import React, { useState } from 'react';

export const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeSection, setActiveSection] = useState('Docon');

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = {
    Docon: [
      {
        question: "What is Docon?",
        answer: "Docon is a comprehensive healthcare platform that connects patients with medical professionals through various consultation methods."
      },
      {
        question: "Is Docon available worldwide?",
        answer: "Currently, Docon serves patients in 15 countries with plans to expand globally in the coming year."
      }
    ],
    // Content: [
    //   {
    //     question: "How reliable and up-to-date is the health information on Docon?",
    //     answer: "Docon's health information is carefully curated by medical professionals and regularly updated to ensure accuracy and relevance."
    //   },
    //   {
    //     question: "Does Docon have health videos?",
    //     answer: "Docon offers a library of health education videos created by certified medical professionals."
    //   }
    // ],
    Telemedicine: [
      {
        question: "How does telemedicine work on Docon?",
        answer: "Our telemedicine platform allows you to consult with doctors remotely via secure video calls, with prescription capabilities."
      },
      {
        question: "What conditions can be treated via telemedicine?",
        answer: "Common illnesses, follow-up visits, mental health consultations, and chronic disease management can all be handled effectively."
      }
    ],
    'Online doctor': [
      {
        question: "How do I find the right doctor online?",
        answer: "You can search by specialty, read doctor profiles and patient reviews to find the perfect match for your needs."
      },
      {
        question: "Are online doctors qualified?",
        answer: "All doctors on Docon are verified, licensed professionals with at least 5 years of clinical experience."
      }
    ],
    Query: [
      {
        question: "Can I ask a medical question without a full consultation?",
        answer: "Yes, our query service allows you to post questions that doctors will answer within 24 hours."
      },
      {
        question: "Is there a limit to how many queries I can post?",
        answer: "Basic members get 3 free queries per month, while premium members have unlimited queries."
      }
    ],
    Chat: [
      {
        question: "How does the chat consultation work?",
        answer: "You can message doctors directly through our secure platform and get responses in real-time during consultation hours."
      },
      {
        question: "What's the average response time for chat?",
        answer: "Most doctors respond within 15 minutes during their active hours (9AM-9PM local time)."
      }
    ],
    'Video/Phone consultation': [
      {
        question: "How do video consultations work?",
        answer: "After booking, you'll receive a secure link to join the video call at your appointment time through our platform."
      },
      {
        question: "Can I request a phone call instead of video?",
        answer: "Yes, during booking you can select either video or phone consultation based on your preference."
      }
    ]
  };

  const navItems = [
    'Docon', 'Telemedicine', 'Online doctor', 
    'Query', 'Chat', 'Video/Phone consultation'
  ];

  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ color: '#2a6496', marginBottom: '20px' }}>Have doubts? FAQs</h1>
      
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px 0',
        flexWrap: 'wrap',
        gap: '10px'
      }}>
        {navItems.map((item) => (
          <span 
            key={item}
            style={{
              padding: '8px 12px',
              cursor: 'pointer',
              color: activeSection === item ? '#2a6496' : '#555',
              fontWeight: activeSection === item ? 'bold' : 'normal',
              borderBottom: activeSection === item ? '2px solid #2a6496' : 'none',
              borderRadius: '4px',
              transition: 'all 0.3s ease'
            }}
            onClick={() => setActiveSection(item)}
          >
            {item}
          </span>
        ))}
      </div>
      
      <hr style={{
        border: '0',
        height: '1px',
        backgroundColor: '#ddd',
        margin: '20px 0'
      }} />
      
      <h2 style={{ color: '#333', marginBottom: '15px' }}>
        {activeSection === 'Docon' ? 'About Docon' : `About ${activeSection}`}
      </h2>
      
      <div style={{ marginTop: '20px' }}>
        {faqs[activeSection].map((faq, index) => (
          <div key={index} style={{
            marginBottom: '15px',
            border: '1px solid #eee',
            borderRadius: '5px',
            overflow: 'hidden'
          }}>
            <div 
              style={{
                padding: '15px',
                backgroundColor: '#f9f9f9',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontWeight: 'bold'
              }}
              onClick={() => toggleAnswer(index)}
            >
              {faq.question}
              <span style={{ fontSize: '1.2em' }}>
                {activeIndex === index ? '-' : '+'}
              </span>
            </div>
            {activeIndex === index && (
              <div style={{
                padding: '15px',
                backgroundColor: 'white',
                borderTop: '1px solid #eee'
              }}>
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

