import React from "react";

// Question 3: Write the necessary React code for generating the layout using flex

const FlexboxLayout = () => {
  return (
    <div className="min-h-screen flex flex-col max-w-2xl mx-auto bg-white">
      <header className="bg-cyan-400 text-white p-4 text-center font-semibold">
        Header
      </header>

      <div className="flex flex-1">
        <div className="flex flex-col flex-1">
          <div className="bg-purple-300 text-white p-6 flex-1 flex items-center justify-center font-semibold">
            Hero
          </div>

          <div className="bg-green-400 text-white p-6 flex-1 flex items-center justify-center font-semibold">
            Sidebar
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="bg-yellow-400 text-white p-6 flex-1 flex items-center justify-center font-semibold">
            <div className="text-center">
              <div className="text-lg mb-2">Main Content</div>
              <div className="text-sm opacity-90">
                This is where the main page content would go. You can add any
                HTML content here.
              </div>
            </div>
          </div>

          <div className="bg-gray-500 text-white p-6 flex-1 flex items-center justify-center font-semibold">
            Extra Content
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="bg-teal-500 text-white p-4 flex-1 text-center font-semibold">
          Related Images
        </div>
        <div className="bg-pink-300 text-white p-4 flex-1 text-center font-semibold">
          Related Posts
        </div>
      </div>

      <footer className="bg-orange-400 text-white p-4 text-center font-semibold">
        Footer
      </footer>
    </div>
  );
};

export default FlexboxLayout;
