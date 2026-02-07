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
          src="data:image/jpeg;base64,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" 
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
