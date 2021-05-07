import React, {Component} from 'react';
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Form,
  FormGroup,
  Input,
  Label,
  Row
} from 'reactstrap';

import {CButton, CCard, CCardBody, CCardHeader} from '@coreui/react'

class Buttons extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <div className="email-app">
          <CCard>
            <CCardHeader>

              <h3 className="text-center">Nouveau Email</h3>
            </CCardHeader>
            <CCardBody>
              <main>

                <Form>
                  <FormGroup row className="mb-3">
                    {/* strange reactstrap sizing for Label: className="col-2 col-sm-1 col-form-label" */}
                    <Label for="to" xs={2} sm={1}>To:</Label>
                    <Col xs={10} sm={11}>
                      <Input type="email" id="to" placeholder="Type email" autoComplete="email"/>
                    </Col>
                  </FormGroup>
                  <FormGroup row className="mb-3">
                    <Label for="cc" xs={2} sm={1}>CC:</Label>
                    <Col xs={10} sm={11}>
                      <Input type="email" id="cc" placeholder="Type email" autoComplete="email"/>
                    </Col>
                  </FormGroup>
                  <FormGroup row className="mb-3">
                    <Label for="bcc" xs={2} sm={1}>BCC:</Label>
                    <Col xs={10} sm={11}>
                      <Input type="email" id="bcc" placeholder="Type email" autoComplete="email"/>
                    </Col>
                  </FormGroup>
                </Form>
                <Row>
                  <Col sm={11} className="ml-auto">
                    <div className="toolbar" role="toolbar">
                      <ButtonGroup className={'mr-1'}>
                        <CButton color="light"><span className="fa fa-bold"></span></CButton>
                        <CButton color="light"><span className="fa fa-italic"></span></CButton>
                        <CButton color="light"><span className="fa fa-underline"></span></CButton>
                      </ButtonGroup>
                      <ButtonGroup className={'mr-1'}>
                        <CButton color="light"><span className="fa fa-align-left"></span></CButton>
                        <CButton color="light"><span className="fa fa-align-right"></span></CButton>
                        <CButton color="light"><span className="fa fa-align-center"></span></CButton>
                        <CButton color="light"><span className="fa fa-align-justify"></span></CButton>
                      </ButtonGroup>
                      <ButtonGroup className={'mr-1'}>
                        <CButton color="light"><span className="fa fa-indent"></span></CButton>
                        <CButton color="light"><span className="fa fa-outdent"></span></CButton>
                      </ButtonGroup>
                      <ButtonGroup className={'mr-1'}>
                        <CButton color="light"><span className="fa fa-list-ul"></span></CButton>
                        <CButton color="light"><span className="fa fa-list-ol"></span></CButton>
                      </ButtonGroup>
                      <ButtonGroup>
                        <CButton color="light" className={'mr-1'}><span className="fa fa-trash-o"></span></CButton>
                        <Button color="light" className={'mr-1'}><span className="fa fa-paperclip"></span></Button>
                        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                          <DropdownToggle caret color="light">
                            <span className="fa fa-tags"></span>
                          </DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem>add label<Badge color="danger">Home</Badge></DropdownItem>
                            <DropdownItem>add label<Badge color="info">Job</Badge></DropdownItem>
                            <DropdownItem>add label<Badge color="success">Clients</Badge></DropdownItem>
                            <DropdownItem>add label<Badge color="warning">News</Badge></DropdownItem>
                          </DropdownMenu>
                        </ButtonDropdown>
                      </ButtonGroup>
                    </div>
                    <FormGroup className="mt-4">
                      <Input type="textarea" id="message" name="body" rows="12"
                             placeholder="Click here to reply"></Input>
                    </FormGroup>
                    <FormGroup>
                      <CButton type="submit" color="success" className={'mr-1'}>Send</CButton>
                      <CButton type="submit" color="secondary" className={'mr-1'}>Draft</CButton>
                      <CButton type="submit" color="danger" className={'mr-1'}>Discard</CButton>
                    </FormGroup>
                  </Col>
                </Row>
              </main>
            </CCardBody>

          </CCard>
        </div>

      </div>

    )
  }
}

export default Buttons
