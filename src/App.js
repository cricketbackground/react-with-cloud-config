import logo from './logo.svg';
import './App.css';
import { Config, CloudConfigOptions, ConfigObject } from 'spring-cloud-config';

const cloudConfigOptions: CloudConfigOptions = {
  configPath: __dirname + '/config',
  activeProfiles: ['dev1'],
  level: 'debug'
};

let myConfig: ConfigObject;

Config.load(cloudConfigOptions).then((theConfig: ConfigObject) => {
  myConfig = theConfig;
  // now run your application with the loaded config props.
  // do this by saving the returned config object somewhere,
  // or by using the Config.instance() helper.
});

function App() {
  //console.log(`Employee Phone is : ${Config.instance().employee.phone}`);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
