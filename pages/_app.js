import { Inter } from "next/font/google";
const Inter = Inter({ subsets: ["latin"], variable: "--inter" });

function App({ Component, pageProps }) {
  return (
    <div className={Inter.variable}>
      <Component {...pageProps} />
    </div>
  );
}

export default App;
