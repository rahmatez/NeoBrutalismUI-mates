"use client";

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Separator,
} from "neo-brutalism-ui-mates";

export function LoginBlock() {
  return (
    <Card className="mx-auto w-full max-w-md">
      <CardHeader>
        <CardTitle>Welcome back</CardTitle>
        <CardDescription>Sign in to your account to continue.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="login-email">Email</Label>
          <Input id="login-email" type="email" placeholder="you@example.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="login-password">Password</Label>
          <Input id="login-password" type="password" placeholder="••••••••" />
        </div>
        <Button className="w-full">Sign in</Button>
        <div className="flex items-center gap-4">
          <Separator className="flex-1" />
          <span className="text-xs font-bold text-muted-foreground">OR</span>
          <Separator className="flex-1" />
        </div>
        <Button variant="outline" className="w-full">
          Continue with Google
        </Button>
      </CardContent>
      <CardFooter className="justify-center">
        <p className="text-sm text-muted-foreground">
          No account?{" "}
          <button type="button" className="font-bold underline">
            Sign up
          </button>
        </p>
      </CardFooter>
    </Card>
  );
}
