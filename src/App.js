import './App.css';
import React from 'react';
import { useState } from 'react';

import MyComponent from './03/MyComponent';
import ColorComponent from './03/ColorComponent';
import ChildComponent2 from './03/ChildComponent2'
import DefaultPropsComponennt from './03/DefaultPropsComponent'
import ChildProperty from './03/ChildProperty'

import Counter from './03/Counter'
import ListExample from './03/ListExample';
import TodoList from './03/TodoList';
import CounterApp from './03/CounterApp';

function App() {
  const [count, setCount] = useState(1);

  function increaseCount() {
    setCount(count => count + 1);
  }
  function decreaseCount() {
    setCount(count => count - 1);
  }
  function resetCount() {
    setCount(1)
  }

  return (  
    <React.Fragment>
      {/*
        <> </> 
        이거랑 똑같음

        => '의미 없는 최상위 노드를 추가하는 것'의 개선
      */}
{/* <div> */}
      <MyComponent name="서지원 존잘"/>
      <h1>ColorComponent</h1>
      <div><b>지루할 때 :</b>
        <ColorComponent name="seojiwon" color="red" bored />
        {/* Boolean 같은 경우에는 bored 있으면 True, 안적으면 False */}
      </div>

      <div><b>즐거울 때 :</b>
        <ColorComponent name="seowjion"/>
      </div>

      <ChildComponent2
        objValue={{age : 20, name : "지원"}}
        //  age 문자열로 값 주면 경고문 나옴
        requiredStringValue ="문자"
        // 필수 프로퍼티 값 안주면 경고문 나옴
      />

      <DefaultPropsComponennt/>
      <ChildProperty>
          <div>
            <span>자식 노드</span>
          </div>
      </ChildProperty>

      <Counter/>
      <ListExample/>
      <TodoList/>
      <CounterApp count = {count} onAdd = {increaseCount} onMinus = {decreaseCount} onReset = {resetCount}/>
    </React.Fragment>
  );
}

export default App;
