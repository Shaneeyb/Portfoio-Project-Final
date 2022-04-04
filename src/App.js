import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/MainComponent';


function App() {
return (
	<div style={{
		backgroundColor: "#FFFAF3",
		color: "#2D2D2D",
        height: '100%',
		width: "100%",
  		minHeight : '100vh',
		minWidth: "100vw",
		zIndex: "-10",
		overflowX: "hidden"
	}}>
			<Main />
	</div>
);
}

export default App;
