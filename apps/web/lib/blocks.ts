export type BlockDoc = {
  id: string;
  name: string;
  description: string;
  code: string;
};

export const blocks: BlockDoc[] = [
  {
    id: "hero",
    name: "Hero Section",
    description: "Landing hero with a bold headline, badge, and CTA buttons.",
    code: `import { Badge, Button } from "neo-brutalism-ui-mates";

export function Hero() {
  return (
    <section className="border-[3px] border-border bg-primary p-12 text-primary-foreground shadow-brutal-lg">
      <Badge variant="accent" className="mb-4">New Release</Badge>
      <h1 className="font-heading text-5xl font-bold">
        Build something bold today
      </h1>
      <p className="mt-4 max-w-lg font-medium">
        Ship landing pages faster with pre-built sections.
      </p>
      <div className="mt-6 flex gap-3">
        <Button variant="outline" size="lg">Get Started</Button>
        <Button variant="secondary" size="lg">Learn More</Button>
      </div>
    </section>
  );
}`,
  },
  {
    id: "pricing",
    name: "Pricing Table",
    description: "Three-tier pricing cards with a highlight on the popular plan.",
    code: `import { Badge, Button, Card, CardHeader, CardTitle, CardContent, CardFooter } from "neo-brutalism-ui-mates";

// Map over plans array and render Card per plan
<Card className="border-primary bg-accent">
  <CardHeader>
    <CardTitle>Pro</CardTitle>
    <p className="font-heading text-4xl font-bold">$29</p>
  </CardHeader>
  <CardContent>{/* features list */}</CardContent>
  <CardFooter>
    <Button className="w-full">Get Pro</Button>
  </CardFooter>
</Card>`,
  },
  {
    id: "login",
    name: "Login Form",
    description: "Login form with email, password, and social auth button.",
    code: `import { Button, Card, CardHeader, CardTitle, CardContent, Input, Label } from "neo-brutalism-ui-mates";

<Card className="max-w-md">
  <CardHeader>
    <CardTitle>Welcome back</CardTitle>
  </CardHeader>
  <CardContent className="space-y-4">
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" />
    </div>
    <div className="space-y-2">
      <Label htmlFor="password">Password</Label>
      <Input id="password" type="password" />
    </div>
    <Button className="w-full">Sign in</Button>
  </CardContent>
</Card>`,
  },
  {
    id: "footer",
    name: "Footer",
    description: "Site footer with link columns and copyright.",
    code: `import { Separator } from "neo-brutalism-ui-mates";

<footer className="border-[3px] border-border bg-secondary p-8 text-secondary-foreground shadow-brutal">
  <div className="grid gap-8 sm:grid-cols-3">
    {/* brand + link columns */}
  </div>
  <Separator className="my-6" />
  <p className="text-center text-sm font-bold">© 2026 NeoBrutalismUI mates</p>
</footer>`,
  },
];
