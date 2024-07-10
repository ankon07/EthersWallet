import { Navbar,Welcome,Footer,Services,Transactions } from "./components";

import React, { useEffect } from 'react';

const  App=()=> {
  useEffect(() => {
    document.title = "Krypton";
  }, []);

  return (
 
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />

      </div>
      <Services />
      <Transactions />
      <Footer />

    </div>
  )
}

export default App
