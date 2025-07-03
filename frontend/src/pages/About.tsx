import MainLayout from '../layout/MainLayout'
import { useState } from 'react'

export default function About() {
  // Add CSS animations
  const animationStyles = `
    @keyframes bounceIn {
      0% {
        opacity: 0;
        transform: scale(0.3) translateY(50px);
      }
      50% {
        opacity: 1;
        transform: scale(1.05) translateY(-10px);
      }
      70% {
        transform: scale(0.9) translateY(0);
      }
      100% {
        opacity: 1;
        transform: scale(1) translateY(0);
      }
    }
  `

  const [expandedItems, setExpandedItems] = useState<number[]>([])

  const toggleExpanded = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }
  return (
    <MainLayout>
      <style>{animationStyles}</style>
      {/* Subtle Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-100/30 to-blue-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full min-h-screen px-6 py-16 flex flex-col items-center relative z-10">
        {/* Hero Section - Clean & Modern */}
        <section className="w-full max-w-7xl mb-24">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Liming Zheng
            </h1>
            <p className="text-2xl md:text-3xl text-gray-600 font-light mb-8">
              Software Engineer & Full-Stack Developer
            </p>
                          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/portfolio/assets/LimingZheng-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-gray-800 to-gray-900 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-3"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0014.414 6L12 3.586A2 2 0 0010.586 3H6a2 2 0 00-2 2zm2 1a1 1 0 011-1h3.586a1 1 0 01.707.293L13.414 6H14a1 1 0 011 1v8a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white">Download Resume</span>
                </a>
                <a
                  href="/portfolio/#/project"
                  className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-3"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white">View Projects</span>
                </a>
              </div>
          </div>
        </section>

        {/* About Me Section - Clean Layout */}
        <section className="w-full max-w-6xl mb-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Photo */}
            <div className="relative order-2 lg:order-1">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl blur-xl opacity-30"></div>
                <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
                  <img
                    src="/portfolio/assets/me.jpg"
                    alt="Liming Zheng"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  👨‍💻 Developer
                </div>
              </div>
            </div>

            {/* About Text */}
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold mb-8 text-gray-900">
                About Me
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Hi, I'm <span className="font-semibold text-blue-600">Liming Zheng</span>. I recently graduated from Northeastern University with a major in Computer Science. Prior to that, I earned a master's degree in Finance from the University of Rochester and a bachelor's degree in Finance from the University of Nebraska–Lincoln, where I honed my skills in critical thinking and collaboration.
                </p>
                <p>
                  I transitioned from finance to technology out of a deep interest in coding and problem solving. My technical skills include backend development in Java and Python, with hands-on experience in Spring Boot, RESTful API design, and cloud deployment. I've built full-stack applications and microservices, and I enjoy designing solutions that are both efficient and scalable.
                </p>
                <p>
                  Currently, I'm enthusiastic about contributing to collaborative team efforts, recognizing the potential for greater efficiency and creativity through teamwork. I'm looking for opportunities where I can continue to grow my technical skills, make meaningful contributions, and work closely with others.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience & Education - Side by Side */}
        <section className="w-full max-w-7xl mb-24">
          <div className="grid lg:grid-cols-2 gap-12">
                         {/* Experience */}
             <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
               <h2 className="text-3xl font-bold mb-8 text-gray-900 flex items-center gap-3">
                 <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                   <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                     <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                     <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                   </svg>
                 </div>
                 Experience
               </h2>
               <div className="space-y-4">
                 {[
                   {
                     title: "Software Engineer",
                     company: "World Engine AI",
                     year: "2025-Present",
                     color: "bg-green-500",
                     details: [
                       "Developed internal Operation Management platform to assist Operator Managers in tracking task distribution and monitoring teleoperation data collection.",
                       "Architected and implemented 15+ RESTful APIs using Python and FastAPI, ensuring high performance and security with JWT authentication and role-based access control (RBAC).",
                       "Designed and optimized PostgreSQL database schemas, implementing indexing strategies, query optimization, and connection pooling with a singleton pattern, improving database query efficiency by 45%.",
                       "Integrated Elasticsearch to enable full-text search and real-time analytics for task tracking and teleoperation data.",
                       "Built frontend UI using React and Ant Design, developing 20+ components and implementing Redux for state management.",
                       "Deployed microservices using Docker on Google Kubernetes Service (GKE), leveraging BigQuery for large-scale data analysis."
                     ]
                   },
                   {
                     title: "Software Engineer Intern",
                     company: "Verze LLC",
                     year: "2024",
                     color: "bg-blue-500",
                     details: [
                       "Developed microservices-based e-commerce platform (C# + TypeScript) deployed on AKS for real-time inventory management.",
                       "Developed 10+ RESTful APIs (.NET Core + Azure CosmosDB) for product uploads, searches, and purchases.",
                       "Optimized communication by combining gRPC and RESTful APIs, reducing request latency by 31%.",
                       "Implemented Redis caching, reducing CosmosDB queries by 82%, improving data retrieval speed and reducing database load.",
                       "Performed unit, integration, and load testing to ensure system reliability under high concurrency."
                     ]
                   },
                   {
                     title: "Software Engineer Intern",
                     company: "Joblogic-X",
                     year: "2023",
                     color: "bg-purple-500",
                     details: [
                       "Built a video-sharing platform (Node.js + TypeScript) with user authentication and real-time data fetching, deployed on AWS.",
                       "Developed 15+ RESTful APIs, optimizing video uploads, retrieval, and user interactions, reducing API response time by 35%.",
                       "Leveraged AWS MediaConvert for video transcoding, reducing video processing time."
                     ]
                   }
                 ].map((job, index) => (
                   <div 
                     key={index} 
                     className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-md transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
                     style={{
                       animation: `bounceIn 0.6s ease-out ${index * 0.1}s both`
                     }}
                   >
                     <button
                       onClick={() => toggleExpanded(index)}
                       className="w-full flex gap-4 p-4 items-start hover:bg-gray-100 transition-colors duration-200"
                     >
                       <div className={`w-3 h-3 ${job.color} rounded-full mt-2 flex-shrink-0 animate-pulse`}></div>
                       <div className="flex-1 text-left">
                         <h3 className="font-semibold text-gray-900">{job.title}</h3>
                         <p className="text-gray-600">{job.company} • {job.year}</p>
                       </div>
                       <svg 
                         className={`w-5 h-5 text-gray-500 mt-1 transition-transform duration-300 ${expandedItems.includes(index) ? 'rotate-180' : ''}`}
                         fill="currentColor" 
                         viewBox="0 0 20 20"
                       >
                         <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                       </svg>
                     </button>
                     
                     {/* Collapsible Content */}
                     <div className={`overflow-hidden transition-all duration-300 ${expandedItems.includes(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                       <div className="px-4 pb-4">
                         <div className="border-t border-gray-200 pt-4">
                           <ul className="space-y-2">
                             {job.details.map((detail, detailIndex) => (
                               <li key={detailIndex} className="flex gap-3 text-sm text-gray-700">
                                 <div className={`w-1.5 h-1.5 ${job.color} rounded-full mt-2 flex-shrink-0`}></div>
                                 <span>{detail}</span>
                               </li>
                             ))}
                           </ul>
                         </div>
                       </div>
                     </div>
                   </div>
                 ))}
               </div>
             </div>

            {/* Education */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-3xl font-bold mb-8 text-gray-900 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.727 1.17 1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                </div>
                Education
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">MS in Computer Science</h3>
                    <p className="text-gray-600">Northeastern University • 2022-2024</p>
                    <p className="text-green-600 font-semibold">GPA: 3.8/4.0</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">MS in Finance</h3>
                    <p className="text-gray-600">University of Rochester • 2021-2022</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">BS in Finance</h3>
                    <p className="text-gray-600">University of Nebraska-Lincoln • 2016-2020</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section - Clean Grid */}
        <section className="w-full max-w-6xl mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Technical Skills</h2>
            <p className="text-xl text-gray-600">Technologies I work with</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Java', icon: '☕', color: 'from-orange-500 to-red-500' },
              { name: 'Python', icon: '🐍', color: 'from-blue-500 to-yellow-500' },
              { name: 'Spring Boot', icon: '🍃', color: 'from-green-500 to-emerald-500' },
              { name: 'React', icon: '⚛️', color: 'from-blue-400 to-cyan-500' },
              { name: 'TypeScript', icon: '📘', color: 'from-blue-600 to-blue-700' },
              { name: 'Node.js', icon: '🟢', color: 'from-green-600 to-green-700' },
              { name: 'Cloud Services', icon: '☁️', color: 'from-orange-400 to-yellow-500' },
              { name: 'Docker', icon: '🐳', color: 'from-blue-500 to-blue-600' }
            ].map((skill, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className={`w-12 h-12 bg-gradient-to-r ${skill.color} rounded-lg flex items-center justify-center text-2xl mx-auto mb-3`}>
                  {skill.icon}
                </div>
                <h3 className="font-semibold text-gray-900">{skill.name}</h3>
              </div>
            ))}
          </div>
        </section>
      </div>
    </MainLayout>
  )
}
