import About from './components/About';
import Navbar from './components/Navbar'
import Alert from './components/Alert'
import TextForm from './components/TextForm';
import { React, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleModes = async function () {
    if (mode === 'light') {
      setMode('dark')
      setModeMessage('Enable light mode')
      setText('dark')
      document.body.style.backgroundColor = "#214a73"
      showAlert("Dark mode activated", "success")
    } else {
      setMode('light')
      setModeMessage('Enable Dark Mode')
      setText('light')
      document.body.style.backgroundColor = "#e2f2ec"
      showAlert("Light mode activated", "success")
    }
  }

  const [mode, setMode] = useState('light');
  const [text, setText] = useState('light');
  const [modeMessage, setModeMessage] = useState('Enable Dark Mode');

  return (
    <Router>
      <Navbar name="Text Utils" mode={mode} modeMessage={modeMessage} toggleMode={toggleModes} text={text} />
      <Alert alert={alert} />
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/' element={<TextForm />} />
      </Routes>
    </Router>
  );
}

export default App;
