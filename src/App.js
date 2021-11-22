import "./App.css";
import React, { useState } from "react";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
import SearcBar from "./components/Searchbar/Searchbar";
import { ToastContainer } from "react-toastify";
import Loader from "react-loader-spinner";

export default function App() {
  const [searchName, setSearchName] = useState('');
  const [loading, setLoadinghName] = useState(false);
  const handleFormSubmit = (e) => {
    setSearchName(() =>  'cats');
    setLoadinghName(() => true);
  };

  return (
    <div className="App">
         <ToastContainer autoClose={3000} />
         <SearcBar onSubmit={handleFormSubmit} />
        <ImageGallery searchName={searchName} />
         {loading && (
          <Loader
            type="ThreeDots"
            color="#00BFFF"
            height={80}
            width={80}
            timeout={2000}
        />
        )}
       </div>
  )
}

// class App extends Component {
//   state = {
//     searchName: "",
//     loading: false,
//   };

//   handleFormSubmit = (searchName) => {
//     this.setState({ searchName, loading: true });
//   };

//   render() {
//     const { searchName, loading } = this.state;
//     return (
//       <div className="App">
//         <ToastContainer autoClose={3000} />
//         <SearcBar onSubmit={this.handleFormSubmit} />
//         <ImageGallery searchName={searchName} />
//         {loading && (
//           <Loader
//             type="ThreeDots"
//             color="#00BFFF"
//             height={80}
//             width={80}
//             timeout={2000}
//           />
//         )}
//       </div>
//     );
//   }
// }

// export default App;
