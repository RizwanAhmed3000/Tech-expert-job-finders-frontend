import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import resumeTwo from "../../assets/templates/cv-template-02.png";
import { useDispatch, useSelector } from "react-redux";
import { resumeSuccess } from "../../Redux/Slices/resumeSlices";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import { FiX } from "react-icons/fi";

const SelectWebsiteTemplateCard = ({ data, route, activeTab,setIsChooseTempModalOpen,setIsSelectResumeModalOpen }) => {
  // const dispatch = useDispatch();
  const { _id } = data;

  console.log(data);
  console.log(route);
  console.log(activeTab);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const { src,name } = data;
  // const stripePromise = loadStripe(
  //   "pk_test_51PLqWt06k5m2AJAi3kLvFyaGeGvRjX8FmmJcI7XwgTy43lxHPUqjKDBXgMNYczRHA2MHOCULQ6xmUuPr9E5T9o5e00CXzikXse"
  // );

  const handlerChanges =()=>{
    setIsChooseTempModalOpen(false)
    setIsSelectResumeModalOpen(true)
    

  }

  // const handleCheckout = async () => {
  //   const stripe = await stripePromise;

  //   try {
  //     const response = await axios.post(
  //       "http://localhost:5000/create-checkout-session",
  //       {
  //         name: "salik",
  //         amount: 100 * 100, // Amount in cents
  //       }
  //     );

  //     const session = response.data;
  //     console.log(session.id);
  //     // Redirect to Stripe Checkout
  //     const result = await stripe.redirectToCheckout({
  //       sessionId: session.id,
  //     });

  //     if (result.error) {
  //       console.error(result.error.message);
  //     }
  //   } catch (error) {
  //     console.error("Error during checkout:", error);
  //   }
  // };

  return (
    <>
      <Card
        // style={{ width: "180px" }}
        className="w-full group/item overflow-hidden relative justify-center  rounded-lg cursor-pointer bg-white drop-shadow-lg m-[2rem]"
      >
        <div className=" object-contain overflow-hidden">
          <div className="wrapper bg-white p-4 object-cover">
            <Card.Img
              variant="top"
              src={src}
              className="object-contain rounded-lg"
            />
          </div>
        </div>
        <div className="relative flex justify-center">
          <div className="relative text-center">
            <p className="text-3xl py-2 text-black-300">
              {name}
            </p>
          </div>
        </div>

        <div className="selectTemplateButton group-hover/item:flex hidden absolute top-0 left-0 w-full h-full border-[0.2rem] border-neutral-700 items-center justify-center">
          {activeTab !== "premium" ? (
           
              <button
                onClick={()=>handlerChanges()}
                className="selectTemplateButton bg-neutral-700 py-[0.8rem] px-[1.5rem] text-[1.6rem] leading-[1.6rem] text-white rounded-md "
              >
                Select
              </button>
           
          ) : (
            <Link  >
              <button   className="selectTemplateButton bg-neutral-700 py-[0.8rem] px-[1.5rem] text-[1.6rem] leading-[1.6rem] text-white rounded-md ">
                Select
              </button>
            </Link>
          )}
        </div>
      </Card>
    </>
  );
};

export default SelectWebsiteTemplateCard;
