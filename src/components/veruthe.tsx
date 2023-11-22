import PropTypes from 'prop-types';

const ExampleComponent = () => {
  // Console.log debugging
  const handleClick = () => {
    const value = 'Hello, World!';
    console.log(value);
  };

  // Debugger statement
  const handleDebug = () => {
    const data = { name: 'John', age: 25 };
    debugger;
    console.log(data);
  };

  // React error boundaries
  // const ErrorFallback = () => <div>Something went wrong!</div>;

  const throwError = () => {
    throw new Error('Intentional error thrown');
  };

  return (
    <div>
      <button onClick={handleClick}>Console.log</button>
      <button onClick={handleDebug}>Debugger</button>
      <button onClick={throwError}>Throw Error</button>
    </div>
  );
};

// PropTypes
ExampleComponent.propTypes = {
  // PropTypes validation example
  name: PropTypes.string.isRequired,
};

export default ExampleComponent;
