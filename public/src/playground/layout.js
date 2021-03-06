const Layout = (props) => {
  return ( 
    <div>
      <p>Header</p>
      {props.children}
      <p>Footer</p>
    </div>
  )
}

const template = (
  <div>
    <h1>Page Title</h1>
    <p>This is my page</p>
  </div>
);

ReactDOM.render((
  <Layout>
    <div>
      <h1>Page Title</h1>
      <p>This is my page</p>
    </div>
  </Layout>
), document.querySelector("#app"));