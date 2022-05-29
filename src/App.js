import './App.css';
import React from 'react';

// import {  Link, Route, Routes, Router} from 'react-router-dom';
// 이건 안돼

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//  이건 돼

import Header from './Pages/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import Example3Page from './Pages/Example3Page';
import Example4Page from './Pages/Example4Page';
import Example5Page from './Pages/Example5Page';
import MaterialUI01 from './Main/Material_UI/materialUI01';
import AxiosExamplePage from './Pages/AxiosExamplePage';

function App() {
	return (
		//

		//     {/* <TopHeader/> */}
		//     <Header/>
		//     <hr></hr>
		//     {/* <Route exact path = "/" component={} />
		//     <Route path="/about" component={About} />
		//     <Route path*/}

		//     {/* <Main/>  */}

		//     <div>
		//       <Route exact path="/" component={Home}/>
		//       <Route path="/about" component={About}/>

		//       {/* <Route path="/03page" component={Example3Page}/> */}
		//     </div>
		// </Router>

		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/03page" element={<Example3Page />} />
				<Route path="/04page" element={<Example4Page />} />
				<Route path="/05page" element={<Example5Page />} />
				<Route path="/axiosexamplepage" element={<AxiosExamplePage />} />
				<Route path="/material" element={<MaterialUI01 />} />
			</Routes>
		</Router>

		// {/* <Route exact path="/" component={Home}/> */}
		// {/* <Switch>
		//     <Route path="/about/:name" component={About}/>
		//     <Route path="/about" component={About}/>
		// </Switch> */}
		// {/* <Route path="/about/:name" component={About}/>
		// <Route path="/about" component={About}/> */}
	);
}

export default App;
