import { type FormEvent, useState } from "react";
import { toast } from "sonner";

interface LoginPageProps {
  onLogin: (username: string) => void;
}

function LoginPage({ onLogin }: LoginPageProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const validUsername = "admin";
  const validPassword = "password123";

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!username) {
      toast.error("Username is required");
      return;
    }
    if (!password) {
      toast.error("Password is required");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      if (username === validUsername && password === validPassword) {
        toast.success("Login successful");
        onLogin(username);
      } else {
        setErrorMessage("Invalid credentials");
        toast.error("Invalid credentials");
      }
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <main className="flex flex-col md:flex-row md:min-h-screen">
      {/* Left Section */}
      <div className="flex-1 relative hidden md:block">
        <img
          src="/auth.jpg"
          alt="Authentication"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      {/* Right Section */}
      <div className="flex-1 flex items-center justify-center bg-gray-50 p-4 sm:p-8 md:p-16 min-h-screen">
        <div className="mx-auto max-w-sm w-full bg-white rounded-lg shadow-md p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Login</h2>
            <p className="text-sm text-gray-600 mt-1">
              Enter your credentials below to login to your account
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your username"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <a
                  href="#"
                  className="text-xs text-blue-600 hover:text-blue-500"
                >
                  Forgot password?
                </a>
              </div>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your password"
              />
            </div>

            {errorMessage && (
              <div className="text-red-500 text-sm">{errorMessage}</div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-2 px-4 rounded-md text-white font-medium ${
                isSubmitting
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              }`}
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </button>
          </form>

          <div className="mt-4 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="#" className="text-blue-600 hover:text-blue-500">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default LoginPage;
