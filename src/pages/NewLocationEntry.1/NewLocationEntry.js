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
    drinkSpecials: [],
    special: "",
    price: "",
    details: "",
    timeofday: "",
    DOW: [
      { "long": "Sunday", "short": "sun" },
      { "long": "Monday", "short": "mon" },
      { "long": "Tuesday", "short": "tue" },
      { "long": "Wednesday", "short": "wed" },
      { "long": "Thursday", "short": "thu" },
      { "long": "Friday", "short": "fri" },
      { "long": "Saturday", "short": "sat" },
    ],
    sun: false,
    mon: false,
    tue: false,
    wed: false,
    thu: false,
    fri: false,
    sat: false,
    familyFriendly: true,
    kitchenHoursSame: true,
    breakfast: true,
    lunch: true,
    dinner: true,
    happyHour: true,
  };

  componentDidMount() {
    // this.loaddrinkSpecials();
    // this.loadlocationDetails();
    // console.log(cuisine);
  }

  handleInputChange = event => {
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
                  <select name="timeofday"
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

          <table className="hours table table-bordered table-sm" table-layout="fixed">
            <thead>
              <tr>
                <th scope="col"
                  colSpan="3"
                  className="row-0 row-dow"
                >
                  Hours
                </th>
                <th
                  scope="col"
                  colSpan="2"
                  align="center"
                  hidden={this.state.kitchenHoursSame}
                  className="row1-1 row-kitchen row-16"
                >
                  Kitchen Hours
                </th>
                <th
                  scope="col"
                  colSpan="2"
                  align="center"
                  hidden={!this.state.breakfast}
                  className="row-2 row-breakfast row-16"
                >
                  Breakfast Special
                </th>
                <th
                  scope="col"
                  colSpan="2"
                  align="center"
                  hidden={!this.state.lunch}
                  className="row-3 row-lunch row-16"
                >
                  Lunch Special
                </th>
                <th
                  scope="col"
                  colSpan="2"
                  align="center"
                  hidden={!this.state.dinner}
                  className="row-4 row-dinner row-16"
                >
                  Dinner Spcial
                </th>
                <th
                  scope="col"
                  colSpan="2"
                  align="center"
                  hidden={!this.state.happyHour}
                  className="row-5 row-happy row-16"
                >
                  Happy Hour
                </th>
              </tr>
              <tr>
                <th scope="col">Day</th>
                <th scope="col">Open</th>
                <th scope="col">Close</th>
                <th
                  scope="col"
                  hidden={this.state.kitchenHoursSame}
                >
                  Open
                </th>
                <th
                  scope="col"
                  hidden={this.state.kitchenHoursSame}
                >
                  Close
                </th>
                <th
                  scope="col"
                  hidden={!this.state.breakfast}
                >
                  Start
                </th>
                <th
                  scope="col"
                  hidden={!this.state.breakfast}
                >
                  End
                </th>
                <th
                  scope="col"
                  hidden={!this.state.lunch}
                >
                  Start
                </th>
                <th
                  scope="col"
                  hidden={!this.state.lunch}
                >
                  End
                </th>
                <th
                  scope="col"
                  hidden={!this.state.dinner}
                >
                  Start
                </th>
                <th
                  scope="col"
                  hidden={!this.state.dinner}
                >
                  End
                </th>
                <th
                  scope="col"
                  hidden={!this.state.happyHour}
                >
                  Start
                </th>
                <th
                  scope="col"
                  hidden={!this.state.happyHour}
                >
                  End
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Start of model */}
              {this.state.DOW.map((dowList, i) =>
                <tr>
                  <th scope="row" key={dowList.i}>{dowList.long}</th>
                  <td>
                    <select name="timeofday"
                      value={this.state.timeofday}
                      onChange={this.handleInputChange}>
                      <option>
                        (open)
                      </option>
                    </select>
                  </td>
                  <td>
                    <select name="timeofday"
                      value={this.state.timeofday}
                      onChange={this.handleInputChange}>
                      <option>
                        (close)
                      </option>
                    </select>
                  </td>
                  <td hidden={this.state.kitchenHoursSame}>
                    <select name="timeofday"
                      value={this.state.timeofday}
                      onChange={this.handleInputChange}>
                      <option>
                        (Kitchen)
                      </option>
                    </select>
                  </td>
                  <td hidden={this.state.kitchenHoursSame}>
                    <select name="timeofday"
                      value={this.state.timeofday}
                      onChange={this.handleInputChange}>
                      <option>
                        (Kitchen)
                      </option>
                    </select>
                  </td>
                  <td hidden={!this.state.breakfast}>
                    <select name="timeofday"
                      value={this.state.timeofday}
                      onChange={this.handleInputChange}>
                      <option>
                        (Breakfast)
                      </option>
                    </select>
                  </td>
                  <td hidden={!this.state.breakfast}>
                    <select name="timeofday"
                      value={this.state.timeofday}
                      onChange={this.handleInputChange}>
                      <option>
                        (Breakfast)
                      </option>
                    </select>
                  </td>
                  <td hidden={!this.state.lunch}>
                    <select name="timeofday"
                      value={this.state.timeofday}
                      onChange={this.handleInputChange}>
                      <option>
                        (Lunch)
                      </option>
                    </select>
                  </td>
                  <td hidden={!this.state.lunch}>
                    <select name="timeofday"
                      value={this.state.timeofday}
                      onChange={this.handleInputChange}>
                      <option>
                        (Lunch)
                      </option>
                    </select>
                  </td>
                  <td hidden={!this.state.dinner}>
                    <select name="timeofday"
                      value={this.state.timeofday}
                      onChange={this.handleInputChange}>
                      <option>
                        (Dinner)
                      </option>
                    </select>
                  </td>
                  <td hidden={!this.state.dinner}>
                    <select name="timeofday"
                      value={this.state.timeofday}
                      onChange={this.handleInputChange}>
                      <option>
                        (Dinner)
                      </option>
                    </select>
                  </td>
                  <td hidden={!this.state.happyHour}>
                    <select name="timeofday"
                      value={this.state.timeofday}
                      onChange={this.handleInputChange}>
                      <option>
                        (Happy)
                      </option>
                    </select>
                  </td>
                  <td hidden={!this.state.happyHour}>
                    <select name="timeofday"
                      value={this.state.timeofday}
                      onChange={this.handleInputChange}>
                      <option>
                        (Happy)
                      </option>
                    </select>
                  </td>
                </tr>
              )}
              {/* End of model */}
            </tbody>
          </table>

          <FormBtn
            // disabled={!(this.state.special && this.state.price && this.state.timeofday)}
            onClick={this.handleFormSubmit}
          >
            Cancel
              </FormBtn>
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
