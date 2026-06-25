import type { ComponentDoc } from "./components";

function doc(
  slug: string,
  name: string,
  category: ComponentDoc["category"],
  description: string,
  usageCode: string,
): ComponentDoc {
  const importName = name.replace(/ /g, "");
  return {
    slug,
    name,
    category,
    description,
    importCode: `import { ${importName} } from "neo-brutalism-ui-mates";`,
    usageCode,
    props: [{ name: "className", type: "string", description: "Additional Tailwind classes" }],
    examples: [{ title: "Basic", code: usageCode }],
  };
}

export const newComponentDocs: ComponentDoc[] = [
  doc("accordion", "Accordion", "layout", "Vertically stacked expandable sections.", `<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>Yes. It uses Radix UI primitives.</AccordionContent>
  </AccordionItem>
</Accordion>`),
  doc("alert-dialog", "Alert Dialog", "overlay", "Modal dialog for critical confirmations.", `<AlertDialog>
  <AlertDialogTrigger asChild><Button variant="outline">Delete</Button></AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
      <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`),
  doc("breadcrumb", "Breadcrumb", "layout", "Navigation trail showing page hierarchy.", `<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem><BreadcrumbPage>Components</BreadcrumbPage></BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`),
  doc("calendar", "Calendar", "form", "Date picker calendar built on react-day-picker.", `<Calendar mode="single" selected={date} onSelect={setDate} />`),
  doc("carousel", "Carousel", "layout", "Carousel with Embla for sliding content.", `<Carousel>
  <CarouselContent>
    <CarouselItem>Slide 1</CarouselItem>
    <CarouselItem>Slide 2</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`),
  doc("chart", "Chart", "layout", "Recharts wrapper with neo-brutalism tooltip styling.", `<ChartContainer config={chartConfig}>
  <BarChart data={data}><Bar dataKey="value" /></BarChart>
</ChartContainer>`),
  doc("collapsible", "Collapsible", "layout", "Toggle visibility of content sections.", `<Collapsible>
  <CollapsibleTrigger>Toggle</CollapsibleTrigger>
  <CollapsibleContent>Hidden content</CollapsibleContent>
</Collapsible>`),
  doc("combobox", "Combobox", "form", "Searchable select built with Command + Popover.", `<Combobox options={options} value={value} onValueChange={setValue} />`),
  doc("command", "Command", "overlay", "Command palette for fast keyboard navigation.", `<Command>
  <CommandInput placeholder="Type a command..." />
  <CommandList>
    <CommandEmpty>No results.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>Calendar</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`),
  doc("context-menu", "Context Menu", "overlay", "Right-click context menu.", `<ContextMenu>
  <ContextMenuTrigger>Right click</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Back</ContextMenuItem>
    <ContextMenuItem>Forward</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`),
  doc("data-table", "Data Table", "layout", "Sortable, paginated table powered by TanStack Table.", `<DataTable columns={columns} data={data} />`),
  doc("date-picker", "Date Picker", "form", "Popover date picker combining Calendar and Button.", `<DatePicker date={date} onDateChange={setDate} />`),
  doc("drawer", "Drawer", "overlay", "Mobile-friendly bottom drawer using Vaul.", `<Drawer>
  <DrawerTrigger>Open</DrawerTrigger>
  <DrawerContent><DrawerTitle>Drawer</DrawerTitle></DrawerContent>
</Drawer>`),
  doc("form", "Form", "form", "Form helpers integrated with react-hook-form.", `<Form {...form}>
  <FormField control={form.control} name="email" render={({ field }) => (
    <FormItem><FormLabel>Email</FormLabel><FormControl><Input {...field} /></FormControl></FormItem>
  )} />
</Form>`),
  doc("hover-card", "Hover Card", "overlay", "Card preview on hover.", `<HoverCard>
  <HoverCardTrigger>@username</HoverCardTrigger>
  <HoverCardContent>User profile preview</HoverCardContent>
</HoverCard>`),
  doc("image-card", "Image Card", "layout", "Card variant with image header.", `<ImageCard>
  <ImageCardImage src="/photo.jpg" alt="Photo" />
  <ImageCardHeader><ImageCardTitle>Title</ImageCardTitle></ImageCardHeader>
</ImageCard>`),
  doc("input-otp", "Input OTP", "form", "One-time password input.", `<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
  </InputOTPGroup>
</InputOTP>`),
  doc("marquee", "Marquee", "layout", "Infinite scrolling marquee animation.", `<Marquee>
  <span>Neo Brutalism</span>
  <span>Bold Design</span>
</Marquee>`),
  doc("menubar", "Menubar", "overlay", "Horizontal menu bar with dropdowns.", `<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent><MenubarItem>New</MenubarItem></MenubarContent>
  </MenubarMenu>
</Menubar>`),
  doc("navigation-menu", "Navigation Menu", "layout", "Accessible navigation with dropdowns.", `<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
      <NavigationMenuContent>Links here</NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`),
  doc("pagination", "Pagination", "layout", "Page navigation controls.", `<Pagination>
  <PaginationContent>
    <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
    <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
    <PaginationItem><PaginationNext href="#" /></PaginationItem>
  </PaginationContent>
</Pagination>`),
  doc("resizable", "Resizable", "layout", "Resizable panel layout.", `<ResizablePanelGroup direction="horizontal">
  <ResizablePanel defaultSize={50}>Panel A</ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={50}>Panel B</ResizablePanel>
</ResizablePanelGroup>`),
  doc("scroll-area", "Scroll Area", "layout", "Custom styled scrollable container.", `<ScrollArea className="h-48 w-48 rounded-md border">
  <div className="p-4">Long content...</div>
</ScrollArea>`),
  doc("sidebar", "Sidebar", "layout", "Collapsible application sidebar.", `<SidebarProvider>
  <Sidebar><SidebarContent>Menu</SidebarContent></Sidebar>
  <SidebarInset>Main content</SidebarInset>
</SidebarProvider>`),
  doc("sonner", "Sonner", "overlay", "Toast notifications via Sonner.", `<Toaster />
<Button onClick={() => toast("Event created")}>Show Toast</Button>`),
];
