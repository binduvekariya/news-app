import './App.css';

import React, {useState} from 'react';
import Navbar from './component/Navbar';
import News from './component/News';
import { Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

export default function App() {

  const pageSize = 30;
  const apiKey = process.env.REACT_APP_NEWS_API;

  const [progress, setprogress] = useState(0);

 
    return (

      // props are read Only and state can be update.
      <div>
        <Navbar/>
        <LoadingBar
        height={4}
        color='#f11946'
        progress={progress}
      />
        <Routes>
          <Route exact path="/" element={<News apiKey={apiKey} setprogress={setprogress} key={"general"} pageSize={pageSize} country="in" category="general"/>}></Route>
          <Route exact path="/business" element={<News apiKey={apiKey} setprogress={setprogress} key={"business"} pageSize={pageSize} country="in" category="business"/>}></Route>
          <Route exact path="/entertainment" element={<News apiKey={apiKey} setprogress={setprogress} key={"entertainment"} pageSize={pageSize} country="in" category="entertainment"/>}></Route>
          <Route exact path="/general" element={<News apiKey={apiKey}   key={"general"} setprogress={setprogress} pageSize={pageSize} country="in"  category="general"/>}></Route>
          <Route exact path="/health" element={<News apiKey={apiKey}    key={"health"} setprogress={setprogress} pageSize={pageSize} country="in" category="health"/>}></Route>
          <Route exact path="/science" element={<News apiKey={apiKey} setprogress={setprogress} key={"science"} pageSize={pageSize} country="in"  category="science"/>}></Route>
          <Route exact path="/sports" element={<News apiKey={apiKey}  setprogress={setprogress} key={"sports"} pageSize={pageSize} country="in" category="sports"/>}></Route>
          <Route exact path="/technology" element={<News apiKey={apiKey}key={"technology"} setprogress={setprogress} pageSize={pageSize} country="in" category="technology"/>}></Route>
        </Routes>
      </div>
    )
  }

