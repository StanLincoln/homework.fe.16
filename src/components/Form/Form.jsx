import React, { useEffect, useState } from "react";
import "./form.scss";
import { useForm } from "react-hook-form";

const Form = () => {
  const [country, setCountry] = useState([]);
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    fetchCountry();
  }, []);

  const orderSubmit = (data) => {
    setSubmitted(true)
    reset();
  };

  const fetchCountry = async () => {
    try {
      const response = await fetch(`https://restcountries.com/v3.1/all`);
      if (!response.ok) throw new Error("Failed to get a country");
      const country = await response.json();

      const sortedCountries = country.sort((a, b) => {
        const nameA = a.name.common.toUpperCase();
        const nameB = b.name.common.toUpperCase();
        return nameA.localeCompare(nameB);
      });

      setCountry(country);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit(orderSubmit)} className="form">
      <div className="form__container">
        <div className="form__input">
          <h2 className="form__title">Billing details</h2>
          <div className="input__name">
            <div className="firstname">
              <label htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                type="text"
                {...register("firstName", {
                  required: "Please, enter your first name!",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters long!",
                  },
                  maxLength: {
                    value: 12,
                    message: "Name cannot exceed 12 characters!",
                  },
                  pattern: {
                    value: /^[A-Za-z]+$/i,
                    message:
                      "Please enter a first name using only Latin characters!",
                  },
                })}
              />
            </div>
            <div className="lastname">
              <label htmlFor="lastName">Last name</label>
              <input
                id="lastName"
                type="text"
                {...register("lastName", {
                  required: "Please, enter your last name!",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters long!",
                  },
                  maxLength: {
                    value: 12,
                    message: "Name cannot exceed 12 characters!",
                  },
                  pattern: {
                    value: /^[A-Za-z]+$/i,
                    message:
                      "Please enter a last name using only Latin characters!",
                  },
                })}
              />
            </div>
          </div>
          <div>
            {errors.firstName && (
              <p className="form__error">{errors.firstName.message}</p>
            )}
          </div>
          <div>
            {errors.lastName && (
              <p className="form__error">{errors.lastName.message}</p>
            )}
          </div>
          <label htmlFor="company">Company Name (Optional)</label>
          <input
            id="company"
            type="text"
            {...register("company", {
              required: false,
            })}
          />
          <label htmlFor="country">Country / Region</label>
          <select
            id="country"
            {...register("country", { required: "Please, select a country!" })}
          >
            {country.map((country) => (
              <option key={country.name.common} value={country.name.common}>
                {country.name.common}
              </option>
            ))}
          </select>
          <div>
            {errors.country && (
              <p className="form__error">{errors.country.message}</p>
            )}
          </div>
          <label htmlFor="address">Street address</label>
          <input
            id="address"
            type="text"
            {...register("address", {
              required: "Please, enter your address!",
              pattern: {
                value: /^[a-zA-Z0-9\s,.'-]+$/,
                message:
                  "Please, enter an address using only Latin characters and numbers!",
              },
            })}
          />
          <div>
            {errors.address && (
              <p className="form__error">{errors.address.message}</p>
            )}
          </div>
          <label htmlFor="city">Town / City</label>
          <input
            id="city"
            type="text"
            {...register("city", {
              required: "Please, enter your city!",
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: "Please, enter a city using only Latin characters!",
              },
            })}
          />
          <div>
            {errors.city && (
              <p className="form__error">{errors.city.message}</p>
            )}
          </div>

          <label htmlFor="province">Province</label>
          <select id="province" {...register("province", { required: "Please, select a province!" })}>
            <option value="WesternProvince" selected>
              Western Province
            </option>
            <option value="North Province">North Province</option>
            <option value="South Province">South Province</option>
          </select>
          <div>
            {errors.province && (
              <p className="form__error">{errors.province.message}</p>
            )}
          </div>

          <label htmlFor="code">ZIP code</label>
          <input
            id="code"
            type="number"
            {...register("code", {
              required: "Please, enter your ZIP code!",
              pattern: {
                value: /^(?!01000|99999)(0[1-9]\d{3}|[1-9]\d{4})$/,
                message: "Invalid ZIP code!",
              },
            })}
          />
          <div>
            {errors.code && (
              <p className="form__error">{errors.code.message}</p>
            )}
          </div>
      
          <label htmlFor="phone">Phone</label>
          <input id="phone" type="tel" {...register("phone", {
              required: "Please, enter your phone!",
              pattern: {
                value: /\(?\+\(?49\)?[ ()]?([- ()]?\d[- ()]?){10}/g,
                message: "Invalid phone number!",
              },
            })}
          />
          <div>
            {errors.phone && (
              <p className="form__error">{errors.phone.message}</p>
            )}
          </div>

          <label htmlFor="email">Email address</label>
          <input id="email" type="text" {...register("email", {
              required: "Please, enter your email!",
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message: "Invalid email!",
              },
            })}
          />
          <div>
            {errors.email && (
              <p className="form__error">{errors.email.message}</p>
            )}
          </div>

          <input type="text" placeholder="Additional information" />
        </div>

        <div className="submit">
          <div className="submit__title">
            <h3>Product</h3>
            <h3>Subtotal</h3>
          </div>
          <div className="submit__sofa">
            <p>
              <span>Asgaard sofa</span> x 1
            </p>
            <p className="price">Rs. 250,000.00</p>
          </div>
          <div className="submit__subtotal">
            <p>Subtotal</p>
            <p className="price">Rs. 250,000.00</p>
          </div>
          <div className="submit__total">
            <p>Total</p>
            <p>
              <span>Rs. 250,000.00</span>
            </p>
          </div>

          <div className="submit__radio">
            <div className="radio">
              <input type="radio" id="direct" defaultChecked name="paymentMethod"/>
              <label htmlFor="direct">Direct Bank Transfer</label>
              <p className="radio__text">
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </p>
            </div>

            <div className="radio bank">
              <input type="radio" id="bank" name="paymentMethod"/>
              <label htmlFor="bank">Direct Bank Transfer</label>
            </div>

            <div className="radio">
              <input type="radio" id="cash" name="paymentMethod"/>
              <label htmlFor="cash">Cash On Delivery</label>

              <p className="radio__description">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our <span>privacy policy.</span>
              </p>
            </div>
          </div>
          <div className="button">
          <button type="submit">
          {submitted ? "Order placed" : "Place Order"}
        </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
