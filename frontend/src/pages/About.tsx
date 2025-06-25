import MainLayout from '../layout/MainLayout'

export default function About() {
  return (
    <MainLayout>
      <div className="w-full h-full px-4 py-12 flex flex-col items-center">
        {/* About Me Section */}
        <section className="w-full max-w-5xl flex flex-col md:flex-row items-center md:items-start mb-20">
          <div className="flex-1 text-gray-900 text-xl md:pr-12">
            <h2 className="text-3xl font-extrabold mb-4">About Me</h2>
            <p className="mb-8 leading-relaxed font-medium">
              Hi, I'm Liming Zheng. I recently graduated from Northeastern University with a major in Computer Science. Prior to that, I earned a master's degree in Finance from the University of Rochester and a bachelor's degree in Finance from the University of Nebraska–Lincoln, where I honed my skills in critical thinking and collaboration.<br /><br />
              I transitioned from finance to technology out of a deep interest in coding and problem solving. My technical skills include backend development in Java and Python, with hands-on experience in Spring Boot, RESTful API design, and cloud deployment. I’ve built full-stack applications and microservices, and I enjoy designing solutions that are both efficient and scalable.<br /><br />
              Currently, I'm enthusiastic about contributing to collaborative team efforts, recognizing the potential for greater efficiency and creativity through teamwork. I’m looking for opportunities where I can continue to grow my technical skills, make meaningful contributions, and work closely with others.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 mt-8">
              <a
                href="/portfolio/assets/LimingZheng-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 !text-white no-underline text-lg font-bold py-2 px-12 rounded-lg shadow-lg hover:bg-gray-700 transition focus:outline-none"
              >
                GET MY RESUME
              </a>
            </div>
          </div>
          {/* photo */}
          <div className="flex-shrink-0 w-full md:w-[400px] h-[400px] bg-gray-200 rounded-lg shadow-md flex items-center justify-center mt-12 md:mt-0 overflow-hidden">
            <img
              src="/portfolio/assets/me.jpg"
              alt="Liming Zheng"
              className="object-cover w-full h-full"
            />
          </div>
        </section>

        {/* Experience Section */}
        <section className="w-full max-w-5xl mb-20">
          <h2 className="text-3xl font-extrabold mb-6">Experience</h2>
          <div className="bg-white rounded-lg shadow p-8 text-lg text-gray-800">
            <ul className="list-disc pl-6 space-y-2">
              <li>Software Engineer Full-Time at World Engine AI (2025)</li>
              <li>Software Engineer Intern at Verze LLC (2024)</li>
              <li>Full stack Engineer Intern at Joblogic-X (2023)</li>
            </ul>
          </div>
        </section>

        {/* Education Section */}
        <section className="w-full max-w-5xl mb-20">
          <h2 className="text-3xl font-extrabold mb-6">Education</h2>
          <div className="bg-white rounded-lg shadow p-8 text-lg text-gray-800">
            <ul className="list-disc pl-6 space-y-2">
              <li>MS in Computer Science, Northeastern University, 2022-2024   GPA: 3.8/4.0</li>
              <li>MS in Finance, University of Rochester, 2021-2022</li>
              <li>BS in Finance, University of Nebraska-Lincoln, 2016-2020</li>
            </ul>
          </div>
        </section>
      </div>
    </MainLayout>
  )
}
