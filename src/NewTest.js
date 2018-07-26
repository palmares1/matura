import React from 'react';
import { Button, Form, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';

const NewTest = (props) => {
  return (
    <div className="">
    <div className="here">
          <h4>Materiały / Testy / Nowy Test</h4>
          <div className="container text-center">
              <Button tag={Link} to="#" color="success">Zapisz</Button>{' '}  
              <Button tag={Link} to="#" color="danger">Anuluj</Button>
          </div>
    </div>
    <div className="container">
    <Form>
        <FormGroup tag="fieldset">
          <legend>Tu będą testy</legend>
          
          
        </FormGroup>
        
        <Button tag={Link} to="#" color="success">Zapisz</Button>{' '}
        <Button tag={Link} to="#" color="danger">Anuluj</Button>
      </Form>
    </div>
    </div>
  );
}

export default NewTest;