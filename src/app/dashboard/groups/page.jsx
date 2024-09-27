'use client'
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { DatePickerPopover } from "@/components/date-picker-popover";
import { MoreHorizontal, X } from "lucide-react";

export default function DynamicInfoDateForm() {
    const [fields, setFields] = useState([
        { info: "", date: undefined },
    ]);

    const handleAddField = () => {
        setFields([...fields, { info: "", date: undefined }]);
    };

    const handleRemoveField = (index) => {
        const newFields = fields.filter((_, i) => i !== index);
        setFields(newFields);
    };

    const handleChangeInfo = (index, value) => {
        const newFields = fields.map((field, i) =>
            i === index ? { ...field, info: value } : field
        );
        setFields(newFields);
    };

    const handleSelectDate = (index, date) => {
        const newFields = fields.map((field, i) =>
            i === index ? { ...field, date } : field
        );
        setFields(newFields);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted Data:", fields);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {fields.map((field, index) => (
                <div key={index} className="space-y-2">
                    <div className='grid grid-cols-5 gap-4'>
                        <div className='col-span-3 items-center gap-2'>
                            <Input
                                id={`info-${index}`}
                                value={field.info}
                                onChange={(e) => handleChangeInfo(index, e.target.value)}
                                placeholder="Nhập thông tin"
                            />
                        </div>
                        <div className='flex col-span-2 items-center gap-2'>
                            <DatePickerPopover
                                selected={field.date}
                                onSelect={(date) => handleSelectDate(index, date)} />
                            <Button aria-haspopup="true" size="icon" variant="outline" onClick={() => handleRemoveField(index)}>
                                <X className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </div>
                    </div>
                </div>
            ))}

            <Button type="button" onClick={handleAddField} className="w-full">
                Thêm Thông tin
            </Button>

            <Button type="submit" className="w-full mt-4">
                Gửi
            </Button>
        </form>
    );
}
