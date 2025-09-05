// K-PNI 척도 데이터 타입 정의 및 더미 데이터
export interface SubScaleData {
  name: string;
  tScore: number;
  percentile: string;
  level: string;
  interpretation: string;
}

export interface ScaleCategory {
  id: string;
  title: string;
  categoryName: string;
  summary: string;
  scaleResults: {
    tScore: string;
    percentile: string;
    level: string;
  };
  subScaleData: SubScaleData[];
  colors: {
    primary: string;
    light: string;
    secondary: string;
  };
}

// 종합 지수 데이터 타입
export interface CompositeIndexData {
  indexScore: number;
  percentile: number;
  level: string;
  interpretation: string;
}

// 백엔드 연동을 위한 API 응답 타입
export interface KPNITestResult {
  testId: string;
  userId: string;
  testDate: string;
  scales: ScaleCategory[];
  compositeIndex: CompositeIndexData;
}

// 종합 지수 데이터
export const COMPOSITE_INDEX_DATA: CompositeIndexData = {
  indexScore: 100,
  percentile: 85,
  level: '보통',
  interpretation: '자녀 양육에 대한 기본적인 역량을 갖추고 있으며, 적절한 양육 환경을 제공하려고 노력하고 있습니다. 자녀와의 관계에서 긍정적인 상호작용을 유지하면서도 일부 영역에서는 개선의 여지가 있습니다. 양육 스트레스 관리와 일관된 양육 태도 유지에 더 많은 관심을 기울인다면 더욱 효과적인 양육이 가능할 것입니다. 자녀의 발달 단계에 맞는 지원과 가족 내 의사소통 개선을 통해 양육의 질을 높여나가실 수 있을 것입니다.'
};

