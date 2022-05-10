import './App.css';
import React from 'react';

import MyComponent from './03/MyComponent';
import ColorComponent from './03/ColorComponent';
import ChildComponent2 from './03/ChildComponent2'
import DefaultPropsComponennt from './03/DefaultPropsComponent'
import ChildProperty from './03/ChildProperty'

import Counter from './03/Counter'

function App() {
  
  return (
    <div>
      <MyComponent name="서지원 존잘"/>
      <h1>ColorComponent</h1>
      <div><b>지루할 때 :</b>
        <ColorComponent name="seojiwon" color="red" bored />
        {/* Boolean 같은 경우에는 bored 있으면 True, 안적으면 False */}
      </div>

      <div><b>즐거울 때 :</b>
        <ColorComponent name="seowjion"/>
      </div>

      <div>
        <ChildComponent2
          objValue={{age : 20, name : "지원"}}
          //  age 문자열로 값 주면 경고문 나옴
          requiredStringValue ="문자"
          // 필수 프로퍼티 값 안주면 경고문 나옴
        />
      </div>

      <div>
        <DefaultPropsComponennt/>
      </div>

      <div>
        <ChildProperty>
          <div><span>자식 노드</span></div>
        </ChildProperty>
      </div>

      <div>
        <Counter/>
      </div>

    </div>
  );
}

export default App;
