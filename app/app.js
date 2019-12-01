const App = () => {
	const a = parseFloat( prompt("Enter number A") );
	/* making sure it's a proper number */
	if (isNaN(a)) {
		return <h2>You should have entered a number here</h2>
	}
	const z = prompt("Enter math sign"); 
	const b = parseFloat( prompt("Enter number B") );
	/* making sure it's a proper number */
	if (isNaN(b)) {
		return <h2>You should have entered a number here</h2>
	}

	let result; 				
	/* making sure it's a proper math sign */
	if (z === "+") { 				
		return result = <h2>Addition result is: {a + b}</h2> 	
	}
	else if (z === "-") {			
		return result = <h2>Subtraction result is: {a - b}</h2>
	}
	else if (z === "*") { 			
		return result = <h2>Multiplication result is: {a * b}</h2>
	}
	else if (z === "/") {			
		return result = <h2>Division result is: {a / b}</h2>
	}
	else {
		return result = <h2>Proper math sign missed!</h2>
	}
}

ReactDOM.render(
  	<App />, 							
  	document.getElementById("app")
);
