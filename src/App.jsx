import React from 'react';
import Header from './components/Header';
import Feed from './components/Feed';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <Feed />
      <footer className="text-center p-4 bg-gray-800 text-white">
        &copy; 2023 My Social Media App
      </footer>
      <style jsx global>{`
        body {
          font-family: 'Arial', sans-serif;
        }
      `}</style>  
    </div>
  );
}

export default App;
