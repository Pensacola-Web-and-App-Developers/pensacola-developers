import React from "react"
import { navigate } from "gatsby-link"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  render() {
    return (
      <form
        className="bg-cool-grey-050 max-w-2xl rounded shadow-md p-8 mt-8"
        name="contact"
        method="post"
        action="/contact/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        <div hidden>
          <label>
            Don’t fill this out:{" "}
            <input name="bot-field" onChange={this.handleChange} />
          </label>
        </div>
        <div className="field">
          <div className="flex">
            <input
              className="shadow-xs border bg-cool-grey-050 active:bg-cool-grey-050 font-semibold text-cool-grey-500 w-full px-3 py-2 placeholder-cool-grey-500 rounded outline-none focus:shadow-outline mt-2 mr-1"
              type={"text"}
              name={"firstName"}
              onChange={this.handleChange}
              id={"firstName"}
              required={true}
              placeholder="First Name"
            />
            <input
              className="shadow-xs  border bg-cool-grey-050 active:bg-cool-grey-050 font-semibold text-cool-grey-500 w-full px-3 py-2 placeholder-cool-grey-500 rounded outline-none focus:shadow-outline mt-2 ml-1"
              type={"text"}
              name={"lastName"}
              onChange={this.handleChange}
              id={"lastName"}
              required={true}
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="field mt-6">
          <div className="control">
            <input
              className="shadow-xs  border bg-cool-grey-050 active:bg-cool-grey-050 font-semibold text-cool-grey-500 w-full px-3 py-2 placeholder-cool-grey-500 rounded outline-none focus:shadow-outline mt-2"
              type={"email"}
              name={"email"}
              onChange={this.handleChange}
              id={"email"}
              required={true}
              placeholder="Email"
            />
          </div>
        </div>

        <div className="field mt-6">
          <div className="control">
            <textarea
              className="shadow-xs  border bg-cool-grey-050 active:bg-cool-grey-050 font-semibold text-cool-grey-500 w-full px-3 py-2 placeholder-cool-grey-500 rounded outline-none focus:shadow-outline mt-2"
              name={"message"}
              onChange={this.handleChange}
              id={"message"}
              required={true}
              placeholder="Message"
              rows="5"
            />
          </div>
        </div>
        <div className="field flex justify-center items-center">
          <button
            className="text-white font-semibold bg-light-blue-vivid-500 hover:bg-light-blue-vivid-700 rounded px-4 py-2 mt-5"
            type="submit"
          >
            Spam Us
          </button>
        </div>
      </form>
    )
  }
}
