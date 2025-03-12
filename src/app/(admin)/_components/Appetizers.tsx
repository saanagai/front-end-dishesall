"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CloudinaryUpload } from "../../_components/CloudinaryUpload";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  foodname: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export default function page() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      foodname: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  // export function Appetizers() {
  //   const form = useForm<z.infer<typeof formSchema>>({
  //     resolver: zodResolver(formSchema),
  //     defaultValues: {
  //       foodname: "",
  //     },
  //   });

  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <div className="border-dashed border-2 border-red-500  w-60 h-52 rounded-lg flex flex-col justify-center items-center gap-4">
            <div className="rounded-full size-10 bg-red-500 flex justify-center items-center text-white ">
              +
            </div>
            <p className="w-32">Add new Dish to Appetizers</p>
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add new Dish to Appetizers</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <div className="flex gap-8">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="foodname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Food name</FormLabel>
                      <FormControl>
                        <Input placeholder="Type food name" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="foodname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Food price</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter price..." {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="foodname"
                render={({ field }) => (
                  <FormItem>
                    <Textarea placeholder="List ingredients..." />

                    <FormMessage />
                  </FormItem>
                )}
              />
              <CloudinaryUpload />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
