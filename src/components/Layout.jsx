// Author: Anurag R Simha
// This file helps render the elements of the webpage. This is a wrapper for Form and DetailsDisplay. Everything passed
// within <Layout> is wrapped here in {children}.
import '../App.css';

const Layout = ({ children }) => {
  return (
    <div className='container'>
      <div className='card'>
        <h1>Input Validator</h1>
        <hr className="header-line" />
        <main>
            {children}
        </main>
      </div>
      <div>
        <p className='madewithmessage'>Made with love and dedication by Anurag R Simha</p>
      </div>
    </div>
  );
};

export default Layout;