function Application(){
    return(
        <div>
            <h1>Hello from React</h1>
            <p>I was rendered from Application component</p>
        </div>
    );
}

ReactDOM.render(<Application />, document.getElementById('container'));