"use client";

import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
  AlertDescription,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertTitle,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  Calendar,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  Checkbox,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Combobox,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
  DataTable,
  DataTableColumnHeader,
  DatePicker,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  ImageCard,
  ImageCardDescription,
  ImageCardFooter,
  ImageCardHeader,
  ImageCardImage,
  ImageCardTitle,
  Input,
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  Label,
  Marquee,
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Progress,
  RadioGroup,
  RadioGroupItem,
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
  ScrollArea,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Separator,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  Skeleton,
  Slider,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
  Toggle,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  type ColumnDef,
} from "neo-brutalism-ui-mates";
import { useForm } from "react-hook-form";
import { Bar, BarChart, XAxis } from "recharts";
import { toast } from "sonner";

export function ComponentDemo({ slug }: { slug: string }) {
  switch (slug) {
    case "button":
      return (
        <div className="space-y-6">
          <div className="flex flex-wrap gap-4">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="accent">Accent</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon" aria-label="Add">
              +
            </Button>
          </div>
        </div>
      );
    case "card":
      return (
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Project Card</CardTitle>
            <CardDescription>A sample card component.</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-sm">Cards use thick borders and hard shadows.</p>
          </CardContent>
          <CardFooter className="pt-6">
            <Button size="sm">Action</Button>
          </CardFooter>
        </Card>
      );
    case "input":
      return (
        <div className="max-w-sm space-y-4">
          <div className="space-y-2">
            <Label htmlFor="demo-email">Email</Label>
            <Input id="demo-email" type="email" placeholder="you@example.com" />
          </div>
          <Input disabled placeholder="Disabled input" />
        </div>
      );
    case "textarea":
      return (
        <div className="max-w-sm space-y-2">
          <Label htmlFor="demo-message">Message</Label>
          <Textarea id="demo-message" placeholder="Write something bold..." />
        </div>
      );
    case "badge":
      return (
        <div className="flex flex-wrap gap-3">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="accent">Accent</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      );
    case "alert":
      return (
        <div className="max-w-lg space-y-4">
          <Alert>
            <AlertTitle>Default alert</AlertTitle>
            <AlertDescription>Standard background with bold border.</AlertDescription>
          </Alert>
          <Alert variant="primary">
            <AlertTitle>Primary alert</AlertTitle>
            <AlertDescription>Uses the primary color token.</AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>Something went wrong.</AlertDescription>
          </Alert>
        </div>
      );
    case "label":
      return (
        <div className="space-y-2">
          <Label htmlFor="demo-name">Full Name</Label>
          <Input id="demo-name" placeholder="Jane Doe" />
        </div>
      );
    case "checkbox":
      return (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Checkbox id="demo-terms" />
            <Label htmlFor="demo-terms">Accept terms and conditions</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="demo-disabled" disabled />
            <Label htmlFor="demo-disabled">Disabled checkbox</Label>
          </div>
        </div>
      );
    case "switch":
      return (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Switch id="demo-notif" />
            <Label htmlFor="demo-notif">Enable notifications</Label>
          </div>
          <div className="flex items-center gap-2">
            <Switch id="demo-switch-off" disabled />
            <Label htmlFor="demo-switch-off">Disabled switch</Label>
          </div>
        </div>
      );
    case "separator":
      return (
        <div className="max-w-sm space-y-4">
          <p className="text-sm font-bold">Section above</p>
          <Separator />
          <p className="text-sm font-bold">Section below</p>
          <div className="flex h-8 items-center gap-4">
            <span className="text-sm font-bold">Item 1</span>
            <Separator orientation="vertical" />
            <span className="text-sm font-bold">Item 2</span>
          </div>
        </div>
      );
    case "dialog":
      return (
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline">Cancel</Button>
              <Button variant="destructive">Delete</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      );
    case "tabs":
      return (
        <Tabs defaultValue="account" className="max-w-md">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <p className="text-sm">Manage your account settings here.</p>
          </TabsContent>
          <TabsContent value="password">
            <p className="text-sm">Change your password here.</p>
          </TabsContent>
        </Tabs>
      );
    case "select":
      return (
        <Select defaultValue="apple">
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="orange">Orange</SelectItem>
          </SelectContent>
        </Select>
      );
    case "dropdown-menu":
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Open Menu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    case "tooltip":
      return (
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Hover me</Button>
          </TooltipTrigger>
          <TooltipContent>NeoBrutalismUI mates tooltip!</TooltipContent>
        </Tooltip>
      );
    case "sheet":
      return (
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Open Sheet</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Sheet Panel</SheetTitle>
            </SheetHeader>
            <p className="text-sm text-muted-foreground">
              Slide-in panel from the right side.
            </p>
          </SheetContent>
        </Sheet>
      );
    case "popover":
      return (
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Open Popover</Button>
          </PopoverTrigger>
          <PopoverContent>
            <p className="text-sm font-bold">Dimensions</p>
            <p className="text-sm text-muted-foreground">
              Set the dimensions for the layer.
            </p>
          </PopoverContent>
        </Popover>
      );
    case "radio-group":
      return (
        <RadioGroup defaultValue="comfortable" className="space-y-2">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="default" id="r1" />
            <Label htmlFor="r1">Default</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="comfortable" id="r2" />
            <Label htmlFor="r2">Comfortable</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="compact" id="r3" />
            <Label htmlFor="r3">Compact</Label>
          </div>
        </RadioGroup>
      );
    case "slider":
      return <Slider defaultValue={[50]} max={100} step={1} className="w-[60%]" />;
    case "toggle":
      return (
        <div className="flex gap-2">
          <Toggle variant="outline" aria-label="Toggle bold">
            Bold
          </Toggle>
          <Toggle variant="outline" aria-label="Toggle italic">
            Italic
          </Toggle>
        </div>
      );
    case "table":
      return (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>$250.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>INV002</TableCell>
              <TableCell>Pending</TableCell>
              <TableCell>$150.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );
    case "avatar":
      return (
        <div className="flex gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>NB</AvatarFallback>
          </Avatar>
        </div>
      );
    case "skeleton":
      return (
        <div className="flex items-center gap-4">
          <Skeleton className="size-12 rounded-md" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[200px]" />
            <Skeleton className="h-4 w-[160px]" />
          </div>
        </div>
      );
    case "progress":
      return (
        <div className="w-full max-w-sm space-y-2">
          <Progress value={33} />
          <Progress value={66} />
          <Progress value={100} />
        </div>
      );
    case "accordion":
      return (
        <Accordion type="single" collapsible className="w-full max-w-md">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>Yes. Built on Radix UI Accordion.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>Thick borders and bold typography throughout.</AccordionContent>
          </AccordionItem>
        </Accordion>
      );
    case "alert-dialog":
      return (
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive">Delete account</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      );
    case "breadcrumb":
      return (
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Components</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      );
    case "calendar":
      return <CalendarDemo />;
    case "carousel":
      return (
        <Carousel className="mx-auto w-full max-w-xs">
          <CarouselContent>
            {Array.from({ length: 3 }).map((_, i) => (
              <CarouselItem key={i}>
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-bold">{i + 1}</span>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      );
    case "chart":
      return <ChartDemo />;
    case "collapsible":
      return (
        <Collapsible className="w-full max-w-sm space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold">3 notifications</span>
            <CollapsibleTrigger asChild>
              <Button variant="outline" size="sm">
                Toggle
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="space-y-2">
            <div className="rounded-md border-[3px] border-border p-2 text-sm">Update available</div>
            <div className="rounded-md border-[3px] border-border p-2 text-sm">New message</div>
          </CollapsibleContent>
        </Collapsible>
      );
    case "combobox":
      return <ComboboxDemo />;
    case "command":
      return (
        <Command className="max-w-sm rounded-lg border-[3px] border-border shadow-brutal">
          <CommandInput placeholder="Type a command..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>Calendar</CommandItem>
              <CommandItem>Search</CommandItem>
              <CommandItem>Settings</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      );
    case "context-menu":
      return (
        <ContextMenu>
          <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border-[3px] border-dashed border-border text-sm">
            Right click here
          </ContextMenuTrigger>
          <ContextMenuContent className="w-48">
            <ContextMenuItem>Back</ContextMenuItem>
            <ContextMenuItem>Forward</ContextMenuItem>
            <ContextMenuItem>Reload</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      );
    case "data-table":
      return <DataTableDemo />;
    case "date-picker":
      return <DatePickerDemo />;
    case "form":
      return <FormDemo />;
    case "drawer":
      return (
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline">Open Drawer</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Drawer Title</DrawerTitle>
              <DrawerDescription>Slide-up panel for mobile-friendly actions.</DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <Button>Submit</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      );
    case "hover-card":
      return (
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="link">@neobrutalism</Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="space-y-1">
              <h4 className="font-heading text-sm font-bold">NeoBrutalismUI</h4>
              <p className="text-sm text-muted-foreground">
                Bold borders, hard shadows, zero compromise.
              </p>
            </div>
          </HoverCardContent>
        </HoverCard>
      );
    case "image-card":
      return (
        <ImageCard className="w-full max-w-sm">
          <ImageCardImage
            src="https://images.unsplash.com/photo-1557683316-973673baf926?w=400"
            alt="Gradient"
          />
          <ImageCardHeader>
            <ImageCardTitle>Image Card</ImageCardTitle>
            <ImageCardDescription>Card with image header.</ImageCardDescription>
          </ImageCardHeader>
          <ImageCardFooter>
            <Button size="sm">View</Button>
          </ImageCardFooter>
        </ImageCard>
      );
    case "input-otp":
      return (
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      );
    case "marquee":
      return (
        <Marquee className="rounded-md [--duration:20s]">
          {["Neo Brutalism", "Bold Borders", "Hard Shadows", "No Compromise"].map((text) => (
            <span key={text} className="mx-4 font-heading text-lg font-bold">
              {text}
            </span>
          ))}
        </Marquee>
      );
    case "menubar":
      return (
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>New Tab</MenubarItem>
              <MenubarItem>New Window</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Edit</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Undo</MenubarItem>
              <MenubarItem>Redo</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      );
    case "navigation-menu":
      return (
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-2 p-4">
                  <li>
                    <NavigationMenuLink className="block rounded-md p-2 text-sm font-bold hover:bg-muted">
                      Introduction
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink className="block rounded-md p-2 text-sm font-bold hover:bg-muted">
                      Installation
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      );
    case "pagination":
      return (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      );
    case "resizable":
      return (
        <ResizablePanelGroup
          direction="horizontal"
          className="min-h-[200px] max-w-md rounded-lg border-[3px] border-border"
        >
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center p-6 font-bold">Panel A</div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center p-6 font-bold">Panel B</div>
          </ResizablePanel>
        </ResizablePanelGroup>
      );
    case "scroll-area":
      return (
        <ScrollArea className="h-48 w-48 rounded-md border-[3px] border-border shadow-brutal-sm">
          <div className="space-y-4 p-4">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="text-sm font-bold">
                Item {i + 1}
              </div>
            ))}
          </div>
        </ScrollArea>
      );
    case "sidebar":
      return (
        <SidebarProvider className="min-h-[300px] rounded-lg border-[3px] border-border">
          <Sidebar collapsible="none" className="block! relative! h-auto!">
            <SidebarHeader>
              <span className="font-heading font-bold">App</span>
            </SidebarHeader>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Menu</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton isActive>Dashboard</SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>Settings</SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
          <SidebarInset>
            <div className="flex items-center gap-2 border-b-[3px] border-border p-4">
              <SidebarTrigger />
              <span className="font-bold">Main content</span>
            </div>
          </SidebarInset>
        </SidebarProvider>
      );
    case "sonner":
      return (
        <Button onClick={() => toast("Event has been created", { description: "Sunday, June 11" })}>
          Show Toast
        </Button>
      );
    default:
      return null;
  }
}

function FormDemo() {
  const form = useForm<{ email: string }>({
    defaultValues: { email: "" },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => toast.success(`Submitted: ${data.email}`))}
        className="w-full max-w-sm space-y-4"
      >
        <FormField
          control={form.control}
          name="email"
          rules={{ required: "Email is required" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="you@example.com" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border-[3px] border-border shadow-brutal-sm" />;
}

function DatePickerDemo() {
  const [date, setDate] = React.useState<Date | undefined>();
  return <DatePicker date={date} onDateChange={setDate} />;
}

function ComboboxDemo() {
  const [value, setValue] = React.useState("");
  const options = [
    { value: "react", label: "React" },
    { value: "next", label: "Next.js" },
    { value: "tailwind", label: "Tailwind CSS" },
  ];
  return <Combobox options={options} value={value} onValueChange={setValue} />;
}

const chartData = [
  { month: "Jan", desktop: 186 },
  { month: "Feb", desktop: 305 },
  { month: "Mar", desktop: 237 },
  { month: "Apr", desktop: 273 },
];

function ChartDemo() {
  return (
    <ChartContainer
      config={{ desktop: { label: "Desktop", color: "hsl(var(--primary))" } }}
      className="min-h-[200px] w-full max-w-md"
    >
      <BarChart data={chartData}>
        <XAxis dataKey="month" tickLine={false} axisLine={false} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}

type Payment = { id: string; status: string; amount: number };

const paymentColumns: ColumnDef<Payment>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Invoice" />,
  },
  { accessorKey: "status", header: "Status" },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => `$${row.getValue<number>("amount").toFixed(2)}`,
  },
];

const paymentData: Payment[] = [
  { id: "INV001", status: "Paid", amount: 250 },
  { id: "INV002", status: "Pending", amount: 150 },
  { id: "INV003", status: "Paid", amount: 350 },
];

function DataTableDemo() {
  return <DataTable columns={paymentColumns} data={paymentData} />;
}
