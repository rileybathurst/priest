// this was something that was worked on quickly but not implemented so should not go live in the site

import React from "react";
import Layout from "../components/layout";
import HeaderContact from "../components/headercontact";
import Seo from "../components/seo";

// Handling Multiple Inputs https://reactjs.org/docs/forms.html#handling-multiple-inputs
class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // email: 'test@m.c',
      // hasData: false,
      metal: "Steel",
    };

    // these are just base create the events pieces
    this.handleValueEmpty = this.handleValueEmpty.bind(this);
    this.handleValueFull = this.handleValueFull.bind(this);

    this.handleChange = this.handleChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleValueEmpty(event) {
    const target = event.target;
    const value = target.value; // this has to have some extra if its a checkbox or other non text
    const name = target.name;
    this.setState({
      [name]: value,
      hasData: false,
    });
  }

  handleValueFull(event) {
    const target = event.target;
    const value = target.value; // this has to have some extra if its a checkbox or other non text
    const name = target.name;
    this.setState({
      [name]: value,
      hasData: true,
    });
  }

  handleChange(event) {
    this.setState({ metal: event.target.value });
  }

  handleSubmit(event) {
    // nothing gets submitted it just opens a new window
    // %0D%0A is the break
    // window.open doesnt work on firefox ios
    window.open(
      "mailto:info@priestsheetmetal.co.nz?cc=" +
        this.state.email +
        "&subject=Priest Sheetmetal Quote Enquiry&body=Thanks for your enquiry " +
        this.state.customer +
        ",%0D%0AWe will get back you asap with your enquiry about" +
        this.state.metal +
        ",%0D%0A" +
        this.state.thickness +
        "mm thick%0D%0AWith a " +
        this.state.finish +
        "finish,%0D%0AThanks You"
    );
    // location.href=('mailto:infor@priestsheetmetal.co.nz?cc=' + this.state.email + '&subject=Priest Sheetmetal Quote Enquiry&body=Thanks for your enquiry ' + this.state.customer + ',%0D%0AWe will get back you asap with your enquiry about ' + this.state.metal + ',%0D%0A' + this.state.thickness + 'mm thick%0D%0AWith a ' + this.state.finish + 'finish,%0D%0AThanks You');
    event.preventDefault();
  }

  render() {
    // before the return
    // https://reactjs.org/docs/conditional-rendering.html
    let customer;
    let input;
    // let metal;
    let thickness;
    let finish;

    // Im fine with doubling these its pretty minor as I need to adjust a couple things
    // if (this.state.customer === '' || this.state.customer === undefined ) { // flipped these to get the default working
    if (this.state.customer) {
      customer = (
        <div className="order-form-section test-input field--not-empty">
          <label>Name:</label>
          <input
            name="customer"
            type="text"
            value={this.state.customer}
            onChange={this.handleValueEmpty}
            customerData={false}
          />
        </div>
      );
      console.log("customer full");
    } else {
      customer = (
        <div className="order-form-section test-input">
          <label>Name:</label>
          <input
            name="customer"
            type="text"
            value={this.state.customer}
            onChange={this.handleValueEmpty}
            customerData={false}
          />
        </div>
      );
      console.log("customer empty");
    }

    if (this.state.email === "" || this.state.email === undefined) {
      input = (
        <div className="order-form-section test-input">
          <label>email:</label>
          <input
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleValueEmpty}
            hasData="false"
          />
        </div>
      );
      // console.log('data empty');
    } else {
      input = (
        <div className="order-form-section test-input field--not-empty">
          <label>email:</label>
          <input
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleValueFull}
            className="field--not-empty"
            hasData="true"
          />
        </div>
      );
      // console.log('data full');
    }

    if (this.state.thickness === "" || this.state.thickness === undefined) {
      // flipped these to get the default working
      thickness = (
        <div className="order-form-section test-input">
          <label>Thickness (mm):</label>
          <input
            name="thickness"
            type="number"
            value={this.state.thickness}
            onChange={this.handleValueEmpty}
            thicknessData={false}
          />
        </div>
      );
      // console.log('customer empty');
    } else {
      thickness = (
        <div className="order-form-section test-input field--not-empty">
          <label>Thickness (mm):</label>
          <input
            name="thickness"
            type="number"
            value={this.state.thickness}
            onChange={this.handleValueEmpty}
            thicknessData={false}
          />
        </div>
      );
      // console.log('customer full');
    }

    if (this.state.finish === "" || this.state.finish === undefined) {
      // flipped these to get the default working
      finish = (
        <div className="order-form-section test-input">
          <label>Finish:</label>
          <input
            name="finish"
            type="text"
            value={this.state.finish}
            onChange={this.handleValueEmpty}
            finishData={false}
          />
        </div>
      );
      // console.log('customer empty');
    } else {
      finish = (
        <div className="order-form-section test-input field--not-empty">
          <label>Finish:</label>
          <input
            name="finish"
            type="text"
            value={this.state.finish}
            onChange={this.handleValueEmpty}
            finishData={false}
          />
        </div>
      );
      // console.log('customer full');
    }

    return (
      <form onSubmit={this.handleSubmit}>
        {customer}
        {input} {/* needs to be the same in both */}
        <div className="order-form-select">
          <label>Metal:</label>
          <select
            value={this.state.metal}
            onChange={this.handleChange}
            className="select-css"
          >
            <option value="steel">Steel</option>
            <option value="stainless">Stainless</option>
            <option value="copper">Copper</option>
          </select>
        </div>
        {/*           <div className="order-form-slider">
            <label>Thickness (mm):</label>
            <input type="text" id="textInput" value="" />
            {/* this needs some react to hook this up 
            <input type="range" id="thickness" name="thickness" min="0" max="10" onchange="updateTextInput(this.value);" />
          </div> */}
        {/*           <div className="order-form-section">
            <label for="finish">Finish:</label>
            <input list="finish" id="finish" name="finish" />

            <datalist id="finish">
                <option value="Polished" />  {/* remeber the closing tags
                <option value="Brushed" />
            </datalist>
          </div> */}
        {thickness}
        {finish}
        <div className="order-form-submit">
          <input type="submit" value="email for a quote" />
        </div>
      </form>
    );
  }
}

const QuotePage = () => (
  <Layout>
    <Seo title="Quote - Priest Sheetmetal &amp; Plate Christchurch" />
    <HeaderContact />
    <main className="page-width">
      <h1>Quote</h1>

      <Reservation />
    </main>
  </Layout>
);

export default QuotePage;
