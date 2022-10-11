import React, { useEffect, useState } from "react";
import GoBack from "../../components/GoBack";
import { useHistory, Link } from "react-router-dom";
import { useGlobalContext } from "../../context";
import NoError from "../../components/NoError";
import { useForm } from "react-hook-form";
import check from "../../assets/cart/iconmonstr-check-mark-circle-thin.svg";

function Checkout() {
  const history = useHistory();

  const { CartInfo, setCartInfo, getTotals, grandTotals, isView, setIsView } =
    useGlobalContext();

  const [results, setresults] = useState(false);

  const [result, setresult] = useState("");

  //useForm Properties
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    reset,
    setFocus,
  } = useForm();

  useEffect(() => {
    setFocus("name");
  }, []);

  //getting data value
  const onSubmit = (data) => {
    setresult(JSON.stringify(data));
    setIsView(true);
    window.scrollTo(0, 0);
  };

  const clearAll = () => {
    setIsView(false);
    setCartInfo([]);
    reset();
  };

  if (CartInfo.length < 1) {
    return <NoError title="No Products to checkout" />;
  } else {
    return (
      <main className="check" style={{ overflow: "hidden" }}>
        <section className="checkContainer contain">
          <GoBack history={history} />
          {/* main container for the checkout forms and summary value */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="checkout-container contain"
          >
            <article className="checkForms ">
              <h2 className="checkoutHeader">CHECKOUT</h2>

              <section className="checkForm-container">
                <article className="billing-details">
                  <h6 className="detailsHeader">BILLING DETAILS</h6>
                  <article className="formRow">
                    <div className={`input ${errors.name && "showError"}`}>
                      <div className="labels">
                        <label
                          className={`${errors.name && "errorLabel"}`}
                          htmlFor="name"
                        >
                          Name
                        </label>
                        {errors.name && <p>cant' be empty</p>}
                      </div>
                      <input
                        autoComplete="off"
                        placeholder="Alexei ward"
                        type="text"
                        id="name"
                        {...register("name", {
                          required: "name can't be empty",
                        })}
                        onKeyUp={() => trigger("name")}
                      />
                    </div>
                    <div className={`input ${errors.email && "showError"}`}>
                      <div className="labels">
                        <label
                          className={`${errors.email && "errorLabel"}`}
                          htmlFor="email"
                        >
                          Email Address
                        </label>
                        {errors.email && <p>{errors.email.message}</p>}
                      </div>
                      <input
                        autoComplete="off"
                        placeholder="alexei@mail.com"
                        type="text"
                        id="email"
                        {...register("email", {
                          required: "email can't be empty",
                          pattern: {
                            value:
                              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: "wrong format",
                          },
                        })}
                        onKeyUp={() => trigger("email")}
                      />
                    </div>
                  </article>
                  <article className="formRow">
                    <div className={`input ${errors.phone && "showError"}`}>
                      <div className="labels">
                        <label
                          className={`${errors.phone && "errorLabel"}`}
                          htmlFor="phone"
                        >
                          Phone Number
                        </label>
                        {errors.phone && <p>{errors.phone.message}</p>}
                      </div>
                      <input
                        autoComplete="off"
                        placeholder="+1 202-555-0136"
                        type="text"
                        id="phone"
                        {...register("phone", {
                          required: "phone can't be empty",
                          minLength: {
                            value: 10,
                            message: "min required length is 10",
                          },
                          maxLength: {
                            value: 15,
                            message: "max required length is 15",
                          },
                        })}
                        onKeyUp={() => trigger("phone")}
                      />
                    </div>
                  </article>
                </article>

                <article className="shipping">
                  <h6 className="detailsHeader">SHIPPING INFO</h6>
                  <article className="formRow">
                    <div className={`input ${errors.address && "showError"}`}>
                      <div className="labels">
                        <label
                          className={`${errors.address && "errorLabel"}`}
                          htmlFor="address"
                        >
                          Address
                        </label>
                        {errors.address && <p>{errors.address.message}</p>}
                      </div>
                      <input
                        autoComplete="off"
                        placeholder="10001"
                        type="text"
                        id="address"
                        {...register("address", {
                          required: "address can't be empty",
                          minLength: {
                            value: 5,
                            message: "min required length is 5",
                          },
                        })}
                        onKeyUp={() => trigger("address")}
                      />
                    </div>
                  </article>
                  <article className="formRow">
                    <div className={`input ${errors.zipcode && "showError"}`}>
                      <div className="labels">
                        <label
                          className={`${errors.zipcode && "errorLabel"}`}
                          htmlFor="code"
                        >
                          ZIP Code
                        </label>
                        {errors.zipcode && <p>{errors.zipcode.message}</p>}
                      </div>
                      <input
                        autoComplete="off"
                        placeholder="New York"
                        type="text"
                        id="code"
                        {...register("zipcode", {
                          required: "zipcode can't be empty",
                        })}
                        onKeyUp={() => trigger("zipcode")}
                      />
                    </div>
                    <div className={`input ${errors.city && "showError"}`}>
                      <div className="labels">
                        <label
                          className={`${errors.city && "errorLabel"}`}
                          htmlFor="city"
                        >
                          City
                        </label>
                        {errors.city && <p>{errors.city.message}</p>}
                      </div>
                      <input
                        autoComplete="off"
                        placeholder="alexei@mail.com"
                        type="text"
                        id="city"
                        {...register("city", {
                          required: "city can't be empty",
                        })}
                        onKeyUp={() => trigger("city")}
                      />
                    </div>
                  </article>
                  <article className="formRow">
                    <div className={`input ${errors.country && "showError"}`}>
                      <div className="labels">
                        <label
                          className={`${errors.country && "errorLabel"}`}
                          htmlFor="country"
                        >
                          Country
                        </label>
                        {errors.country && <p>{errors.country.message}</p>}
                      </div>
                      <input
                        autoComplete="off"
                        placeholder="United Kingdom"
                        type="text"
                        id="country"
                        {...register("country", {
                          required: "country can't be empty",
                        })}
                        onKeyUp={() => trigger("country")}
                      />
                    </div>
                    <div className=" special "></div>
                  </article>
                </article>
                <article className="payment">
                  <h6 className="detailsHeader">PAYMENT DETAILS</h6>
                  <article className="formRow">
                    <div className="input ">
                      <div className="labels">
                        <label
                          className={`${errors.radio1 && "errorLabel"}`}
                          htmlFor="pin"
                        >
                          Payment Method
                        </label>
                      </div>
                    </div>
                    <div className="input ">
                      <div
                        className={`${
                          errors.radio1 ? "radios" : "radios showErrors"
                        }`}
                      >
                        <div className="pretty p-default p-round p-smooth">
                          <input
                            type="radio"
                            value="emoney"
                            {...register("radio1", {
                              required: true,
                            })}
                          />
                          <div className="state p-primary">
                            <label>e-Money</label>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`${
                          errors.radio1 ? "radios" : "radios showErrors"
                        }`}
                      >
                        <div className="pretty p-default p-round p-smooth">
                          <input
                            type="radio"
                            value="cash"
                            {...register("radio1", {
                              required: true,
                            })}
                          />
                          <div className="state p-primary">
                            <label>Cash on Delivery</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                  <article className="formRow">
                    <div className={`input ${errors.emoney && "showError"}`}>
                      <div className="labels">
                        <label
                          className={`${errors.emoney && "errorLabel"}`}
                          htmlFor="emoney"
                        >
                          e-Money Number
                        </label>
                        {errors.emoney && <p>{errors.emoney.message}</p>}
                      </div>
                      <input
                        autoComplete="off"
                        placeholder="2385219993"
                        type="text"
                        id="emoney"
                        {...register("emoney", {
                          required: "e-Money can't be empty",
                        })}
                        onKeyUp={() => trigger("emoney")}
                      />
                    </div>
                    <div className={`input ${errors.cash && "showError"}`}>
                      <div className="labels">
                        <label
                          className={`${errors.cash && "errorLabel"}`}
                          htmlFor="pin"
                        >
                          e-money Pin
                        </label>
                        {errors.cash && <p>{errors.cash.message}</p>}
                      </div>
                      <input
                        autoComplete="off"
                        placeholder="6891"
                        type="text"
                        id="cash"
                        {...register("cash", {
                          required: "cash can't be empty",
                        })}
                        onKeyUp={() => trigger("cash")}
                      />
                    </div>
                  </article>
                </article>
              </section>
            </article>
            <article className="summary ">
              <section className="summary-container">
                {CartInfo.map((cart, index) => {
                  const { name, price, image, quantity } = cart;
                  let newName = name.split(" Headphones");
                  return (
                    <div key={index} className="cartInfo">
                      <div className="name">
                        <div className="cart-img-container">
                          <img src={image.mobile} alt={name} />
                        </div>
                        <div className="cartitems">
                          <p>{newName[0]}</p>
                          <p>${price}</p>
                        </div>
                      </div>
                      <div className="qtyContainer">
                        <p>x{quantity}</p>
                      </div>
                    </div>
                  );
                })}
                <div className="cal">
                  <p data-aos="fade-right" data-aos-delay="100">
                    TOTAL
                  </p>
                  <h4 data-aos="fade-left" data-aos-delay="200">
                    $ {getTotals()}
                  </h4>
                </div>
                <div className="cal">
                  <p data-aos="fade-right" data-aos-delay="300">
                    SHIPPING
                  </p>
                  <h4 data-aos="fade-left" data-aos-delay="400">
                    $ 50
                  </h4>
                </div>
                <div className="cal">
                  <p data-aos="fade-right" data-aos-delay="500">
                    VAT (INCLUDED)
                  </p>
                  <h4 data-aos="fade-left" data-aos-delay="600">
                    $ {grandTotals.vatAmount}
                  </h4>
                </div>
                <div className="cal grand">
                  <p data-aos="fade-right" data-aos-delay="700">
                    GRAND TOTAL)
                  </p>
                  <h4
                    data-aos="fade-left"
                    data-aos-delay="800"
                    className="orange"
                  >
                    $ {grandTotals.grandtotal}
                  </h4>
                </div>
                <button
                  data-aos="fade-up"
                  data-aos-delay="900"
                  className="btns orange-background"
                  style={{ width: "100%" }}
                  type="submit"
                >
                  CONTINUE &amp; PAY
                </button>
              </section>
            </article>
          </form>
          <div className={`${isView ? "thanks showthanks" : "thanks"}`}>
            <div className="thanks-img">
              <svg
                aria-hidden="true"
                data-prefix="fas"
                data-icon="check-circle"
                className="svg-inline--fa fa-check-circle fa-w-16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#D87D4A"
                  d="M504 256a248 248 0 11-496 0 248 248 0 01496 0zM227 387l184-184c7-6 7-16 0-22l-22-23c-7-6-17-6-23 0L216 308l-70-70c-6-6-16-6-23 0l-22 23c-7 6-7 16 0 22l104 104c6 7 16 7 22 0z"
                />
              </svg>
            </div>
            <h2>THANK YOU FOR YOUR ORDER</h2>
            <p className="order">
              You will receive an email confirmation shortly
            </p>
            <article className="items-container">
              <article className="productCheck">
                {results ? (
                  <div className="itemsInfo">
                    {CartInfo.map((cart, index) => {
                      const { name, price, image, quantity } = cart;
                      let newName = name.split(" Headphones");
                      return (
                        <div key={index} className="cartInfo-items">
                          <div className="cart-img-container">
                            <img src={image.mobile} alt={name} />
                          </div>
                          <div className="cartitems">
                            <p>{newName[0]}</p>
                            <p>${price}</p>
                          </div>
                          <div className="qtyContainer">
                            <p>x{quantity}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="itemsInfo">
                    <div className="cartInfo-items">
                      <div className="cart-img-container">
                        <img
                          src={CartInfo[0].image.mobile}
                          alt={CartInfo[0].name}
                        />
                      </div>
                      <div className="cartitems">
                        <p>{CartInfo[0].name.split(" Headphones")}</p>
                        <p>${CartInfo[0].price}</p>
                      </div>
                      <div className="qtyContainer">
                        <p>x{CartInfo[0].quantity}</p>
                      </div>
                    </div>
                  </div>
                )}
                {CartInfo.length > 1 && (
                  <div onClick={() => setresults(!results)} className="less">
                    <p>
                      {results
                        ? "Viewless"
                        : `and ${CartInfo.length - 1} other item(s)`}
                    </p>
                  </div>
                )}
              </article>
              <div className="grandingTotal">
                <div className="priceInformation">
                  <h4>Grand Total</h4>
                  <h4>$ {grandTotals.grandtotal}</h4>
                </div>
              </div>
            </article>
            <Link
              onClick={clearAll}
              to="/"
              style={{ width: "100%" }}
              className="btns  orange-background"
            >
              BACK TO HOME
            </Link>
          </div>
        </section>
      </main>
    );
  }
}
export default Checkout;
