import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link } from 'react-router-dom';

const NewLecture = (props) => {
  return (
    <div className="">
    <div className="here">
          <h4>Materiały / Wykłady / Nowy wykład</h4>
          <div className="container text-center">
            {/* <a href = '/NewLecture'>adadsasd</a> */}
            <Button tag={Link} to="#" color="success">Zapisz</Button>{' '}  
          </div>
    </div>
    <div className="container">
    <Form>
        <FormGroup>
          <Label for="tematWykladu">Temat wykładu</Label>
          <Input type="text" name="tematWykladu" id="tematWykladu" placeholder="Wpisz temat wykładu" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Wybierz kategorie</Label>
          <Input type="select" name="select" id="exampleSelect">
          <option>Java</option>
            <option>React</option>
            <option>Matematyka</option>
            <option>Fizyka</option>
            <option>C#</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Tekst wykładu</Label>
          <Input type="textarea" rows="20" name="textWykladu" id="textWykladu" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">Plik</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            Załącz pliki o maksymalnym rozmiarze 20MB.
          </FormText>
        </FormGroup>
        <FormGroup tag="fieldset">
          <legend>Status wykładu</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Finalny, zostanie natychmiast opublikowany
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Szkic
            </Label>
          </FormGroup>
        </FormGroup>
        <Button tag={Link} to="#" color="success">Zapisz</Button>
      </Form>
    </div>
    </div>
  );
}

export default NewLecture;