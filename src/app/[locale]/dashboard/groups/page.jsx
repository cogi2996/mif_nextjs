'use client'
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { DatePickerPopover } from "@/components/date-picker-popover";
import { MoreHorizontal, X } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

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
        <div>
            <div className="bg-background p-6">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead>Members/ Total Member</TableHead>
                            <TableHead>Posts</TableHead>
                            <TableHead>Posts/ Week</TableHead>
                            <TableHead></TableHead>
                        </TableRow>
                    </TableHeader>
                    {/* <TableBody>
                        {actorsData?.content?.map((actor) => {
                            return (
                                <TableRow key={actor.id}>
                                    <TableCell>{actor.name}</TableCell>
                                    <TableCell>10</TableCell>
                                    <TableCell>10</TableCell>
                                    <TableCell>10</TableCell>
                                    <TableCell>{actor.awards.length}</TableCell>
                                    <TableCell className="flex items-center gap-2">
                                        <DropdownMenu model={false}>
                                            <DropdownMenuTrigger asChild>
                                                <Button aria-haspopup="true" size="icon" variant="ghost">
                                                    <MoreHorizontal className="h-4 w-4" />
                                                    <span className="sr-only">Toggle menu</span>
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                <DropdownMenuItem onClick={() => hanleEditActor(actor.id)}>Edit</DropdownMenuItem>
                                                <DropdownMenuItem onClick={() => hanleDeleteActor(actor.id)}>Delete</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>

                            )
                        })}
                    </TableBody> */}
                </Table>
                {/* <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 0} />
                        </PaginationItem>
                        {Array.from({ length: Math.ceil((actorsData?.totalPages || 1)) }).map((_, index) => (
                            <PaginationItem key={index}>
                                <PaginationLink href="#" isActive={index === currentPage} onClick={() => handlePageChange(index)}>
                                    {index + 1}
                                </PaginationLink>
                            </PaginationItem>
                        ))}
                        <PaginationItem>
                            <PaginationNext onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage >= (actorsData?.totalPages || 1) - 1} />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination> */}
            </div>
        </div>
    )
}
