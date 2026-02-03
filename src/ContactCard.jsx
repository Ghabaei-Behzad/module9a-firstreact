function ContactCard() {
  const email = "contact@sarahdev.com";
  const linkedIn = "://linkedin.com";

  return (
    <div style={{ maxWidth: '400px', margin: '10px auto', padding: '16px', borderRadius: '8px', border: '1px solid #e1e5e9', backgroundColor: '#f8f9fa', fontFamily: 'Arial, sans-serif' }}>
      <h3 style={{ margin: '0 0 10px 0', color: '#333', fontSize: '18px' }}>Connect with Me</h3>
      <p style={{ margin: '5px 0' }}><strong>Email:</strong> {email}</p>
      <p style={{ margin: '5px 0' }}><strong>LinkedIn:</strong> {linkedIn}</p>
    </div>
  );
}

export default ContactCard;

/*
function ContactCard() {
  return (
    <div style={{ maxWidth: '400px', margin: '10px auto', padding: '15px', border: '1px solid #ddd', borderRadius: '8px', textAlign: 'center', fontFamily: 'Arial' }}>
      <h3>Contact Me</h3>
      <p>Email: sarah.j@example.com</p>
      <button style={{ cursor: 'pointer' }}>Message</button>
    </div>
  );
}
export default ContactCard;
*/
