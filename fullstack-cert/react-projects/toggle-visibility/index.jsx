const { useState } = React;

function ToggleApp() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(prevState => !prevState);
  };

  return (
    <div id="toggle-container">
      <button id="toggle-button" onClick={toggleVisibility}>
        {isVisible ? 'Hide' : 'Show'} Text
      </button>
      {isVisible && <p id="text">This is a toggleable text!</p>}
    </div>
  );
}
