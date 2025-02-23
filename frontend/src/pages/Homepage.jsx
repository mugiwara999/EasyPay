export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-900">EasyPay</h1>
          <div className="flex gap-4">
            <a
              href="/signin"
              className="inline-flex h-10 items-center justify-center rounded-md px-6 text-sm font-medium text-blue-600 transition-colors hover:bg-blue-50 border border-blue-600"
            >
              Sign In
            </a>
            <a
              href="/signup"
              className="inline-flex h-10 items-center justify-center rounded-md px-6 text-sm font-medium text-white transition-colors bg-blue-600 hover:bg-blue-700"
            >
              Sign Up
            </a>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-blue-900 sm:text-5xl">Send Money with Confidence</h2>
              <p className="text-xl text-gray-600">
                Experience seamless transactions with EasyPay. Send and receive money instantly, securely, and without
                any hassle. Join millions of satisfied users who trust us with their payments.
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href="/signup"
                className="inline-flex h-12 items-center justify-center rounded-md px-8 text-base font-medium text-white transition-colors bg-blue-600 hover:bg-blue-700"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-lg bg-white shadow-lg">
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Instant Transfers</h3>
            <p className="text-gray-600">Send money anywhere in the world within seconds</p>
          </div>
          <div className="p-6 rounded-lg bg-white shadow-lg">
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Secure Payments</h3>
            <p className="text-gray-600">Bank-grade encryption for all your transactions</p>
          </div>
          <div className="p-6 rounded-lg bg-white shadow-lg">
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Zero Fees</h3>
            <p className="text-gray-600">No hidden charges or transaction fees</p>
          </div>
        </div>
      </main>
    </div>
  )
}

