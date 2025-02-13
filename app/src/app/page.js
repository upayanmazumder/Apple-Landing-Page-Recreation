import Image from "next/image";
import Shop from "../components/landing/shop/shop";

export default function Home() {
  return (
    <main>
<section>
  <Shop />
  <a
    href="/iphone-16-pro"
    style={{
      display: 'block',
      position: 'relative',
      width: '100%',
      height: '90vh',
    }}
  >
    <Image
      src="/landing/hero-iphone16.jpg"
      alt="iPhone 16 Pro"
      fill
      priority
      style={{
        objectFit: 'cover',
        objectPosition: 'center',
      }}
    />
    <div
      style={{
        position: 'absolute',
        top: '10%',
        left: '50%',
        transform: 'translateX(-50%)',
        textAlign: 'center',
        color: 'white',
      }}
    >
      <h1>iPhone 16 Pro</h1>
      <p>Built for Apple Intelligence.</p>
    </div>
    <div
      style={{
        position: 'absolute',
        bottom: '10%',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '20px',
      }}
    >
      <button>Learn More</button>
      <button>Buy</button>
    </div>
  </a>
</section>

    </main>
  );
}
