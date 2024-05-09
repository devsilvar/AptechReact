import { useState } from 'react';

const ContolledForm = () => {
  const [values, setvalues] = useState('');
  const [Cities, setCities] = useState('');
  const [termAgreement, settermAgreement] = useState(false);

  const handleCities = (e) => {
    setCities(e.target.value);
  };

  const handleAgreemenet = (e) => {
    settermAgreement(e.target.checked);
  };

  return (
    <section>
      <form action=''>
        <input
          type='text'
          value={values}
          onChange={(e) => setvalues(e.target.value)}
        />
        <div>result: {values}</div>

        <select name='' id='' onChange={handleCities}>
          <option value='Abeokuta'>Abeokuta</option>
          <option value='Ikeja'>Ikeja</option>
          <option value='Oshodi'>Oshodi</option>
          <option value='Kola'>Kola</option>
        </select>
      </form>

      <div>Chosen City: {Cities}</div>

      <input
        type='checkbox'
        name=''
        id=''
        value={termAgreement}
        onChange={handleAgreemenet}
      />

      <p>staus: {termAgreement ? 'checked' : 'unchecked'}</p>
    </section>
  );
};

export default ContolledForm;
