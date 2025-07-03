import MainLayout from '../layout/MainLayout'
import { Link } from 'react-router-dom'

export default function Project() {
  return (
    <MainLayout>
      {/* 背景渐变和圆形装饰 */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-100/30 to-blue-100/30 rounded-full blur-3xl"></div>
      </div>
      <div className="w-full min-h-screen px-6 py-16 flex flex-col items-center relative z-10">
        <section className="w-full max-w-7xl mb-24">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projects
            </h1>
            <p className="text-2xl md:text-3xl text-gray-600 font-light mb-8">
              Selected works & experiments
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Project Card 1 */}
            <Link
              to="/project/1"
              className="w-full bg-white/80 rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 block overflow-hidden"
              style={{ animation: `bounceIn 0.6s ease-out 0s both` }}
            >
              <div
                className="w-full h-48 rounded-lg mb-6 bg-cover bg-center"
                style={{ backgroundImage: "url('/portfolio/assets/project1.jpg')" }}
              />
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <h3 className="text-2xl font-semibold text-gray-900">Mini Product Search</h3>
              </div>
              <p className="text-gray-600">A high-performance monolithic product search application built with Spring Boot, MySQL, and Elasticsearch. Supports flexible multi-parameter search, full-text search, and efficient data synchronization between MySQL and Elasticsearch.</p>
            </Link>
            {/* Project Card 2 */}
            <Link
              to="/project/2"
              className="w-full bg-white/80 rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 block overflow-hidden"
              style={{ animation: `bounceIn 0.6s ease-out 0.1s both` }}
            >
              <div
                className="w-full h-48 rounded-lg mb-6 bg-cover bg-center"
                style={{ backgroundImage: "url('/portfolio/assets/data_modeling.jpg')" }}
              />
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                <h3 className="text-2xl font-semibold text-gray-900">Box Office Prediction</h3>
              </div>
              <p className="text-gray-600">A system for predicting movie box office performance using machine learning and MongoDB. Supports data analysis, and feature usage analytics.</p>
            </Link>
            {/* Project Card 3 */}
            <Link
              to="/project/3"
              className="w-full bg-white/80 rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 block overflow-hidden"
              style={{ animation: `bounceIn 0.6s ease-out 0.2s both` }}
            >
              <div
                className="w-full h-48 rounded-lg mb-6 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80')" }}
              />
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-gray-400 rounded-full animate-pulse"></div>
                <h3 className="text-2xl font-semibold text-gray-900">Upcoming Project...</h3>
              </div>
              <p className="text-gray-600">...</p>
            </Link>
          </div>
        </section>
      </div>
      <style>{`
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
      `}</style>
    </MainLayout>
  )
} 