"use client";

import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import "react-day-picker/dist/style.css";
import { CalendarComponent } from '@/components/ui/calendar';


export function DatePickerPopover({ selected, onSelect }) {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={`w-full pl-3 text-left font-normal ${!selected ? "text-muted-foreground" : ""}`}
                >
                    {selected ? (
                        format(selected, "PPP")
                    ) : (
                        <span>Pick a date</span>
                    )}
                    <CalendarIcon className="ml-4 h-4 w-4 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
                <CalendarComponent
                    initialFocus
                    mode="single"
                    translate="en"
                    selected={selected}
                    onSelect={onSelect} />
            </PopoverContent>
        </Popover>
    );
}