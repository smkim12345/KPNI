import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, CartesianGrid, Cell, ReferenceLine, ReferenceArea, LabelList } from 'recharts';
import { THEME } from '../theme';
import { getProfileChartData } from '../../data/mockData';

interface ProfileChartData {
  name: string;
  value: number;
  fill: string;
  percentile: number;
  level: string;
  index: number;
}

interface ProfileChartProps {
  data?: ProfileChartData[];
}

export const ProfileChart = ({ data }: ProfileChartProps) => {
  const chartData = data || getProfileChartData();
  const CustomLabel = (props: any) => {
    const { x, y, width, index } = props;
    const dataPoint = chartData[index];

    if (!dataPoint) {
      return null;
    }

    return (
      <g>
        <text x={x + width / 2} y={y} textAnchor="middle" dy={-12} 
        style={{ fontSize: THEME.typography.fontSize.xxs, 
        fontFamily: THEME.typography.fontFamily.pretendard, 
        fontWeight: THEME.typography.fontWeight.medium, 
        fill: '#000' }}>
          {`${dataPoint.value}T (${dataPoint.percentile}%)`}
        </text>

        <text x={x + width / 2} y={y} 
        textAnchor="middle" dy={-4} 
        style={{ fontSize: THEME.typography.fontSize.xs, 
        fontFamily: THEME.typography.fontFamily.pretendard, 
        fontWeight: THEME.typography.fontWeight.bold, 
        fill: '#000' }}>
          {dataPoint.level}
        </text>
      </g>
    );
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={chartData} margin={{ top: 10, right: 0, left: 0, bottom: 1 }} barCategoryGap={10}>
                <CartesianGrid
          strokeDasharray="0"
          stroke="#B0B0B0"
          strokeWidth={0.3}
          horizontal={true}
          vertical={false}
        />
        <YAxis
          domain={[30, 70]}
          tick={{
            fontSize: THEME.typography.fontSize.xxs,
            fontFamily: THEME.typography.fontFamily.pretendard,
            fill: THEME.colors.text,
            textAnchor: 'start',
          }}
          axisLine={false}
          tickLine={false}
          tickCount={5}
          width={9}
        />
                {/* 40-60 범위 배경색 추가 */}
        <ReferenceArea y1={40} y2={60} fill="#c9c9c9" fillOpacity={0.3} />
        <Bar
          dataKey="value"
          radius={[2, 2, 0, 0]}
          fill="#8884d8"
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.fill} fillOpacity={0.8} />
          ))}
          <LabelList content={<CustomLabel />} />
        </Bar>
        <XAxis
          dataKey="index"
          type="number"
          domain={[-0.5, 4.5]}
          ticks={[0, 1, 2, 3, 4]}
          tickFormatter={(_, index) => chartData[index]?.name || ''}
          tick={{
            fontSize: THEME.typography.fontSize.xs,
            fontFamily: THEME.typography.fontFamily.pretendard,
            fontWeight: THEME.typography.fontWeight.bold,
            fill: THEME.colors.text
          }}
          axisLine={{ stroke: THEME.colors.text, strokeWidth: 1 }}
          tickLine={false}
          height={15}
        />
        {/* 영역 구분을 위한 세로선들 - 각 막대 사이 */}
        <ReferenceLine x={0.5} stroke="#B0B0B0" strokeWidth={0.3} strokeDasharray="3 3" />
        <ReferenceLine x={1.5} stroke="#B0B0B0" strokeWidth={0.3} strokeDasharray="3 3" />
        <ReferenceLine x={2.5} stroke="#B0B0B0" strokeWidth={0.3} strokeDasharray="3 3" />
        <ReferenceLine x={3.5} stroke="#B0B0B0" strokeWidth={0.3} strokeDasharray="3 3" />
      </BarChart>
    </ResponsiveContainer>
  );
};