import UserProfile from './UserProfile';
import ContactCard from './ContactCard';

function App() {
  return (
    <div style={{ padding: '40px 20px', backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', fontFamily: 'Arial' }}>Our Development Team</h1>
      
      {/* Profile 1 (Original) */}
      <UserProfile />
      <ContactCard />

      <div style={{ margin: '40px 0', borderTop: '2px solid #ddd' }}></div>

      {/* Profile 2 (Bonus Challenge: Different name, bio, and image) */}
      <div style={{ maxWidth: '400px', margin: '20px auto', padding: '24px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', backgroundColor: 'white', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
        <img 
          src="https://images.unsplash.com" 
          alt="Marcus's profile" 
          style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', border: '4px solid #3498db', marginBottom: '16px' }} 
        />
        <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Marcus Reed</h1>
        <p style={{ fontSize: '16px', color: '#555' }}>
          UI/UX Designer who loves minimalist aesthetics and clean code.
        </p>
      </div>
      
      <div style={{ maxWidth: '400px', margin: '10px auto', padding: '16px', borderRadius: '8px', border: '1px solid #e1e5e9', backgroundColor: '#e3f2fd', fontFamily: 'Arial, sans-serif' }}>
        <h3 style={{ margin: '0 0 10px 0', color: '#333', fontSize: '18px' }}>Connect with Marcus</h3>
        <p style={{ margin: '5px 0' }}><strong>Email:</strong> marcus.design@example.com</p>
      </div>
    </div>
  );
}

export default App;





/*
import UserProfile from './UserProfile';
import ContactCard from './ContactCard';

function App() {
  return (
    <div style={{ backgroundColor: '#f0f2f5', minHeight: '100vh', padding: '20px' }}>
      <UserProfile />
      <ContactCard />
    </div>
  );
}
export default App;
*/
///////////////////////////////////////////
/*
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/
