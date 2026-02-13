// Author: Anurag R Simha
// This file helps render the elements of the webpage. This is a wrapper for Form and DetailsDisplay. Everything passed
// within <Layout> is wrapped here in {children}.
import '../App.css';

const Layout = ({ children }) => {
  return (
    <div className='validator-container'>
      <div className='card'>
        <h1><b>Input Validator</b></h1>
        <hr className="mt-2 mb-3" />
        <main>
            {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;