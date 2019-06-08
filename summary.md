# VueJS Summary

##### Basic

1. VueJs는 코어가 1kb가 안되는 작고 빠른 라이브러리이다.
1. `v-on`은 이벤트를 받아서 작동하는 형식이다. `(v-on:input)`
1. `{{ }}`는 템플릿으로, Text로만 변환된다.
1. 템플릿은 텍스트로 쓰는 걸 추천하지만, `v-html`을 이용해서 예외적으로 태그를 만들수있다.
1. 어트리뷰트 내에서 템플릿은 작동하지 않는다. `v-html`이나 `v-on`:(`@`) `v-bind:`(`:`)를 이용하자.
1. 어트리뷰터 내부에서는 항상 `"` 로 감싼다. 다만 이게 `@`나 `:`를 만나면 자바스크립트 코드처럼 변경된다.
1. new Vue()는 head말고 끝에 적는다. Dom이 load된 후 부터 실행되어야 작동한다.
1. `v-once`는 딱 한번만 랜더되고(순서대로) 더이상 고쳐지는 일이 없다.
1. EventModifier라고 불리는 v-on:keyup.enter.space와 같이 키체인과 같이 사용될 수 있다.
1. data 프로퍼티는 템플릿과 사용하면 this가 붙지 않는다.
1. method와 템플릿이 같이 사용되면 ()를 붙이다.
1. computed는 관련 변수가 변경될때만 함수가 실행되도록 하는 기능을 가지고 있다.(정확한건 모르겠다.)
1. computed는 data 프로퍼티와 같이 템플릿에서 ()가 없다.
1. watch는 비동기 동작을 위한 method가 실행되는 곳으로, 지정된 변수가 변경될때 작동한다.
1. 간단한 수식은 @, :, {{}} 안에서 바로 적어도 작동한다.
1. v-bind 는 Vue 엘레먼트가 html로 전송되도록 한다.
1. v-model은 Vue 엘레먼트가 양방향에 의해 수정된다.
1. \$event, event는 약속된 예약어로써 실행된다.
1. :style 과 같은대서 변수명에 - 가 들어가면, 케멀케이스를 쓰거나, {안에 '를 더 붙여준다
1. :style 뒤에오는 수식은 항상 "" 안에 {}로 감싸져 있어야한다. 2개 이상의 {}는 []로 묶어줘야 한다.

#### if else

1. v-if, v-else-if, v-else
1. template 와 사용하면 그룹으로 지정가능
1. v-show 는 inspetor를 사용하면 숨겨진걸 볼 수 있다.
1. v-for에서 list을 update를 하면 자동으로 보고있다가 업데이트 해준다.
1. list.push로 써 list를 업데이트 할 수 있다.
1. push를 통해서 push 하면 추가될 뿐이다. 이때 vue는 position 뿐만아니라 key를 신경쓴다.

#### section 5. Understanding the VueJs Instatnce

1. outside 에서 Vue Instance에 접근가능 `var vm1 = new Vue({data: data});`
1. `console.log(vm1.$data === data)`
1. `vm.title='changed'`, `vm.$data.title='changed` 둘다 가능
1. html tag로 `ref=myButton`를 넣으면, `vm.$ref.myButton.innerText`로 사용가능.
1. ref를 이용하여 html 오리진에 접근 할 수 있으나 변경사항이 계속 유지되진 않는다.
1. mount 과정은 3가지 방법으로 할 수 있다. (el쓰기, vm.\$mount()사용, getElemnetByID.appendChild 쓰기)
1. el을 사용하여 class에 붙이면 첫번째것만 적용된다.
1. `Vue.compnent('hello', {template: '<h1>Hello!</h1>'});` 사용하기
1. 두가지 버전이 있음 recompile 과 precompile. template은 precompile에서 string 을 쓰는 복잡성이 있다.
1. own watcher를 가진다
1. javascript는 빠르지만 DOM 에 접근하는 것은 매우 느리다.
1. Instatnce -(watch)- Virtual -(Update)- DOM
1. lifecycle
   1. new Vue()
   1. `beforeCreate()`
   1. Initialize Data & Events
   1. `created()` : InstanceCreated
   1. Compile template or el's template
   1. `beforeMount()`
   1. Replace el with compiled template
   1. **Mounted to DOM**
   1. Data Changed
   1. `beforeUpdate()`
   1. RE-render DOM
   1. wait for Data changed
   1. ...
   1. `beforeDestroy()`
   1. `destroyed()`
1. \$destroy() 사용 이후에는 Vue 가 작동하지 않음

#### section 6. Real Workflows

1. vue-cli 사용 해서 single template (webpack with single) 로 앱 만들어보기
1. template 연동 방식에서 el, mount 외에 한가지더 연동가능한 방식 사용
1. render() 함수를 이용하는 것은 이게 컴파일 되기 전의 vue를 이용해서 그렇다.

#### section 7. components

1. components 는 중요하다
1. components 에서 data를 object로 쓰느냐, function을 쓰느냐에 따라서 상태가 다르게 될 수 있다!
1. Vue.components('my-cmp', {}) 로 쓸때 prefix에 겹치치 않을 키워드를 넣자
1. el 설정할때 class인지 id인지 확인해서 오류 줄일것.
1. component는 global, local 두가지 방법으로 등록가능하다.
1. style scoped를 적용하면 vue componets 에만 적용시킬수 있다.

#### section 8.

1. Props는 validation 가능
1. props를 이용하여 보낼 수 있음
1. props로 {}를 통해서 옵션으로 required 가능, default 가능
1. type: Object일 경우에 function() { retunr {} }을 사용
1. $emit 은 custom event 발발 this.$emit('nameWasReset', this.myNmae)) 그리고 부모에서 @과 \$event로 받는다.
1. premitive and reference type
1. Evnet bus를 만드는 방법
1. Props는 :를 통해 보낼 수 있음

#### section 9.

1. slot 을 이용하여 컴포넌트 내부에 html 태그 삽입가능
1. 단 slot 이용시 style은 내부걸로 적용, template 적용시 그대로 외부것 가져감. (스타일 빼고 다 적용된다고 한다.)
1. `<component :is="selectedComponent>`를 이용하여 dynamic component 이용 가능
1. keep-alive 를 이용하여 살아있게 할 수 있다.
1. deactivated() hook,
1. activated() hook, 이 존재한다.

#### section 10.

1. componenets 오타 발생. 오타는 언제나 프밍의 주적
1. 아니 뭔가 이상한데... child component에서 emit만 가지고 부모단에서 @로 바로 엮어서 사용할 거였으면 section 8쯤에서 \$on은 왜 붙인거임?
1. custom component 에서 @click을 바로 사용하지 못한다.(왜요?)
   @click.native를 이용하면 자식 컴포넌트 제일 윗 태그에 @click 처럼 들어간다.

#### section 11.

1. v-model lazy를 이용하면 다 입력하고 나서 다음창으로 갈때 업데이트 될게 할수 있다.
1. .number modifier를 이용하면 넘버로 바로 변경 가능하다.
1. `<p style="white-space: pre">` 로 지정하면 멀티 랑니이 그대로 출력된다.
1. option 에서 selected 보다는 상위 v-model이 우선시 되어 오버라이팅이 된다.
1. `:value="userData.email" @input="userData.email = $event.target.value"` 는 v-model 과 같다.
1. v-model 은 v-bind:value 와 v-on:input 두개를 사용해서 만든 것과 같다.
1. v-bind를 props로 value로 주고, emit을 'input'으로 해서 작동한다!

#### section 12.

1. 5 Hooks
1. bind, inserted, update, compenentUPdated, unbind
1.
