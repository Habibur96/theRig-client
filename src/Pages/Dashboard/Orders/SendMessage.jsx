import { useParams } from "react-router-dom";
import usePayment from "../../../Hooks/usePayment";
import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
const SendMessage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { id } = useParams();
  console.log(id);
  const [payments] = usePayment();

  const orders = payments.filter((payment) => payment._id === id);
  console.log(orders);
  console.log(orders[0]?._id);

  const onSubmit = (data) => {
    console.log(data);
    const test = {
      api_key: import.meta.env.VITE_API_KEY,
      senderid: import.meta.env.VITE_SENDER_ID,
      number: `${data?.phone}`,
      message: `${data?.message}`,
    };

    fetch(`http://bulksmsbd.net/api/smsapi`, {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(test),
    })
      .then((res) => res.json())
      .then((test) => {
        reset();
        console.log(test);
      });
  };

  return (
    <div className="w-50 ml-20 mt-5 ">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicMobile">
          <Form.Label>
            Mobile <span className="text-red-600 font-extrabold">*</span>
          </Form.Label>
          <Form.Control
            type="tel"
            name="phone"
            // value={orders[0].phone}
            {...register("phone", { required: true })}
            placeholder="Mobile"
          />
          {errors.phone && (
            <span className="text-red-600">Mobile num is required</span>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>
            Message<span className="text-red-600 font-extrabold">*</span>
          </Form.Label>
          <div className="mt-3">
            <label className="sr-only" htmlFor="message">
              Message
            </label>

            <textarea
              className="w-full textarea textarea-bordered rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Message"
              rows="6"
              defaultValue={`Dear ${orders[0]?.name}, your ordered product from The RIG (Order Id: ${orders[0]?._id}) will be delivered today by our delivery agent.`}
              id="message"
              {...register("message", { required: true })}
            ></textarea>
            {errors.message && (
              <span className="text-red-600">Message is required</span>
            )}
          </div>
        </Form.Group>
        <div className="d-grid gap-2 mt-4">
          <Button variant="info" type="submit" value="" size="">
            Continue
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default SendMessage;
