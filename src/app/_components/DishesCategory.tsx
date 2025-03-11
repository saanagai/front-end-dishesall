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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  username: z.string().min(2).max(50),
});

export default function Category() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <div className=" bg-slate-200 w-96 h-20 rounded-lg flex  gap-4 py-5 mt-5 px-5">
            <h2 className="font-semibold text-[16px]  ">Dishes Category</h2>
            <div className="rounded-full size-5 bg-red-500 flex justify-center items-center text-white  ">
              +
            </div>
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle></DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-[16px] ">
                      Add new category
                    </FormLabel>
                    <p className="text-[14px]">Category name</p>
                    <FormControl>
                      <Input
                        placeholder="Type category name..."
                        {...field}
                        className="text-[14px]"
                      />
                    </FormControl>
                    <FormDescription>
                      {/* This is your public display name. */}
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button variant={"default"}>Add category</Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
