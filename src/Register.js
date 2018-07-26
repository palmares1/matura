import React from 'react';
import { Form, Text, RadioGroup, Radio } from 'react-form';

const Register = () => {
  return (

        <div className="loginform">
            <div className="loginforminput">
                <Form>
                {formApi => (
                    <Form>
                    { formApi => (
                    <form onSubmit={formApi.submitForm}>
                    <label htmlFor="hello">Dane logowania</label>
                    <Text field="email" id="email" placeholder="Email jako login" />
                    <Text field="remail" id="remail" placeholder="Powtórz e-mail" />
                    <Text field="password" id="password" placeholder="Hasło" />
                    <Text field="rpassword" id="remail" placeholder="Powtórz hasło" />
                    <label htmlFor="hello">Dodatkowe informacje</label>
                    <Text field="imie" id="imie" placeholder="Imię" />
                    <Text field="drugirImie" id="drugirImie" placeholder="Drugie imię opcjonalnie" />
                    <Text field="nazwisko" id="nazwisko" placeholder="Nazwisko" />
                    <RadioGroup field="gender">
          <label htmlFor="male" className="mr-2">Male</label>
          <Radio value="male" id="male" className="mr-3 d-inline-block" />
          <label htmlFor="female" className="mr-2">Female</label>
          <Radio value="female" id="female" className="d-inline-block" />
        </RadioGroup>
                    <Text field="dataUrodzenia" id="dataUrodzenia" placeholder="Data urodzenia" />
                    <Text field="rpassword" id="remail" placeholder="Powtórz hasło" />
                    <Text field="rpassword" id="remail" placeholder="Powtórz hasło" />
                    <label htmlFor="hello">Dane adresowe</label>
                    <Text field="ulica" id="ulica" placeholder="Ulica" />
                    <Text field="nrDomu" id="nrDomu" placeholder="Numer Domu" />
                    <Text field="nrLokalu" id="nrLokalu" placeholder="Numer lokalu opcjolanie" />
                    <Text field="kodPocztowy" id="kodPocztowy" placeholder="Kod pocztowy" />
                    <Text field="miasto" id="miasto" placeholder="Miasto" />
                    <button type="submit">Zarejestruj się</button>
                    </form>
    )}
                    </Form>
  )}
                    </Form>
             </div>
         </div>

  );
}

export default Register;
