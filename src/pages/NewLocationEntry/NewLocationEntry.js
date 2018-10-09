import React, { Component } from "react";
// import Location from "../../components/Location";
// import DeleteBtn from "../../components/DeleteBtn";
// import Jumbotron from "../../components/Jumbotron";
// import API from "../../utils/API";
// import { Link } from "react-router-dom";
// import {
// Col,
// Row,
// Container
// } from "../../components/Grid";
// import {
//   List,
//   ListItem
// } from "../../components/List";
import {
  // Input,
  TextArea,
  FormBtn,
  // PriceInput
} from "../../components/Form";
// import NumericInput from 'react-numeric-input';
import TimePicker from 'react-time-picker';

import "./NewLocationEntry.css";

const name = "Zarda BBQ";
const address = "12345 W 87th St";
const city = "Lenexa";
const state = "KS";
const zip = "66215";
const phone = "(913) 541-2368";
const cuisine = [
  { "cuisine": "Donuts", "id": 1 },
  { "cuisine": "Pizza", "id": 2 },
  { "cuisine": "Sushi", "id": 3 },
  { "cuisine": "American", "id": 6 },
  { "cuisine": "Cajun", "id": 7 },
  { "cuisine": "Bagels", "id": 8 },
  { "cuisine": "Sandwiches", "id": 9 },
  { "cuisine": "Italian", "id": 12 },
  { "cuisine": "Asian", "id": 13 },
  { "cuisine": "Salad", "id": 15 },
  { "cuisine": "Indian", "id": 16 },
  { "cuisine": "French", "id": 17 },
  { "cuisine": "Mexican", "id": 19 },
  { "cuisine": "Thai", "id": 23 },
  { "cuisine": "Vietnamese", "id": 24 },
  { "cuisine": "Tapas", "id": 25 },
  { "cuisine": "Chinese", "id": 26 },
  { "cuisine": "Southern Mediterranean", "id": 32 },
  { "cuisine": "Caribbean", "id": 34 },
  { "cuisine": "English", "id": 35 },
  { "cuisine": "Coffee", "id": 46 },
  { "cuisine": "Californian", "id": 50 },
  { "cuisine": "Sushi", "id": 54 },
  { "cuisine": "Vegan", "id": 62 },
];

class NewLocationEntry extends Component {
  state = {
    locationDetails: [],
    DOW: [
      { "long": "Sunday", "short": "sun"},
      // { "long": "Monday", "short": "mon" },
      // { "long": "Tuesday", "short": "tue" },
      // { "long": "Wednesday", "short": "wed" },
      // { "long": "Thursday", "short": "thu" },
      // { "long": "Friday", "short": "fri" },
      // { "long": "Saturday", "short": "sat" },
    ],
    sun: [],
    mon: [],
    tue: [],
    wed: [],
    thu: [],
    fri: [],
    sat: [],
    familyFriendly: true,
    kitchenHoursSame: true,
    breakfast: true,
    lunch: true,
    dinner: true,
    happyHour: true,
    breakfastValue: "8:00am",
  };

  componentDidMount() {
    // this.loaddrinkSpecials();
    // this.loadlocationDetails();
    // console.log(cuisine);
  }

