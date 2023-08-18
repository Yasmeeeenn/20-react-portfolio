import React, { useState, useEffect } from 'react'


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = `${name.firstname} ${name.lastname}`;
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Hero />
          <Skillz />
          <ScrollToTopButton />
          <Achievement />
          <Projects />
          <AboutMe />
          
        </>
      )}
    </>
  );
}

export default App
