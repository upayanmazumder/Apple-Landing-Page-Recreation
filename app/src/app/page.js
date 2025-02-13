import Image from "next/image";

import LearnMoreButton from "../components/landing/ui/buttons/learn-more/learn-more";
import BuyButton from "../components/landing/ui/buttons/buy/buy";
import Shop from "../components/landing/shop/shop";

import pageStyles from "./page.module.css";

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
            <h1 className={pageStyles.heading}>iPhone 16 Pro</h1>
            <h2 className={pageStyles.subHeading}>Built for Apple Intelligence.</h2>
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
            <LearnMoreButton />
            <BuyButton />
          </div>
        </a>
      </section>
      <section>
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
            src="/landing/iphone15-large-tall-blue.jpg"
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
            <h1 className={pageStyles.heading}>iPhone 16</h1>
            <h2 className={pageStyles.subHeading}>Built for Apple Intelligence.</h2>
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
            <LearnMoreButton />
            <BuyButton />
          </div>
        </a>
      </section>
    </main>
  );
}
