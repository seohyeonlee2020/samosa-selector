import './App.css';
import { useState } from 'react';

const App = () => {
	const [count, setCount] = useState(0);
	const [multiplier, setMultiplier] = useState(1);
	const updateCount = () => setCount(count + multiplier);

  return (
    <div className="App">
		<div className="header">
			<h1>Samosa Selector</h1>
			<h2>Count: {count}</h2>
			<img className="samosa" src="https://www.indianhealthyrecipes.com/wp-content/uploads/2019/11/samosa-recipe.jpg"
			alt="Samosa"  onClick={updateCount}/>
		</div>

	<div className = "container">
		<div className = "upgrade">
			<h3>Double Stuffed 👯‍♀️</h3>
			<p>Double the samosas per click</p>
			<button>10 samosas</button>
		</div>

		<div className = "upgrade">
			<h3>Party Pack 🎉</h3>
			<p>5x per click</p>
			<button>100 samosas</button>
		</div>

		<div className = "upgrade">
			<h3>Full Feast 👩🏽‍🍳</h3>
			<p>10x per click</p>
			<button>1000 samosas</button>
		</div>
    </div>
	</div>
  )
}

export default App
