import Image from 'next/image';

export default function Home() {
  return (
    <main style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
      <Image src="/uplivio-logo-web.png" alt="Uplivio Logo" width={300} height={80} />
      <h1 style={{ fontSize: '2.5rem', marginTop: '2rem', color: '#e50914' }}>
        We drive growth through precision marketing.
      </h1>
      <p style={{ fontSize: '1.2rem', marginTop: '1rem' }}>
        Uplivio is a digital agency helping businesses attract qualified leads and improve their online presence.
      </p>
      <section style={{ marginTop: '4rem' }}>
        <h2 style={{ color: '#e50914' }}>Our Services</h2>
        <ul>
          <li>Lead Generation</li>
          <li>Online Marketing</li>
          <li>Web Design</li>
        </ul>
      </section>
      <section style={{ marginTop: '4rem' }}>
        <h2 style={{ color: '#e50914' }}>Stay in Touch</h2>
        <p>Leave us your email and we'll get in touch.</p>
        <form style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px' }}>
          <input type="email" placeholder="Your email" required style={{ padding: '0.5rem', marginBottom: '1rem' }} />
          <button type="submit" style={{ padding: '0.75rem', backgroundColor: '#e50914', color: 'white', border: 'none' }}>
            Submit
          </button>
        </form>
        <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#aaa' }}>
          📧 uplivio@gmail.com<br />
          🏢 1309 Coffeen Avenue STE 1200, Sheridan, Wyoming
        </p>
      </section>
    </main>
  );
}