// 척도별 공통 데이터 (03섹션과 04섹션에서 공유)
export const SCALE_DATA: ScaleCategory[] = [
  {
    id: 'child_character',
    title: '자녀 특성',
    categoryName: '자녀\n특성',
    summary: '자녀가 양육자와의 애착관계가 잘 형성되지않았을 가능성이 있습니다. 부모의 요구나 정서적 반응에 적절하게 반응하기 힘들어 할 수 있습니다.',
    scaleResults: {
      tScore: '55',
      percentile: '70.5',
      level: '다소 높음'
    },
    subScaleData: [
      {
        name: '기질적 예민성',
        tScore: 62,
        percentile: '78.1',
        level: '높음',
        interpretation: '기질적으로 다소 예민한 특성이 있습니다. 자녀가 정서적, 사회적 자극을 받았을 때 스트레스를 많이 경험하게 될 수 있습니다.'
      },
      {
        name: '높은 요구수준',
        tScore: 46,
        percentile: '45.0',
        level: '다소 낮음',
        interpretation: '자녀는 일반적인 아동들에 비해 다소 높은 요구수준을 갖고 있습니다. 적절한 사랑과 관심을 받지 못할 경우에는 애착관계에 문제가 생길 수 있습니다.'
      },
      {
        name: '사회적 적응력',
        tScore: 39,
        percentile: '76.7',
        level: '높음',
        interpretation: '자녀의 사회적인 적응 수준은 다소 낮은 편에 속합니다. 다양한 관계들에 있어서 적응을 어려워할 수 있습니다.'
      },
      {
        name: '발달 수준',
        tScore: 52,
        percentile: '74.5',
        level: '낮음',
        interpretation: '자녀의 발달 수준이 다소 낮습니다. 자녀가 또래 친구들에 비해 발달 속도가 늦어, 또래에 비해 부족한 면이 나타날 수 있습니다.'
      },
      {
        name: '애착관계형성',
        tScore: 48,
        percentile: '42.1',
        level: '보통',
        interpretation: '자녀가 양육자와의 애착관계가 잘 형성되지 않았을 가능성이 있습니다. 부모의 요구나 정서적 반응에 적절하게 반응하기 힘들어 할 수 있습니다.'
      }
    ],
    colors: {
      primary: '#FDB68C',
      light: '#F9F0DA',
      secondary: '#FCD9A3'
    }
  },
  {
    id: 'parenting_attitude',
    title: '양육 태도',
    categoryName: '양육\n태도',
    summary: '자녀에게 일관된 양육 태도를 보이며, 긍정적인 상호작용을 통해 건강한 관계를 형성하고 있습니다. 자녀의 성장 발달을 지원하는 적절한 양육 방식을 사용합니다.',
    scaleResults: {
      tScore: '48',
      percentile: '42.3',
      level: '보통'
    },
    subScaleData: [
      {
        name: '애정표현',
        tScore: 55,
        percentile: '68.2',
        level: '높음',
        interpretation: '자녀에게 애정과 사랑을 적절하게 표현하고 있어 정서적 안정감을 제공하고 있습니다.'
      },
      {
        name: '합리적 설명',
        tScore: 49,
        percentile: '52.3',
        level: '보통',
        interpretation: '자녀의 행동이나 규칙에 대해 논리적으로 설명하며 이해를 돕고 있어 자녀의 사고력 발달에 긍정적입니다.'
      },
      {
        name: '일관적 태도',
        tScore: 42,
        percentile: '35.7',
        level: '다소 낮음',
        interpretation: '양육 태도가 일관되게 유지되어 자녀가 예측 가능한 환경에서 안정감을 느끼고 있습니다.'
      },
      {
        name: '훈육 방식',
        tScore: 58,
        percentile: '75.4',
        level: '높음',
        interpretation: '자녀의 발달 단계에 맞는 적절한 훈육 방법을 사용하고 있어 건전한 사회성 발달을 지원하고 있습니다.'
      },
      {
        name: '자율성 존중',
        tScore: 45,
        percentile: '41.8',
        level: '보통',
        interpretation: '자녀의 독립성과 자율성을 존중하면서도 적절한 지도를 제공하는 균형 잡힌 태도를 보이고 있습니다.'
      }
    ],
    colors: {
      primary: '#A9CEF4',
      light: '#E9F4FF',
      secondary: '#C9E0F8'
    }
  },
  {
    id: 'parenting_environment',
    title: '양육 환경',
    categoryName: '양육\n환경',
    summary: '가정 내 물리적 환경과 정서적 분위기가 자녀 양육에 적합하게 조성되어 있습니다. 안전하고 안정적인 환경에서 자녀가 건강하게 성장할 수 있습니다.',
    scaleResults: {
      tScore: '52',
      percentile: '58.7',
      level: '보통'
    },
    subScaleData: [
      {
        name: '부부간 불화',
        tScore: 61,
        percentile: '82.1',
        level: '높음',
        interpretation: '부부 간의 갈등이나 불화가 있어 가정 내 긴장감이 높아질 수 있습니다. 부부 관계 개선을 위한 노력이 필요합니다.'
      },
      {
        name: '사회적 지원 부족',
        tScore: 38,
        percentile: '28.6',
        level: '낮음',
        interpretation: '가족 외부의 사회적 지원 체계가 부족하여 양육 부담이 커질 수 있습니다. 사회적 네트워크 구축이 도움이 될 수 있습니다.'
      },
      {
        name: '방임/무시',
        tScore: 53,
        percentile: '65.9',
        level: '높음',
        interpretation: '자녀의 정서적, 신체적 요구에 대한 관심과 돌봄이 부족할 수 있습니다. 자녀의 기본적 욕구 충족에 더 신경 써야 합니다.'
      },
      {
        name: '신체적 학대',
        tScore: 47,
        percentile: '46.2',
        level: '보통',
        interpretation: '신체적 처벌이나 학대적 행동이 나타날 수 있어 자녀의 신체적 안전이 위협받을 수 있습니다.'
      },
      {
        name: '정서적 학대',
        tScore: 44,
        percentile: '38.7',
        level: '다소 낮음',
        interpretation: '정서적 무시나 비난이 있어 자녀의 심리적 안녕감이 저해될 수 있습니다. 긍정적인 정서적 상호작용이 필요합니다.'
      }
    ],
    colors: {
      primary: '#88CACE',
      light: '#DDF1F3',
      secondary: '#BCEBEE'
    }
  },
  {
    id: 'parenting_stress',
    title: '양육 스트레스',
    categoryName: '양육\n스트레스',
    summary: '양육 과정에서 경험하는 스트레스가 다소 높은 수준입니다. 자녀 양육에 대한 부담감이나 어려움을 느끼고 있어 적절한 지원과 관리가 필요합니다.',
    scaleResults: {
      tScore: '62',
      percentile: '84.2',
      level: '높음'
    },
    subScaleData: [
      {
        name: '역할갈등',
        tScore: 56,
        percentile: '71.3',
        level: '높음',
        interpretation: '부모 역할과 사회적 역할 간의 갈등이 심하여 양육에 집중하기 어려운 상황입니다. 역할 간 균형을 찾는 것이 중요합니다.'
      },
      {
        name: '양육방식차이',
        tScore: 62,
        percentile: '85.4',
        level: '높음',
        interpretation: '부부 간 양육 방식의 차이로 인한 갈등이 스트레스의 주요 원인입니다. 양육 방식에 대한 합의가 필요합니다.'
      },
      {
        name: '경제적 고민',
        tScore: 41,
        percentile: '32.8',
        level: '다소 낮음',
        interpretation: '자녀 양육에 필요한 경제적 부담으로 인한 스트레스가 높습니다. 경제적 지원이나 계획 수립이 도움이 될 수 있습니다.'
      },
      {
        name: '자녀갈등',
        tScore: 59,
        percentile: '78.2',
        level: '높음',
        interpretation: '자녀와의 관계에서 발생하는 갈등이나 어려움으로 스트레스가 높아져 있습니다. 자녀 이해와 소통 방법 개선이 필요합니다.'
      },
      {
        name: '심리적 불안정',
        tScore: 35,
        percentile: '21.5',
        level: '낮음',
        interpretation: '양육 과정에서 경험하는 심리적 불안정감이 높아 감정 조절에 어려움을 겪고 있습니다. 전문적인 심리적 지원이 필요할 수 있습니다.'
      }
    ],
    colors: {
      primary: '#D0AFF2',
      light: '#EBE9F9',
      secondary: '#D7D3F0'
    }
  },
  {
    id: 'parenting_process',
    title: '양육 과정',
    categoryName: '양육\n과정',
    summary: '자녀와의 상호작용과 소통이 원활하며, 양육 과정에서 적절한 방법을 사용하고 있습니다. 자녀의 발달 단계에 맞는 양육을 실천하고 있습니다.',
    scaleResults: {
      tScore: '46',
      percentile: '35.8',
      level: '보통'
    },
    subScaleData: [
      {
        name: '양육만족',
        tScore: 54,
        percentile: '63.7',
        level: '높음',
        interpretation: '양육 활동에 대한 전반적인 만족도가 보통 수준입니다. 양육의 긍정적 측면과 도전 과제를 균형 있게 인식하고 있습니다.'
      },
      {
        name: '현가족관계',
        tScore: 48,
        percentile: '48.9',
        level: '보통',
        interpretation: '현재 가족 구성원 간의 관계가 안정적으로 유지되고 있어 가족 전체의 화목함을 유지하려고 노력하고 있습니다.'
      },
      {
        name: '원가족관계',
        tScore: 51,
        percentile: '58.3',
        level: '보통',
        interpretation: '본인의 원가족과의 관계가 적절하게 유지되고 있어 가족 지원 체계를 효과적으로 활용하고 있습니다.'
      },
      {
        name: '자녀만족',
        tScore: 57,
        percentile: '73.6',
        level: '높음',
        interpretation: '자녀가 가족 내에서 느끼는 만족도가 보통 수준입니다. 자녀의 정서적 안녕감을 유지하기 위한 노력이 필요합니다.'
      },
      {
        name: '회복경험',
        tScore: 43,
        percentile: '36.4',
        level: '다소 낮음',
        interpretation: '과거의 어려운 경험으로부터의 회복력이 보통 수준입니다. 긍정적인 회복 경험을 통해 성장하고 있습니다.'
      }
    ],
    colors: {
      primary: '#F0C0CD',
      light: '#FFF0F4',
      secondary: '#F6DEE5'
    }
  }
];



