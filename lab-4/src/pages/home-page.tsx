interface HomePageProps {
  username: string;
  onLogout: () => void;
}

function HomePage({ username, onLogout }: HomePageProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Welcome, {username}!
        </h1>
        <p className="text-gray-600 mb-6">You have successfully logged in.</p>
        <button
          onClick={onLogout}
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default HomePage;
