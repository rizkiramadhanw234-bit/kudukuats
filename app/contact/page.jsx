"use client";

import React from "react";
import Image from "next/image";
import Banner from "../assets/banner.jpg";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Spinner } from "@/components/ui/spinner";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
} from "@/components/ui/alert-dialog";

export default function Contact() {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed");

      setFormData({ name: "", email: "", message: "" });
      setSuccess(true);
      setOpen(false);
    } catch (err) {
      alert("Message Failed");
      console.log(err);
    }
    setLoading(false);
  };

  return (
    <>
      <section className="h-screen w-full relative bg-(--bg1)">
        {/* background */}
        <Image
          src={Banner}
          alt="kudukuats"
          priority
          fill
          className="object-cover opacity-50"
        />

        {/* content */}
        <div className="relative h-full flex flex-col z-10 items-center justify-center">
          <h1
            className="text-center text-5xl font-bold text-white"
            data-aos="zoom-in"
          >
            Get In <span className="text-cyan-400">Touch</span>
          </h1>
          <p
            className="text-center text-white text-base px-10 sm:px-7 lg:text-lg mt-10"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Let’s collaborate and turn your concept into a polished digital
            product. <br />A simple message can be the start of something great
          </p>

          {/* pop up */}
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button
                data-aos="fade-up"
                data-aos-delay="200"
                className="mt-10 cursor-pointer px-3 py-5 bg-cyan-500 text-white hover:bg-cyan-400 hover:scale-101 transition duration-300"
              >
                Let&apos;s Get Started
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-(--bg1) border-cyan-500">
              <form onSubmit={handleSubmit}>
                <DialogHeader>
                  <DialogTitle className="text-white">Contact Me!</DialogTitle>
                  <DialogDescription className="text-gray-200">
                    Feel free to reach out to me for any questions or
                    opportunities.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">
                  <div className="grid gap-3">
                    <Label
                      htmlFor="name-1"
                      className="text-white mt-3 bg-(--bg1)"
                    >
                      Name
                    </Label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your Name"
                      className="text-white border-cyan-500"
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label
                      htmlFor="username-1"
                      className="text-white bg-(--bg1)"
                    >
                      Email
                    </Label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email address"
                      className="text-white border-cyan-500"
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label
                      htmlFor="username-1"
                      className="text-white bg-(--bg1)"
                    >
                      Message
                    </Label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Type Your Message"
                      className="text-white w-full px-4 py-3 border border-cyan-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition"
                    />
                  </div>
                </div>
                <DialogFooter className="mt-3">
                  <DialogClose asChild>
                    <Button variant="outline" className="cursor-pointer">
                      Cancel
                    </Button>
                  </DialogClose>
                  <Button
                    type="submit"
                    disabled={loading}
                    className="bg-cyan-500 hover:bg-cyan-400 cursor-pointer"
                  >
                    {loading ? <Spinner /> : "Submit Message"}
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
            <AlertDialog open={success} onOpenChange={setSuccess}>
              <AlertDialogContent className="bg-(--bg2) border-cyan-500">
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-white">
                    Message Sent!
                  </AlertDialogTitle>

                  <AlertDialogDescription className="text-white">
                    Thanks for reaching out. I&apos;ll get back to you shortly.
                  </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter>
                  <Button
                    onClick={() => setSuccess(false)}
                    className="cursor-pointer bg-cyan-500 hover:bg-cyan-400 hover:scale-105 transition duration-300"
                  >
                    Close
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </Dialog>
        </div>
      </section>
    </>
  );
}