// ProfileChart용 데이터 변환 함수
export const getProfileChartData = () => {
  return SCALE_DATA.map((scale, index) => ({
    name: scale.categoryName.replace('\n', ''),
    value: parseInt(scale.scaleResults.tScore),
    fill: scale.colors.primary,
    percentile: parseFloat(scale.scaleResults.percentile),
    level: scale.scaleResults.level,
    index: index
  }));
};

// 백엔드 API 연동을 위한 유틸리티 함수
export class KPNIDataService {
  private static apiBaseUrl = (import.meta.env?.VITE_API_BASE_URL as string) || '/api';

  // 검사 결과 조회
  static async getTestResult(testId: string): Promise<KPNITestResult> {
    try {
      const response = await fetch(`${this.apiBaseUrl}/test-results/${testId}`);
      if (!response.ok) {
        throw new Error('검사 결과를 가져오는데 실패했습니다.');
      }
      return await response.json();
    } catch (error) {
      console.error('API 호출 오류:', error);
      // 개발 중에는 더미 데이터 반환
      return {
        testId,
        userId: 'user123',
        testDate: new Date().toISOString(),
        scales: SCALE_DATA,
        compositeIndex: COMPOSITE_INDEX_DATA
      };
    }
  }

  // 검사 결과 저장
  static async saveTestResult(testResult: Omit<KPNITestResult, 'testId'>): Promise<string> {
    try {
      const response = await fetch(`${this.apiBaseUrl}/test-results`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testResult)
      });
      if (!response.ok) {
        throw new Error('검사 결과 저장에 실패했습니다.');
      }
      const result = await response.json();
      return result.testId;
    } catch (error) {
      console.error('API 호출 오류:', error);
      throw error;
    }
  }
}