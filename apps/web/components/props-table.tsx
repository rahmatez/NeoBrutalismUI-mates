import { Card, CardContent } from "neo-brutalism-ui-mates";

export type PropDefinition = {
  name: string;
  type: string;
  default?: string;
  description: string;
};

export function PropsTable({ props }: { props: PropDefinition[] }) {
  return (
    <Card className="overflow-hidden shadow-none">
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b-[3px] border-border bg-muted">
                <th className="px-4 py-3 font-heading font-bold">Prop</th>
                <th className="px-4 py-3 font-heading font-bold">Type</th>
                <th className="px-4 py-3 font-heading font-bold">Default</th>
                <th className="px-4 py-3 font-heading font-bold">Description</th>
              </tr>
            </thead>
            <tbody>
              {props.map((prop) => (
                <tr
                  key={prop.name}
                  className="border-b border-border/20 last:border-0"
                >
                  <td className="px-4 py-3 font-mono text-xs font-bold">
                    {prop.name}
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                    {prop.type}
                  </td>
                  <td className="px-4 py-3 font-mono text-xs">
                    {prop.default ?? "—"}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {prop.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
