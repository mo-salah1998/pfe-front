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
import {CButton, CCard, CCardBody, CCardHeader,} from '@coreui/react'
import axios from "axios";

class Buttons extends Component {

  constructor(props) {
    super(props);


    this.toggle = this.toggle.bind(this);

    this.state = {
      dropdownOpen: false,
      redirect: null,
      email: '',
      object: '',
      body: '',
    };
  }


  handleCHange = input => e => {
    this.setState({[input]: e.target.value});
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  submitForm = async (e) => {
    e.preventDefault();
    const {email, object, body} = this.state;

    //console.log(email)

//    const {addToast} = useToasts();

    axios.post("/api/email", {
      to: email,
      subject: object,
      text: body

    })
      .then(function (response) {

        if (response.status === 200) {
          console.log('email envouyer avec success');
          alert("Mail envoyer avec success ");

          
          // addToast('success' , {
          //   appearance: 'success',
          //   autoDismiss: true,
          // });

        }
      })
      .catch(function (error) {

        console.log(error);
        //alert("error : Mail n'été pas envoyer ");
        // addToast("error ", {
        //   appearance: "error", autoDismiss: true,
        // });
      });
  }


  render() {
    const {email, object, body} = this.state;
    return (
      <div className="animated fadeIn">
        <div className="email-app">
          <CCard>
            <CCardHeader>

              <h3 className="text-center">Nouveau Email</h3>
            </CCardHeader>
            <CCardBody>
              <main>
                <Form onSubmit={this.submitForm}>

                  <FormGroup row className="mb-3">
                    {/* strange reactstrap sizing for Label: className="col-2 col-sm-1 col-form-label" */}
                    <Label for="email" xs={2} sm={1}>To:</Label>
                    <Col xs={10} sm={11}>
                      <Input type="email" id="email" placeholder="email" value={email}
                             onChange={this.handleCHange('email')}/>
                    </Col>
                  </FormGroup>
                  <FormGroup row className="mb-3">
                    <Label for="object" xs={2} sm={1}>Object:</Label>
                    <Col xs={10} sm={11}>
                      <Input type="text" id="object" placeholder="Object" value={object}
                             onChange={this.handleCHange('object')}/>
                    </Col>
                  </FormGroup>
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
                               placeholder="Click here to reply" value={body}
                               onChange={this.handleCHange('body')}></Input>
                      </FormGroup>
                      <FormGroup>
                        <CButton type="submit" color="success" className={'mr-1'} value="Submit">Send</CButton>
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </main>
            </CCardBody>

          </CCard>
        </div>

      </div>

    )
  }
}

export default Buttons
