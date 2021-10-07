import "../styles/globals.css";
import SideBar from "../components/sidebar";

function MyApp({ Component, pageProps }) {
  return (
    <div className='grid grid-cols-12 gap-6 mx-4 my-5'>
      <div className='col-span-12 text-center bg-white lg:col-span-3 rounded-2xl'><SideBar/></div>
      <div className='col-span-12 bg-white lg:col-span-9'>
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
