import MainLayout from '../layout/MainLayout'
import { Link } from 'react-router-dom'

export default function Project() {
  return (
    <MainLayout>
      <div className="bg-gray-100 shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Projects</h2>
        <div className="flex flex-col gap-8">
          {/* Project Card 1 */}
          <Link
            to="/project/1"
            className="w-full bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-xl cursor-pointer transition block"
          >
            <div
              className="w-full h-48 rounded-lg mb-6 bg-cover bg-center"
              style={{ backgroundImage: "url('/assets/project1.jpg')" }}
            />
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Mini Product Search</h3>
            <p className="text-gray-600">A high-performance monolithic product search application built with Spring Boot, MySQL, and Elasticsearch.
            Supports flexible multi-parameter search, full-text search, and efficient data synchronization between MySQL and Elasticsearch.</p>
          </Link>
          {/* Project Card 2 */}
          <Link
            to="/project/2"
            className="w-full bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-xl cursor-pointer transition block"
          >
            <div
              className="w-full h-48 rounded-lg mb-6 bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=600&q=80')" }}
            />
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Project 2</h3>
            <p className="text-gray-600">Description of project 2</p>
          </Link>
          {/* Project Card 3 */}
          <Link
            to="/project/3"
            className="w-full bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-xl cursor-pointer transition block"
          >
            <div
              className="w-full h-48 rounded-lg mb-6 bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80')" }}
            />
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Project 3</h3>
            <p className="text-gray-600">Description of project 3</p>
          </Link>
        </div>
      </div>
    </MainLayout>
  )
} 