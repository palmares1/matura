import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link } from 'react-router-dom';

const NewTest = (props) => {
  return (
    <div className="">
    <div className="here">
          <h4>Materiały / Testy / Nowy Test</h4>
          <div className="container text-center">
              <Button tag={Link} to="#" color="success">Zapisz</Button>{' '}  
          </div>
    </div>
    <div className="container">
    <Form>
        <FormGroup tag="fieldset">
          <legend>Czy zdążymy z inżynierką do 20 sierpnia?</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Spoko
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio2" />{' '}
              Oczywiście
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio3" />{' '}
              Nie widzę problemu
            </Label>
          </FormGroup>
          
        </FormGroup>
        
        <Button tag={Link} to="#" color="success">Zapisz</Button>
      </Form>
    </div>
    </div>
  );
}

export default NewTest;