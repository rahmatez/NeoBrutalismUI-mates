import { Badge, Button, Card, CardContent, CardFooter, CardHeader, CardTitle } from "neo-brutalism-ui-mates";

const plans = [
  {
    name: "Starter",
    price: "$0",
    features: ["5 components", "Community support", "MIT license"],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29",
    features: ["All components", "Blocks library", "Priority support"],
    highlighted: true,
  },
  {
    name: "Team",
    price: "$99",
    features: ["Everything in Pro", "Custom themes", "SLA guarantee"],
    highlighted: false,
  },
];

export function PricingBlock() {
  return (
    <section className="w-full">
      <div className="mb-8 text-center">
        <h2 className="font-heading text-3xl font-bold">Simple Pricing</h2>
        <p className="mt-2 text-muted-foreground">
          Choose the plan that fits your project.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3 md:items-stretch">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={`flex h-full flex-col ${plan.highlighted ? "border-primary bg-accent text-accent-foreground" : ""}`}
          >
            <CardHeader className="space-y-3">
              <div className="flex min-h-8 items-center justify-between gap-2">
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                {plan.highlighted ? (
                  <Badge>Popular</Badge>
                ) : (
                  <Badge className="invisible" aria-hidden>
                    Popular
                  </Badge>
                )}
              </div>
              <div>
                <p className="font-heading text-4xl font-bold leading-none">
                  {plan.price}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">per month</p>
              </div>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col pt-6">
              <ul className="space-y-2 text-sm font-medium">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-0.5 shrink-0 text-primary">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="mt-auto pt-6">
              <Button
                className="w-full"
                variant={plan.highlighted ? "default" : "outline"}
              >
                Get {plan.name}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
