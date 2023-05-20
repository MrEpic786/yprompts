import Navbar from '@components/navbar';
import '@styles/globals.css';

export const metadata = {
  title: 'YPrompts - Yahkart',
  description: 'Discover and share prompts from your favorite artists',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>
        <main className="app">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
