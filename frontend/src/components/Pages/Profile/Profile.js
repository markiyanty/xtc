import React from "react";
import { Form, Button, Container } from "react-bootstrap";





const Profile =  () => {

    return (
        <>
      <Container className="mt-3" style={{
        width: '45%', height: '55%'
      }}>
      <Form>
      <fieldset >
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Disabled input</Form.Label>
          <Form.Control id="disabledTextInput" placeholder="Disabled input" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledSelect">Disabled select menu</Form.Label>
          <Form.Select id="disabledSelect">
            <option>Disabled select</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            id="disabledFieldsetCheck"
            label="Can't check this"
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </fieldset>
    </Form>
      </Container>
     <div>
     </div>
     </>
    );
  }
  
  export default Profile;