import type { PropDefinition } from "@/components/props-table";
import { newComponentDocs } from "./new-component-docs";

export type ComponentExample = {
  title: string;
  code: string;
};

export type ComponentDoc = {
  slug: string;
  name: string;
  category: "core" | "form" | "overlay" | "layout";
  description: string;
  importCode: string;
  usageCode: string;
  props: PropDefinition[];
  variants?: { name: string; values: string; description: string }[];
  anatomy?: string[];
  examples: ComponentExample[];
  accessibility?: string;
};

export const componentCategories = [
  {
    name: "Core",
    components: [] as { slug: string; name: string }[],
  },
  {
    name: "Form",
    components: [] as { slug: string; name: string }[],
  },
  {
    name: "Overlay",
    components: [] as { slug: string; name: string }[],
  },
  {
    name: "Layout",
    components: [] as { slug: string; name: string }[],
  },
];

const categoryMap: Record<ComponentDoc["category"], string> = {
  core: "Core",
  form: "Form",
  overlay: "Overlay",
  layout: "Layout",
};

export const componentDocs: ComponentDoc[] = [
  {
    slug: "button",
    name: "Button",
    category: "core",
    description:
      "Interactive button with hard shadow and press effect on click. Supports multiple color variants and sizes.",
    importCode: `import { Button } from "neo-brutalism-ui-mates";`,
    usageCode: `<Button>Click me</Button>`,
    props: [
      { name: "variant", type: `"default" | "secondary" | "accent" | "outline" | "destructive" | "ghost" | "link"`, default: `"default"`, description: "Button visual style" },
      { name: "size", type: `"default" | "sm" | "lg" | "icon"`, default: `"default"`, description: "Button size" },
      { name: "asChild", type: "boolean", default: "false", description: "Render as child element (e.g. Link)" },
      { name: "disabled", type: "boolean", default: "false", description: "Disable interaction" },
      { name: "className", type: "string", description: "Additional Tailwind classes" },
    ],
    variants: [
      { name: "variant", values: "default, secondary, accent, outline, destructive, ghost, link", description: "Controls background color and style" },
      { name: "size", values: "default, sm, lg, icon", description: "Controls height and padding" },
    ],
    anatomy: ["Button", "Icon (optional)", "Label text"],
    examples: [
      { title: "Variants", code: `<Button>Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="accent">Accent</Button>
<Button variant="outline">Outline</Button>
<Button variant="destructive">Delete</Button>` },
      { title: "Sizes", code: `<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>` },
      { title: "As Link", code: `import Link from "next/link";

<Button asChild>
  <Link href="/docs">Go to docs</Link>
</Button>` },
    ],
    accessibility: "Uses the native <button> element. Ensure descriptive text labels. For icon-only buttons, add aria-label.",
  },
  {
    slug: "card",
    name: "Card",
    category: "core",
    description: "Container with thick border and hard shadow. Ideal for grouping content.",
    importCode: `import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "neo-brutalism-ui-mates";`,
    usageCode: `<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
  <CardFooter>Footer</CardFooter>
</Card>`,
    props: [
      { name: "className", type: "string", description: "Tailwind classes on the Card container" },
    ],
    anatomy: ["Card", "CardHeader", "CardTitle", "CardDescription", "CardContent", "CardFooter"],
    examples: [
      { title: "Basic card", code: `<Card className="max-w-md">
  <CardHeader>
    <CardTitle>Project</CardTitle>
    <CardDescription>Neo-brutalism card example</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-sm">Card content goes here.</p>
  </CardContent>
</Card>` },
    ],
    accessibility: "Use semantic headings inside CardTitle for clear document structure.",
  },
  {
    slug: "input",
    name: "Input",
    category: "form",
    description: "Text input with thick black border and press effect on focus.",
    importCode: `import { Input, Label } from "neo-brutalism-ui-mates";`,
    usageCode: `<Label htmlFor="email">Email</Label>
<Input id="email" type="email" placeholder="you@example.com" />`,
    props: [
      { name: "type", type: "string", default: `"text"`, description: "HTML input type (text, email, password, etc.)" },
      { name: "placeholder", type: "string", description: "Placeholder text" },
      { name: "disabled", type: "boolean", default: "false", description: "Disable the input" },
      { name: "className", type: "string", description: "Additional Tailwind classes" },
    ],
    examples: [
      { title: "With label", code: `<div className="space-y-2 max-w-sm">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="you@example.com" />
</div>` },
      { title: "Disabled", code: `<Input disabled placeholder="Disabled input" />` },
    ],
    accessibility: "Always pair with a Label using htmlFor/id. Add aria-describedby for error messages.",
  },
  {
    slug: "textarea",
    name: "Textarea",
    category: "form",
    description: "Multi-line text input with neo-brutalism styling.",
    importCode: `import { Textarea, Label } from "neo-brutalism-ui-mates";`,
    usageCode: `<Label htmlFor="msg">Message</Label>
<Textarea id="msg" placeholder="Type here..." />`,
    props: [
      { name: "placeholder", type: "string", description: "Placeholder text" },
      { name: "disabled", type: "boolean", default: "false", description: "Disable the textarea" },
      { name: "rows", type: "number", description: "Number of visible rows" },
      { name: "className", type: "string", description: "Additional Tailwind classes" },
    ],
    examples: [
      { title: "Basic", code: `<Textarea placeholder="Write something bold..." />` },
    ],
    accessibility: "Pair with a Label. Use aria-invalid and aria-describedby for form validation.",
  },
  {
    slug: "label",
    name: "Label",
    category: "form",
    description: "Accessible form label with bold typography, built on Radix Label.",
    importCode: `import { Label } from "neo-brutalism-ui-mates";`,
    usageCode: `<Label htmlFor="name">Full Name</Label>`,
    props: [
      { name: "htmlFor", type: "string", description: "ID of the associated form element" },
      { name: "className", type: "string", description: "Additional Tailwind classes" },
    ],
    examples: [
      { title: "With input", code: `<div className="space-y-2">
  <Label htmlFor="name">Full Name</Label>
  <Input id="name" placeholder="Jane Doe" />
</div>` },
    ],
    accessibility: "Built on @radix-ui/react-label. Automatically associates the label with the form control.",
  },
  {
    slug: "checkbox",
    name: "Checkbox",
    category: "form",
    description: "Checkbox with thick border and bold check indicator.",
    importCode: `import { Checkbox, Label } from "neo-brutalism-ui-mates";`,
    usageCode: `<div className="flex items-center gap-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms</Label>
</div>`,
    props: [
      { name: "checked", type: "boolean | 'indeterminate'", description: "Controlled state" },
      { name: "defaultChecked", type: "boolean", description: "Default uncontrolled state" },
      { name: "disabled", type: "boolean", default: "false", description: "Disable the checkbox" },
      { name: "onCheckedChange", type: "(checked: boolean) => void", description: "Callback when state changes" },
    ],
    examples: [
      { title: "Basic", code: `<div className="flex items-center gap-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>` },
      { title: "Disabled", code: `<Checkbox disabled />` },
    ],
    accessibility: "Built on Radix Checkbox. Supports keyboard navigation and indeterminate state.",
  },
  {
    slug: "switch",
    name: "Switch",
    category: "form",
    description: "On/off toggle switch with a moving thumb and brutal border.",
    importCode: `import { Switch, Label } from "neo-brutalism-ui-mates";`,
    usageCode: `<div className="flex items-center gap-2">
  <Switch id="airplane" />
  <Label htmlFor="airplane">Airplane mode</Label>
</div>`,
    props: [
      { name: "checked", type: "boolean", description: "Controlled state" },
      { name: "defaultChecked", type: "boolean", description: "Default uncontrolled state" },
      { name: "disabled", type: "boolean", default: "false", description: "Disable the switch" },
      { name: "onCheckedChange", type: "(checked: boolean) => void", description: "Callback on toggle" },
    ],
    examples: [
      { title: "Basic", code: `<div className="flex items-center gap-2">
  <Switch id="notifications" />
  <Label htmlFor="notifications">Enable notifications</Label>
</div>` },
    ],
    accessibility: "Use a Label with htmlFor. Radix Switch supports Space/Enter to toggle.",
  },
  {
    slug: "badge",
    name: "Badge",
    category: "core",
    description: "Small label for status, tags, or categories with bright colors.",
    importCode: `import { Badge } from "neo-brutalism-ui-mates";`,
    usageCode: `<Badge>New</Badge>`,
    props: [
      { name: "variant", type: `"default" | "secondary" | "accent" | "destructive" | "outline"`, default: `"default"`, description: "Badge color style" },
      { name: "className", type: "string", description: "Additional Tailwind classes" },
    ],
    variants: [
      { name: "variant", values: "default, secondary, accent, destructive, outline", description: "Controls badge background color" },
    ],
    examples: [
      { title: "All variants", code: `<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="accent">Accent</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>` },
    ],
    accessibility: "Badges are decorative. Do not use them as the sole indicator of important information.",
  },
  {
    slug: "alert",
    name: "Alert",
    category: "core",
    description: "Bold alert box for important messages with a solid background.",
    importCode: `import { Alert, AlertTitle, AlertDescription } from "neo-brutalism-ui-mates";`,
    usageCode: `<Alert>
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>Important message here.</AlertDescription>
</Alert>`,
    props: [
      { name: "variant", type: `"default" | "primary" | "secondary" | "destructive"`, default: `"default"`, description: "Alert color style" },
    ],
    variants: [
      { name: "variant", values: "default, primary, secondary, destructive", description: "Controls background color" },
    ],
    anatomy: ["Alert", "AlertTitle", "AlertDescription"],
    examples: [
      { title: "Variants", code: `<Alert variant="primary">
  <AlertTitle>Primary</AlertTitle>
  <AlertDescription>Uses primary color.</AlertDescription>
</Alert>

<Alert variant="destructive">
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>Something went wrong.</AlertDescription>
</Alert>` },
    ],
    accessibility: "Has role='alert'. Use for messages that require immediate user attention.",
  },
  {
    slug: "dialog",
    name: "Dialog",
    category: "overlay",
    description: "Modal dialog with dark overlay and brutal content box.",
    importCode: `import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "neo-brutalism-ui-mates";`,
    usageCode: `<Dialog>
  <DialogTrigger asChild>
    <Button>Open</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
      <DialogDescription>Description</DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>`,
    props: [
      { name: "open", type: "boolean", description: "Controlled state" },
      { name: "defaultOpen", type: "boolean", description: "Default uncontrolled state" },
      { name: "onOpenChange", type: "(open: boolean) => void", description: "Callback when dialog opens/closes" },
    ],
    anatomy: ["Dialog", "DialogTrigger", "DialogContent", "DialogHeader", "DialogTitle", "DialogDescription", "DialogFooter", "DialogClose"],
    examples: [
      { title: "Basic dialog", code: `<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button variant="outline">Cancel</Button>
      <Button variant="destructive">Delete</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>` },
    ],
    accessibility: "Radix Dialog handles focus trap, Escape to close, and automatic aria attributes.",
  },
  {
    slug: "tabs",
    name: "Tabs",
    category: "overlay",
    description: "Tab navigation with brutal triggers and card-style content panels.",
    importCode: `import { Tabs, TabsList, TabsTrigger, TabsContent } from "neo-brutalism-ui-mates";`,
    usageCode: `<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>`,
    props: [
      { name: "defaultValue", type: "string", description: "Default active tab (uncontrolled)" },
      { name: "value", type: "string", description: "Active tab (controlled)" },
      { name: "onValueChange", type: "(value: string) => void", description: "Callback when tab changes" },
    ],
    anatomy: ["Tabs", "TabsList", "TabsTrigger", "TabsContent"],
    examples: [
      { title: "Basic tabs", code: `<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    <p>Account settings here.</p>
  </TabsContent>
  <TabsContent value="password">
    <p>Password settings here.</p>
  </TabsContent>
</Tabs>` },
    ],
    accessibility: "Radix Tabs supports arrow key navigation between tab triggers.",
  },
  {
    slug: "select",
    name: "Select",
    category: "form",
    description: "Dropdown select with brutal border and hard shadow.",
    importCode: `import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "neo-brutalism-ui-mates";`,
    usageCode: `<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="a">Option A</SelectItem>
    <SelectItem value="b">Option B</SelectItem>
  </SelectContent>
</Select>`,
    props: [
      { name: "value", type: "string", description: "Controlled value" },
      { name: "defaultValue", type: "string", description: "Default value" },
      { name: "onValueChange", type: "(value: string) => void", description: "Callback when value changes" },
      { name: "disabled", type: "boolean", default: "false", description: "Disable the select" },
    ],
    anatomy: ["Select", "SelectTrigger", "SelectValue", "SelectContent", "SelectItem"],
    examples: [{ title: "Basic", code: `<Select defaultValue="apple">
  <SelectTrigger className="w-[200px]">
    <SelectValue placeholder="Fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
  </SelectContent>
</Select>` }],
    accessibility: "Radix Select supports keyboard navigation and typeahead.",
  },
  {
    slug: "dropdown-menu",
    name: "Dropdown Menu",
    category: "overlay",
    description: "Dropdown menu for actions and contextual navigation.",
    importCode: `import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "neo-brutalism-ui-mates";`,
    usageCode: `<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Open</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Settings</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
    props: [
      { name: "open", type: "boolean", description: "Controlled state" },
      { name: "onOpenChange", type: "(open: boolean) => void", description: "Callback when menu opens/closes" },
    ],
    examples: [{ title: "Basic", code: `<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Edit</DropdownMenuItem>
    <DropdownMenuItem>Delete</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>` }],
    accessibility: "Radix Dropdown Menu supports arrow keys and typeahead.",
  },
  {
    slug: "tooltip",
    name: "Tooltip",
    category: "overlay",
    description: "Small tooltip with primary background and hard shadow.",
    importCode: `import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "neo-brutalism-ui-mates";`,
    usageCode: `<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Hover me</Button>
    </TooltipTrigger>
    <TooltipContent>Tooltip text</TooltipContent>
  </Tooltip>
</TooltipProvider>`,
    props: [
      { name: "delayDuration", type: "number", default: "700", description: "Delay before tooltip appears (ms)" },
    ],
    examples: [{ title: "Basic", code: `<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">?</Button>
    </TooltipTrigger>
    <TooltipContent>Helpful tip</TooltipContent>
  </Tooltip>
</TooltipProvider>` }],
    accessibility: "Tooltip only appears on hover/focus. Do not hide critical information solely in a tooltip.",
  },
  {
    slug: "sheet",
    name: "Sheet",
    category: "overlay",
    description: "Slide-in panel from the screen edge — a dialog alternative for mobile.",
    importCode: `import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from "neo-brutalism-ui-mates";`,
    usageCode: `<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open Sheet</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Title</SheetTitle>
    </SheetHeader>
  </SheetContent>
</Sheet>`,
    props: [
      { name: "side", type: `"top" | "bottom" | "left" | "right"`, default: `"right"`, description: "Side the panel slides in from" },
    ],
    examples: [{ title: "Right sheet", code: `<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open</Button>
  </SheetTrigger>
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>Sidebar</SheetTitle>
    </SheetHeader>
  </SheetContent>
</Sheet>` }],
    accessibility: "Based on Radix Dialog — focus trap and Escape to close.",
  },
  {
    slug: "popover",
    name: "Popover",
    category: "overlay",
    description: "Floating content panel for small forms or additional information.",
    importCode: `import { Popover, PopoverTrigger, PopoverContent } from "neo-brutalism-ui-mates";`,
    usageCode: `<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open</Button>
  </PopoverTrigger>
  <PopoverContent>Content here</PopoverContent>
</Popover>`,
    props: [
      { name: "open", type: "boolean", description: "Controlled state" },
      { name: "onOpenChange", type: "(open: boolean) => void", description: "Callback" },
    ],
    examples: [{ title: "Basic", code: `<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Info</Button>
  </PopoverTrigger>
  <PopoverContent>
    <p className="text-sm">Additional information here.</p>
  </PopoverContent>
</Popover>` }],
    accessibility: "Radix Popover handles focus management and positioning.",
  },
  {
    slug: "radio-group",
    name: "Radio Group",
    category: "form",
    description: "Radio button group for single selection from multiple options.",
    importCode: `import { RadioGroup, RadioGroupItem, Label } from "neo-brutalism-ui-mates";`,
    usageCode: `<RadioGroup defaultValue="a">
  <div className="flex items-center gap-2">
    <RadioGroupItem value="a" id="a" />
    <Label htmlFor="a">Option A</Label>
  </div>
</RadioGroup>`,
    props: [
      { name: "value", type: "string", description: "Controlled value" },
      { name: "defaultValue", type: "string", description: "Default value" },
      { name: "onValueChange", type: "(value: string) => void", description: "Callback" },
    ],
    examples: [{ title: "Basic", code: `<RadioGroup defaultValue="comfortable">
  <div className="flex items-center gap-2">
    <RadioGroupItem value="default" id="r1" />
    <Label htmlFor="r1">Default</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="comfortable" id="r2" />
    <Label htmlFor="r2">Comfortable</Label>
  </div>
</RadioGroup>` }],
    accessibility: "Radix RadioGroup supports arrow key navigation.",
  },
  {
    slug: "slider",
    name: "Slider",
    category: "form",
    description: "Slider for selecting a value within a range.",
    importCode: `import { Slider } from "neo-brutalism-ui-mates";`,
    usageCode: `<Slider defaultValue={[50]} max={100} step={1} />`,
    props: [
      { name: "value", type: "number[]", description: "Controlled value" },
      { name: "defaultValue", type: "number[]", description: "Default value" },
      { name: "max", type: "number", default: "100", description: "Maximum value" },
      { name: "step", type: "number", default: "1", description: "Increment step" },
    ],
    examples: [{ title: "Basic", code: `<Slider defaultValue={[33]} max={100} step={1} className="w-[60%]" />` }],
    accessibility: "Radix Slider supports keyboard arrow keys to adjust the value.",
  },
  {
    slug: "toggle",
    name: "Toggle",
    category: "form",
    description: "On/off toggle button for actions like bold, italic, or filters.",
    importCode: `import { Toggle } from "neo-brutalism-ui-mates";`,
    usageCode: `<Toggle aria-label="Toggle bold">B</Toggle>`,
    props: [
      { name: "variant", type: `"default" | "outline"`, default: `"default"`, description: "Visual style" },
      { name: "size", type: `"default" | "sm" | "lg"`, default: `"default"`, description: "Size" },
      { name: "pressed", type: "boolean", description: "Controlled state" },
    ],
    variants: [
      { name: "variant", values: "default, outline", description: "Toggle style" },
      { name: "size", values: "default, sm, lg", description: "Size" },
    ],
    examples: [{ title: "Outline toggle", code: `<Toggle variant="outline" aria-label="Toggle italic">
  Italic
</Toggle>` }],
    accessibility: "Use aria-label if the toggle contains only an icon.",
  },
  {
    slug: "table",
    name: "Table",
    category: "layout",
    description: "Data table with brutal borders and bold header.",
    importCode: `import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "neo-brutalism-ui-mates";`,
    usageCode: `<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>John</TableCell>
      <TableCell>Active</TableCell>
    </TableRow>
  </TableBody>
</Table>`,
    props: [],
    anatomy: ["Table", "TableHeader", "TableBody", "TableRow", "TableHead", "TableCell", "TableCaption"],
    examples: [{ title: "Basic table", code: `<Table>
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
      <TableCell>$250</TableCell>
    </TableRow>
  </TableBody>
</Table>` }],
    accessibility: "Use TableHead for column headers. Consider the scope attribute for advanced accessibility.",
  },
  {
    slug: "avatar",
    name: "Avatar",
    category: "layout",
    description: "Image avatar with initial fallback and brutal border.",
    importCode: `import { Avatar, AvatarImage, AvatarFallback } from "neo-brutalism-ui-mates";`,
    usageCode: `<Avatar>
  <AvatarImage src="/avatar.png" alt="User" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>`,
    props: [
      { name: "src", type: "string", description: "Avatar image URL (on AvatarImage)" },
      { name: "alt", type: "string", description: "Image alt text" },
    ],
    examples: [{ title: "With fallback", code: `<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>` }],
    accessibility: "Always provide AvatarFallback for when the image fails to load.",
  },
  {
    slug: "skeleton",
    name: "Skeleton",
    category: "layout",
    description: "Loading placeholder with pulse animation.",
    importCode: `import { Skeleton } from "neo-brutalism-ui-mates";`,
    usageCode: `<Skeleton className="h-12 w-12 rounded-full" />`,
    props: [
      { name: "className", type: "string", description: "Control size and shape via Tailwind" },
    ],
    examples: [{ title: "Card skeleton", code: `<div className="space-y-2">
  <Skeleton className="h-4 w-[250px]" />
  <Skeleton className="h-4 w-[200px]" />
</div>` }],
    accessibility: "Use aria-busy or aria-label='Loading' on the parent container.",
  },
  {
    slug: "progress",
    name: "Progress",
    category: "layout",
    description: "Progress bar for showing task completion.",
    importCode: `import { Progress } from "neo-brutalism-ui-mates";`,
    usageCode: `<Progress value={60} />`,
    props: [
      { name: "value", type: "number", description: "Progress 0-100" },
      { name: "max", type: "number", default: "100", description: "Maximum value" },
    ],
    examples: [{ title: "Basic", code: `<Progress value={45} className="w-[60%]" />` }],
    accessibility: "Radix Progress provides role progressbar and aria-valuenow automatically.",
  },
  {
    slug: "separator",
    name: "Separator",
    category: "layout",
    description: "Thick 3px divider line for separating content sections.",
    importCode: `import { Separator } from "neo-brutalism-ui-mates";`,
    usageCode: `<Separator />`,
    props: [
      { name: "orientation", type: `"horizontal" | "vertical"`, default: `"horizontal"`, description: "Divider orientation" },
      { name: "decorative", type: "boolean", default: "true", description: "Whether purely decorative" },
    ],
    examples: [
      { title: "Horizontal", code: `<div className="space-y-4">
  <p>Section above</p>
  <Separator />
  <p>Section below</p>
</div>` },
      { title: "Vertical", code: `<div className="flex h-8 items-center gap-4">
  <span>Item 1</span>
  <Separator orientation="vertical" />
  <span>Item 2</span>
</div>` },
    ],
    accessibility: "Set decorative={false} if the separator divides semantically meaningful content.",
  },
  ...newComponentDocs,
];

// Populate categories (sorted alphabetically)
for (const doc of componentDocs) {
  const cat = componentCategories.find((c) => c.name === categoryMap[doc.category]);
  cat?.components.push({ slug: doc.slug, name: doc.name });
}
for (const cat of componentCategories) {
  cat.components.sort((a, b) => a.name.localeCompare(b.name));
}

export function getComponentDoc(slug: string) {
  return componentDocs.find((doc) => doc.slug === slug);
}
