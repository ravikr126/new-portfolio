"use client";
import React from "react";
import Link from "next/link";
import { Vortex } from "../ui/vortex";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { FaLinkedin } from "react-icons/fa";
import { AuroraText } from "@/components/ui/aurora-text";
import { Linkedin, Quote } from "lucide-react";
type Props = {};

const TestimonialsAndRecommandation = (props: Props) => {


  const testimonials = [
     {
      quote:
        "I had the pleasure of working with Ravi for a year, during which he was part of my team as a Frontend Developer. Ravi consistently demonstrated strong technical skills in JavaScript and React, and brought a sharp eye for detail to every component he worked on. What really stood out about Ravi was not just his ability to write clean, maintainable code, but also his proactive involvement in architectural discussions and design decisions. He showed a deep understanding of frontend best practices, performance optimization, and modern UI/UX patterns. His contributions often went beyond implementation—he regularly offered thoughtful suggestions that improved the overall quality and scalability of our applications. Ravi is a reliable team player, always open to feedback and collaboration, and quick to pick up new technologies. Any team would benefit from his technical expertise and problem-solving mindset. I look forward to seeing all that he accomplishes in the future.",
      name: "Nitin Dixit",
      title: "Frontend Team Lead",
      linkedin: "https://www.linkedin.com/in/dixitnitin26/",
    },
    {
      quote:
        "He is very sincere and hardworking for the work that is assigned to the position.. All the best for ur bright future ",
      name: "Hemant Verma",
      title: "Colleague",
      linkedin: "https://www.linkedin.com/in/hemantverma282/",
    },
    {
      quote:
        "Sir explained everything very clearly and genuinely according to the present market trends. He gave me a clear direction on how to study effectively, when and how to start applying for jobs, and the best way to learn and grow in this field. Most importantly, he helped me understand the right approach to reach my goals — not just what to do, but how to do it in the right order. The session gave me great clarity and awareness about my current situation, my next steps, and how to move forward",
      name: "Vineela Velpuri",
      title: "Mentee",
    },
    {
      quote:
        "Ravi Sir is always ready to answer any doubts. He will pick ur call, give us guidanc e whenever we need it. He is a pro in web development and dsa🫡✨. He understand the weak points of students and is so flexible to set the schedule according to student's needs. Sir gives a proper roadmap for skills enhancement and conducts tests too. Overall, Sir is very approachable and good mentor. If one sincerely follows his words, he/she is sure shot ready to crack a big MNC with a high package.",
      name: "Tanushree B",
      title: "Student",
    },
    {
      quote:
        "The session was quite intrusting my all doubt are clear now and I am satisfied with all the questions. I am interested to reconnect revi once and to be clear towards my path. This session is very helpful for the career path.",
      name: "Om Gupta",
      title: "Mentee",
    },
    {
      quote:
        'Ravi Kumar is an expert in career development and resume building. He provides valuable insights on how to craft a strong and impactful resume that attracts recruiters. His guidance covers key aspects such as structuring the resume, highlighting skills effectively, using ATS-friendly formatting, and tailoring it to job descriptions. "Extremely helpful insights! Ravi Kumar’s tips helped me make my resume more professional and appealing to recruiters." "Practical and to the point. His advice on optimizing resumes for ATS really made a difference." "Highly recommended for job seekers. His strategies helped me land interview calls quickly',
      name: "Simran kashyap",
    },
    {
      quote:
        "Sir patiently listened to my introduction and my issues and then he explained how we could tackle the problems with his mentorship. He seemed interested in making me reach my goals, which is his goal too. He said that he had the resources needed to guide me in DSA and front-end as well. It was a good discussion.",
      name: "Sanika Deokule",
    },
    {
      quote:
        "I want to take a moment to express my heartfelt gratitude for the session you conducted. It was incredibly insightful and inspiring. Your expertise, clarity of explanation, and ability to connect with me made the learning experience effective.",
      name: "Navneet",
    },

    {
      quote:
        "The session was incredibly beneficial in guiding me towards finding a job and equipping me with the right knowledge. It was highly informative, and the insights provided were both practical and enlightening. The expertise and clarity shared during the session have been instrumental in shaping my understanding and boosting my confidence for the next steps in my career.",
      name: "Chetan Kirange",
    },
    {
      quote:
        "The session was great and i learned a lot fro the Ravi Kumar. He made me understand where i was going wrong and where can i improve with which i will surely achieve success. Looking forward to learn under his guidance",
      name: "Rasika ghatpande",
    },

    {
      quote:
        "I had some doubts regarding my interview experiences by taking the session with Ravi most of the things I got cleared and the session is very good talked about some the work related things and the roadmap to achieve the job its good talking with the mentor",
      name: "Harish",
    },
    {
      quote:
        "I recently attended a session with Ravi Kumar Sir, and it was incredibly helpful. He listened to all my queries attentively and provided clear, thoughtful answers. His friendly and approachable manner made the session enjoyable, and he explained exactly how to tackle the challenges I was facing. I came away from the session with a much better understanding of the issues and practical steps to address them. I’m really grateful for his guidance.",
      name: "Tina Murmu",
    },
    {
      quote:
        'Sir are very supportive they understand problem you are facing while learning and give you solution ,i take free trial with Ravi sir and i say its was best one of mentor session i ever get in the preplaced .if you are looking for the mentor i will really suggest you to try a free trial with sir then you understand its really worth it . "Thank you Ravi sir for your guidence "',
      name: "Rohit Darunde",
    },
    {
      quote:
        "It was a nice session with ravi sir.He had listened my all problems very carefully which i liked most.He had explained all the things according to my queries.He understood very well where i was lacking in my coding journey according to that he had given me a roadmap.",
      name: "Pragatii Patra",
    },

    {
      quote:
        "I very much impressed with Ravi sir, they guide me in very good way and they have clarified mostly my all doubts.",
      name: "Chetan Malviya",
    },
    {
      quote: "it was a great session with sir.",
      name: "Nirmal Sugandhi",
    },
    {
      quote:
        "Mentor cleared my doubts and everything I asked if I need further assistance on the course or mentorship",
      name: "Ashutosh Sharma",
    },
    {
      quote:
        "It Was Great Session With Ravi Kumar Sir , Thank you So Much for your guidance",
      name: "Rohan Thorat",
    },

    {
      quote:
        "Super helpful and incredibly friendly. The guidance was clear, insightful, and exactly what I needed. Really appreciated the supportive approach throughout!",
      name: "Nupoor Khatri",
    },
    {
      quote:
        "It was an incredibly valuable experience. He was friendly and easy to talk to, which made the whole process really comfortable. He provided deep insights and actionable feedback that helped me significantly enhance my resume. He clearly explained some simple mistakes I hadn’t noticed, which were likely holding me back from getting selected. His guidance was thoughtful, clear, and focused to my specific goals. I truly appreciated his support and would highly recommend him to anyone looking to level up their resume or career profile.",
      name: "Snehal Chaudhari",
    },
    {
      quote:
        "It was good session, along with resume tips, Ravi also shared his experiences that will help me during this job hunting phase.",
      name: "Kritika jha",
    },
    {
      quote:
        "Ravi helped me tailor my resume by correcting my mistakes and sharing insights that will improve my chances of getting shortlisted. It was good session.",
      name: "Soumya Bhandarkar",
    },
    {
      quote: "Great explanation and tips regarding job applications.",
      name: "Pushkar Dakshvanshi",
    },
    {
      quote:
        "Ravi provided invaluable insights and actionable advice. Their ability to understand my challenges and offer practical solutions was truly impressive. I’m grateful for their time and guidance, which left a lasting positive impact on me.",
      name: "Randheer nayak",
    },
    {
      quote:
        "It was a great experience. He pointed me in the right direction whenever I was stuck. Gave feedback on my coding proficiency and areas for improvement.",
      name: "Yash Kumar",
    },
    {
      quote:
        "I had the pleasure of attending a career guidance session that was truly transformative. The discussion covered essential aspects like goal setting, skill development, and strategic planning for securing opportunities in the tech industry. The insights shared were practical, inspiring, and tailored to my aspirations. I left the meeting with a clear roadmap and renewed motivation to achieve my career goals. I am incredibly grateful for the valuable guidance and support provided.",
      name: "Srashti Farkya",
    },
    {
      quote:
        "It was one of the best session i have ever had and the info he provided was very detailed and valuable.",
      name: "farzan",
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 relative overflow-hidden">
      <Vortex
        backgroundColor="transparent"
        rangeY={200}
        particleCount={300}
        baseHue={155} // Emerald to match your accent color
        rangeSpeed={1.2}
        baseSpeed={0.1}
        className="flex items-center flex-col justify-center w-full h-full "
      >
        <div className="container mx-auto max-w-6xl relative z-10 px-2 sm:px-4">
          <div className="text-center space-y-2 md:space-y-3 mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-sm sm:text-md md:text-xl font-bold text-foreground">
              Testimonials
            </h2>
            <p className="font-pacifico text-muted-foreground text-3xl md:text-4xl">
              Word on the street&nbsp;
              <AuroraText> About me</AuroraText>
            </p>
          </div>
          <div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
              items={testimonials.slice(0, Math.ceil(testimonials.length / 2))}
              direction="left"
              speed="slow"
            />
          </div>
          <div className=" rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
            />
          </div>

          <div className="flex justify-center ">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors text-sm sm:text-base"
            >
              Let's Work Together
            </Link>
          </div>
        </div>
      </Vortex>
    </section>
  );
};

export default TestimonialsAndRecommandation;
