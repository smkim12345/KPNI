import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, CartesianGrid, Cell, ReferenceLine, ReferenceArea } from 'recharts';
import { THEME } from '../theme';

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

const defaultData: ProfileChartData[] = [
  {
    name: '자녀특성',
    value: 57,
    fill: THEME.colors.scale.childCharacter.primary,
    percentile: 95.4,
    level: '높음',
    index: 0
  },
  {
    name: '양육태도',
    value: 44,
    fill: THEME.colors.scale.parentingAttitude.primary,
    percentile: 19,
    level: '다소 낮음',
    index: 1
  },
  {
    name: '양육환경',
    value: 65,
    fill: THEME.colors.scale.parentingEnvironment.primary,
    percentile: 95.4,
    level: '높음',
    index: 2
  },
  {
    name: '양육스트레스',
    value: 48,
    fill: THEME.colors.scale.parentingStress.primary,
    percentile: 25,
    level: '다소 낮음',
    index: 3
  },
  {
    name: '양육과정',
    value: 55,
    fill: THEME.colors.scale.parentingProcess.primary,
    percentile: 60,
    level: '다소 높음',
    index: 4
  }
];

export const ProfileChart = ({ data = defaultData }: ProfileChartProps) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }} barCategoryGap={10}>
                <CartesianGrid
          strokeDasharray="0"
          stroke="#B0B0B0"
          strokeWidth={0.5}
          horizontal={true}
          vertical={false}
        />
                <XAxis
          dataKey="index"
          type="number"
          domain={[-0.5, 4.5]}
          ticks={[0, 1, 2, 3, 4]}
          tickFormatter={(_, index) => data[index]?.name || ''}
          tick={{
            fontSize: THEME.typography.fontSize.xs,
            fontFamily: THEME.typography.fontFamily.pretendard,
            fontWeight: THEME.typography.fontWeight.bold,
            fill: THEME.colors.text
          }}
          axisLine={{ stroke: THEME.colors.text, strokeWidth: 0.5 }}
          tickLine={false}
          height={15}
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
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.fill} fillOpacity={0.8} />
          ))}
        </Bar>
        {/* 영역 구분을 위한 세로선들 - 각 막대 사이 */}
        <ReferenceLine x={0.5} stroke="#B0B0B0" strokeWidth={0.5} strokeDasharray="3 3" />
        <ReferenceLine x={1.5} stroke="#B0B0B0" strokeWidth={0.5} strokeDasharray="3 3" />
        <ReferenceLine x={2.5} stroke="#B0B0B0" strokeWidth={0.5} strokeDasharray="3 3" />
        <ReferenceLine x={3.5} stroke="#B0B0B0" strokeWidth={0.5} strokeDasharray="3 3" />
      </BarChart>
    </ResponsiveContainer>
  );
};