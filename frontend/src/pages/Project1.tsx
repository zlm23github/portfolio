import MainLayout from '../layout/MainLayout'

export default function Project1() {
  return (
    <MainLayout>
      <div className="bg-gray-100 shadow rounded-lg p-8 w-full h-full">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Project 1 Title</h2>
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=600&q=80"
          alt="Project 1"
          className="w-full h-96 object-cover rounded-lg mb-6"
        />
        <p className="text-gray-700 text-lg">
          This is the detailed description for Project 1. You can add more information, features, technologies used, and links here.
        </p>
      </div>
    </MainLayout>
  )
}
