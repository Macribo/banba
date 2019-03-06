import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';

export default class Sitenav extends React.Component {
  constructor(props) {
    super(props);

    this.togglemodal = this.togglemodal.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      modal: false
    };
  }

  togglemodal() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Modal
          isOpen={this.state.modal}
          togglemodal={this.togglemodal}
          className={this.props.className}
        >
          <ModalHeader togglemodal={this.togglemodal}>
            <h1>Roibeárd Mac Unfraidh:</h1>
          </ModalHeader>
          <ModalBody id="modbod">
            <i className="fas fa-mobile-alt fa-4x" />
            <br />
            <h3>+49 163 390 5881</h3>
            <br />
            <i className="far fa-envelope fa-4x" />
            <br />
            <h3>roibeard.mac.unfraidh@gmail.com</h3>
          </ModalBody>
          <ModalFooter
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px'
            }}
          >
            <Button color="secondary" onClick={this.togglemodal}>
              done
            </Button>
          </ModalFooter>
        </Modal>

        <Navbar color="light" light expand="md">
          <NavbarBrand href="/" />
          <h3> Roibeárd Mac Unfraidh </h3>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink id="contact" onClick={this.togglemodal}>
                  Contact
                </NavLink>
              </NavItem>
              <NavItem>
                {/* <a href="examplefile.pdf" download>Link text</a> */}
                <NavLink href="./RMU_CV.pdf" download>
                  CV
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
