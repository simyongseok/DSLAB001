/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import * as React from 'react';
 import type {Node} from 'react';
 import {
   Button,
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   TouchableOpacity,
 } from 'react-native';
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 import { NavigationContainer } from '@react-navigation/native';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import { Component } from 'react/cjs/react.production.min';
 //import 'react-native-gesture-handler'; 
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Scope } from '@babel/traverse';
 

 const Stack = createNativeStackNavigator();

 function TabCovidHome({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Covid Main!</Text>
      <TouchableOpacity 
      style={styles.form} 
      onPress={() => navigation.navigate('CovidMetro')}>
          <Text>수도권</Text>
      </TouchableOpacity>
    </View>
  );
}

function TabCovidMetro({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>TabCovidMainMetro Screen</Text>
      <Button
        title="Go to CovidHomeScreen"
        onPress={() => navigation.navigate('CovidHome')}
      />
      <ScrollView
       style={styles.Scrollstyle}>
      <Text>TabCovidMainMetro Screen
      현행 사회적 거리두기 방안 2.20.(일)까지 2주 연장
- 신속항원검사키트 생산·공급·유통 과정 철저 관리 -
- 검사 수요 증가에 따라 공급량 확대 조치 -
- 유통량 및 가격 동향 상시 모니터링 -
거리두기 조정은 최대한 추가 강화 없이 대응할 계획, 다만 위기상황이 예상되는 경우 추가 방역 강화 검토 가능 -

코로나바이러스감염증-19 중앙재난안전대책본부(본부장: 국무총리 김부겸)는 오늘 본부장 주재로 정부서울청사 영상회의실에서 각 중앙부처, 17개 광역자치단체, 18개 시․도 경찰청과 함께 ▲사회적 거리두기 조정방안 ▲신속항원검사 키트 수급 관리현황 ▲주요 지자체 코로나19 현황 및 조치사항 등을 논의하였다.

1. 사회적 거리두기 강화조치

중앙재난안전대책본부에서는 보건복지부 중앙사고수습본부(본부장 : 권덕철 장관)로부터 사회적 거리두기 강화조치 조정방안을 보고 받고, 이를 논의하였다.

【현황 및 고려사항】

오미크론 확산에 따라 1월 3주차부터 확진자수가 급격하게 증가하여 2만명을 초과*하는 등 역대 최대규모를 갱신하고 있으며, 향후 상당기간 동안 이러한 증가세가 지속될 것으로 전망된다.

* 같은 요일 국내 확진자 : 3,776(1.13) → 6,357(1.20) → 14,301(1.27) → 27,283(2.3) / 역대 최대

외국의 경우 유행 후 3~4주 내에 정점이 나타났으나, 우리나라와 누적 확진규모 및 접종률 등 제반여건이 상이하여 국내 유행의 정점 시기·규모는 예측이 쉽지 않은 상황이다.

주간 (일～토)	국내 일 평균 환자(명)	재생산 지수 (R)	중증도(명)	병상 가동률(%)
총계	60세 이상 비중	18세 이하 비중	60세 이상	위중증 환자	주간 사망자	중환자 병상	중등증 병상	생활치료센터
1.23~1.29	11,877	8.0%	26.9%	1.58	951	369	183	18.6	35.7	56.3
1.16~1.22	5,159	9.5%	26.4%	1.18	489	517	248	25.9	30.0	47.6
1.9~1.15	3,529	12.6%	25.3%	0.92	446	732	295	41.5	31.2	41.8
1.2~1.8	3,505	16.6%	25.0%	0.82	582	932	361	56.9	40.0	44.1
다만, 고령층 비중이 낮게 나타나고 있으며, 위중증 환자 발생 역시 둔화되는 등 델타와 유행양상이 상이하게 나타나고 있다.

이는 작년 12월과 비교하여 고령층 3차 접종률이 85% 이상으로 높아지면서 사망자의 90% 이상을 차지하는 60세 이상 확진자 비중*이 크게 감소했고, 오미크론 특성과 고령층 비중 감소에 따라 중증환자**가 델타보다 낮게 발생하고 있는 것으로 분석된다.

* 60세 이상(/확진자수) : (12.15.) 30.5% (2,384명/7,827명) → (2.4.) 9.2% (2,510명/27,283명)60세 이상 3차 접종률 : (12.15.) 42.1% →(2.4.) 86.0%

** 위중증환자(확진자수): (12.15.) 964명 (7,827명) → (2.4.) 257명 (27,283명)

다만, 확진자 수가 증가할수록 고령층·중증환자 수도 증가하므로 정점 규모에 따라서는 12월 델타유행보다 높아질 수 있어 긴장을 늦출 수는 없는 상황이다.

지속적인 병상 확충 노력과 중증환자 감소로 인해 중환자실 등 의료체계 여력이 전반적으로 안정적으로 유지*되고 있다.

* 중증병상가동률: (12월3주)81.5%→(1월2주)41.5%→(1월3주)25.9%→ (1월4주)18.6%중등증병상가동률:(12월3주)75.0%→(1월2주) 31.2%→(1월3주)30.0%→(1월4주) 35.7%

다만, 무증상·경증 환자가 증가함에 따라 재택치료 및 생활치료센터 등의 여력이 감소*하고 있고, 유행규모가 계속 증가할 경우 의료체계에 과부하를 초래할 위험도 있어 주의가 요구된다.

* 생활치료센터 가동률:(12월3주)66.7%→(1월2주)41.8%→(1월3주)47.6%→(1월4주)56.3%
3차 접종률도 꾸준히 증가하여 60세 이상은 85% 이상(86.0%, 2.4. 기준)까지 상승했으나, 아직까지 전 국민 3차 접종률*(53.8%, 2.4.)은 절반 수준으로 낮고, 증가속도도 다소 둔화되는 추세이다.

* 전 국민 : (12월2주) 11.8% → (1월1주) 40.2% → (1월4주) 52.3%
해외 국가들의 경우, 오미크론 유행의 정점 전후로 대응양상이 달라지고 있는 것으로 분석된다.

정점을 지난 영국, 북유럽 국가들*은 오미크론 유행의 중증·사망 결과를 감내할 수 있다고 평가하고, 방역조치 해제를 개시했다.

* 영국, 덴마크, 핀란드, 스웨덴, 노르웨이 등은 중증․사망 피해가 증가하였으나 사회적으로 수용 가능한 수준으로 평가 → 모임․시간․방역패스 등 단계적 해제

반면, 아직 정점을 지나지 않은 프랑스, 독일 등은 방역완화에 신중하게 접근하면서, 방역패스 및 3차 접종 등을 강화하고 있다.

우리나라와 방역체계가 유사한 일본, 호주 등은 급격하게 유행이 증가하면서 일본은 영업시간 제한을 재도입 했고, 호주는 방역패스로 대응하고 있다.

정부는 일상회복지원위원회와 관계부처 및 17개 시·도 회의 등을 통해 거리두기 조정방안에 대한 다양한 논의와 의견수렴을 하였다.

일상회복지원위원회에서는 거리두기에 대해 속도를 조절하자는 의견과 완화하자는 의견이 제시되었다.

방역의료분과 등 전문가들은 오미크론 확산세를 고려하여 현행 거리두기를 유지하자는 의견이었고, 경제민생분과 위원들은 사적모임과 영업시간 완화가 필요하다는 의견을 제시했다.

지방자치단체는 오미크론 확산에 따른 유행 급증과 설 연휴 이후 영향을 고려하여 현행 거리두기를 유지하자는 의견이 대다수였다.

      </Text>
      </ScrollView>
    </View>
  );
}

 class TabCovidMain extends Component{
   render(){
     return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="CovidHome" component={TabCovidHome} />
        <Stack.Screen name="CovidMetro" component={TabCovidMetro} />
    </Stack.Navigator>
     );
   }
 };
 
 const styles = StyleSheet.create({
   form: {
     //width: 30,
     //height: 30,
     padding: 10,
     backgroundColor: 'green',
   },
   Scrollstyle: {
    width: '100%',
    flex: 1,
    flexDirection: 'column', // row
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'flex-start' // center, space-around
  },
  
 });
 
 export default TabCovidMain;
 