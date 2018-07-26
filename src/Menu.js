import React from 'react';
import logo from './logo.png';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  //NavItem,
  //NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  import {
    Link,
  } from 'react-router-dom';
  import 'bootstrap/dist/css/bootstrap.css';

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="container">
        <Navbar color="light" light expand="md">
          
          <NavbarBrand href="/"><img src={logo} className="App-logo" alt="logo" /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>Administracja</DropdownToggle>
                <DropdownMenu right>
                  <Link to="/UserList"><DropdownItem>Użytkownicy</DropdownItem></Link>
                  <Link to="/GroupList"><DropdownItem>Grupy</DropdownItem></Link>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>Materiały</DropdownToggle>
                <DropdownMenu right>
                  <Link to="/LectureList"><DropdownItem>Wykłady</DropdownItem></Link>
                  <Link to="/TestList"><DropdownItem>Testy</DropdownItem></Link>
                  <Link to="/ProgrammingTaskList"><DropdownItem>Zadania programistyczne</DropdownItem></Link>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>Lekcje</DropdownToggle>
                <DropdownMenu right>
                  <Link to="/ExerciseList"><DropdownItem>Zarządzanie</DropdownItem></Link>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>Kursy</DropdownToggle>
                <DropdownMenu right>
                  <Link to="/CourseList"><DropdownItem>Zarządzanie</DropdownItem></Link>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Menu;
