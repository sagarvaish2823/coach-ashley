"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import Container from "@/components/ui/container";
import { toast } from "sonner";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  email: z.string().email(),
});

export default function Newsletter() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    toast.success("Added to newsletter");
    form.reset();
  }
  return (
    <Container className="mt-12 mb-4">
      <h2 className="text-xl font-bold text-left">Empower Yourself</h2>
      <p className="mb-4">Join for exclusive coaching events.</p>
      <div className="relative max-w-[25rem] mx-auto">
        {/* <Input
          type="email"
          placeholder="Email"
          className="rounded-2xl border-black py-4 px-12"
        />
        <Button
          type="submit"
          className="absolute rounded-2xl top-0 right-0 bg-[#e04848]"
          size={"default"}
        >
          <Send />
        </Button> */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="rounded-2xl border-black py-4 px-12"
                      placeholder="Email"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="absolute rounded-2xl top-0 right-0 bg-[#e04848]"
              size={"default"}
            >
              <Send />
            </Button>
          </form>
        </Form>
      </div>
    </Container>
  );
}
