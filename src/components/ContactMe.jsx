import { useRef, useState } from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import emailjs from "@emailjs/browser";

export default function ContactMe() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_51co9q6", "template_li0z3uv", form.current, {
        publicKey: "1LjPIxOuolT8nK_o7",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="min-h-fit flex items-center justify-center p-4">
      <Card color="transparent" shadow={false} className="text-center">
        <Typography variant="h4" color="blue-gray">
          Do you want to talk to me?
        </Typography>
        <Typography
          color="gray"
          className="mt-1 font-normal max-w-sm break-words mx-auto"
        >
          Nice! Fill out this form so I can get your message immediately 🤩
        </Typography>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={handleSubmit}
          ref={form}
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Name
            </Typography>
            <Input
              size="lg"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              required
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              size="lg"
              name="email"
              type="email"
              placeholder="name@mail.com"
              value={formData.email}
              onChange={handleChange}
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              required
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Message
            </Typography>
            <Input
              size="lg"
              name="password"
              placeholder="Enter your message here..."
              value={formData.message}
              onChange={handleChange}
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              required
            />
          </div>
          <Button
            type="submit"
            className="mt-6 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold shadow-lg transform hover:scale-105 transition-all duration-200"
            fullWidth
          >
            Submit Message
          </Button>
        </form>
      </Card>
    </div>
  );
}