  handleInputChange = event => {
    // console.log(event.target);
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleCheckboxChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  // myFormat = (num) => {
  //   return num + ':' + num;
  // };

  onTimeChange = (event) => {
    console.log(event)
    console.log(this.state.sun)
  };

  render() {
    return (

      <div className="container-fluid">
        <form>
          <div align="center">
            <h4>
              {name}
            </h4>
            {address} <br />
            {city}, {state} {zip} <br />
            {phone} <br />
          </div>
          <div >
            <h4>
              Description:
              </h4>
            <TextArea
              value={this.state.details}
              onChange={this.handleInputChange}
              name="details"
              placeholder="(optional)"
            />
          </div>

          {/* <div className="col-md-8 "> */}
          <div>
            <div className="row justify-content-start">
              <div className="col-md-3">
                <label>
                  Cuisine:
                  <span> </span>
                  {/* <br /> */}
                  <select name="cuisine"
                    value={this.state.timeofday}
                    onChange={this.handleInputChange}
                    width="10px">
                    <option>
                      (required)
                    </option>
                    {cuisine.map((cuisineList, i) =>
                      <option
                        key={cuisineList.id}
                        value={cuisineList.id}
                      >
                        {cuisineList.cuisine}
                      </option>
                    )}
                  </select>
                </label>
                <span> </span>
              </div>

              <div className="col-md custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="familyFriendly"
                  name="familyFriendly"
                  checked={this.state.familyFriendly}
                  onChange={this.handleCheckboxChange}
                />
                <label
                  className="custom-control-label"
                  htmlFor="familyFriendly">
                  Family Friendly
                </label>
              </div>

              <div className="col-md custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="kitchenHours"
                  name="kitchenHoursSame"
                  checked={this.state.kitchenHoursSame}
                  onChange={this.handleCheckboxChange}
                />
                <label
                  className="custom-control-label"
                  htmlFor="kitchenHours">
                  Kitchen hours same
                </label>
              </div>

              <div className="col-md custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="breakfast"
                  name="breakfast"
                  checked={this.state.breakfast}
                  onChange={this.handleCheckboxChange}
                />
                <label
                  className="custom-control-label"
                  htmlFor="breakfast">
                  Breakfast Special
                </label>
              </div>

              <div className="col-md custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="lunch"
                  name="lunch"
                  checked={this.state.lunch}
                  onChange={this.handleCheckboxChange}
                />
                <label
                  className="custom-control-label"
                  htmlFor="lunch">
                  Lunch Special
                </label>
              </div>

              <div className="col-md custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="dinner"
                  name="dinner"
                  checked={this.state.dinner}
                  onChange={this.handleCheckboxChange}
                />
                <label
                  className="custom-control-label"
                  htmlFor="dinner">
                  Dinner Special
                </label>
              </div>

              <div className="col-md custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="happyHour"
                  name="happyHour"
                  checked={this.state.happyHour}
                  onChange={this.handleCheckboxChange}
                />
                <label
                  className="custom-control-label"
                  htmlFor="happyHour">
                  Happy Hour
                </label>
              </div>

            </div>
          </div>


          <table className="tbl table-bordered table-sm mdl-data-table">
            <thead>
              <tr>
                <th
                  className=" mdl-data-table__cell--non-numeric"
                  scope="col"
                  colSpan="3"
                >
                  Hours
                </th>
                <th
                  className=" mdl-data-table__cell--non-numeric"
                  scope="col"
                  colSpan="2"
                  align="center"
                  hidden={this.state.kitchenHoursSame}
                >
                  Kitchen Hours
                </th>
                <th
                  className=" mdl-data-table__cell--non-numeric"
                  scope="col"
                  colSpan="2"
                  align="center"
                  hidden={!this.state.breakfast}
                >
                  Breakfast Special
                </th>
                <th
                  className=" mdl-data-table__cell--non-numeric"
                  scope="col"
                  colSpan="2"
                  align="center"
                  hidden={!this.state.lunch}
                >
                  Lunch Special
                </th>
                <th
                  className=" mdl-data-table__cell--non-numeric"
                  scope="col"
                  colSpan="2"
                  align="center"
                  hidden={!this.state.dinner}
                >
                  Dinner Spcial
                </th>
                <th
                  className=" mdl-data-table__cell--non-numeric"
                  scope="col"
                  colSpan="2"
                  align="center"
                  hidden={!this.state.happyHour}
                >
                  Happy Hour
                </th>
              </tr>
              <tr>
                <th
                  scope="col"
                  className="mdl-data-table__cell--non-numeric"
                // className="row-8 "
                >
                  Day
                </th>
                <th
                  scope="col"
                  className=" mdl-data-table__cell--non-numeric"
                >
                  Open
                </th>
                <th
                  scope="col"
                  className=" mdl-data-table__cell--non-numeric"
                >
                  Close
                </th>
                <th
                  scope="col"
                  hidden={this.state.kitchenHoursSame}
                  className=" mdl-data-table__cell--non-numeric row-open"
                >
                  Open
                </th>
                <th
                  scope="col"
                  hidden={this.state.kitchenHoursSame}
                  className=" mdl-data-table__cell--non-numeric"
                >
                  Close
                </th>
                <th
                  scope="col"
                  hidden={!this.state.breakfast}
                  className=" mdl-data-table__cell--non-numeric"
                >
                  Open
                </th>
                <th
                  scope="col"
                  hidden={!this.state.breakfast}
                  className=" mdl-data-table__cell--non-numeric"
                >
                  End
                </th>
                <th
                  scope="col"
                  hidden={!this.state.lunch}
                  className=" mdl-data-table__cell--non-numeric"
                >
                  Start
                </th>
                <th
                  scope="col"
                  hidden={!this.state.lunch}
                  className=" mdl-data-table__cell--non-numeric"
                >
                  End
                </th>
                <th
                  scope="col"
                  hidden={!this.state.dinner}
                  className=" mdl-data-table__cell--non-numeric"
                >
                  Start
                </th>
                <th
                  scope="col"
                  hidden={!this.state.dinner}
                  className=" mdl-data-table__cell--non-numeric"
                >
                  End
                </th>
                <th
                  scope="col"
                  hidden={!this.state.happyHour}
                  className=" mdl-data-table__cell--non-numeric"
                >
                  Start
                </th>
                <th
                  scope="col"
                  hidden={!this.state.happyHour}
                  className=" mdl-data-table__cell--non-numeric"
                >
                  End
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.DOW.map((dowList, i) =>
                <tr key={dowList.short}>
                  <td
                    // scope="row"
                    className="row-8 mdl-data-table__cell--non-numeric"
                  >
                    {dowList.long}
                  </td>
                  <td>
                    <TimePicker
                      disableClock
                      clearIcon={null}
                      onChange={(time) => (
                        this.setState({
                          [dowList.short]:
                          {
                            "hours":
                            {
                              "open": time
                            }
                          }
                        })
                      )}
                    />
                  </td>
                  <td>
                    <TimePicker
                      disableClock
                      clearIcon={null}
                      onChange={(time) => (
                        this.setState({
                          [dowList.short]:
                          {
                            "hours":
                            {
                              "closed": time
                            }
                          }
                        })
                      )}
                    />
                  </td>
                  <td hidden={this.state.kitchenHoursSame}>
                    <TimePicker
                      onChange={this.onTimeChange}
                      value={dowList.open}
                      disableClock
                      clearIcon={null}
                    />
                  </td>
                  <td hidden={this.state.kitchenHoursSame}>
                    <TimePicker
                      onChange={this.onTimeChange}
                      value={dowList.close}
                      disableClock
                      clearIcon={null}
                    />
                  </td>
                  <td hidden={!this.state.breakfast}>
                    <TimePicker
                      onChange={this.onTimeChange}
                      value={dowList.close}
                      disableClock
                      clearIcon={null}
                    />
                  </td>
                  <td hidden={!this.state.breakfast} >
                    <TimePicker
                      onChange={this.onTimeChange}
                      value={dowList.close}
                      disableClock
                      clearIcon={null}
                    />
                  </td>
                  <td hidden={!this.state.lunch} >
                    <TimePicker
                      onChange={this.onTimeChange}
                      value={dowList.close}
                      disableClock
                      clearIcon={null}
                    />
                  </td>
                  <td hidden={!this.state.lunch}>
                    <TimePicker
                      onChange={this.onTimeChange}
                      value={dowList.close}
                      disableClock
                      clearIcon={null}
                    />
                  </td>
                  <td hidden={!this.state.dinner} >
                    <TimePicker
                      onChange={this.onTimeChange}
                      value={dowList.close}
                      disableClock
                      clearIcon={null}
                    />
                  </td>
                  <td hidden={!this.state.dinner} >
                    <TimePicker
                      onChange={this.onTimeChange}
                      value={dowList.close}
                      disableClock
                      clearIcon={null}
                    />
                  </td>
                  <td hidden={!this.state.happyHour} >
                    <TimePicker
                      onChange={this.onTimeChange}
                      value={dowList.close}
                      disableClock
                      clearIcon={null}
                    />
                  </td>
                  <td hidden={!this.state.happyHour} >
                    <TimePicker
                      onChange={this.onTimeChange}
                      value={dowList.close}
                      disableClock
                      clearIcon={null}
                    />
                  </td>
                </tr>
              )}
              {/* End of model */}
            </tbody>
          </table>

          {/* <FormBtn
            // disabled={!(this.state.special && this.state.price && this.state.timeofday)}
            onClick={this.handleFormSubmit}
          >
            Cancel
          </FormBtn> */}
          <FormBtn
            disabled={!(this.state.special && this.state.price && this.state.timeofday)}
            onClick={this.handleFormSubmit}
          >
            Save
          </FormBtn>
        </form>

      </div >
    );
  }
}

export default NewLocationEntry;
