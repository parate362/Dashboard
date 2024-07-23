/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import Reel from "../../../Assets/Reel.svg";
import Image from "../../../Assets/Image.svg";
import Story from "../../../Assets/video.svg";
import { FiCreditCard } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { BiSolidError } from "react-icons/bi";
const BudgetOrignal = () => {
  let budget = [
    {
      pramotion: {
        reel: false,
        image: false,
        story: false,
      },
    },
    {
      payment: {
        payment: false,
        fixed: false,
        nagotiable: false,
        fixedAmt: 0,
        Min: 0,
        range: 0,
        Max: 0,
      },
    },
    {
      product: {
        product: false,
        productDesc: "",
      },
    },
    {
      url: {
        link: "",
        upload: "",
      },
    },
  ];

  const [data, useData] = useState(budget);

  // const handleChange = (event) => {
  //   data[0].pramotion.reel = event.target.checked;
  //   data[0].pramotion.image = event.target.checked;
  //   data[0].pramotion.story = event.target.checked;
  //   useData([...data]);

  // }
  // console.log(data[0], data[1], data[2], data[3]);

  // const validation = () => {
  //   const errors = {};

  //   if (data) {
  //     if (!data.payment || !data.product) {
  //       errors.offer = "Please select payment/product or both";
  //     }
  //     if (data.payment && (!data.fixed || !data.nagotiable)) {
  //         errors.offer = "Please select payment method";
  //       if(data.fixed && !data.fixedAmt){
  //         errors.offer = "Please select Amount";
  //       }
  //       if (data.nagotiable && !data.min) {
  //         errors.offer = "Please select minimum amount";
  //       }
  //       if (data.nagotiable && !data.max) {
  //         errors.offer = "Please select maximum amount";
  //       }
  //     }
  //     if (data.product && !data.productDesc) {
  //       errors.offer = "Please select enter product description";
  //     }
  //     // setIsModalVisible(!isModalVisible);
  //     setErrors(errors);
  //     return Object.keys(errors).length === 0;
  //     console.log(errors);
  //   }
  // };

  return (
    <>
      <div className="relative max-w-[1069px] max-h-[1066px] mx-6 bg-white mt-28 ml-[337px] rounded-xl drop-shadow-2xl ">
        <div className="mx-6">
          <div className="flex gap-2 items-center px-4 pt-7 text-base text-[#202024]">
            <span>Campaigns &gt; </span>
            <span> Add Campaign &gt;</span>
            <span className="text-[#2463EB] font-semibold"> Budget</span>
          </div>
          <hr className="w-full mx-auto my-3" />
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="flex flex-col gap-4 px-4 mt-2">
              <div>
                <h2>Enter payment according to your selection: </h2>
              </div>
              <div className="flex gap-[18px] items-center">
                <label htmlFor="reel">
                  <input
                    type="checkbox"
                    onChange={(event) =>
                      useData([
                        ...data,
                        (data[0].pramotion.reel = event.target.checked),
                      ])
                    }
                    className="sr-only"
                    name=""
                    id="reel"
                  />
                  <div
                    className={`w-44 h-20 rounded-xl  ${
                      data[0].pramotion.reel ? "bg-[#3F59FF]" : "bg-[#B2BCFF]"
                    } p-3 flex justify-center items-center gap-3`}
                  >
                    <img src={Reel} alt="reel" className="w-6 h-6" />
                    <span className="text-sm text-white">
                      {Number(data[0].pramotion.reel)} x Reel
                    </span>
                  </div>
                </label>
                <label htmlFor="Image">
                  <input
                    type="checkbox"
                    onChange={(event) =>
                      useData([
                        ...data,
                        (data[0].pramotion.image = event.target.checked),
                      ])
                    }
                    className="sr-only"
                    name=""
                    id="Image"
                  />
                  <div
                    className={`w-44 h-20 rounded-xl  ${
                      data[0].pramotion.image ? "bg-[#3F59FF]" : "bg-[#B2BCFF]"
                    } p-3 flex justify-center items-center gap-3`}
                  >
                    <img src={Image} alt="reel" className="w-6 h-6" />
                    <span className="text-sm text-white">
                      {Number(data[0].pramotion.image)} x Image
                    </span>
                  </div>
                </label>
                <label htmlFor="story">
                  <input
                    type="checkbox"
                    onChange={(event) =>
                      useData([
                        ...data,
                        (data[0].pramotion.story = event.target.checked),
                      ])
                    }
                    className="sr-only"
                    name=""
                    id="story"
                  />
                  <div
                    className={`w-44 h-20 rounded-xl  ${
                      data[0].pramotion.story ? "bg-[#3F59FF]" : "bg-[#B2BCFF]"
                    } p-3 flex justify-center items-center gap-3`}
                  >
                    <img src={Story} alt="reel" className="w-6 h-6" />
                    <span className="text-sm text-white">
                      {Number(data[0].pramotion.story)} x Story
                    </span>
                  </div>
                </label>
              </div>
            </div>
            <div className="my-3 p-3">
              <div className="flex flex-col mb-4">
                <h2>Select offering</h2>
              </div>
              <div className="flex gap-10 ">
                <label htmlFor="payment">
                  <div
                    className={`w-44 h-40 rounded-lg  ${
                      data[1].payment.payment
                        ? "bg-[#F0F2FF] border-2 border-[#384EDD]"
                        : "bg-[#F6F5F8]"
                    }  flex flex-col gap-2 items-center justify-center`}
                  >
                    <input
                      className="sr-only"
                      onChange={(event) => {
                        useData([
                          ...data,
                          (data[1].payment.payment = event.target.checked),
                        ]);
                      }}
                      type="checkbox"
                      name=""
                      id="payment"
                    />
                    <FiCreditCard className="w-8 h-8 opacity-40" />
                    <span className="text-sm">Payment</span>
                  </div>
                </label>
                <label htmlFor="product">
                  <div
                    className={`w-44 h-40 rounded-lg  ${
                      data[2].product.product
                        ? "bg-[#F0F2FF] border-2 border-[#384EDD]"
                        : "bg-[#F6F5F8]"
                    }  flex flex-col gap-2 items-center justify-center`}
                  >
                    <input
                      className="sr-only"
                      onChange={(event) => {
                        useData([
                          ...data,
                          (data[2].product.product = event.target.checked),
                        ]);
                      }}
                      type="checkbox"
                      name=""
                      id="product"
                    />
                    <MdOutlineShoppingCart className="w-9 h-9 opacity-40" />
                    <span className="text-sm">Product</span>
                  </div>
                </label>
              </div>
              <div
                className={`${
                  data[1].payment.payment
                    ? "flex items-center my-7 gap-10"
                    : "hidden"
                }`}
              >
                <label htmlFor="fixed">
                  <div
                    className={`flex items-center gap-3 h-10 w-44 px-6 border rounded-lg ${
                      data[1].payment.fixed
                        ? "border-[#384EDD] bg-[#F0F2FF]"
                        : "border-[#363939]"
                    } `}
                  >
                    <input
                      className="sr-only"
                      onChange={(event) =>
                        useData([
                          ...data,
                          ((data[1].payment.fixed = event.target.checked),
                          (data[1].payment.nagotiable = !event.target.checked)),
                        ])
                      }
                      type="radio"
                      name="amount"
                      id="fixed"
                    />
                    <span
                      className={`${
                        data[1].payment.payment && data[1].payment.fixed
                          ? "w-2 h-2 border-[6px] border-[#384EDD]"
                          : "w-4 h-4 border-2 border-[#B1B2B2]"
                      } rounded-full box-content`}
                    ></span>
                    <span className="text-sm font-semibold">Fixed</span>
                  </div>
                </label>
                <label htmlFor="negotiable">
                  <div
                    className={`flex items-center gap-3 h-10 w-44 px-6 border rounded-lg  ${
                      data[1].payment.payment && data[1].payment.nagotiable
                        ? "border-[#384EDD]  bg-[#F0F2FF]"
                        : "border-[#363939]"
                    }`}
                  >
                    <input
                      className="sr-only"
                      onChange={(event) =>
                        useData([
                          ...data,
                          ((data[1].payment.nagotiable = event.target.checked),
                          (data[1].payment.fixed = !event.target.checked)),
                        ])
                      }
                      type="radio"
                      name="amount"
                      id="negotiable"
                    />
                    <span
                      className={`${
                        data[1].payment.payment && data[1].payment.nagotiable
                          ? "w-2 h-2 border-[6px] border-[#384EDD]"
                          : "w-4 h-4 border-2 border-[#B1B2B2]"
                      } rounded-full box-content`}
                    ></span>
                    <span className="text-sm font-semibold">Negotiable</span>
                  </div>
                </label>
              </div>
              <div
                className={`${
                  data[1].payment.payment ? "max-w-[626.687px]" : "hidden"
                }`}
              >
                <h2
                  className={`${
                    data[1].payment.nagotiable ? "block text-lg mb-2" : "hidden"
                  }`}
                >
                  Enter Amount
                </h2>
                <div
                  className={`${
                    data[1].payment.payment && data[1].payment.nagotiable
                      ? "block"
                      : "hidden"
                  }`}
                >
                  <input
                    className="w-full"
                    onChange={(event) =>
                      useData([
                        ...data,
                        (data[1].payment.range = event.target.value),
                      ])
                    }
                    type="range"
                    id=""
                    name=""
                    min="0"
                    step="1000"
                    max="100000"
                  />
                  <div className="flex justify-between items-center">
                    <span>$0</span>
                    <span>${data[1].payment.range}</span>
                    <span>$100000+</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="mt-4 flex items-center">
                  <div
                    className={`${
                      data[1].payment.payment && data[1].payment.fixed
                        ? "block"
                        : "hidden"
                    }`}
                  >
                    <input
                      className="w-80 h-12 px-6 border rounded-lg border-[#363939]"
                      type="number"
                      onChange={(event) =>
                        useData([
                          ...data,
                          (data[1].payment.fixedAmt = event.target.value),
                        ])
                      }
                      name=""
                      id=""
                      placeholder="$ Enter Amount"
                    />
                  </div>
                  <div
                    className={`${
                      data[1].payment.payment && data[1].payment.nagotiable
                        ? "block"
                        : "hidden"
                    }`}
                  >
                    <input
                      className="w-80 h-12 px-6 border rounded-lg border-[#363939]"
                      type="number"
                      onChange={(event) =>
                        useData([
                          ...data,
                          (data[1].payment.min = event.target.value),
                        ])
                      }
                      name=""
                      id=""
                      placeholder="$ Min. Amount"
                    />
                    <span className="px-3">To</span>
                    <input
                      className="w-80 h-12 px-6 border rounded-lg border-[#363939]"
                      type="number"
                      onChange={(event) =>
                        useData([
                          ...data,
                          (data[1].payment.max = event.target.value),
                        ])
                      }
                      name=""
                      id=""
                      placeholder="$ Max. Amount"
                    />
                  </div>
                </div>
              </div>
              <div
                className={`${
                  data[1].payment.payment ? "block mt-4" : "hidden"
                }`}
              >
                <BiSolidError className="inline-block mx-1 text-xl text-red-600" />
                <span className="text-red-600 text-sm">
                  Low balance in your wallet.&nbsp;
                  <span className="font-semibold text-sm underline">
                    Add now
                  </span>
                </span>
              </div>
              <div
                className={`${
                  data[2].product.product ? "block mt-8" : "hidden"
                }`}
              >
                <textarea
                  className="w-[1007px] h-28 p-5 border rounded-lg border-[#363939]"
                  onChange={(event) =>
                    useData([
                      ...data,
                      (data[2].product.productDesc = event.target.value),
                    ])
                  }
                  name=""
                  id=""
                  placeholder="Product Description"
                ></textarea>
              </div>
              <div
                className={`${
                  data[2].product.product
                    ? "flex items-center my-7 gap-10"
                    : "hidden"
                }`}
              >
                <div className=" flex items-center justify-center h-9 w-44 border rounded-lg border-[#384EDD]">
                  <span className="text-sm font-semibold text-[#384EDD]">
                    Add Link
                  </span>
                </div>
                <div className=" flex items-center justify-center h-9 w-44 border rounded-lg border-[#384EDD]">
                  <span className="text-sm font-semibold text-[#384EDD]">
                    Upload
                  </span>
                </div>
              </div>
              <div className="flex justify-between w-full mt-12">
                <button className=" flex items-center justify-center gap-3 h-10 w-44 px-4 border rounded-[4px] border-[#384EDD]">
                  <span className="text-[#384EDD]">Back</span>
                </button>
                <div className="flex gap-6">
                  <input
                    type="submit"
                    value="Save"
                    className=" flex text-white items-center justify-center gap-3 h-10 w-44 px-4 border rounded-[4px] bg-[#384EDD] border-[#384EDD]"
                  ></input>
                  <input
                    type="submit"
                    value="Next"
                    className="text-white flex items-center justify-center gap-3 h-10 w-44 px-4 border rounded-[4px] bg-[#384EDD] border-[#384EDD]"
                  ></input>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BudgetOrignal;
