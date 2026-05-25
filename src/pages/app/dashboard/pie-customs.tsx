import {
  Label,
  type LabelProps,
  type PieLabelRenderProps,
  type PieSectorShapeProps,
  Sector,
} from 'recharts';

const colors = [
  'var(--color-sky-500)',
  'var(--color-amber-500)',
  'var(--color-violet-500)',
  'var(--color-emerald-500)',
  'var(--color-red-500)',
] as const;
const RADIAN = Math.PI / 180;

type RenderCustomizedLabelProps = PieLabelRenderProps;
// eslint-disable-next-line react-refresh/only-export-components
export const renderCustomizedLabel = (
  data: {
    product: string;
    amount: number;
  }[],
  {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    value,
    index,
  }: RenderCustomizedLabelProps,
) => {
  if (cx == null || cy == null || innerRadius == null || outerRadius == null) {
    return null;
  }

  const radius = 12 + innerRadius + (outerRadius - innerRadius);
  const ncx = Number(cx);
  const x = ncx + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
  const ncy = Number(cy);
  const y = ncy + radius * Math.sin(-(midAngle ?? 0) * RADIAN);

  return (
    <text
      x={x}
      y={y}
      className="fill-muted-foreground text-xs"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {data[index].product.substring(0, 12).concat('...')} ({value})
    </text>
  );
};

export const CustomLabel = (props: LabelProps) => (
  <Label
    {...props}
    fill={colors[(props.index ?? 0) % colors.length]}
    position="inside"
    offset={20}
  />
);

export const CustomPie = (props: PieSectorShapeProps) => (
  <Sector
    {...props}
    fill={colors[props.index % colors.length]}
    className="stroke-background transition-opacity hover:opacity-80"
  />
);
