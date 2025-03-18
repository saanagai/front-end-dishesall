"use client";
import {
  Dialog,
  DialogContent,
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
import { useEffect, useState } from "react";
import { FoodCategoryType } from "@/app/_components/_util/types";

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

const formSchema = z.object({
  categoryname: z.string().min(2, {
    message: "Category name must be at least 2 characters.",
  }),
});

export default function Category() {
  const [categories, setCategories] = useState<FoodCategoryType[]>();
  const [newCategoryName, setNewCategoryName] = useState<string>("");
  const [Active, setActive] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      categoryname: "",
    },
  });

  const getCategories = async () => {
    const data = await fetch("http://localhost:4000/food-category");
    const jsonData = await data.json();
    setCategories(jsonData.data);
    console.log(jsonData);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const createCategory = async () => {
    await fetch("http://localhost:4000/food-category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ categoryName: newCategoryName }),
    });

    handleClick();
    getCategories();
  };
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    createCategory();
    alert("zuv ajillaa");
  }

  const handleClick = () => {
    setActive(!Active);
  };

  return (
    <div>
      <ContextMenu>
        <ContextMenuTrigger>
          <div></div>Right click
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>
            Profile
            <DialogTrigger>
              <div className=" bg-slate-200 w-96 h-20 rounded-lg flex  gap-4 py-5 mt-5 px-5">
                <h2 className="font-semibold text-[16px]  ">Dishes Category</h2>
                <div className="rounded-full size-5 bg-red-500 flex justify-center items-center text-white  ">
                  +
                </div>
              </div>
            </DialogTrigger>
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>

      <Dialog>
        <DialogContent>
          <DialogTitle> Add new category</DialogTitle>

          <Input
            placeholder="Type category name..."
            className="text-[14px]"
            value={newCategoryName}
            onChange={(e) => setNewCategoryName(e.target.value)}
          />
          <Button variant={"default"} type="submit" onClick={createCategory}>
            Add category
          </Button>
        </DialogContent>
      </Dialog>
      {categories?.map((category: FoodCategoryType, index: number) => {
        return <div key={index}>{category.categoryName}</div>;
      })}
    </div>
  );
}
