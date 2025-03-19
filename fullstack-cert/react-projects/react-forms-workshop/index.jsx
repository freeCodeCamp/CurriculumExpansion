export const SuperheroForm = () => {
  const powerSourceOptions = [
    'Bitten by a strange creature',
    'Radioactive exposure',
    'Science experiment',
    'Alien heritage',
    'Ancient artifact discovery',
    'Other'
  ];

  const powersOptions = [
    'Super Strength',
    'Super Speed',
    'Flight',
    'Invisibility',
    'Telekinesis',
    'Other'
  ];

  const [heroName, setHeroName] = React.useState('');
  const [realName, setRealName] = React.useState('');
  const [powerSource, setPowerSource] = React.useState('');
  const [powers, setPowers] = React.useState([]);

  const handlePowersChange = e => {
    const { value, checked } = e.target;
    setPowers(checked ? [...powers, value] : powers.filter(p => p !== value));
  };

  return (
    <div className='form-wrap'>
      <h2>Superhero Application Form</h2>
      <p>Please complete all fields</p>

      <form method='post' action='https://superhero-form-demo.freecodecamp.org'>
        <div className='section'>
          <label>
            Hero Name
            <input
              type='text'
              value={heroName}
              onChange={e => setHeroName(e.target.value)}
            />
          </label>

          <label>
            Real Name
            <input
              type='password'
              value={realName}
              onChange={e => setRealName(e.target.value)}
            />
          </label>
        </div>

        <label className='section column'>
          How did you get your powers?
          <select
            value={powerSource}
            onChange={e => setPowerSource(e.target.value)}
          >
            <option value='' disabled>
              Select one...
            </option>
            {powerSourceOptions.map(source => (
              <option key={source} value={source}>
                {source}
              </option>
            ))}
          </select>
        </label>

        <label className='section column'>
          List your powers (select all that apply):
          {powersOptions.map(power => (
            <label key={power}>
              <input
                type='checkbox'
                value={power}
                checked={powers.includes(power)}
                onChange={handlePowersChange}
              />
              <span>{power}</span>
            </label>
          ))}
        </label>

        <button
          className='submit-btn'
          type='submit'
          disabled={
            !heroName || !realName || !powerSource || powers.length === 0
          }
        >
          Join the League
        </button>
      </form>
    </div>
  );
};
