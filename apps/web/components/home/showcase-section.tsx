"use client";

import {
  Alert,
  AlertDescription,
  AlertTitle,
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "neo-brutalism-ui-mates";

export function ShowcaseSection() {
  return (
    <section className="bg-muted/30 px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">
              Live component preview
            </h2>
            <p className="mt-2 max-w-xl text-muted-foreground">
              Interactive examples from the library. Copy, paste, and customize.
            </p>
          </div>
          <Badge variant="accent" className="w-fit">
            Try the tabs below
          </Badge>
        </div>

        <div className="rounded-md border-[3px] border-dashed border-border bg-background p-6 shadow-brutal sm:p-8">
          <Tabs defaultValue="form" className="w-full">
            <TabsList className="mb-6 w-full justify-start overflow-x-auto">
              <TabsTrigger value="form">Form</TabsTrigger>
              <TabsTrigger value="buttons">Buttons</TabsTrigger>
              <TabsTrigger value="alert">Alert</TabsTrigger>
            </TabsList>

            <TabsContent value="form" className="mt-0">
              <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-2 lg:items-start">
                <Card>
                  <CardHeader>
                    <CardTitle>Sign up</CardTitle>
                    <CardDescription>Create an account with brutal style.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 pt-6">
                    <Input placeholder="Email address" type="email" />
                    <Input placeholder="Password" type="password" />
                  </CardContent>
                  <CardFooter className="pt-6">
                    <Button className="w-full">Create account</Button>
                  </CardFooter>
                </Card>
                <div className="flex flex-col gap-4">
                  <Alert variant="secondary">
                    <AlertTitle>Design philosophy</AlertTitle>
                    <AlertDescription>
                      Neo-brutalism embraces raw aesthetics: bold borders, flat colors,
                      and shadows that feel physical.
                    </AlertDescription>
                  </Alert>
                  <div className="flex flex-wrap gap-2">
                    <Badge>React 19</Badge>
                    <Badge variant="secondary">Tailwind v4</Badge>
                    <Badge variant="accent">Radix UI</Badge>
                    <Badge variant="outline">TypeScript</Badge>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="buttons" className="mt-0">
              <div className="flex flex-col items-center gap-6">
                <div className="flex flex-wrap justify-center gap-3">
                  <Button>Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="accent">Accent</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="ghost">Ghost</Button>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                  <Button size="icon" aria-label="Add">
                    +
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="alert" className="mt-0">
              <div className="mx-auto flex max-w-lg flex-col gap-4">
                <Alert>
                  <AlertTitle>Heads up!</AlertTitle>
                  <AlertDescription>
                    You can add components to your app using the CLI or manual install.
                  </AlertDescription>
                </Alert>
                <Alert variant="destructive">
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>
                    Something went wrong. Check your configuration and try again.
                  </AlertDescription>
                </Alert>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
