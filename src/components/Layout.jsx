// Author: Anurag R Simha
// This is the parent component that renders elements of the webpage. Everything inside <Layout> are its children.
// In this case, Form and DetailsDisplay are the children of Layout. Please refer to App.jsx.
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